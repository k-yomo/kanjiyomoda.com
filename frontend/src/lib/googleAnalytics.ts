import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { GA_ID } from '@src/config/env';

export const pageview = (path: string) => {
  if (!GA_ID) {
    return;
  }
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

interface EventProps {
  action: string;
  category: string;
  label: string;
  value: string;
}

export const event = ({ action, category, label, value = '' }: EventProps) => {
  if (!GA_ID) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};

export function usePageView() {
  const router = useRouter();

  useEffect(() => {
    if (!GA_ID) {
      return;
    }

    const handleRouteChange = (path: string) => {
      pageview(path);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}
