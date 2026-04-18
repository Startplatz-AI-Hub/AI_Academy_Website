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
  { q: 'Was ist ein Bildungsgutschein und wie bekomme ich ihn?', a: 'Ein Bildungsgutschein ist eine Förderung der Agentur für Arbeit, die 100 % der Kosten für eine zertifizierte Weiterbildung übernimmt. Du erhältst ihn, wenn du arbeitssuchend gemeldet bist oder dein Arbeitsplatz gefährdet ist. Sprich einfach mit deinem Arbeitsvermittler – wir unterstützen dich gerne beim Antrag.' },
  { q: 'Welche Förderungen gibt es für Berufstätige?', a: 'Für Berufstätige gibt es das Qualifizierungschancengesetz (QCG), das bis zu 100 % der Weiterbildungskosten übernimmt. Auch Programme wie WeGebAU oder Bildungsurlaub können genutzt werden. Wir beraten dich individuell zu deinen Möglichkeiten.' },
  { q: 'Wie lange dauern die Bootcamps?', a: 'Unsere Vollzeit-Bootcamps dauern in der Regel 8–12 Wochen. Berufsbegleitende Programme laufen über 4–6 Monate mit flexiblen Abend- und Wochenendterminen. Nach Abschluss erhältst du ein anerkanntes Zertifikat.' },
  { q: 'Brauche ich Vorkenntnisse in Programmierung?', a: 'Für die meisten unserer Programme brauchst du keine Programmierkenntnisse. Wir bieten sowohl Kurse für absolute Anfänger als auch für Fortgeschrittene an. In einem kostenlosen Beratungsgespräch finden wir das passende Programm für dich.' },
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
  max-height: ${({ $open }) => ($open ? '300px' : '0')};
  transition: max-height 0.4s ease;
`;

const PanelInner = styled.div`
  padding: 0 ${tokens.spacing.xl} ${tokens.spacing.lg};
  font-size: ${tokens.fontSizes.base};
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <PlanetSection
      solid
      id="faq"
      badge="Häufige Fragen"
      title="Alles was du wissen <span>musst</span>"
      subtitle="Antworten auf die wichtigsten Fragen zu Förderung, Programmen und mehr."
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
