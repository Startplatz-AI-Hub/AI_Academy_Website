'use client';

import React from 'react';
import styled from 'styled-components';
import { tokens, media } from '../../styles/tokens';
import { clipBR, clipTLBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM – FeatureCard
   Versatile card for features, benefits, steps
   ───────────────────────────────────────────── */

const Card = styled.article`
  position: relative;
  background: ${({ $variant }) => $variant === 'dark' ? 'rgba(20,20,20,0.75)' : tokens.colors.surface};
  border: 1px solid ${({ $variant }) => $variant === 'dark' ? 'rgba(255,255,255,0.08)' : tokens.colors.glassBorder};
  ${({ $chamfer }) => $chamfer === 'all' ? clipTLBR(CHAMFER.lg) : clipBR(CHAMFER.md)}
  overflow: hidden;
  padding: ${tokens.spacing['2xl']};
  transition: transform ${tokens.transitions.base}, filter ${tokens.transitions.base}, border-color ${tokens.transitions.base};

  &:hover {
    transform: translateY(-4px);
    filter: drop-shadow(0 8px 24px ${({ $accentColor }) => `${$accentColor || tokens.colors.primary}18`});
    border-color: ${({ $accentColor }) => `${$accentColor || tokens.colors.primary}30`};
  }
`;

const TopBar = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: ${({ $color }) => $color || tokens.colors.primary};
  opacity: 0;
  transition: opacity ${tokens.transitions.base};
  ${Card}:hover & { opacity: 0.8; }
`;

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bg }) => $bg || tokens.colors.primaryLighter};
  ${clipBR(CHAMFER.xs)}
  margin-bottom: ${tokens.spacing.lg};
  font-size: 20px;
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.lg};
  font-weight: ${tokens.fontWeights.black};
  color: ${({ $color }) => $color || tokens.colors.primary};
  background: ${({ $bg }) => $bg || tokens.colors.primaryLighter};
  ${clipBR(CHAMFER.xs)}
  margin-bottom: ${tokens.spacing.lg};
`;

const CardTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.xl};
  font-weight: ${tokens.fontWeights.bold};
  color: ${({ $variant }) => $variant === 'dark' ? tokens.colors.darkText : tokens.colors.text};
  margin-bottom: ${tokens.spacing.sm};
  ${media.lg} { font-size: ${tokens.fontSizes['2xl']}; }
`;

const CardDesc = styled.p`
  font-size: ${tokens.fontSizes.sm};
  color: ${({ $variant }) => $variant === 'dark' ? tokens.colors.darkMuted : tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
  margin-top: ${tokens.spacing.md};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.sm};
  font-size: ${tokens.fontSizes.sm};
  color: ${({ $variant }) => $variant === 'dark' ? tokens.colors.darkMuted : tokens.colors.textSoft};

  &::before {
    content: '→';
    color: ${({ $color }) => $color || tokens.colors.primary};
    font-weight: bold;
    flex-shrink: 0;
  }
`;

export default function FeatureCard({
  icon,
  step,
  title,
  description,
  features,
  accentColor,
  accentBg,
  variant = 'light',
  chamfer = 'br',
  cornerColor,
}) {
  return (
    <Card $variant={variant} $chamfer={chamfer} $accentColor={accentColor}>
      <TopBar $color={accentColor} />
      <CyberCorners $color={cornerColor || tokens.colors.mint} $size={8} />

      {step && <StepNumber $color={accentColor} $bg={accentBg}>{step}</StepNumber>}
      {icon && <IconWrap $bg={accentBg}>{icon}</IconWrap>}

      <CardTitle $variant={variant}>{title}</CardTitle>
      <CardDesc $variant={variant}>{description}</CardDesc>

      {features && features.length > 0 && (
        <FeatureList>
          {features.map((f) => (
            <FeatureItem key={f} $variant={variant} $color={accentColor}>{f}</FeatureItem>
          ))}
        </FeatureList>
      )}
    </Card>
  );
}
