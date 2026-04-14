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

export default function ExpertenPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Experten', href: '/experten', active: true },
  ];

  const whyTeachWithUs = [
    {
      icon: '⏰',
      title: 'Flexibles Engagement',
      description: 'Bestimme selbst, wann und wie viel du unterrichtest. Von einzelnen Workshops bis zu langfristigen Programmen.',
      features: ['Flexible Zeitplanung', 'Remote & Vor-Ort', 'Selbstbestimmte Auslastung', 'Pausierbar jederzeit'],
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
    {
      icon: '💰',
      title: 'Attraktive Vergütung',
      description: 'Konkurrenzfähige Honorare, Leistungsboni und Boni für hochbewertete Kurse.',
      features: ['Wettbewerbsfähige Raten', 'Performance Bonuses', 'Monatliche Abrechnung', 'Transparente Struktur'],
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
    {
      icon: '🤝',
      title: 'Starkes Netzwerk',
      description: 'Verbinde dich mit führenden KI-Experten, Unternehmern und Innovatoren in unserem Ökosystem.',
      features: ['Networking Events', 'Mentoring Zugang', 'Kooperationen', 'Community Support'],
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
  ];

  const expertProfiles = [
    {
      icon: '🤖',
      title: 'KI-Entwickler',
      description: 'Du baust intelligente Systeme, Machine Learning Modelle und AI-Anwendungen. Gib dein technisches Know-how weiter.',
      features: ['LLM & ML Expertise', 'Software Engineering', 'Praxiserfahrung', 'Advanced Topics'],
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
    {
      icon: '📊',
      title: 'Data Scientists',
      description: 'Deine Expertise in Datenanalyse, Statistik und Modellierung ist wertvoll. Unterrichte angehende Data Profis.',
      features: ['Data Engineering', 'Statistical Analysis', 'Visualization', 'Business Analytics'],
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
    {
      icon: '💼',
      title: 'Business Consultants',
      description: 'Bringe strategisches Geschäftswissen in unsere Kurse. Lehre, wie KI Geschäftsmodelle transformiert.',
      features: ['Strategy & Digital', 'Change Management', 'Business Cases', 'Executive Training'],
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
    {
      icon: '🏢',
      title: 'Branchenexperten',
      description: 'Deine spezifische Branchenerfahrung – egal ob Finance, Healthcare, Manufacturing oder Logistik – ist gefragt.',
      features: ['Industry Deep Dives', 'Use Case Teaching', 'Domain Expertise', 'Real-World Cases'],
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
  ];

  const becomeTeacherSteps = [
    {
      step: '1',
      title: 'Bewerbung',
      description: 'Fülle unser kurzes Bewerbungsformular aus. Erzähle uns von deiner Expertise und deinen Lehrzielen.',
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
    {
      step: '2',
      title: 'Kennenlerngespräch',
      description: 'Tausch dich mit unserem Team aus. Wir besprechen Kursformat, Inhalte und Erwartungen.',
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
    {
      step: '3',
      title: 'Onboarding',
      description: 'Du wirst vollständig trainiert: Didaktik, Tools, Plattform und Community-Standards.',
      accentColor: tokens.colors.primary,
      accentBg: tokens.colors.primaryLighter,
      cornerColor: tokens.colors.primary,
    },
  ];

  const stats = [
    { value: 150, label: 'Aktive Dozenten', suffix: '+' },
    { value: 4.8, label: 'Bewertung', suffix: '/5' },
    { value: 30, label: 'Themengebiete', suffix: '+' },
  ];

  return (
    <SubpageLayout>
      <PageHero
        badge="Werde Dozent"
        badgeColor={tokens.colors.primary}
        badgeBg={tokens.colors.primaryLighter}
        title="Teil unseres <span>Experten-Netzwerks</span>"
        subtitle="Gestalte die KI-Fähigkeiten der nächsten Generation. Unterrichte an der STARTPLATZ AI Academy und verdiene dabei durchschnittlich 2.500-5.000 Euro pro Kurs."
        breadcrumbs={breadcrumbs}
        accentColor={tokens.colors.primaryLighter}
        image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_800/v1767662288/ai-hub/website/website_stock_images/EVENT-04.png"
      />

      <SectionBlock
        badge="Warum mit uns?"
        title="Warum bei uns <span>unterrichten</span>?"
        subtitle="Ein unterstützendes Ökosystem für Dozenten, die ihr Wissen mit Leidenschaft teilen."
        variant="light"
        accent={tokens.colors.glow}
      >
        <Grid $cols={3}>
          {whyTeachWithUs.map((reason, idx) => (
            <FeatureCard
              key={idx}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              features={reason.features}
              accentColor={reason.accentColor}
              accentBg={reason.accentBg}
              cornerColor={reason.cornerColor}
            />
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock
        badge="Expertenprofil"
        title="Wen wir <span>suchen</span>"
        subtitle="Es gibt viele Wege, Dozent bei uns zu werden. Finde deinen perfekten Fit."
        variant="muted"
        accent={tokens.colors.glow}
      >
        <Grid $cols={4}>
          {expertProfiles.map((profile, idx) => (
            <FeatureCard
              key={idx}
              icon={profile.icon}
              title={profile.title}
              description={profile.description}
              features={profile.features}
              accentColor={profile.accentColor}
              accentBg={profile.accentBg}
              cornerColor={profile.cornerColor}
            />
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock
        badge="Prozess"
        title="So wirst du <span>Dozent</span>"
        subtitle="Ein einfacher dreistufiger Prozess vom Bewerbung bis zum ersten Kurs"
        variant="white"
        accent={tokens.colors.glow}
      >
        <Grid $cols={3}>
          {becomeTeacherSteps.map((step, idx) => (
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
        variant="light"
        accent={tokens.colors.glow}
        centered
      >
        <StatsRow stats={stats} variant="light" />
      </SectionBlock>

      <CTABanner title="Bereit dein Wissen zu <span>teilen</span>?">
        <Button href="/experten/bewerbung" variant="primary" size="lg" arrow>
          Jetzt Bewerben
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
