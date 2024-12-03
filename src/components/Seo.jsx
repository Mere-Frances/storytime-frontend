import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
const Seo = ({ title, description, image, url, twitterCard = "summary_large_image" }) => {
  return (
    <HelmetProvider>
        <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        {url && <meta property="og:url" content={url} />}
        {image && <meta property="og:image" content={image} />}
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content={twitterCard} />
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;