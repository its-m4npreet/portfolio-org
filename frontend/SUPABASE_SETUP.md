# Supabase Database Setup for Visitor Tracking

## SQL Schema

Your current table:
```sql
create table visitors (
  id bigint generated always as identity primary key,
  user_agent text,
  visited_at timestamp default now()
);
```

## Add RLS Policies

**Run this SQL in your Supabase SQL Editor to allow public access:**

```sql
-- Enable Row Level Security
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access" ON visitors;
DROP POLICY IF EXISTS "Allow public insert" ON visitors;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON visitors
  FOR SELECT TO anon, authenticated
  USING (true);

-- Create policy to allow public insert
CREATE POLICY "Allow public insert" ON visitors
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
```

## Alternative: Disable RLS (Not Recommended for Production)

If you want to disable RLS completely (easier but less secure):

```sql
ALTER TABLE visitors DISABLE ROW LEVEL SECURITY;
```

## Setup Instructions

### 1. Create the Database Table

1. Go to your Supabase project: https://supabase.com/dashboard
2. Click on your project
3. Click "SQL Editor" in the left sidebar
4. Click "New Query"
5. Copy and paste the SQL above
6. Click "Run" (or press Ctrl+Enter)
7. You should see "Success. No rows returned"

### 2. Verify Table Creation

1. Click "Table Editor" in the left sidebar
2. You should see the "visitors" table
3. Check that it has columns: id, visitor_id, first_visit, last_visit, visit_count, created_at

### 3. Set Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_KEY=your-anon-public-key
VITE_PAY_LINK=https://buymeacoffee.com/yourusername
```

**To get your credentials:**
1. Go to Supabase Dashboard → Settings → API
2. Copy "Project URL" → use as VITE_SUPABASE_URL
3. Copy "Project API keys" → "anon public" key → use as VITE_SUPABASE_KEY

### 4. Test the Connection

Open browser console and check for any errors. The visitor count should appear in the footer.

## How It Works

1. **Unique Identification**: Each visitor gets a unique fingerprint based on:
   - User agent
   - Language
   - Platform
   - Screen resolution
   - Timezone

2. **First Visit**: Visitor ID is stored in localStorage and database
3. **Return Visits**: Visit count is incremented
4. **Total Count**: Displays total unique visitors from database
5. **Fallback**: If Supabase fails, falls back to localStorage

## Troubleshooting

### Error: "relation 'visitors' does not exist"
- Run the SQL schema in Supabase SQL Editor

### Error: "new row violates row-level security policy"
- Make sure RLS policies are created (run the SQL again)

### Error: 400 Bad Request
- Check that VITE_SUPABASE_URL and VITE_SUPABASE_KEY are correct in .env
- Restart the dev server after adding .env file

### Still not working?
- Check browser console for detailed error messages
- Verify the table exists in Supabase Table Editor
- Make sure you're using the "anon public" key, not the "service_role" key
