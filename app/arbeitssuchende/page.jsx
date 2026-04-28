'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
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
import { PRODUCT_CATALOG_URL } from '../../lib/productCatalog';

const Panel = styled.div`
  position: relative;
  padding: ${tokens.spacing['2xl']};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
`;

const quoteMarquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const QuoteViewport = styled.div`
  overflow: hidden;
  margin-top: ${tokens.spacing.lg};
  padding: ${tokens.spacing.sm} 0;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);

  &:hover div,
  &:focus-within div {
    animation-play-state: paused;
  }
`;

const QuoteTrack = styled.div`
  display: flex;
  gap: ${tokens.spacing.lg};
  width: max-content;
  animation: ${quoteMarquee} 42s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const QuoteCard = styled.figure`
  position: relative;
  flex: 0 0 clamp(260px, 31vw, 420px);
  min-height: 148px;
  margin: 0;
  padding: ${tokens.spacing.lg};
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(20, 184, 166, 0.18);
  ${clipBR(CHAMFER.md)}
  box-shadow: ${tokens.shadows.sm};
`;

const QuoteMark = styled.span`
  display: block;
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes['2xl']};
  font-weight: ${tokens.fontWeights.black};
  color: ${tokens.colors.mint};
  line-height: 1;
  margin-bottom: ${tokens.spacing.sm};
`;

const QuoteText = styled.blockquote`
  margin: 0;
  color: ${tokens.colors.textSoft};
  font-size: ${tokens.fontSizes.lg};
  line-height: ${tokens.lineHeights.snug};
