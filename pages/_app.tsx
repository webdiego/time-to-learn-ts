import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '../styles/prismjs-theme/material-night-owl.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
