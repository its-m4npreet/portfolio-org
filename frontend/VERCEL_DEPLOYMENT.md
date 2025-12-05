# Vercel Deployment Setup

## Adding Environment Variables to Vercel

Since `.env` files are not committed to Git (and shouldn't be), you need to add environment variables directly in Vercel:

### Step 1: Go to Vercel Dashboard
1. Open https://vercel.com/dashboard
2. Click on your project (`portfolio-org`)
3. Go to **Settings** tab
4. Click **Environment Variables** in the left sidebar

### Step 2: Add Your Environment Variables

Add these three variables:

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | `https://jchcrjplxlzswwsudcga.supabase.co` |
| `VITE_SUPABASE_KEY` | Your Supabase anon public key |
| `VITE_PAY_LINK` | Your Buy Me a Coffee link (optional) |

**To get your Supabase credentials:**
1. Go to https://supabase.com/dashboard
2. Select your project
3. Click **Settings** (gear icon) → **API**
4. Copy **Project URL** → use as `VITE_SUPABASE_URL`
5. Copy **anon public** key → use as `VITE_SUPABASE_KEY`

### Step 3: Important Settings

For each environment variable:
- ✅ Check **Production**
- ✅ Check **Preview** (optional)
- ✅ Check **Development** (optional)

### Step 4: Redeploy

After adding the variables:
1. Go to **Deployments** tab
2. Click the **•••** menu on the latest deployment
3. Click **Redeploy**

OR simply push a new commit:
```bash
git add .
git commit -m "Update environment config"
git push
```

## Alternative: Use Public Values

If you don't want to set up Supabase yet, the app will automatically fall back to localStorage for visitor tracking. No action needed!

## Troubleshooting

### "supabaseUrl is required" error
- Make sure you added `VITE_SUPABASE_URL` in Vercel
- Variable names must start with `VITE_` for Vite projects
- Redeploy after adding variables

### Variables not working
- Check variable names are exactly: `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY`
- Make sure Production checkbox is selected
- Clear browser cache and hard reload (Ctrl+Shift+R)