`;

const QuoteSource = styled.figcaption`
  margin-top: ${tokens.spacing.md};
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  color: ${tokens.colors.textDim};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export default function ArbeitssuchendePage() {
  const before = [
    'Bewerbungen führen nirgendwohin.',
    'KI klingt kompliziert und weit weg.',
    'Du fragst dich, ob du noch relevant bist.',
  ];

  const after = [
    'Du verstehst KI und kannst es belegen.',
    'Du setzt KI-Tools sicher ein - täglich.',
    'Du hast ein Cert-IT Zertifikat und echte Projekte.',
  ];

  const details = [
    { label: 'Format', value: '8 Wochen Vollzeit (40 Unterrichtstage)' },
    { label: 'Rhythmus', value: 'Mo-Fr, 9-16 Uhr, digital' },
    { label: 'Teilnehmer', value: 'Max. 20 pro Batch' },
    { label: 'Zertifikat', value: 'Cert-IT (DIN EN ISO/IEC 17024)' },
    { label: 'Förderung', value: '100% Bildungsgutschein (AZAV)' },
    { label: 'Bewertung', value: '4,98/5 (290+ Bewertungen)' },
  ];

  const curriculum = [
    {
      step: '1-2',
      title: 'KI-Grundlagen',
      description: 'Prompt Engineering, ChatGPT & Co. Du bekommst Orientierung, Sprache und Sicherheit.',
    },
    {
      step: '3-4',
      title: 'Automatisierung',
      description: 'n8n, GPT-APIs und Agent-Systeme. Du baust erste Workflows statt nur zuzuschauen.',
    },
    {
      step: '5-6',
      title: 'Strategie & Verantwortung',
      description: 'KI-Strategie, EU AI Act, Ethik und Datenschutz für echte Anwendung im Job.',
    },
    {
      step: '7-8',
      title: 'Praxisprojekt & Prüfung',
      description: 'Du schließt mit einem eigenen Projekt und der Zertifizierungsprüfung ab.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Kostenlose Beratung',
      description: 'Wir klären Ziele, Voraussetzungen und ob FortyDays zu deiner Situation passt.',
    },
    {
      step: '2',
      title: 'Bildungsgutschein beantragen',
      description: 'Du bekommst die Kursdetails und Unterstützung für das Gespräch bei der Agentur.',
    },
    {
      step: '3',
      title: 'FortyDays starten',
      description: '8 Wochen intensive KI-Ausbildung, digital, begleitet und mit klarer Struktur.',
    },
  ];

  const stats = [
    { value: 1000, label: 'Absolventen', suffix: '+' },
    { displayValue: '4,98/5', label: 'Bewertung' },
    { value: 100, label: 'Förderquote', suffix: '%' },
    { displayValue: '60.000', label: 'Offene KI-Stellen in Deutschland' },
  ];

  const testimonials = [
    { quote: 'Ich habe wahnsinnig viel gelernt.', source: 'Tobias, FortyDays Absolvent' },
    { quote: 'Ein Must Know für uns alle.', source: 'Olga, Absolventin' },
    { quote: 'Mehr gelernt als je zuvor.', source: 'Oskar, Absolvent' },
    { quote: 'Ich habe KI endlich verstanden und direkt angewendet.', source: 'Catharina, Kursfeedback' },
    { quote: 'Die Mischung aus Praxis und Struktur war genau richtig.', source: 'Alex, Kursfeedback' },
    { quote: 'Das Zertifikat gibt mir Rückenwind in Bewerbungen.', source: 'Aline, Kursfeedback' },
    { quote: 'Ich bin mit einem echten Projekt aus dem Kurs gegangen.', source: 'Peter, Kursfeedback' },
    { quote: 'Vorher Respekt vor Tools, jetzt nutze ich sie täglich.', source: 'Birgit, Kursfeedback' },
  ];

  const faq = [
    { q: 'Wie bekomme ich den Bildungsgutschein?', a: 'Du sprichst mit deiner Agentur für Arbeit oder deinem Jobcenter. Wir bereiten dich mit Kursdaten, Zielen und Argumenten auf das Gespräch vor.' },
    { q: 'Wie sieht ein typischer Tag im FortyDays aus?', a: 'Mo-Fr von 9-16 Uhr: Live-Unterricht, Übungen, Projektarbeit und Feedback. Der Kurs ist digital, aber eng begleitet.' },
    { q: 'Was ist die Cert-IT Zertifizierung?', a: 'Cert-IT zertifiziert Personen nach DIN EN ISO/IEC 17024. Das Zertifikat ist EU-weit anschlussfähig und belegt deine KI-Kompetenz.' },
    { q: 'Brauche ich einen technischen Hintergrund?', a: 'Nein. Du lernst mit Tools wie ChatGPT, n8n und APIs. Programmierkenntnisse helfen, sind aber keine Voraussetzung.' },
    { q: 'Was passiert nach den 8 Wochen?', a: 'Du gehst mit Zertifikat, Praxisprojekt und klarer Positionierung in Bewerbungen. Zusätzlich bleibst du im STARTPLATZ Netzwerk.' },
  ];

  return (
    <SubpageLayout>
      <PageHero
        badge="100% Gefördert · AZAV"
        badgeColor={tokens.colors.mint}
        badgeBg={tokens.colors.mintBg}
        title="In 8 Wochen von überfordert zu <span>selbstbewusst.</span>"
        subtitle="FortyDays KI-Manager:in. Vollzeit, digital, komplett kostenfrei mit Bildungsgutschein."
        breadcrumbs={[{ label: 'Arbeitssuchende', href: '/arbeitssuchende', active: true }]}
        accentColor={tokens.colors.mintBg}
        image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_900/v1776469601/ai-hub/website/AI-Academy-Website-Images/target-audience-arbeitssuchende.png"
      >
        <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" variant="mint" size="lg" arrow>
          Kostenlos beraten lassen
        </Button>
        <Button href="/wissens-test" variant="secondary" size="lg">
          Wissens-Test machen
        </Button>
      </PageHero>

      <SectionBlock
        badge="Vorher / Nachher"
        title="Aus Unsicherheit wird <span>Nachweis.</span>"
        subtitle="Der Kurs ist kein Motivationsspruch. Er gibt dir Struktur, Projekte und ein anerkanntes Zertifikat."
        accent={tokens.colors.glowMint}
      >
        <BeforeAfter before={before} after={after} accentColor={tokens.colors.mint} />
      </SectionBlock>

      <SectionBlock
        badge="Produkt"
        title="FortyDays <span>KI-Manager:in</span>"
        subtitle="Ein klares Vollzeitformat für deinen Neustart in KI."
        variant="muted"
        accent={tokens.colors.glowMint}
      >
        <TwoColumn>
          <Panel>
            <CyberCorners $color={tokens.colors.mint} $size={10} />
            <DetailTable items={details} />
          </Panel>
          <VisualSlot
            title="FortyDays Lernreise"
            image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_900/v1776469601/ai-hub/website/AI-Academy-Website-Images/target-audience-arbeitssuchende.png"
            accentColor={tokens.colors.mint}
            prompt="Use case: infographic-diagram. Asset type: subpage visual. Structured 8-week AI learning roadmap, no readable small text, premium STARTPLATZ purple/teal palette, editorial, clean, no logos, no watermark."
          />
        </TwoColumn>
      </SectionBlock>

      <SectionBlock
        badge="Curriculum"
        title="8 Wochen, klar <span>geführt.</span>"
        subtitle="Jede Phase baut auf der vorherigen auf und endet in praktischer Anwendung."
        accent={tokens.colors.glowMint}
      >
        <ResponsiveGrid $cols={4}>
          {curriculum.map((item) => (
            <FeatureCard
              key={item.title}
              step={item.step}
              title={item.title}
              description={item.description}
              accentColor={tokens.colors.mint}
              accentBg={tokens.colors.mintBg}
              cornerColor={tokens.colors.mint}
            />
          ))}
        </ResponsiveGrid>
      </SectionBlock>

      <SectionBlock
        badge="Förderungsprozess"
        title="So kommst du zum <span>Bildungsgutschein.</span>"
        variant="white"
        accent={tokens.colors.glowMint}
      >
        <ResponsiveGrid $cols={3}>
          {process.map((item) => (
            <FeatureCard
              key={item.title}
              step={item.step}
              title={item.title}
              description={item.description}
              accentColor={tokens.colors.mint}
              accentBg={tokens.colors.mintBg}
              cornerColor={tokens.colors.mint}
            />
          ))}
        </ResponsiveGrid>
      </SectionBlock>

      <SectionBlock title="Nach Zahlen" centered accent={tokens.colors.glowMint}>
        <StatsRow stats={stats} />
      </SectionBlock>

      <SectionBlock
        badge="Absolventen"
        title="Echte Stimmen aus dem <span>Kursalltag.</span>"
        subtitle="Kurze Stimmen aus dem Kurs statt großer Karten: mehr Eindruck, weniger Leerlauf."
        variant="muted"
        accent={tokens.colors.glowMint}
      >
        <QuoteViewport aria-label="Stimmen aus dem FortyDays Kurs">
          <QuoteTrack role="list">
            {[...testimonials, ...testimonials].map((item, index) => (
              <QuoteCard key={`${item.source}-${index}`} role="listitem">
                <CyberCorners $color={tokens.colors.mint} $size={7} />
                <QuoteMark aria-hidden="true">"</QuoteMark>
                <QuoteText>{item.quote}</QuoteText>
                <QuoteSource>{item.source}</QuoteSource>
              </QuoteCard>
            ))}
          </QuoteTrack>
        </QuoteViewport>
      </SectionBlock>

      <SectionBlock
        badge="FAQ"
        title="Fragen vor dem <span>Start.</span>"
        accent={tokens.colors.glowMint}
      >
        <MiniFAQ items={faq} accentColor={tokens.colors.mint} />
      </SectionBlock>

      <CTABanner
        title="Bereit für deinen <span>Neustart?</span>"
        subtitle="Wir prüfen gemeinsam, ob FortyDays und der Bildungsgutschein zu deiner Situation passen."
      >
        <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" variant="mint" size="lg" arrow>
          Kostenlos beraten lassen
        </Button>
        <Button href={PRODUCT_CATALOG_URL} variant="secondary" size="lg">
          Produktkatalog ansehen
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
