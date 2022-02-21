import Head from 'next/head';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

import * as gtag from '../lib/gtag';

import { attributes as global } from '../content/settings/global.md';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        // titleTemplate={`%s | ${global.siteTitle}`}
        defaultTitle={global.defaultMetadata.title}
        description={global.defaultMetadata.description}
        openGraph={{
          type: 'website',
          site_name: global.siteTitle,
        }}
        twitter={{
          cardType: global.defaultMetadata.twitterCardType,
          handle: global.defaultMetadata.twitterUsername,
        }}
      />
      {/* Netlify CMS Script Tag */}
      <Script strategy="beforeInteractive" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
