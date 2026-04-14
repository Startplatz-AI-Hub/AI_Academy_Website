'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { tokens, media } from '../../styles/tokens';
import { clipBR, clipTLBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM – BlogCard
   For blog listing pages. Featured + compact variants.
   ───────────────────────────────────────────── */

const CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const FeaturedCard = styled.article`
  position: relative;
  ${clipTLBR(CHAMFER.lg)}
  overflow: hidden;
  min-height: 360px;
  cursor: pointer;
  transition: transform ${tokens.transitions.base}, filter ${tokens.transitions.base};
  &:hover { transform: translateY(-4px); filter: drop-shadow(0 8px 24px rgba(124,58,237,0.10)); }
  &:hover img { transform: scale(1.04); }
`;

const FeaturedImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform ${tokens.transitions.slow};
`;

const FeaturedOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(15, 23, 42, 0.88) 100%);
`;

const FeaturedContent = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: ${tokens.spacing['2xl']};
  z-index: 2;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 3px 10px;
  font-family: ${tokens.fonts.mono};
  font-size: 10px;
  font-weight: ${tokens.fontWeights.semi};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $dark }) => $dark ? tokens.colors.primaryLight : tokens.colors.primary};
  background: ${({ $dark }) => $dark ? 'rgba(99,102,241,0.2)' : tokens.colors.primaryLighter};
  ${clipBR(CHAMFER.xs)}
  margin-bottom: ${tokens.spacing.sm};
`;

const FeaturedTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes.xl}, 3vw, ${tokens.fontSizes['3xl']});
  font-weight: ${tokens.fontWeights.bold};
  color: #fff;
  margin-bottom: ${tokens.spacing.sm};
  line-height: ${tokens.lineHeights.snug};
`;

const Meta = styled.span`
  font-size: ${tokens.fontSizes.xs};
  color: ${({ $dark }) => $dark ? 'rgba(255,255,255,0.6)' : tokens.colors.textDim};
`;

/* Compact card */
const CompactCard = styled.article`
  position: relative;
  padding: ${tokens.spacing.lg};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
  cursor: pointer;
  transition: all ${tokens.transitions.base};

  &:hover {
    filter: drop-shadow(0 4px 16px rgba(0,0,0,0.06));
    transform: translateX(4px);
    border-color: rgba(124,58,237,0.15);
  }
`;

const CompactTitle = styled.h4`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.base};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.text};
  line-height: ${tokens.lineHeights.snug};
`;

const CompactExcerpt = styled.p`
  font-size: ${tokens.fontSizes.sm};
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
  margin-top: ${tokens.spacing.xs};
`;

export default function BlogCard({
  title,
  badge,
  meta,
  excerpt,
  image,
  slug,
  featured = false,
}) {
  const href = `/blog/${slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

  if (featured) {
    return (
      <CardLink href={href}>
        <FeaturedCard>
          <CyberCorners $color={tokens.colors.mint} $size={14} />
          {image && <FeaturedImage src={image} alt={title} loading="lazy" width="800" height="500" />}
          <FeaturedOverlay />
          <FeaturedContent>
            {badge && <Badge $dark>{badge}</Badge>}
            <FeaturedTitle>{title}</FeaturedTitle>
            {meta && <Meta $dark>{meta}</Meta>}
          </FeaturedContent>
        </FeaturedCard>
      </CardLink>
    );
  }

  return (
    <CardLink href={href}>
      <CompactCard>
        <CyberCorners $color={tokens.colors.mint} $size={8} />
        {badge && <Badge>{badge}</Badge>}
        <CompactTitle>{title}</CompactTitle>
        {excerpt && <CompactExcerpt>{excerpt}</CompactExcerpt>}
        {meta && <Meta>{meta}</Meta>}
      </CompactCard>
    </CardLink>
  );
}
