import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="jDybAMOfbtrDcA8bMHKelbdj9NibC01BqHC8Qyf0DKM" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
