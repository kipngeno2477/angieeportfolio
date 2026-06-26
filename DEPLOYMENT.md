# Deployment Guide

## Deploy to Vercel

### Quick Deploy (Recommended)
1. Push your code to GitHub (already done ✅)
2. Go to [Vercel](https://vercel.com/)
3. Click "Add New Project"
4. Import your GitHub repository: `kipngeno2477/angieeportfolio`
5. Vercel will auto-detect settings from `vercel.json`
6. Click "Deploy"

### Manual Configuration (if needed)
If Vercel doesn't auto-detect the settings:

- **Framework Preset**: Other
- **Build Command**: `npm install && npx vite build --config vite.spa.config.ts`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 20.x

### Environment Variables
No environment variables are required for this project.

### Custom Domain
After deployment, you can add a custom domain in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Build Status
- ✅ Build tested and verified
- ✅ All assets optimized
- ✅ Routes configured for SPA
- ✅ Cache headers configured

---

## Deploy to Netlify (Alternative)

If you prefer Netlify:
1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Netlify will use settings from `netlify.toml`
5. Click "Deploy site"

---

## Project Info
- **Repository**: https://github.com/kipngeno2477/angieeportfolio
- **Framework**: React + Vite + TanStack Router
- **Build Output**: Static files (SPA)
