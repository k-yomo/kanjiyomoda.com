import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { usePageView } from '@src/lib/googleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return <Component {...pageProps} />;
}
export default MyApp;
