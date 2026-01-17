import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO } from "@/utils/seoConfig";
import { useEffect } from "react";

// Base URL for Lovable hosting
const BASE_URL = 'https://vanschaikcsadvocaten.lovable.app';

export const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const seoConfig = seoConfigs[location.pathname] || getDefaultSEO();

  // Update document title immediately for better UX
  useEffect(() => {
    document.title = seoConfig.title;
  }, [seoConfig.title]);

  // Clean URLs for Lovable hosting
  const canonicalPath = location.pathname === '/' ? '' : location.pathname;

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Van Schaik C.S. Advocaten" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`${BASE_URL}${canonicalPath}`} />
        <meta property="og:site_name" content="Van Schaik C.S. Advocaten" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Van Schaik C.S. Advocaten - Juridische Dienstverlening" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.twitterTitle} />
        <meta name="twitter:description" content={seoConfig.twitterDescription} />
        <meta name="twitter:image" content={`${BASE_URL}/og-image.jpg`} />
        <meta name="twitter:image:alt" content="Van Schaik C.S. Advocaten" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Van Schaik C.S. Advocaten",
            "description": "Advocatenkantoor gespecialiseerd in familie-, arbeids-, straf-, huur- en contractenrecht",
            "url": BASE_URL,
            "telephone": "+31-10-5120409",
            "faxNumber": "+31-10-5120410",
            "email": "info@vanschaikcs.nl",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Berkelse Poort 39",
              "addressLocality": "Berkel en Rodenrijs",
              "postalCode": "2651 JX",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.9929,
              "longitude": 4.4653
            },
            "openingHours": [
              "Mo-Fr 09:00-17:00"
            ],
            "areaServed": {
              "@type": "Place",
              "name": "Nederland"
            },
            "founder": {
              "@type": "Person",
              "name": "Mr. F. van Schaik",
              "jobTitle": "Advocaat"
            },
            "employee": [
              {
                "@type": "Person",
                "name": "Mr. F. van Schaik",
                "jobTitle": "Advocaat"
              },
              {
                "@type": "Person", 
                "name": "Drs. P. van Schaik",
                "jobTitle": "Mediator"
              }
            ],
            "serviceType": [
              "Familierecht",
              "Arbeidsrecht", 
              "Strafrecht",
              "Huurrecht",
              "Contractenrecht",
              "Mediation"
            ]
          })}
        </script>
      </Helmet>
      {children}
    </>
  );
};