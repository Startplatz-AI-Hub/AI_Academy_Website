'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import SubpageLayout from '../../components/SubpageLayout';
import { PageHero, SectionBlock, Button } from '../../components/ui';
import { tokens, media } from '../../styles/tokens';
import { clipBR, CHAMFER } from '../../styles/cyberpunk';

/* ─────────────────────────────────────────────
   PRESSE & MEDIEN – Logos, Brand Guide, Boilerplate
   ───────────────────────────────────────────── */

const BASE = '/logo-assets';

const LOGO_SETS = [
  {
    title: 'Logo Color (heller Hintergrund)',
    description: 'Vollfarbiges Logo mit lila Akzent — Standard-Variante.',
    variants: [
      { label: '400px', url: `${BASE}/png/logo-full-color-on-light-400w.png`, bg: '#F5F5F5' },
      { label: '800px', url: `${BASE}/png/logo-full-color-on-light-800w.png`, bg: '#F5F5F5' },
      { label: 'Master', url: `${BASE}/png/logo-full-color-on-light-master.png`, bg: '#F5F5F5' },
    ],
  },
  {
    title: 'Logo Color (dunkler Hintergrund)',
    description: 'Vollfarbiges Logo optimiert für dunkle Hintergründe.',
    variants: [
      { label: '400px', url: `${BASE}/png/logo-full-color-on-dark-400w.png`, bg: '#0A0A0A' },
      { label: '800px', url: `${BASE}/png/logo-full-color-on-dark-800w.png`, bg: '#0A0A0A' },
      { label: 'Master', url: `${BASE}/png/logo-full-color-on-dark-master.png`, bg: '#0A0A0A' },
    ],
  },
  {
    title: 'Logo Schwarz (monochrom)',
    description: 'Einfarbig schwarz — für minimale oder monochrome Layouts.',
    variants: [
      { label: '400px', url: `${BASE}/png/logo-full-black-400w.png`, bg: '#F5F5F5' },
      { label: '800px', url: `${BASE}/png/logo-full-black-800w.png`, bg: '#F5F5F5' },
      { label: 'Master', url: `${BASE}/png/logo-full-black-master.png`, bg: '#F5F5F5' },
    ],
  },
  {
    title: 'Logo Weiß (monochrom)',
    description: 'Einfarbig weiß — für Platzierung auf dunklen oder farbigen Flächen.',
    variants: [
      { label: '400px', url: `${BASE}/png/logo-full-white-400w.png`, bg: '#0A0A0A' },
      { label: '800px', url: `${BASE}/png/logo-full-white-800w.png`, bg: '#0A0A0A' },
      { label: 'Master', url: `${BASE}/png/logo-full-white-master.png`, bg: '#0A0A0A' },
    ],
  },
  {
    title: 'Brand Icon',
    description: 'Kompaktes Symbol ohne Text — für Favicons, Social Media und kleine Formate.',
    variants: [
      { label: 'Purple', url: `${BASE}/png/icon-purple-512w.png`, bg: '#F5F5F5' },
      { label: 'Schwarz', url: `${BASE}/png/icon-black-512w.png`, bg: '#F5F5F5' },
      { label: 'Weiß', url: `${BASE}/png/icon-white-512w.png`, bg: '#0A0A0A' },
    ],
  },
];

const BRAND_COLORS = [
  { name: 'Primary Purple', hex: '#7C3AED', text: '#fff' },
  { name: 'Purple Dark', hex: '#5B21B6', text: '#fff' },
  { name: 'Purple Light', hex: '#A78BFA', text: '#111' },
  { name: 'Accent Teal', hex: '#14B8A6', text: '#fff' },
  { name: 'Accent Sky', hex: '#5CB5F2', text: '#111' },
  { name: 'Accent Coral', hex: '#FF9947', text: '#111' },
  { name: 'Dark', hex: '#0A0A0A', text: '#fff' },
  { name: 'Page BG', hex: '#F0ECF5', text: '#111' },
];

const BRAND_FONTS = [
  { name: 'Aileron', use: 'Headlines & Display (Logo-Schrift)', weights: '600 – 900' },
  { name: 'Inter', use: 'Fließtext & UI', weights: '400 – 600' },
  { name: 'JetBrains Mono', use: 'Code & Daten', weights: '400 – 500' },
];

/* ── Styles ────────────────────────────────── */

const SetTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes['2xl']};
  margin-bottom: 0.25rem;
`;

const SetDesc = styled.p`
  color: ${tokens.colors.textMuted};
  font-size: ${tokens.fontSizes.sm};
  margin-bottom: 1.5rem;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  ${media.md} { grid-template-columns: repeat(2, 1fr); }
  ${media.lg} { grid-template-columns: repeat(3, 1fr); }
`;

const LogoCard = styled.div`
  background: ${({ $bg }) => $bg};
  ${clipBR(CHAMFER.md)}
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid ${tokens.colors.glassBorder};
  transition: box-shadow ${tokens.transitions.base};
  &:hover { box-shadow: ${tokens.shadows.cardHover}; }
