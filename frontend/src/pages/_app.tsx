import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { usePageView } from '@src/lib/googleAnalytics';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="z-0 flex-grow relative bg-white dark:bg-black">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
