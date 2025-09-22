# 🚀 Deployment Guide for Jacob Darling Portfolio

Complete guide to deploy your Gatsby Portfolio to various platforms.

## 📋 Prerequisites

- ✅ Gatsby site built and tested locally
- ✅ GitHub account with repository
- ✅ Node.js 18+ installed
- ✅ Git installed

## 🌐 Deployment Options

### Option 1: Netlify (Recommended) ⭐

**Why Netlify?**
- Optimized for Gatsby/Next.js
- Automatic deployments from Git
- Global CDN
- Free tier with custom domain
- Built-in form handling

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Connect GitHub and select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `public`
6. Click "Deploy site"
7. ✨ Your site will be live in minutes!

**Custom Domain (Optional):**
1. In Netlify dashboard, go to your site
2. Click "Domain management"
3. Add your custom domain
4. Follow DNS configuration instructions

### Option 2: Vercel

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Gatsby
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `public`
6. Click "Deploy"

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to package.json:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d public"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

4. In GitHub repository settings:
   - Go to "Pages"
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

## 🔧 Environment Configuration

### Production Optimizations

1. **Create `.env.local` for production:**
```bash
GATSBY_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GATSBY_SITE_URL=https://jacobdarling.com
```

2. **Update deployment platform environment variables:**
   - Netlify: Site settings → Environment variables
   - Vercel: Project settings → Environment variables

## 📊 Analytics Integration

### Google Analytics 4

Already configured with `gatsby-plugin-google-gtag`. Just set your GA4 Measurement ID in environment variables.

## 🔒 Security Features

- ✅ Security headers configured in `static/_headers`
- ✅ HTTPS enforced on all deployment platforms
- ✅ External links open safely with `rel="noopener noreferrer"`

## 📈 Performance Monitoring

### Core Web Vitals
- Lighthouse scores optimized
- Images automatically optimized
- Fonts preloaded
- Error boundaries implemented

### Analytics Monitoring
- Page views tracked automatically
- Error tracking with GA4 exceptions
- Performance metrics available in GA4

## 🐛 Troubleshooting

### Common Issues:

**Build Fails:**
```bash
# Clear cache and reinstall
npm run clean
npm install
npm run build
```

**Analytics Not Working:**
- Check GA4 Measurement ID in environment variables
- Verify gatsby-plugin-google-gtag is properly configured

**Styling Issues:**
- Ensure styled-components is properly configured
- Check for missing CSS imports

## 📞 Support

If you encounter issues:
1. Check deployment platform build logs
2. Test locally first with `npm run develop`
3. Verify all environment variables are set
4. Check Gatsby documentation

## 🎉 Success Checklist

- ✅ Repository connected to deployment platform
- ✅ Build completes successfully
- ✅ Site loads correctly
- ✅ All pages and routes work
- ✅ Mobile responsive design verified
- ✅ Analytics configured
- ✅ Custom domain connected (optional)
- ✅ SSL certificate active
- ✅ Performance scores optimized