`;

const LogoPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  min-height: 160px;
  img {
    max-width: 220px;
    max-height: 80px;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

const LogoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  border-top: 1px solid ${tokens.colors.glassBorder};
`;

const VariantLabel = styled.span`
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.text};
`;

const SmallBtn = styled.button`
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.primary};
  padding: 0.35rem 0.75rem;
  border: 1px solid ${tokens.colors.primary};
  ${clipBR(CHAMFER.xs)}
  background: transparent;
  cursor: pointer;
  transition: all ${tokens.transitions.fast};
  &:hover { background: ${tokens.colors.primary}; color: #fff; }
`;

const SmallLink = styled.a`
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.primary};
  text-decoration: none;
  padding: 0.35rem 0.75rem;
  border: 1px solid ${tokens.colors.primary};
  ${clipBR(CHAMFER.xs)}
  transition: all ${tokens.transitions.fast};
  &:hover { background: ${tokens.colors.primary}; color: #fff; }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  ${media.md} { grid-template-columns: repeat(4, 1fr); }
`;

const ColorSwatch = styled.div`
  background: ${({ $hex }) => $hex};
  color: ${({ $text }) => $text};
  ${clipBR(CHAMFER.sm)}
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border: 1px solid rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform ${tokens.transitions.fast};
  &:hover { transform: translateY(-2px); }
`;

const SwatchName = styled.span`
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.semi};
`;

const SwatchHex = styled.code`
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  opacity: 0.8;
`;

const FontTable = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  ${media.md} { grid-template-columns: repeat(3, 1fr); }
`;

const FontCard = styled.div`
  background: ${tokens.colors.surface};
  ${clipBR(CHAMFER.sm)}
  border: 1px solid ${tokens.colors.glassBorder};
  padding: 1.5rem;
`;

const FontPreview = styled.p`
  font-family: ${({ $font }) => `'${$font}', sans-serif`};
  font-size: ${tokens.fontSizes['2xl']};
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${tokens.colors.text};
`;

const FontMeta = styled.div`
  font-size: ${tokens.fontSizes.sm};
  color: ${tokens.colors.textMuted};
  line-height: 1.6;
`;

const Boilerplate = styled.div`
  background: ${tokens.colors.surface};
  ${clipBR(CHAMFER.md)}
  border: 1px solid ${tokens.colors.glassBorder};
  padding: 2rem;
  position: relative;
`;

const BoilerText = styled.p`
  font-size: ${tokens.fontSizes.base};
  line-height: ${tokens.lineHeights.relaxed};
  color: ${tokens.colors.textSoft};
`;

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  ${media.md} { grid-template-columns: 1fr 1fr; }
`;

const GuideCard = styled.div`
  background: ${tokens.colors.surface};
  ${clipBR(CHAMFER.sm)}
  border: 1px solid ${tokens.colors.glassBorder};
  padding: 1.5rem;
`;

const GuideTitle = styled.h4`
  font-family: ${tokens.fonts.display};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.lg};
  margin-bottom: 0.75rem;
  color: ${tokens.colors.primary};
`;

const GuideText = styled.p`
  font-size: ${tokens.fontSizes.sm};
  color: ${tokens.colors.textMuted};
  line-height: 1.65;
`;

/* ── Page ──────────────────────────────────── */

const BOILERPLATE_DE = `Die STARTPLATZ AI Academy ist das führende KI-Weiterbildungszentrum in Nordrhein-Westfalen mit Standorten in Köln und Düsseldorf. Als Teil des STARTPLATZ-Ökosystems bieten wir AZAV-zertifizierte, 100 % förderfähige Bootcamps und Kurse für Arbeitssuchende, Berufstätige und Unternehmen an. Unsere praxisnahen Programme – vom KI-Manager-Zertifikat bis zum intensiven AI Bootcamp – verbinden technisches Know-how mit strategischer Kompetenz und bereiten Teilnehmende auf die Arbeitswelt der Zukunft vor.`;

const BOILERPLATE_EN = `STARTPLATZ AI Academy is the leading AI education center in North Rhine-Westphalia, Germany, with campuses in Cologne and Düsseldorf. Part of the STARTPLATZ ecosystem, we offer government-certified, fully funded bootcamps and courses for job seekers, professionals, and enterprises. Our hands-on programs — from AI Manager certification to intensive AI Bootcamps — combine technical expertise with strategic competence, preparing participants for the future of work.`;

