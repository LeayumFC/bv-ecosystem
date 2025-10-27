import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "comercio internacional, logística, consultoría estratégica, inversiones, importación, exportación, soluciones integrales",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  canonicalUrl
}: SEOProps) => {
  const fullTitle = `${title} | Biagi & Varnoux Group`;
  const siteUrl = window.location.origin;
  const currentUrl = canonicalUrl || window.location.href;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Biagi & Varnoux Group" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@byvgroup" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Biagi & Varnoux Group" />
    </Helmet>
  );
};

export default SEO;
