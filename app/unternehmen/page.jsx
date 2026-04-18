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
    grid-template-columns: repeat(${({ $cols }) => $cols || 3}, 1fr);
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

export default function UnternehmenPage() {
  const breadcrumbs = [
    { label: 'Unternehmen', href: '/unternehmen', active: true },
  ];

  const offerings = [
    {
      icon: '🎓',
      title: 'Inhouse-Workshops',
      description: 'Maßgeschneiderte Trainingsmodule speziell für die Bedürfnisse deines Unternehmens entwickelt.',
      features: ['Flexible Terminfindung', 'Anpassbare Inhalte', 'Vor-Ort oder Online', 'Nachbetreuung'],
      accentColor: tokens.colors.orange,
      accentBg: tokens.colors.orangeBg,
      cornerColor: tokens.colors.orange,
    },
    {
      icon: '💪',
      title: 'Team-Bootcamps',
      description: 'Intensive Gruppenprogramme für tiefgreifende KI-Kompetenzen im gesamten Team.',
      features: ['2-12 Wochen Programme', 'Praxisorientiert', 'Zertifizierung', 'Mentoring'],
      accentColor: tokens.colors.orange,
      accentBg: tokens.colors.orangeBg,
      cornerColor: tokens.colors.orange,
    },
    {
      icon: '👥',
      title: 'Executive Briefings',
      description: 'Strategische KI-Einführungen für Führungskräfte und Management-Teams.',
      features: ['C-Level fokussiert', 'Strategische Perspektive', 'Kurze Formate', 'Entscheidungshilfen'],
      accentColor: tokens.colors.orange,
      accentBg: tokens.colors.orangeBg,
      cornerColor: tokens.colors.orange,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Bedarfsanalyse',
      description: 'Wir analysieren deinen IST-Zustand und definieren klare Lernziele für dein Team.',
      accentColor: tokens.colors.orange,
      accentBg: tokens.colors.orangeBg,
      cornerColor: tokens.colors.orange,
    },
    {
      step: '2',
      title: 'Curriculum-Design',
      description: 'Entwicklung eines individuellen Lehrplans, der exakt auf deine Industrie und Prozesse abgestimmt ist.',
      accentColor: tokens.colors.orange,
      accentBg: tokens.colors.orangeBg,
      cornerColor: tokens.colors.orange,
    },
    {
      step: '3',
      title: 'Training & Coaching',
      description: 'Intensive Schulung durch Experten mit praktischen Projekten aus deinem Geschäftsalltag.',
      accentColor: tokens.colors.orange,
      accentBg: tokens.colors.orangeBg,
      cornerColor: tokens.colors.orange,
    },
    {
      step: '4',
      title: 'Nachbetreuung',
      description: 'Kontinuierliche Unterstützung und Refresher-Sessions für nachhaltigen Wissenstransfer.',
      accentColor: tokens.colors.orange,
      accentBg: tokens.colors.orangeBg,
      cornerColor: tokens.colors.orange,
    },
  ];

  const stats = [
    { value: 50, label: 'Partner', suffix: '+' },
    { value: 150, label: 'Dozenten', suffix: '+' },
    { value: 95, label: 'Zufriedenheit', suffix: '%' },
    { value: 500, label: 'Geschulte Mitarbeiter', suffix: '+' },
  ];

  const testimonials = [
    {
      quote:
        'Das Inhouse-Training hat unser gesamtes Team befähigt, KI-Projekte eigenständig durchzuführen. Die Dozenten verstanden unsere spezifischen Herausforderungen perfekt und die ROI ist beeindruckend.',
      name: 'Dr. Heike Weber',
      role: 'Chief Digital Officer, DAX-Konzern',
      avatar: 'https://res.cloudinary.com/startplatz/image/upload/c_fill,w_44,h_44,g_face,q_auto/avatar-corporate-1.jpg',
      accentColor: tokens.colors.orange,
    },
    {
      quote:
        'Innerhalb von 8 Wochen haben 30 Mitarbeiter fundamental neue KI-Fähigkeiten erworben. Das hat unsere Innovation massiv beschleunigt. Wir arbeiten nun kontinuierlich mit dem STARTPLATZ Team zusammen.',
      name: 'Thomas Müller',
      role: 'VP Operations, Tech-Mittelstand',
      avatar: 'https://res.cloudinary.com/startplatz/image/upload/c_fill,w_44,h_44,g_face,q_auto/avatar-corporate-2.jpg',
      accentColor: tokens.colors.orange,
    },
  ];

  return (
    <SubpageLayout>
      <PageHero
        badge="Inhouse Training"
        badgeColor={tokens.colors.orange}
        badgeBg={tokens.colors.orangeBg}
        title="KI-Transformation für <span>Ihr Unternehmen</span>"
        subtitle="Maßgeschneiderte Trainings und Bootcamps – vom Workshop bis zum Bootcamp für dein gesamtes Team."
        breadcrumbs={breadcrumbs}
        accentColor={tokens.colors.orangeBg}
        image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_800/v1776469603/ai-hub/website/AI-Academy-Website-Images/target-audience-unternehmen.png"
      />

      <SectionBlock
        badge="Leistungen"
        title="Unser <span>Angebot</span>"
        subtitle="Flexible Formate für jeden Bedarf und jede Unternehmensgröße"
        variant="light"
        accent={tokens.colors.glowOrange}
      >
        <Grid $cols={3}>
          {offerings.map((offer, idx) => (
            <FeatureCard
              key={idx}
              icon={offer.icon}
              title={offer.title}
              description={offer.description}
              features={offer.features}
              accentColor={offer.accentColor}
              accentBg={offer.accentBg}
              cornerColor={offer.cornerColor}
            />
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock
        badge="Prozess"
        title="Ihr Weg zur <span>KI-Kompetenz</span>"
        subtitle="Ein bewährter vierstufiger Prozess für maximalen Lernerfolg und nachhaltigen Wissenstransfer"
        variant="muted"
        accent={tokens.colors.glowOrange}
      >
        <Grid $cols={4}>
          {processSteps.map((step, idx) => (
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
        title="Nach Zahlen"
        variant="white"
        accent={tokens.colors.glowOrange}
        centered
      >
        <StatsRow stats={stats} variant="light" />
      </SectionBlock>

      <SectionBlock
        badge="Erfolgsgeschichten"
        title="Was <span>Unternehmen</span> sagen"
        subtitle="Echte Ergebnisse von Partnern, die ihre KI-Fähigkeiten mit uns entwickelt haben"
        variant="light"
        accent={tokens.colors.glowOrange}
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

      <CTABanner title="Bereit für die <span>KI-Transformation</span>?">
        <Button href="/#newsletter" variant="orange" size="lg" arrow>
          Gespräch Buchen
        </Button>
        <Button href="/#weiterbildungen" variant="secondary" size="lg">
          Angebote Ansehen
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
