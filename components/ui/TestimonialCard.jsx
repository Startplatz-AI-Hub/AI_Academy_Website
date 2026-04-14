'use client';

import React from 'react';
import styled from 'styled-components';
import { tokens, media } from '../../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM – TestimonialCard
   Quote card with name, role, and optional image
   ───────────────────────────────────────────── */

const Card = styled.blockquote`
  position: relative;
  padding: ${tokens.spacing['2xl']};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
  margin: 0;
  transition: transform ${tokens.transitions.base}, filter ${tokens.transitions.base};

  &:hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 4px 16px rgba(0,0,0,0.06));
  }
`;

const QuoteMark = styled.div`
  font-family: ${tokens.fonts.display};
  font-size: 3rem;
  font-weight: ${tokens.fontWeights.black};
  color: ${tokens.colors.primaryLighter};
  line-height: 1;
  margin-bottom: ${tokens.spacing.sm};
`;

const Quote = styled.p`
  font-size: ${tokens.fontSizes.base};
  color: ${tokens.colors.textSoft};
  line-height: ${tokens.lineHeights.relaxed};
  margin-bottom: ${tokens.spacing.lg};
  font-style: italic;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.md};
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  ${clipBR(CHAMFER.xs)}
  object-fit: cover;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.cite`
  display: block;
  font-style: normal;
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.text};
`;

const AuthorRole = styled.span`
  font-size: ${tokens.fontSizes.xs};
  color: ${tokens.colors.textDim};
`;

export default function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  accentColor,
}) {
  return (
    <Card>
      <CyberCorners $color={accentColor || tokens.colors.mint} $size={8} />
      <QuoteMark>&ldquo;</QuoteMark>
      <Quote>{quote}</Quote>
      <Author>
        {avatar && <Avatar src={avatar} alt={name} width="44" height="44" loading="lazy" />}
        <AuthorInfo>
          <AuthorName>{name}</AuthorName>
          {role && <AuthorRole>{role}</AuthorRole>}
        </AuthorInfo>
      </Author>
    </Card>
  );
}
