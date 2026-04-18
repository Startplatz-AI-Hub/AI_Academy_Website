'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { tokens } from '../styles/tokens';
import LiquidEther from './LiquidEther';
import Navigation from './Navigation';
import ScrollProgress from './ScrollProgress';
import Footer from './Footer';
import { getGpuTier, GPU_PRESETS } from '../utils/gpuTier';

export default function SubpageLayout({ children }) {
  const [mainBg, setMainBg] = React.useState('rgba(255, 255, 255, 0.72)');

  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    const el = document.getElementById('preloader');
    if (el) el.remove();

    /* Adapt opacity to GPU tier — NO backdrop-filter anymore. */
    const tier = getGpuTier();
    const p = GPU_PRESETS[tier];
    setMainBg(`rgba(255, 255, 255, ${p.mainOpacity})`);
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
          background: mainBg,
        }}
      >
        {children}
      </main>

      <Footer />
    </ThemeProvider>
  );
}
