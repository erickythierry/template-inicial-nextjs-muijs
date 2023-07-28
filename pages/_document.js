import * as React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import theme from '../src/theme';

export default function MyDocument(props) {
  const { emotionStyleTags } = props;

  return (
    <Html lang="en">
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

