import { NextSeo } from 'next-seo';

import { attributes as global } from '../../content/settings/global.md';

export interface Metadata {
  title: string;
  slug: string;
  description?: string;
  shareImage?: {
    url: string;
  };
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterUsername?: string;
  titleOverwrite?: boolean;
}

interface SeoProps {
  metadata: Metadata;
}

const Seo: React.FC<SeoProps> = ({ metadata }) => {
  const { siteTitle, defaultMetadata } = global;

  // Prevent errors if no metadata was set
  if (!metadata) return null;

  const title = metadata.titleOverwrite ? `${metadata.title}` : `${metadata.title} | ${siteTitle}`;

  return (
    <NextSeo
      title={title}
      description={metadata.description || defaultMetadata.description}
      openGraph={{
        // Title and description are mandatory
        title,
        description: metadata.description || defaultMetadata.description,
        // Only include OG image if it exists
        ...(metadata.shareImage && {
          images: [
            {
              url: metadata.shareImage.url,
            },
          ],
        }),
      }}
      // Only include Twitter data if it exists
      twitter={{
        ...(metadata.twitterCardType && { cardType: metadata.twitterCardType }),
        // Handle is the twitter username of the content creator
        ...(metadata.twitterUsername && { handle: metadata.twitterUsername }),
      }}
    />
  );
};

export default Seo;
