'use client';

import React from 'react';
import styled from 'styled-components';
import {
  Button,
  CTABanner,
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

const ProductCard = styled.article`
  position: relative;
  padding: ${tokens.spacing['2xl']};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
`;

const Price = styled.span`
  display: inline-block;
  margin-bottom: ${tokens.spacing.md};
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const ProductTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes['2xl']};
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
  margin-bottom: ${tokens.spacing.sm};
`;

const ProductText = styled.p`
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

const ProductActions = styled.div`
  margin-top: ${tokens.spacing.xl};
`;

export default function OneDayPage() {
  const products = [
    { title: 'OneDay Claude Cowork', subline: 'Ab morgen bist du Viele.', price: '590 EUR Early Bird / 790 EUR', href: '/oneday/claude-cowork', cta: 'Details ansehen' },
    { title: 'OneDay Claude Code', subline: 'Road to Thousand Commits.', price: '590 EUR Early Bird / 790 EUR', href: CALENDLY_URL, cta: 'Termin anfragen', external: true },
    { title: 'OneDay KI-Kompetenz', subline: 'EU-Zertifizierung an einem Tag.', price: '890 EUR' },
    { title: 'OneDay KI-Start', subline: 'Der kompakte Einstieg in KI.', price: '250 EUR', href: CALENDLY_URL, cta: 'Platz anfragen', external: true },
    { title: 'OneDay Immobilien', subline: 'KI-Workflows für Makleralltag, Exposés und Akquise.', price: '449 EUR Pilotplatz', href: '/oneday/immobilien', cta: 'Details ansehen' },
  ];

  const stats = [
    { displayValue: '1 Tag', label: '09-17 Uhr, intensiv' },
    { value: 1000, label: 'Absolventen gesamt', suffix: '+' },
    { displayValue: '4,98/5', label: 'Bewertung' },
  ];

  const faq = [
    { q: 'Was lerne ich an einem Tag?', a: 'Du arbeitest an einem klaren Thema und gehst mit einem konkreten Ergebnis raus: Workflow, Tool-Setup, Zertifizierung oder Entscheidungsgrundlage.' },
    { q: 'Für wen sind die OneDay Workshops geeignet?', a: 'Für Einzelpersonen, Professionals und Teams, die schnell Orientierung oder einen produktiven Einstieg in ein konkretes KI-Thema brauchen.' },
    { q: 'Brauche ich Vorkenntnisse?', a: 'Nein. Die Workshops sind praxisnah aufgebaut und starten mit dem nötigen Kontext. Fortgeschrittene Formate werden entsprechend gekennzeichnet.' },
    { q: 'Kann mein Arbeitgeber die Kosten übernehmen?', a: 'Ja. Viele Teilnehmer buchen OneDay über Weiterbildungbudgets. Für Teamtermine erstellen wir ein separates Angebot.' },
    { q: 'Gibt es Folgeprogramme nach dem OneDay?', a: 'Ja. Je nach Ziel passen danach AfterWork, FortyDays oder eine Inhouse-Schulung für dein Team.' },
  ];

  return (
    <SubpageLayout>
      <PageHero
        badge="Tagesformate"
        badgeColor={tokens.colors.primary}
        badgeBg={tokens.colors.primaryLighter}
        title="Ein Tag verändert, <span>was du morgen tust.</span>"
        subtitle="Intensive Tagesworkshops. Praxisnah, mit konkreten Deliverables. Kein Vorwissen nötig."
        breadcrumbs={[{ label: 'OneDay', href: '/oneday', active: true }]}
        accentColor={tokens.colors.primaryLighter}
        image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_900/v1776473243/ai-hub/website/AI-Academy-Website-Images/hero-panel-unternehmen-upscaled.png"
      >
        <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" arrow>
          Platz sichern
        </Button>
        <Button href="/wissens-test" variant="secondary" size="lg">
          Format finden
        </Button>
      </PageHero>

      <SectionBlock
        badge="Produkte"
        title="Fünf Einstiege. <span>Ein Arbeitstag.</span>"
        subtitle="Jeder OneDay hat ein klares Thema und ein Ergebnis, das du direkt weiterverwenden kannst."
        accent={tokens.colors.glow}
      >
        <ResponsiveGrid $cols={4}>
          {products.map((product) => (
            <ProductCard key={product.title}>
              <CyberCorners $color={tokens.colors.primary} $size={8} />
              <Price>{product.price}</Price>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductText>{product.subline}</ProductText>
              {product.href && (
                <ProductActions>
                  <Button
                    href={product.href}
                    target={product.external ? '_blank' : undefined}
                    rel={product.external ? 'noopener noreferrer' : undefined}
                    variant="secondary"
                    size="sm"
                    arrow
                  >
                    {product.cta}
                  </Button>
                </ProductActions>
              )}
            </ProductCard>
          ))}
        </ResponsiveGrid>
      </SectionBlock>

      <SectionBlock
        badge="Visualisierung"
        title="Ein Tag, ein klares <span>Deliverable.</span>"
        variant="muted"
        accent={tokens.colors.glow}
      >
        <TwoColumn>
          <ResponsiveGrid $cols={1}>
            <FeatureCard
              step="09"
              title="Orientieren"
              description="Du verstehst das Thema, die Tools und die wichtigsten Entscheidungen."
              accentColor={tokens.colors.primary}
              accentBg={tokens.colors.primaryLighter}
              cornerColor={tokens.colors.primary}
            />
            <FeatureCard
              step="13"
              title="Bauen"
              description="Du setzt das Gelernte direkt in einem Workflow, Prompt-System oder Prototyp um."
              accentColor={tokens.colors.primary}
              accentBg={tokens.colors.primaryLighter}
              cornerColor={tokens.colors.primary}
            />
            <FeatureCard
              step="17"
              title="Mitnehmen"
              description="Du gehst mit einem konkreten Ergebnis und den nächsten Schritten raus."
              accentColor={tokens.colors.primary}
              accentBg={tokens.colors.primaryLighter}
              cornerColor={tokens.colors.primary}
            />
          </ResponsiveGrid>
          <VisualSlot
            title="OneDay Workshop Board"
            image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_900/v1776469603/ai-hub/website/AI-Academy-Website-Images/target-audience-unternehmen.png"
            accentColor={tokens.colors.primary}
            prompt="Use case: infographic-diagram. Asset type: OneDay workshop visual. Premium workshop board showing one-day progression from idea to workflow deliverable, abstract UI panels, no readable tiny text, purple/mint palette, no logos, no watermark."
          />
        </TwoColumn>
      </SectionBlock>

      <SectionBlock title="Nach Zahlen" centered accent={tokens.colors.glow}>
        <StatsRow stats={stats} />
      </SectionBlock>

      <SectionBlock badge="FAQ" title="Fragen zu <span>OneDay.</span>" accent={tokens.colors.glow}>
        <MiniFAQ items={faq} accentColor={tokens.colors.primary} />
      </SectionBlock>

      <CTABanner
        title="Sichert euch den <span>nächsten Termin.</span>"
        subtitle="Wir helfen dir, den passenden OneDay für dich oder dein Team auszuwählen."
      >
        <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" arrow>
          Platz sichern
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
