import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/prismjs-theme/material-night-owl.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
