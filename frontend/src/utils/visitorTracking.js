import { supabase, isSupabaseConfigured } from '../supabaseClient';

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
  return `${navigator.userAgent}_${Math.abs(hash)}`;
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

// Fallback localStorage visitor tracking
const trackVisitorLocally = () => {
  const hasVisited = localStorage.getItem('hasVisited');
  let count = parseInt(localStorage.getItem('visitorCount') || '0');
  
  if (!hasVisited) {
    count++;
    localStorage.setItem('visitorCount', count.toString());
    localStorage.setItem('hasVisited', 'true');
  }
  
  return count;
};

// Track visitor and return total count
export const trackVisitor = async () => {
  // If Supabase is not configured, use localStorage fallback
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured. Using localStorage for visitor tracking.');
    return trackVisitorLocally();
  }

  try {
    const userAgent = getVisitorId();
    
    // console.log('Tracking visitor with user_agent:', userAgent);
    
    // Check if this user_agent already exists
    const { data: existingVisitor, error: selectError } = await supabase
      .from('visitors')
      .select('id')
      .eq('user_agent', userAgent)
      .maybeSingle();
    
    if (selectError) {
      console.error('Error checking visitor:', selectError);
      return trackVisitorLocally();
    }
    
    console.log('Existing visitor:', existingVisitor);
    
    // Only insert if visitor doesn't exist
    if (!existingVisitor) {
      console.log('Inserting new visitor...');
      const { data, error: insertError } = await supabase
        .from('visitors')
        .insert({ 
          user_agent: userAgent
        })
        .select();
      
      if (insertError) {
        console.error('Error inserting visitor:', insertError);
        return trackVisitorLocally();
      }
      
      console.log('Visitor inserted:', data);
    } else {
      console.log('Visitor already exists, skipping insert');
    }
    
    // Get total unique visitors count
    const { count, error: countError } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('Error getting count:', countError);
      return trackVisitorLocally();
    }
    
    console.log('Total visitors count from DB:', count);
    
    return count || 0;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return trackVisitorLocally();
  }
};

// Get total visitors count
export const getTotalVisitors = async () => {
  if (!isSupabaseConfigured()) {
    return parseInt(localStorage.getItem('visitorCount') || '0');
  }

  try {
    const { count, error } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      console.error('Error getting total visitors:', error);
      return parseInt(localStorage.getItem('visitorCount') || '0');
    }
    
    return count || 0;
  } catch (error) {
    console.error('Error getting total visitors:', error);
    return parseInt(localStorage.getItem('visitorCount') || '0');
  }
};
