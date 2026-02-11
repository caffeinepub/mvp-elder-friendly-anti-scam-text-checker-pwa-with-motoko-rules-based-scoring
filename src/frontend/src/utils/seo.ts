/**
 * SEO utility for setting document title and meta description at runtime
 * Ensures consistent branding across all pages
 */

export function setSEO(title: string, description?: string) {
  // Set document title with AntiFraud branding
  document.title = `${title} | AntiFraud / by HCoragem`;

  // Update meta description if provided
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
