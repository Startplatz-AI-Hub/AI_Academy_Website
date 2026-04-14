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

export default function BerufstaettigePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Berufstätige', href: '/berufstaetige', active: true },
  ];

  const whyNow = [
    {
      icon: '🔐',
      title: 'Zukunftssicherheit',
      description: 'KI ist nicht mehr optional. Sichern deine Karriere mit gefragten KI-Skills ab.',
      features: ['Künftige Jobsicherheit', 'Wettbewerbsfähigkeit', 'Future-Ready'],
      accentColor: tokens.colors.navy,
      accentBg: tokens.colors.navyBg,
      cornerColor: tokens.colors.navy,
    },
    {
      icon: '📈',
      title: 'Karrieresprung',
      description: 'KI-Expertise öffnet Türen für Beförderungen, Gehaltssteigerungen und neue Rollen.',
      features: ['Höhere Positionen', 'Mehr Verantwortung', 'Leadership Opportunities'],
      accentColor: tokens.colors.navy,
      accentBg: tokens.colors.navyBg,
      cornerColor: tokens.colors.navy,
    },
    {
      icon: '🏆',
      title: 'Wettbewerbsvorteil',
      description: 'Differenziere dich von Kollegen. KI-Skills sind noch immer ein großes Differenzierungsmerkmal.',
      features: ['Spezialisierung', 'Expertise', 'Marktführer'],
      accentColor: tokens.colors.navy,
      accentBg: tokens.colors.navyBg,
      cornerColor: tokens.colors.navy,
    },
  ];

  const formats = [
    {
      icon: '🌙',
      title: 'Abendkurse',
      description: 'Flexible Abendkurse nach der Arbeit. Perfekt für berufstätige mit vollem Terminkalender.',
      features: ['Nach 18 Uhr', '2-3 x pro Woche', 'Hybrid-Option'],
      accentColor: tokens.colors.navy,
      accentBg: tokens.colors.navyBg,
      cornerColor: tokens.colors.navy,
    },
    {
      icon: '📅',
      title: 'Wochenend-Workshops',
      description: 'Intensive Workshops samstags und sonntags für schnelle Skill-Entwicklung im Schnelltempo.',
      features: ['Sa & So', '8-10 Stunden', 'Hands-On'],
      accentColor: tokens.colors.navy,
      accentBg: tokens.colors.navyBg,
      cornerColor: tokens.colors.navy,
    },
    {
      icon: '💻',
      title: 'Online-Module',
      description: 'Vollständig asynchrone Kurse mit flexiblem Zeitmanagement. Lerne in deinem eigenen Tempo.',
      features: ['24/7 Zugang', 'Self-Paced', 'Lifetime Access'],
      accentColor: tokens.colors.navy,
      accentBg: tokens.colors.navyBg,
      cornerColor: tokens.colors.navy,
    },
  ];

  const stats = [
    { value: 5000, label: 'Berufstätige', suffix: '+' },
    { value: 92, label: 'Weiterempfehlung', suffix: '%' },
    { value: 4, label: 'Wochen Kurs', suffix: '' },
    { value: 300, label: 'Partner Unternehmen', suffix: '+' },
  ];

  const testimonials = [
    {
      quote:
        'Als Manager wollte ich KI verstehen. Die Abendkurse haben mir das Wissen gegeben, das ich brauchte, ohne meine Arbeit zu unterbrechen. Großartig!',
      name: 'Petra H.',
      role: 'Projektmanagerin, DAX-Unternehmen',
      avatar: 'https://res.cloudinary.com/startplatz/image/upload/c_fill,w_44,h_44,g_face,q_auto/avatar-3.jpg',
      accentColor: tokens.colors.navy,
    },
    {
      quote:
        'Die Wochenend-Workshops passen perfekt zu meinem Zeitplan. Ich lerne schnell und kann das Wissen sofort in meinen täglichen Aufgaben anwenden.',
      name: 'Christian B.',
      role: 'Consultant, IT-Beratung',
      avatar: 'https://res.cloudinary.com/startplatz/image/upload/c_fill,w_44,h_44,g_face,q_auto/avatar-4.jpg',
      accentColor: tokens.colors.navy,
    },
  ];

  return (
    <SubpageLayout>
      <PageHero
        badge="Berufsbegleitend"
        badgeColor={tokens.colors.navy}
        badgeBg={tokens.colors.navyBg}
        title="KI-Skills für <span>Berufstätige</span>"
        subtitle="Intensive, flexible KI-Kurse speziell für Professionals. Abends, Wochenends oder online – du entscheidest deinen Lernrhythmus."
        breadcrumbs={breadcrumbs}
        accentColor={tokens.colors.navyBg}
        image="https://res.cloudinary.com/startplatz/image/upload/c_fill,w_600,h_400,q_auto/EVENT-03"
      />

      <SectionBlock
        badge="Strategie"
        title="Warum gerade <span>jetzt</span>?"
        subtitle="KI revolutioniert jeden Bereich. Investiere jetzt in deine Fähigkeiten."
        accent={tokens.colors.glowNavy}
      >
        <Grid>
          {whyNow.map((item, idx) => (
            <FeatureCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              features={item.features}
              accentColor={item.accentColor}
              accentBg={item.accentBg}
              cornerColor={item.cornerColor}
            />
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock
        badge="Formate"
        title="Flexible Lernformate für <span>deinen</span> Alltag"
        subtitle="Wähle das Format, das zu deinen Zielen und deinem Zeitplan passt"
        variant="muted"
        accent={tokens.colors.glowNavy}
      >
        <Grid>
          {formats.map((fmt, idx) => (
            <FeatureCard
              key={idx}
              icon={fmt.icon}
              title={fmt.title}
              description={fmt.description}
              features={fmt.features}
              accentColor={fmt.accentColor}
              accentBg={fmt.accentBg}
              cornerColor={fmt.cornerColor}
            />
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock
        title="Nach Zahlen"
        variant="white"
        accent={tokens.colors.glowNavy}
        centered
      >
        <StatsRow stats={stats} variant="light" />
      </SectionBlock>

      <SectionBlock
        badge="Erfolgsgeschichten"
        title="Von <span>Profis</span>, für Profis"
        subtitle="Erfahren von Berufstätigen, die ihre KI-Fähigkeiten ausgebaut haben"
        variant="light"
        accent={tokens.colors.glowNavy}
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

      <CTABanner title="Starte deine <span>KI-Transformation</span>">
        <Button href="/#newsletter" variant="navy" size="lg" arrow>
          Mehr Infos erhalten
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
