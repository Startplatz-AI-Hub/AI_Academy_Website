'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { tokens } from '../styles/tokens';
import LiquidEther from './LiquidEther';
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
      <LiquidEther
        colors={['#7C3AED', '#FF9FFC', '#B497CF']}
        mouseForce={18}
        cursorSize={150}
        resolution={0.5}
        autoDemo
        autoSpeed={0.6}
        autoIntensity={3.5}
      />
      <ScrollProgress />
      <Navigation />

      <main
        id="main-content"
        role="main"
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(28px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(28px) saturate(1.4)',
        }}
      >
        {children}
      </main>

      <Footer />
    </ThemeProvider>
  );
}
