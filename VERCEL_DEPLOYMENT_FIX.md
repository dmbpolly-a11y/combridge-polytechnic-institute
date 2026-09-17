# Vercel Deployment Fix Guide

## Issue: 404 Page Not Found Error

The error shows `404_DEPLOYMENT_NOT_FOUND` which typically means:
1. The deployment didn't build correctly, OR
2. The Vercel project isn't properly linked to the GitHub repo

---

## ✅ Fixes Applied

### 1. **Updated vercel.json Configuration**
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. **Rebuilt the Project**
```bash
npm run build
```
Successfully built to `dist/` folder with:
- `index.html`
- `assets/` (JS and CSS files)
- `css/` (custom styles)
- `images/` (school images)

### 3. **Committed and Pushed**
All changes committed and pushed to GitHub main branch.

---

## 🔧 Manual Steps to Fix Vercel Deployment

### Option 1: Reconnect Vercel to GitHub

1. **Go to Vercel Dashboard**
   ```
   https://vercel.com/dashboard
   ```

2. **Find Your Project**
   - Look for `combridge-polytechnic-institute` or similar

3. **Check Settings**
   - Go to **Settings** → **Git**
   - Ensure it's connected to: `dmbpolly-a11y/combridge-polytechnic-institute`

4. **Verify Build Settings**
   - **Framework Preset:** Other (or Vite)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. **Redeploy**
   - Go to **Deployments** tab
   - Click on latest deployment
   - Click **Redeploy** button

---

### Option 2: Create New Vercel Project

If the project doesn't exist or is misconfigured:

1. **Go to Vercel**
   ```
   https://vercel.com/new
   ```

2. **Import Git Repository**
   - Select GitHub
   - Choose `dmbpolly-a11y/combridge-polytechnic-institute`

3. **Configure Project**
   - **Project Name:** `combridge-polytechnic-institute` (or any name)
   - **Framework Preset:** Other
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables** (if needed)
   - Usually not needed for this project
   - Leave empty for now

5. **Click Deploy**

6. **Your New URL will be:**
   ```
   https://combridge-polytechnic-institute-[random].vercel.app
   ```
   OR set custom domain:
   ```
   https://combridge-vercel-app.vercel.app
   ```

---

## 🎯 Expected Result

After proper deployment, you should see:

**Homepage:**
- Combridge Institute header with green branding
- Animated image carousel (if added)
- Navigation: Home, About, Academics, Students, etc.

**Portal Pages:**
- `/combridge-manage` - Portal selection hub
- Clean interface WITHOUT public header/footer
- 7 portal types available

---

## 🐛 Troubleshooting

### If build fails on Vercel:

**Check Build Logs:**
1. Go to Vercel deployment
2. Click on failed deployment
3. View build logs
4. Look for errors

**Common Issues:**
- Missing dependencies → Run `npm install` locally first
- Node version mismatch → Vercel uses Node 18+ by default
- Build command incorrect → Should be `npm run build`
- Output directory wrong → Should be `dist`

### If site loads but pages are blank:

**Check Browser Console:**
1. Press F12 in browser
2. Look for JavaScript errors
3. Common issues:
   - 404 errors for assets → Check output directory
   - CORS errors → Check rewrites in vercel.json
   - Module errors → Check Vite config

---

## 📋 Verification Checklist

After deployment, verify:

- [ ] Homepage loads
- [ ] Images display correctly
- [ ] Navigation works
- [ ] Portal pages load (`/combridge-manage`)
- [ ] Portals show NO header/footer
- [ ] Public pages show header/footer
- [ ] Mobile responsive works

---

## 🔗 Useful Links

**GitHub Repository:**
```
https://github.com/dmbpolly-a11y/combridge-polytechnic-institute
```

**Vercel Dashboard:**
```
https://vercel.com/dashboard
```

**Vercel Documentation:**
```
https://vercel.com/docs
```

---

## 🆘 If Still Not Working

### Quick Test - Vercel CLI:

1. **Install Vercel CLI** (if not installed)
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Local**
   ```bash
   cd "C:\Users\AFRICA\Desktop\COMBRIDGE POLYTECHNIC SYTEM"
   vercel --prod
   ```

4. **Follow Prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (create new) or **Y** (if exists)
   - Project name? `combridge-polytechnic-institute`
   - Output directory? `dist`

This will create a new deployment and give you a working URL.

---

## ✅ Success Indicators

When deployment works correctly:

1. **Vercel Dashboard shows:**
   - ✅ Build: Completed
   - ✅ Status: Ready
   - 🟢 Green checkmark on deployment

2. **Website loads at:**
   - `https://[your-project].vercel.app`

3. **All pages work:**
   - Home page with images
   - About, Academics, etc.
   - Portal hub at `/combridge-manage`

---

**Created:** January 2025  
**Status:** Configuration Updated - Awaiting Vercel Rebuild
