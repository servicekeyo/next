'use client';

import { useEffect, useState } from 'react';

interface SEOProps {
  wpUrl: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

interface SEOData {
  title: string | null;
  description: string | null;
  canonical: string | null;
  og: {
    title: string | null;
    description: string | null;
    url: string | null;
    siteName: string | null;
    locale: string | null;
    type: string | null;
    image: string | null;
  };
  twitter: {
    card: string | null;
    title: string | null;
    description: string | null;
    image: string | null;
  };
  schema: string | null;
}

export default function SEO({ wpUrl, fallbackTitle, fallbackDescription }: SEOProps) {
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSEOData() {
      try {
        const response = await fetch(`/api/seo?url=${encodeURIComponent(wpUrl)}`);
        if (response.ok) {
          const data = await response.json();
          setSeoData(data);
        } else {
          console.error('Failed to fetch SEO data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching SEO data:', error);
      } finally {
        setLoading(false);
      }
    }

    if (wpUrl) {
      fetchSEOData();
    }
  }, [wpUrl]);

  useEffect(() => {
    if (loading) return;

    // Use WordPress data if available, otherwise use fallbacks
    const title = seoData?.title || fallbackTitle || '';
    const description = seoData?.description || fallbackDescription || '';
    const canonical = seoData?.canonical || wpUrl || '';

    // Update document title
    if (title) {
      document.title = title;
    }

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

    // Update or create canonical link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph meta tags
    if (seoData?.og) {
      const ogTags = [
        { property: 'og:title', content: seoData.og.title || title },
        { property: 'og:description', content: seoData.og.description || description },
        { property: 'og:url', content: seoData.og.url || canonical },
        { property: 'og:site_name', content: seoData.og.siteName },
        { property: 'og:locale', content: seoData.og.locale },
        { property: 'og:type', content: seoData.og.type || 'website' },
        { property: 'og:image', content: seoData.og.image },
      ];

      ogTags.forEach(tag => {
        if (tag.content) {
          let element = document.querySelector(`meta[property="${tag.property}"]`);
          if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', tag.property);
            document.head.appendChild(element);
          }
          element.setAttribute('content', tag.content);
        }
      });
    }

    // Update Twitter Card meta tags
    if (seoData?.twitter) {
      const twitterTags = [
        { name: 'twitter:card', content: seoData.twitter.card || 'summary_large_image' },
        { name: 'twitter:title', content: seoData.twitter.title || title },
        { name: 'twitter:description', content: seoData.twitter.description || description },
        { name: 'twitter:image', content: seoData.twitter.image },
      ];

      twitterTags.forEach(tag => {
        if (tag.content) {
          let element = document.querySelector(`meta[name="${tag.name}"]`);
          if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', tag.name);
            document.head.appendChild(element);
          }
          element.setAttribute('content', tag.content);
        }
      });
    }

    // Add JSON-LD structured data
    if (seoData?.schema) {
      // Remove existing JSON-LD scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      // Add new JSON-LD script
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = seoData.schema;
      document.head.appendChild(script);
    }

  }, [loading, seoData, fallbackTitle, fallbackDescription, wpUrl]);

  return null;
}