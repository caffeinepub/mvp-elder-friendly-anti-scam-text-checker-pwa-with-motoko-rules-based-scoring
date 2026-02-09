/**
 * SEO utility for setting document title and meta description at runtime
 * for SPA routes, ensuring AntiFraud / by HCoragem branding
 */

export function setSeoMetadata(title: string, description?: string): void {
  // Set document title with branding
  document.title = `${title} | AntiFraud / by HCoragem`;

  // Update or create meta description
  if (description) {
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute('content', description);
  }
}
