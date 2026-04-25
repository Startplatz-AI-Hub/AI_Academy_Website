'use client';

// React is auto-imported in Next.js but we keep it for clarity
import React, { useState } from 'react';
import styled from 'styled-components';
import { tokens, media } from '../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../styles/cyberpunk';
import PlanetSection from './PlanetSection';

/* ─────────────────────────────────────────────
   FAQ – Cyberpunk accordion
   Chamfered items with corner accents
   Background: BG-CTA image for atmosphere
   ───────────────────────────────────────────── */

const FAQ_BG = 'https://res.cloudinary.com/startplatz/image/upload/v1767662307/ai-hub/website/website_stock_images/BG-CTA.png';

const QUESTIONS = [
  { q: 'Was ist die STARTPLATZ AI Academy?', a: 'Die AI Academy ist das Weiterbildungszentrum von STARTPLATZ — Deutschlands ältestem Startup-Inkubator mit über 15 Jahren Erfahrung. Wir bieten drei Format-Linien: OneDay (Tagesworkshops), FortyDays (8 Wochen Vollzeit) und AfterWork (berufsbegleitend abends). Für Arbeitssuchende, Berufstätige und Unternehmen.' },
  { q: 'Kann ich mit Bildungsgutschein teilnehmen?', a: 'Ja. Der FortyDays KI-Manager:in ist AZAV-zertifiziert und wird bis zu 100% von der Agentur für Arbeit gefördert. 8 Wochen Vollzeit, Mo-Fr 9-16 Uhr, komplett digital. Sprich mit deinem Arbeitsvermittler oder buche eine kostenlose Beratung bei uns.' },
  { q: 'Brauche ich Programmierkenntnisse?', a: 'Nein. Unsere Programme sind für Menschen ohne technischen Hintergrund konzipiert. Du arbeitest mit Tools wie n8n, ChatGPT und APIs — kein Code nötig. Über 1.000 Absolventen aus allen Branchen haben das bereits geschafft.' },
  { q: 'Was unterscheidet euch von anderen KI-Kursen?', a: 'Ein anerkanntes Zertifikat (Cert-IT, EU-weit gültig). Echte Projekte ab Woche 1 statt nur Theorie. Und ein Netzwerk aus 10.000+ Teilnehmern und 100+ geschulten Unternehmen. Unsere Bewertung: 4,98 von 5 Sternen.' },
  { q: 'Gibt es Angebote für Unternehmen?', a: 'Vom eintägigen Innovation Day über Inhouse-Schulungen (1-5 Tage) bis zur langfristigen AI-Private Academy (3-12 Monate). Unser Kompetenzrahmen deckt drei Bereiche ab: technologische Grundlagen, Anwendung im Unternehmenskontext sowie strategische und ethische Einbettung. 100+ Unternehmen vertrauen uns bereits.' },
];

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
  max-width: 800px;
`;

const Item = styled.div`
  position: relative;
  background: ${tokens.colors.surface};
  border: 1px solid ${({ $open }) => $open ? 'rgba(99,102,241,0.2)' : tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
  overflow: hidden;
  transition: border-color ${tokens.transitions.base}, filter ${tokens.transitions.base};
  ${({ $open }) => $open && `filter: drop-shadow(0 4px 12px rgba(0,0,0,0.06));`}
`;

const Trigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${tokens.spacing.lg} ${tokens.spacing.xl};
  text-align: left;
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.base};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.text};
  background: none;
  border: none;
  cursor: pointer;
  transition: color ${tokens.transitions.fast};
  &:hover { color: ${tokens.colors.primary}; }
  ${media.md} { font-size: ${tokens.fontSizes.lg}; }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  ${clipBR(CHAMFER.xs)}
  background: ${({ $open }) => $open ? tokens.colors.primary : tokens.colors.primaryLighter};
  color: ${({ $open }) => $open ? '#fff' : tokens.colors.primary};
  font-size: ${tokens.fontSizes.lg};
  font-weight: ${tokens.fontWeights.medium};
  flex-shrink: 0;
  transition: all ${tokens.transitions.base};
  transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
`;

const Panel = styled.div`
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '520px' : '0')};
  transition: max-height 0.4s ease;
`;

const PanelInner = styled.div`
  padding: 0 ${tokens.spacing.xl} ${tokens.spacing.lg};
  font-size: ${tokens.fontSizes.base};
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <PlanetSection
      solid
      id="faq"
      badge="Häufige Fragen"
      title="Was du wissen <span>solltest</span>"
      subtitle="Kurz, konkret und ohne Fachchinesisch."
      bgImage={FAQ_BG}
      bgImageOpacity={0.18}
    >
      <List role="list">
        {QUESTIONS.map((item, i) => {
          const open = openIdx === i;
          return (
            <Item key={i} $open={open} role="listitem">
              <CyberCorners $color={open ? tokens.colors.primary : tokens.colors.mint} $size={8} />
              <Trigger onClick={() => toggle(i)} aria-expanded={open} aria-controls={`faq-p-${i}`} id={`faq-t-${i}`}>
                {item.q}
                <Icon $open={open} aria-hidden="true">+</Icon>
              </Trigger>
              <Panel $open={open} id={`faq-p-${i}`} role="region" aria-labelledby={`faq-t-${i}`}>
                <PanelInner>{item.a}</PanelInner>
              </Panel>
            </Item>
          );
        })}
      </List>
    </PlanetSection>
  );
}
