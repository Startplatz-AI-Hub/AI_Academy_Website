'use client';

import React from 'react';
import styled from 'styled-components';
import { tokens, media } from '../../styles/tokens';
import { clipTLBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM – CTABanner
   Full-width call-to-action section
   ───────────────────────────────────────────── */

const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: ${tokens.spacing['4xl']} 0;
  overflow: hidden;
  background: ${tokens.colors.dark};
`;

const Inner = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${tokens.spacing.lg};
  ${media.lg} { padding: 0 ${tokens.spacing['2xl']}; }
`;

const Card = styled.div`
  position: relative;
  padding: ${tokens.spacing['3xl']} ${tokens.spacing['2xl']};
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid rgba(124, 58, 237, 0.15);
  ${clipTLBR(CHAMFER.lg)}
  text-align: center;

  ${media.md} {
    padding: ${tokens.spacing['4xl']};
  }
`;

const Title = styled.h2`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['2xl']}, 4vw, ${tokens.fontSizes['4xl']});
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.darkText};
  text-transform: uppercase;
  margin-bottom: ${tokens.spacing.md};

  span {
    background: linear-gradient(135deg, ${tokens.colors.primaryLight}, ${tokens.colors.primaryMuted});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled.p`
  font-size: ${tokens.fontSizes.lg};
  color: ${tokens.colors.darkMuted};
  line-height: ${tokens.lineHeights.relaxed};
  max-width: 600px;
  margin: 0 auto ${tokens.spacing['2xl']};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.md};
  justify-content: center;
`;

export default function CTABanner({ title, subtitle, children }) {
  return (
    <Section>
      <Inner>
        <Card>
          <CyberCorners $color={tokens.colors.primaryLight} $size={14} />
          {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {children && <Actions>{children}</Actions>}
        </Card>
      </Inner>
    </Section>
  );
}
