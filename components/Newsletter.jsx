'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { tokens, media } from '../styles/tokens';
import { clipBR, clipTLBR, CHAMFER, CyberCorners } from '../styles/cyberpunk';
import PlanetSection from './PlanetSection';

/* ── Inline section header (inside grid, not above) ── */

const SectionBadge = styled.span`
  display: inline-block;
  padding: 5px 14px;
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.medium};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.colors.primary};
  background: ${tokens.colors.primaryLighter};
  border: 1px solid rgba(99,102,241,0.12);
  ${clipBR(CHAMFER.xs)}
  margin-bottom: ${tokens.spacing.md};
`;

const SectionTitle = styled.h2`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['3xl']}, 4vw, ${tokens.fontSizes['5xl']});
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
  line-height: ${tokens.lineHeights.snug};
  margin-bottom: ${tokens.spacing.md};

  span {
    background: linear-gradient(135deg, ${tokens.colors.primary}, ${tokens.colors.primaryMuted});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionSubtitle = styled.p`
  font-size: clamp(${tokens.fontSizes.base}, 1.5vw, ${tokens.fontSizes.lg});
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
  max-width: 520px;
  margin-bottom: ${tokens.spacing.xl};
`;

/* ─────────────────────────────────────────────
   NEWSLETTER – Cyberpunk style (refined)
   ───────────────────────────────────────────── */

const BENEFITS = [
  'Wöchentliche KI-Insights & Tutorials',
  'Exklusive Event-Einladungen',
  'Kostenlose Ressourcen & Templates',
  'Karriere-Tipps von Experten',
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing['2xl']};
  align-items: start;

  ${media.lg} {
    grid-template-columns: 1fr 1.1fr;
    gap: ${tokens.spacing['3xl']};
    align-items: start;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xl};
`;

const BenefitList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
`;

/* Check icon instead of empty box */
const Benefit = styled.li`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.md};
  font-size: ${tokens.fontSizes.base};
  color: ${tokens.colors.textSoft};
  line-height: ${tokens.lineHeights.normal};
`;

const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  background: ${tokens.colors.mintBg};
  border: 1.5px solid ${tokens.colors.mint};
  ${clipBR(4)}

  /* Checkmark */
  &::after {
    content: '';
    display: block;
    width: 6px;
    height: 10px;
    border-right: 2px solid ${tokens.colors.mint};
    border-bottom: 2px solid ${tokens.colors.mint};
    transform: rotate(45deg) translateY(-1px);
  }
`;

const SubNote = styled.p`
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  color: ${tokens.colors.textDim};
  letter-spacing: 0.05em;

  strong {
    color: ${tokens.colors.mint};
    font-weight: ${tokens.fontWeights.semi};
  }
`;

const FormCard = styled.div`
  position: relative;
  padding: ${tokens.spacing['2xl']};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipTLBR(CHAMFER.lg)}
  box-shadow: ${tokens.shadows.card};
`;

const FormHeading = styled.p`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.lg};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.text};
  margin-bottom: ${tokens.spacing.lg};
`;

const FormGroup = styled.div`
  margin-bottom: ${tokens.spacing.lg};
`;

const Label = styled.label`
  display: block;
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.medium};
  color: ${tokens.colors.textSoft};
  margin-bottom: ${tokens.spacing.sm};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-family: ${tokens.fonts.body};
  font-size: ${tokens.fontSizes.base};
  color: ${tokens.colors.text};
  background: ${tokens.colors.surfaceAlt};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.xs)}
  outline: none;
  transition: border-color ${tokens.transitions.fast}, box-shadow ${tokens.transitions.fast};

  &::placeholder { color: ${tokens.colors.textDim}; }

  &:focus {
    border-color: ${tokens.colors.primary};
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const SubmitWrap = styled.div`
  position: relative;
  width: 100%;
`;

const SubmitBtn = styled.button`
  position: relative;
  width: 100%;
  padding: 14px;
  font-family: ${tokens.fonts.body};
  font-size: ${tokens.fontSizes.base};
  font-weight: ${tokens.fontWeights.semi};
  color: #fff;
  background: ${tokens.colors.primary};
  border: none;
  ${clipBR(CHAMFER.sm)}
  text-transform: uppercase;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: background ${tokens.transitions.fast}, transform ${tokens.transitions.fast};
  z-index: 1;

  &:hover { background: ${tokens.colors.primaryHover}; transform: translate(-2px, -2px); }
  &:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
`;

const SubmitOffset = styled.div`
  position: absolute;
  inset: 0;
  background: ${tokens.colors.primary};
  opacity: 0.2;
  ${clipBR(CHAMFER.sm)}
  transform: translate(4px, 4px);
  transition: transform ${tokens.transitions.fast};
  z-index: 0;

  ${SubmitWrap}:hover & {
    transform: translate(6px, 6px);
  }
`;

const Privacy = styled.p`
  margin-top: ${tokens.spacing.md};
  font-size: ${tokens.fontSizes.xs};
  color: ${tokens.colors.textDim};
  line-height: ${tokens.lineHeights.relaxed};
  a { color: ${tokens.colors.primary}; text-decoration: underline; }
`;

const SuccessMsg = styled.div`
  text-align: center;
  padding: ${tokens.spacing['2xl']} 0;
  h3 {
    font-family: ${tokens.fonts.display};
    font-size: ${tokens.fontSizes['2xl']};
    font-weight: ${tokens.fontWeights.bold};
    color: ${tokens.colors.mint};
    margin-bottom: ${tokens.spacing.sm};
  }
  p { color: ${tokens.colors.textMuted}; }
`;

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  return (
    <PlanetSection
      glass
      id="newsletter"
      showStitch={false}
      accent={tokens.colors.glowMint}
    >
      <Grid>
        <LeftCol>
          <div>
            <SectionBadge>Newsletter</SectionBadge>
            <SectionTitle>Bleib an der <span>KI-Spitze</span></SectionTitle>
            <SectionSubtitle>Erhalte wöchentlich exklusive Insights, Event-Einladungen und die neuesten KI-Trends direkt in dein Postfach.</SectionSubtitle>
          </div>
          <BenefitList>
            {BENEFITS.map((b) => (
              <Benefit key={b}>
                <CheckIcon aria-hidden="true" />
                {b}
              </Benefit>
            ))}
          </BenefitList>
          <SubNote><strong>5.000+</strong> Abonnenten vertrauen uns bereits</SubNote>
        </LeftCol>

        <FormCard>
          <CyberCorners $color={tokens.colors.mint} $size={12} />
          {submitted ? (
            <SuccessMsg>
              <h3>Willkommen an Bord!</h3>
              <p>Du erhältst in Kürze eine Bestätigungsmail.</p>
            </SuccessMsg>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <FormHeading>Kostenlos anmelden</FormHeading>
              <FormGroup>
                <Label htmlFor="nl-name">Dein Name</Label>
                <Input id="nl-name" type="text" placeholder="Max Mustermann" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="nl-email">E-Mail Adresse</Label>
                <Input id="nl-email" type="email" placeholder="max@beispiel.de" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
              </FormGroup>
              <SubmitWrap>
                <SubmitOffset aria-hidden="true" />
                <SubmitBtn type="submit" disabled={!name || !email}>Jetzt abonnieren</SubmitBtn>
              </SubmitWrap>
              <Privacy>Mit der Anmeldung akzeptierst du unsere <a href="/datenschutz">Datenschutzerklärung</a>. Abmeldung jederzeit möglich.</Privacy>
            </form>
          )}
        </FormCard>
      </Grid>
    </PlanetSection>
  );
}
