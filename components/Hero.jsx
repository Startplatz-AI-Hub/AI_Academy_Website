'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { tokens, media } from '../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../styles/cyberpunk';
import useMouseParallax from '../hooks/useMouseParallax';
import PersonaReveal from './PersonaReveal';

/* ─────────────────────────────────────────────
   HERO – Cyberpunk-styled claim + PersonaReveal
   + Infinite partner marquee
   ───────────────────────────────────────────── */

const PARTNERS = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft', w: 110 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google', w: 90 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'AWS', w: 80 },
  { src: 'https://res.cloudinary.com/startplatz/image/upload/v1776212864/ai-hub/website/AI-Academy%20Logos/startplatz-ai-academy-logo-transparent-md.png', alt: 'AI Academy', w: 110 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft', w: 110 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google', w: 90 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'AWS', w: 80 },
  { src: 'https://res.cloudinary.com/startplatz/image/upload/v1776212864/ai-hub/website/AI-Academy%20Logos/startplatz-ai-academy-logo-transparent-md.png', alt: 'AI Academy', w: 110 },
];

/* ── Styles ────────────────────────────────── */

const Section = styled.section`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding-top: 72px;
  background: ${tokens.colors.surface};
`;

const SlashAccent = styled.div`
  position: absolute;
  top: -10%; right: -5%;
  width: 45%; height: 120%;
  background: ${tokens.colors.primaryLighter};
  transform: skewX(-8deg);
  opacity: 0.3;
  pointer-events: none;
`;

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${tokens.spacing.lg};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing['3xl']};
  align-items: center;
  flex: 1;

  ${media.lg} {
    grid-template-columns: 1fr 1fr;
    padding: 0 ${tokens.spacing['2xl']};
  }
  ${media.xl} {
    grid-template-columns: 1.15fr 0.85fr;
  }
`;

const ClaimWrapper = styled.div`
  position: relative;
  will-change: transform;
`;

const Headline = styled.h1`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.hero};
  font-weight: ${tokens.fontWeights.black};
  line-height: ${tokens.lineHeights.tight};
  color: ${tokens.colors.text};
  letter-spacing: -0.03em;
  margin-bottom: ${tokens.spacing.xl};
  text-transform: uppercase;
