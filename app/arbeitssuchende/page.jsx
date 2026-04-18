'use client';

import React from 'react';
import styled from 'styled-components';
import {
  Button,
  PageHero,
  SectionBlock,
  FeatureCard,
  CTABanner,
  StatsRow,
  TestimonialCard,
} from '../../components/ui';
import SubpageLayout from '../../components/SubpageLayout';
import { tokens } from '../../styles/tokens';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GridTwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function ArbeitssuchendePage() {
  const breadcrumbs = [
    { label: 'Arbeitssuchende', href: '/arbeitssuchende', active: true },
  ];

  const fundingSteps = [
    {
      step: '1',
      title: 'Beratungsgespräch',
      description: 'Kostenlose Beratung mit unserem Team zur Klärung deiner Ziele und Voraussetzungen.',
      accentColor: tokens.colors.mint,
      accentBg: tokens.colors.mintBg,
      cornerColor: tokens.colors.mint,
    },
    {
      step: '2',
      title: 'Bildungsgutschein beantragen',
      description: 'Wir helfen dir, den Bildungsgutschein bei der Agentur für Arbeit einzureichen.',
      accentColor: tokens.colors.mint,
      accentBg: tokens.colors.mintBg,
      cornerColor: tokens.colors.mint,
    },
    {
      step: '3',
      title: 'Kurs starten',
      description: 'Nach Bewilligung startest du dein intensives Bootcamp mit 100% Förderung.',
      accentColor: tokens.colors.mint,
      accentBg: tokens.colors.mintBg,
      cornerColor: tokens.colors.mint,
    },
  ];

  const programs = [
    {
      icon: '🤖',
      title: 'KI-Manager Bootcamp',
      description: '12 intensive Wochen zum KI-Manager. Lerne Management von KI-Projekten, Strategie und Implementierung.',
      features: ['Live-Sessions', 'Projektarbeit', 'Mentoring', 'Job-Placement'],
      accentColor: tokens.colors.mint,
      accentBg: tokens.colors.mintBg,
      cornerColor: tokens.colors.mint,
    },
    {
      icon: '✨',
      title: 'Prompt Engineering Kurs',
      description: 'Kompakter 4-Wochen-Kurs für effektive KI-Prompting und praktische Anwendungen.',
      features: ['Hands-on Training', 'Echtzeit-Feedback', 'Zertifikat', 'Community Access'],
      accentColor: tokens.colors.mint,
      accentBg: tokens.colors.mintBg,
      cornerColor: tokens.colors.mint,
    },
    {
      icon: '📊',
      title: 'Data Analytics Bootcamp',
      description: '8 Wochen intensive Datenanalyse mit Python, SQL und modernen Analytics-Tools.',
      features: ['Portfolio-Projekte', 'Datensätze', 'Real-World Cases', 'Karriere-Support'],
      accentColor: tokens.colors.mint,
      accentBg: tokens.colors.mintBg,
      cornerColor: tokens.colors.mint,
    },
  ];

  const stats = [
    { value: 2000, label: 'Absolventen', suffix: '+' },
    { value: 95, label: 'Zufriedenheit', suffix: '%' },
    { value: 100, label: 'Förderquote', suffix: '%' },
    { value: 12, label: 'Wochen Bootcamp', suffix: '' },
  ];

  const testimonials = [
    {
      quote:
        'Das Bootcamp hat mein Leben verändert. Mit 100% Förderung konnte ich mich vollständig auf mein Lernen konzentrieren. Jetzt arbeite ich als KI-Manager in einem Tech-Startup.',
      name: 'Sarah M.',
      role: 'KI-Manager, Tech Startup Berlin',
      avatar: 'https://res.cloudinary.com/startplatz/image/upload/c_fill,w_44,h_44,g_face,q_auto/avatar-1.jpg',
      accentColor: tokens.colors.mint,
    },
    {
      quote:
        'Die praktischen Projekte und das Mentoring waren entscheidend. Meine Jobaussichten haben sich deutlich verbessert. Wärmstens empfohlen!',
      name: 'Marcus K.',
      role: 'Data Analyst, Digital Agency',
      avatar: 'https://res.cloudinary.com/startplatz/image/upload/c_fill,w_44,h_44,g_face,q_auto/avatar-2.jpg',
      accentColor: tokens.colors.mint,
    },
  ];

  return (
    <SubpageLayout>
      <PageHero
        badge="100% Gefördert"
        badgeColor={tokens.colors.mint}
        badgeBg={tokens.colors.mintBg}
        title="Starte deine <span>KI-Karriere</span>"
        subtitle="Mit unserem Bildungsgutschein-Programm erhältst du intensive KI-Ausbildung komplett kostenlos. Vollständig bezahlt durch Agentur für Arbeit und BAMF."
        breadcrumbs={breadcrumbs}
        accentColor={tokens.colors.mintBg}
        image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_800/v1776469601/ai-hub/website/AI-Academy-Website-Images/target-audience-arbeitssuchende.png"
      />

      <SectionBlock
        badge="Förderungsprozess"
        title="So funktioniert die <span>Förderung</span>"
        subtitle="Drei einfache Schritte zum vollständig geförderten Bootcamp"
        accent={tokens.colors.glowMint}
      >
        <Grid>
          {fundingSteps.map((step, idx) => (
            <FeatureCard
              key={idx}
              step={step.step}
              title={step.title}
              description={step.description}
              accentColor={step.accentColor}
              accentBg={step.accentBg}
              cornerColor={step.cornerColor}
            />
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock
        badge="Bootcamps & Kurse"
        title="Unsere <span>Programme</span>"
        subtitle="Wähle das Bootcamp, das zu deinen Zielen passt"
        variant="muted"
        accent={tokens.colors.glowMint}
      >
        <Grid>
          {programs.map((prog, idx) => (
            <FeatureCard
              key={idx}
              icon={prog.icon}
              title={prog.title}
              description={prog.description}
              features={prog.features}
              accentColor={prog.accentColor}
              accentBg={prog.accentBg}
              cornerColor={prog.cornerColor}
            />
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock
        title="Nach Zahlen"
        variant="white"
        accent={tokens.colors.glowMint}
        centered
      >
        <StatsRow stats={stats} variant="light" />
      </SectionBlock>

      <SectionBlock
        badge="Stimmen"
        title="Was <span>Absolventen</span> sagen"
        subtitle="Echte Erfolgsgeschichten von Teilnehmern unserer Bootcamps"
        variant="light"
        accent={tokens.colors.glowMint}
      >
        <GridTwoCol>
          {testimonials.map((test, idx) => (
            <TestimonialCard
              key={idx}
              quote={test.quote}
              name={test.name}
              role={test.role}
              avatar={test.avatar}
              accentColor={test.accentColor}
            />
          ))}
        </GridTwoCol>
      </SectionBlock>

      <CTABanner title="Bereit für deine <span>KI-Karriere</span>?">
        <Button href="/#newsletter" variant="mint" size="lg" arrow>
          Zur Warteliste
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
