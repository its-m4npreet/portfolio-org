import { supabase } from '../supabaseClient';

// Generate a unique fingerprint for the visitor
const generateFingerprint = () => {
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  
  // Create a simple hash
  const str = JSON.stringify(fingerprint);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `visitor_${Math.abs(hash)}`;
};

// Get or create visitor ID
const getVisitorId = () => {
  let visitorId = localStorage.getItem('visitor_id');
  
  if (!visitorId) {
    visitorId = generateFingerprint();
    localStorage.setItem('visitor_id', visitorId);
  }
  
  return visitorId;
};

// Track visitor and return total count
export const trackVisitor = async () => {
  try {
    const visitorId = getVisitorId();
    const now = new Date().toISOString();
    
    // Check if visitor exists
    const { data: existingVisitor, error: selectError } = await supabase
      .from('visitors')
      .select('id, visit_count, last_visit')
      .eq('visitor_id', visitorId)
      .maybeSingle();
    
    if (selectError) {
      console.error('Error checking visitor:', selectError);
      // Return localStorage fallback count
      const fallbackCount = localStorage.getItem('visitorCount') || 0;
      return parseInt(fallbackCount);
    }
    
    if (existingVisitor) {
      // Update existing visitor
      const { error: updateError } = await supabase
        .from('visitors')
        .update({ 
          visit_count: existingVisitor.visit_count + 1,
          last_visit: now 
        })
        .eq('visitor_id', visitorId);
      
      if (updateError) {
        console.error('Error updating visitor:', updateError);
      }
    } else {
      // Insert new visitor
      const { error: insertError } = await supabase
        .from('visitors')
        .insert({ 
          visitor_id: visitorId,
          first_visit: now,
          last_visit: now,
          visit_count: 1
        });
      
      if (insertError) {
        console.error('Error inserting visitor:', insertError);
      }
    }
    
    // Get total unique visitors count
    const { count, error: countError } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('Error getting count:', countError);
      const fallbackCount = localStorage.getItem('visitorCount') || 0;
      return parseInt(fallbackCount);
    }
    
    return count || 0;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    // Fallback to localStorage
    const fallbackCount = localStorage.getItem('visitorCount') || 0;
    return parseInt(fallbackCount);
  }
};

// Get total visitors count
export const getTotalVisitors = async () => {
  try {
    const { count, error } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      console.error('Error getting total visitors:', error);
      return 0;
    }
    
    return count || 0;
  } catch (error) {
    console.error('Error getting total visitors:', error);
    return 0;
  }
};
