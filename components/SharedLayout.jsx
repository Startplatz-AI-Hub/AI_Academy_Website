'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { tokens } from '../styles/tokens';
import Preloader from './Preloader';
import GridBackground from './GridBackground';
import Navigation from './Navigation';
import ScrollProgress from './ScrollProgress';
import Footer from './Footer';

export default function SharedLayout({ children, showPreloader = true }) {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const handlePreloaderDone = React.useCallback(() => {
    setLoaded(true);
    const el = document.getElementById('preloader');
    if (el) el.remove();
  }, []);

  return (
    <ThemeProvider theme={tokens}>
      <GlobalStyles />
      <a href="#main-content" className="skip-to-content">
        Zum Hauptinhalt springen
      </a>
      {showPreloader && <Preloader onComplete={handlePreloaderDone} />}
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
