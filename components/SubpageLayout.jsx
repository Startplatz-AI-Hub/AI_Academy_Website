'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { tokens } from '../styles/tokens';
import GridBackground from './GridBackground';
import Navigation from './Navigation';
import ScrollProgress from './ScrollProgress';
import Footer from './Footer';

export default function SubpageLayout({ children }) {
  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    // Remove the static preloader from layout.jsx (if present on direct page load)
    const el = document.getElementById('preloader');
    if (el) el.remove();
  }, []);

  return (
    <ThemeProvider theme={tokens}>
      <GlobalStyles />
      <a href="#main-content" className="skip-to-content">
        Zum Hauptinhalt springen
      </a>
      <GridBackground />
      <ScrollProgress />
      <Navigation />

      <main id="main-content" role="main">
        {children}
      </main>

      <Footer />
    </ThemeProvider>
  );
}
