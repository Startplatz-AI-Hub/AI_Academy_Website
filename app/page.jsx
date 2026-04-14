'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { tokens } from '../styles/tokens';

import Preloader from '../components/Preloader';
import GridBackground from '../components/GridBackground';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ScrollProgress from '../components/ScrollProgress';
import TargetAudience from '../components/TargetAudience';
import TeamSection from '../components/TeamSection';
import KPISection from '../components/KPISection';
import VisionSection from '../components/VisionSection';
import EventsTimeline from '../components/EventsTimeline';
import Testimonials from '../components/Testimonials';
import Stories from '../components/Stories';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  /* Always start at top on page load / refresh */
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const handlePreloaderDone = useCallback(() => {
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
      <Preloader onComplete={handlePreloaderDone} />
      <GridBackground />
      <ScrollProgress />
      <Navigation />

      <main id="main-content" role="main">
        <Hero />
        <TargetAudience />
        <TeamSection />
        <KPISection />
        <VisionSection />
        <EventsTimeline />
        <Testimonials />
        <Stories />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