export default function PressePage() {
  const [copied, setCopied] = useState(null);

  const copy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <SubpageLayout>
      <PageHero
        tagline="Presse & Medien"
        title="Brand Assets & Medienkit"
        description="Alle Logos, Farben und Informationen für Berichterstattung, Kooperationen und Veröffentlichungen über die STARTPLATZ AI Academy."
      />

      {/* ── Boilerplate ─────────────────────── */}
      <SectionBlock title="Über die STARTPLATZ AI Academy" variant="white">
        <Boilerplate>
          <BoilerText>{BOILERPLATE_DE}</BoilerText>
          <br />
          <BoilerText style={{ fontStyle: 'italic', opacity: 0.7 }}>{BOILERPLATE_EN}</BoilerText>
          <div style={{ marginTop: '1.25rem' }}>
            <SmallBtn onClick={() => copy(BOILERPLATE_DE + '\n\n' + BOILERPLATE_EN, 'boiler')}>
              {copied === 'boiler' ? '✓ Kopiert' : 'Text kopieren'}
            </SmallBtn>
          </div>
        </Boilerplate>
      </SectionBlock>

      {/* ── Logos ────────────────────────────── */}
      <SectionBlock title="Logos" subtitle='Klicke auf "Link kopieren" um die URL zu erhalten, oder lade das Logo direkt herunter.' variant="light">
        {LOGO_SETS.map((set) => (
          <div key={set.title} style={{ marginBottom: '3rem' }}>
            <SetTitle>{set.title}</SetTitle>
            <SetDesc>{set.description}</SetDesc>
            <LogoGrid>
              {set.variants.map((v) => {
                const id = `${set.title}-${v.label}`;
                return (
                  <LogoCard key={id} $bg={v.bg}>
                    <LogoPreview>
                      <img src={v.url} alt={`${set.title} – ${v.label}`} loading="lazy" />
                    </LogoPreview>
                    <LogoFooter>
                      <VariantLabel>{v.label}</VariantLabel>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <SmallBtn onClick={() => copy(v.url, id)}>
                          {copied === id ? '✓ Kopiert' : 'Link kopieren'}
                        </SmallBtn>
                        <SmallLink href={v.url} download target="_blank" rel="noopener noreferrer">
                          Download
                        </SmallLink>
                      </div>
                    </LogoFooter>
                  </LogoCard>
                );
              })}
            </LogoGrid>
          </div>
        ))}
      </SectionBlock>

      {/* ── Brand Colors ─────────────────────── */}
      <SectionBlock title="Markenfarben" variant="white">
        <ColorGrid>
          {BRAND_COLORS.map((c) => (
            <ColorSwatch
              key={c.hex}
              $hex={c.hex}
              $text={c.text}
              onClick={() => copy(c.hex, c.hex)}
              title="Klicke um den Hex-Code zu kopieren"
            >
              <SwatchName>{c.name}</SwatchName>
              <SwatchHex>{copied === c.hex ? '✓ Kopiert' : c.hex}</SwatchHex>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </SectionBlock>

      {/* ── Typography ────────────────────────── */}
      <SectionBlock title="Typografie" variant="light">
        <FontTable>
          {BRAND_FONTS.map((f) => (
            <FontCard key={f.name}>
              <FontPreview $font={f.name}>Aa Bb Cc 123</FontPreview>
              <FontMeta>
                <strong>{f.name}</strong><br />
                {f.use}<br />
                Gewichte: {f.weights}
              </FontMeta>
            </FontCard>
          ))}
        </FontTable>
      </SectionBlock>

      {/* ── Usage Guidelines ──────────────────── */}
      <SectionBlock title="Nutzungsrichtlinien" variant="white">
        <GuideGrid>
          <GuideCard>
            <GuideTitle>Mindestabstand</GuideTitle>
            <GuideText>
              Halte um das Logo herum einen Freiraum von mindestens der Höhe des Icon-Elements ein.
              Das Logo darf nicht von anderen Elementen bedrängt werden.
            </GuideText>
          </GuideCard>
          <GuideCard>
            <GuideTitle>Hintergründe</GuideTitle>
            <GuideText>
              Verwende die Standard-Variante auf hellen Hintergründen und die weiße Variante
              auf dunklen Hintergründen. Vermeide kontrastarme Kombinationen.
            </GuideText>
          </GuideCard>
          <GuideCard>
            <GuideTitle>Nicht erlaubt</GuideTitle>
            <GuideText>
              Das Logo darf nicht gestreckt, gedreht, mit Schatten versehen oder farblich verändert werden.
              Verwende ausschließlich die hier bereitgestellten Varianten.
            </GuideText>
          </GuideCard>
          <GuideCard>
            <GuideTitle>Co-Branding</GuideTitle>
            <GuideText>
              Bei gemeinsamen Veröffentlichungen kontaktiere uns vorab unter academy@startplatz.de.
              Wir stellen gerne eine abgestimmte Version bereit.
            </GuideText>
          </GuideCard>
        </GuideGrid>
      </SectionBlock>

      {/* ── Contact ───────────────────────────── */}
      <SectionBlock variant="light">
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <SetTitle style={{ marginBottom: '0.75rem' }}>Presseanfragen</SetTitle>
          <SetDesc style={{ maxWidth: '500px', margin: '0 auto 1.5rem' }}>
            Für Interviews, Bildmaterial in höherer Auflösung oder weitere Informationen
            stehen wir gerne zur Verfügung.
          </SetDesc>
          <Button href="mailto:academy@startplatz.de" $variant="primary" as="a">
            academy@startplatz.de kontaktieren
          </Button>
        </div>
      </SectionBlock>
    </SubpageLayout>
  );
}
