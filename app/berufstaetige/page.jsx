'use client';

import React from 'react';
import styled from 'styled-components';
import {
  BeforeAfter,
  Button,
  CTABanner,
  DetailTable,
  FeatureCard,
  MiniFAQ,
  PageHero,
  ResponsiveGrid,
  SectionBlock,
  StatsRow,
  TwoColumn,
  VisualSlot,
} from '../../components/ui';
import SubpageLayout from '../../components/SubpageLayout';
import { tokens } from '../../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';
import { CALENDLY_URL } from '../../lib/site';

const Panel = styled.div`
  position: relative;
  padding: ${tokens.spacing['2xl']};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
`;

export default function BerufstaetigePage() {
  const before = [
    'Alle reden über KI. Du nickst und hoffst.',
    'Dein Chef fragt: "Können wir das mit KI?"',
    'Du fühlst dich abgehängt.',
  ];

  const after = [
    'Du automatisierst Prozesse, die andere händisch machen.',
    'Du sagst: "Kann ich zeigen. Hier ist der Workflow."',
    'Du stehst vor deinem Chef besser da.',
  ];

  const details = [
    { label: 'Format', value: '8 Wochen Teilzeit' },
    { label: 'Rhythmus', value: 'Di & Do, 15-18 Uhr' },
    { label: 'Teilnehmer', value: 'Max. 20 pro Kohorte' },
    { label: 'Förderung', value: 'QCG-förderfähig' },
  ];

  const curriculum = [
    {
      icon: '01',
      title: 'n8n Workflows',
      description: 'Du baust Automationen, die wiederkehrende Aufgaben sichtbar reduzieren.',
    },
    {
      icon: '02',
      title: 'GPT-APIs & Agents',
      description: 'Du verbindest KI-Modelle mit Prozessen statt nur einzelne Prompts zu schreiben.',
    },
    {
      icon: '03',
      title: 'RAG & Wissen',
      description: 'Du lernst, wie interne Dokumente und KI-Antworten sauber zusammenkommen.',
    },
    {
      icon: '04',
      title: 'Security & EU AI Act',
      description: 'Du nutzt KI produktiv, ohne Datenschutz und Governance zu ignorieren.',
    },
  ];

  const stats = [
    { value: 1000, label: 'Absolventen', suffix: '+' },
    { value: 20, label: 'Max. Teilnehmer pro Kohorte' },
    { displayValue: '2x', label: 'Pro Woche, Di & Do' },
  ];

  const faq = [
    { q: 'Schaffe ich das neben meinem Vollzeitjob?', a: 'Ja, wenn du zwei feste Zeitfenster pro Woche blockst. Der Kurs ist bewusst auf berufsbegleitendes Lernen ausgelegt.' },
    { q: 'Was lerne ich in den OneDay-Workshops?', a: 'OneDay ist kompakter: ein Tag, ein Thema, ein konkretes Deliverable. AfterWork führt dich tiefer über 8 Wochen.' },
    { q: 'Kann mein Arbeitgeber die Kosten über QCG übernehmen?', a: 'Ja, AfterWork ist QCG-förderfähig. Wir helfen dir, die Argumentation und nächsten Schritte mit deinem Arbeitgeber vorzubereiten.' },
    { q: 'Was ist der Unterschied zwischen AfterWork und FortyDays?', a: 'FortyDays ist Vollzeit für Arbeitssuchende. AfterWork läuft berufsbegleitend und fokussiert Automation im Job.' },
    { q: 'Brauche ich Vorkenntnisse?', a: 'Nein. Grundlegende digitale Sicherheit reicht. Du lernst die Tools im Kurs und arbeitest an nachvollziehbaren Business Cases.' },
  ];

  return (
    <SubpageLayout>
      <PageHero
        badge="Berufsbegleitend"
        badgeColor={tokens.colors.navy}
        badgeBg={tokens.colors.navyBg}
        title="Du bringst zwei Abende. <span>Wir bringen den Rest.</span>"
        subtitle="AfterWork AI Automation. 8 Wochen, neben dem Job, sofort anwendbar."
        breadcrumbs={[{ label: 'Berufstätige', href: '/berufstaetige', active: true }]}
        accentColor={tokens.colors.navyBg}
        image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_900/v1776469600/ai-hub/website/AI-Academy-Website-Images/target-audience-berufstaetige.png"
      >
        <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" variant="navy" size="lg" arrow>
          Kostenlos beraten lassen
        </Button>
        <Button href="/wissens-test" variant="secondary" size="lg">
          Wissens-Test machen
        </Button>
      </PageHero>

      <SectionBlock
        badge="Vorher / Nachher"
        title="Von Mitreden zu <span>Vormachen.</span>"
        subtitle="AfterWork ist für Menschen gebaut, die KI im Job konkret einsetzen wollen."
        accent={tokens.colors.glowNavy}
      >
        <BeforeAfter before={before} after={after} accentColor={tokens.colors.navy} />
      </SectionBlock>

      <SectionBlock
        badge="Produkt"
        title="AfterWork <span>AI Automation</span>"
        subtitle="Zwei Abende pro Woche. Genug Struktur, ohne deinen Job zu sprengen."
        variant="muted"
        accent={tokens.colors.glowNavy}
      >
        <TwoColumn>
          <Panel>
            <CyberCorners $color={tokens.colors.navy} $size={10} />
            <DetailTable items={details} />
          </Panel>
          <VisualSlot
            title="Automation Workflow Map"
            image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_900/v1776469600/ai-hub/website/AI-Academy-Website-Images/target-audience-berufstaetige.png"
            accentColor={tokens.colors.navy}
            prompt="Use case: infographic-diagram. Asset type: subpage visual. Clean automation workflow map for n8n, GPT APIs, human review, and business output; no tiny readable text; STARTPLATZ purple/sky palette; premium editorial style; no logos or watermark."
          />
        </TwoColumn>
      </SectionBlock>

      <SectionBlock
        badge="Curriculum"
        title="Was du nach 8 Wochen <span>zeigen kannst.</span>"
        accent={tokens.colors.glowNavy}
      >
        <ResponsiveGrid $cols={4}>
          {curriculum.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              accentColor={tokens.colors.navy}
              accentBg={tokens.colors.navyBg}
              cornerColor={tokens.colors.navy}
            />
          ))}
        </ResponsiveGrid>
      </SectionBlock>

      <SectionBlock title="Nach Zahlen" variant="white" centered accent={tokens.colors.glowNavy}>
        <StatsRow stats={stats} />
      </SectionBlock>

      <SectionBlock
        badge="FAQ"
        title="Fragen vor dem <span>Feierabend-Kurs.</span>"
        accent={tokens.colors.glowNavy}
      >
        <MiniFAQ items={faq} accentColor={tokens.colors.navy} />
      </SectionBlock>

      <CTABanner
        title="Mach KI zu deinem <span>Arbeitsvorteil.</span>"
        subtitle="Wir klären gemeinsam, ob AfterWork und eine Förderung über QCG für dich passen."
      >
        <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" variant="navy" size="lg" arrow>
          Kostenlos beraten lassen
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
