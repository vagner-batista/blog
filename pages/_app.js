import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

import '../styles/global.css';
import theme from '../styles/theme';
import BlogHeader from '../components/BlogHeader';
import Layout from '../components/Layout';
import '../styles/prism.css';

const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Blog - Vagner Batista</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BlogHeader />

        <Component {...pageProps}>
          <Layout title={pageProps.title}>{pageProps.children}</Layout>
        </Component>
      </ThemeProvider>
    </CacheProvider>
  );
}
