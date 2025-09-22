/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Preload critical fonts
export const onClientEntry = () => {
  // Preload fonts for better performance
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = '/fonts/Calibre/Calibre-Regular.woff2';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Performance monitoring
export const onRouteUpdate = ({ location, prevLocation }) => {
  // Track page views with GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.GATSBY_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      page_path: location.pathname,
    });
  }
};
