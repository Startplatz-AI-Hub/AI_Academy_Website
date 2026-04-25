'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { CALENDLY_BASE_URL } from '../lib/site';

const WIDGET_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

function isCalendlyBookingUrl(href) {
  try {
    const url = new URL(href, window.location.href);
    return url.origin === 'https://calendly.com' && url.pathname.startsWith('/d/cxtf-hhx-929');
  } catch {
    return false;
  }
}

export default function CalendlyWidget() {
  useEffect(() => {
    if (!document.querySelector('link[data-calendly-widget-css]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = WIDGET_CSS;
      link.dataset.calendlyWidgetCss = 'true';
      document.head.appendChild(link);
    }

    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target?.closest?.('a[href]');
      if (!anchor) return;

      const href = anchor.href;
      if (!isCalendlyBookingUrl(href)) return;

      const calendly = window.Calendly;
      if (!calendly?.initPopupWidget) return;

      event.preventDefault();
      calendly.initPopupWidget({ url: href || CALENDLY_BASE_URL });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <Script src={WIDGET_SCRIPT} strategy="afterInteractive" />;
}