`;

const HeadlineWord = styled.span`
  display: block;
  will-change: transform;
  color: ${tokens.colors.text};

  &.highlight {
    background: linear-gradient(135deg, ${tokens.colors.primary}, ${tokens.colors.primaryMuted});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  &.dim { color: ${tokens.colors.textDim}; }
`;

const SubText = styled.p`
  font-size: clamp(${tokens.fontSizes.base}, 2vw, ${tokens.fontSizes.xl});
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
  max-width: 520px;
  margin-bottom: ${tokens.spacing['2xl']};
`;

const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.md};
`;

const PrimaryBtnWrap = styled.div`
  position: relative;
  display: inline-flex;
`;

const PrimaryBtn = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${tokens.spacing.sm};
  padding: 14px 28px;
  font-family: ${tokens.fonts.body};
  font-size: ${tokens.fontSizes.base};
  font-weight: ${tokens.fontWeights.semi};
  color: #fff;
  background: ${tokens.colors.primary};
  ${clipBR(CHAMFER.sm)}
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: background ${tokens.transitions.fast}, transform ${tokens.transitions.fast};
  z-index: 1;

  &:hover {
    background: ${tokens.colors.primaryHover};
    transform: translate(-2px, -2px);
    color: #fff;
  }

  svg { width: 16px; height: 16px; transition: transform ${tokens.transitions.fast}; }
  &:hover svg { transform: translateX(3px); }
`;

const PrimaryOffset = styled.div`
  position: absolute;
  inset: 0;
  background: ${tokens.colors.primary};
  opacity: 0.25;
  ${clipBR(CHAMFER.sm)}
  transform: translate(4px, 4px);
  transition: transform ${tokens.transitions.fast};
  z-index: 0;

  ${PrimaryBtnWrap}:hover & {
    transform: translate(6px, 6px);
  }
`;

const SecondaryBtn = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  font-family: ${tokens.fonts.body};
  font-size: ${tokens.fontSizes.base};
  font-weight: ${tokens.fontWeights.medium};
  color: ${tokens.colors.textSoft};
  background: ${tokens.colors.surface};
  border: 1px solid rgba(0,0,0,0.1);
  ${clipBR(CHAMFER.sm)}
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: all ${tokens.transitions.fast};

  &:hover {
    background: ${tokens.colors.surfaceAlt};
    color: ${tokens.colors.text};
    border-color: ${tokens.colors.primary};
  }
`;

const RevealContainer = styled.div`
  position: relative;
  height: 500px;
  display: none;
  ${media.md} { display: block; height: 420px; }
  ${media.lg} { height: 520px; }
  ${media.xl} { height: 580px; }
`;

/* ── Infinite Marquee ──────────────────────── */

const marqueeScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  overflow: hidden;
  padding: ${tokens.spacing['2xl']} 0 ${tokens.spacing.xl};
  border-top: 1px solid rgba(0,0,0,0.04);

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 100px;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(90deg, ${tokens.colors.surface}, transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(270deg, ${tokens.colors.surface}, transparent);
  }
`;

const MarqueeLabel = styled.span`
  display: block;
  text-align: center;
  font-family: ${tokens.fonts.mono};
  font-size: 10px;
  font-weight: ${tokens.fontWeights.medium};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${tokens.colors.textDim};
  margin-bottom: ${tokens.spacing.lg};
`;

const MarqueeTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${marqueeScroll} 25s linear infinite;

  &:hover { animation-play-state: paused; }
`;

const MarqueeItem = styled.div`
  flex-shrink: 0;
  padding: 0 ${tokens.spacing['2xl']};

  img {
    height: 22px;
    width: auto;
    opacity: 0.25;
    filter: grayscale(1);
    transition: opacity ${tokens.transitions.fast}, filter ${tokens.transitions.fast};

    &:hover {
      opacity: 0.6;
      filter: none;
    }
  }
`;

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5h8.5m0 0L8 5m3.5 3.5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Component ─────────────────────────────── */

export default function Hero() {
  const { x, y } = useMouseParallax(0.06);
  const depths = [14, 20, 28, 10];

  return (
    <Section id="hero" aria-label="Hero">
      <GridPattern aria-hidden="true" />
      <SlashAccent aria-hidden="true" />

      <Inner>
        <ClaimWrapper style={{ transform: `translate(${x * 6}px, ${y * 6}px)` }}>
          <Headline id="hero-headline" aria-label="Starte deine Karriere jetzt.">
            {['STARTE', 'DEINE', 'KARRIERE', 'JETZT.'].map((word, i) => (
              <HeadlineWord
                key={word}
                data-hero-word={i}
                aria-hidden="true"
                className={`${i === 2 ? 'highlight' : ''} ${i === 3 ? 'dim' : ''}`}
                style={{ transform: `translate(${x * depths[i]}px, ${y * depths[i]}px)` }}
              >
                {word}
              </HeadlineWord>
            ))}
          </Headline>

          <SubText>
            Praxisnahe Bootcamps in Köln &amp; Düsseldorf.
            12&nbsp;Wochen. Zertifiziert. Karriere&nbsp;ready.
          </SubText>

          <CTAGroup>
            <PrimaryBtnWrap>
              <PrimaryOffset aria-hidden="true" />
              <PrimaryBtn href="#newsletter">
                Kostenlos beraten lassen
                <ArrowIcon />
              </PrimaryBtn>
            </PrimaryBtnWrap>
            <SecondaryBtn href="#faq">
              Wissens-Test machen
              <CyberCorners $color={tokens.colors.textDim} $size={6} />
            </SecondaryBtn>
          </CTAGroup>
        </ClaimWrapper>

        <RevealContainer id="hero-persona-reveal">
          <CyberCorners $color={tokens.colors.mint} $size={14} />
          <PersonaReveal />
        </RevealContainer>
      </Inner>

      {/* Infinite partner marquee */}
      <MarqueeWrapper>
        <MarqueeLabel>Unsere Partner</MarqueeLabel>
        <MarqueeTrack>
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <MarqueeItem key={`${p.alt}-${i}`}>
              <img src={p.src} alt={p.alt} width={p.w} height="22" loading="eager" />
            </MarqueeItem>
          ))}
        </MarqueeTrack>
      </MarqueeWrapper>
    </Section>
  );
}
