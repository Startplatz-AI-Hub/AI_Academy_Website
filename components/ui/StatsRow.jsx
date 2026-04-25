'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { tokens, media } from '../../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM – StatsRow
   Inline KPI stats with count-up animation
   ───────────────────────────────────────────── */

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${tokens.spacing.lg};
  ${media.md} { grid-template-columns: repeat(${({ $cols }) => $cols || 4}, 1fr); }
`;

const StatCard = styled.div`
  position: relative;
  padding: ${tokens.spacing.xl} ${tokens.spacing.lg};
  background: ${({ $variant }) => $variant === 'dark' ? 'rgba(255,255,255,0.04)' : tokens.colors.surface};
  border: 1px solid ${({ $variant }) => $variant === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'};
  ${clipBR(CHAMFER.md)}
  text-align: center;
`;

const StatValue = styled.div`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['3xl']}, 5vw, ${tokens.fontSizes['5xl']});
  font-weight: ${tokens.fontWeights.black};
  color: ${({ $variant }) => $variant === 'dark' ? tokens.colors.darkText : tokens.colors.text};
  line-height: 1;
  margin-bottom: ${tokens.spacing.xs};
`;

const StatSuffix = styled.span`
  color: ${tokens.colors.primary};
`;

const StatLabel = styled.div`
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.medium};
  color: ${({ $variant }) => $variant === 'dark' ? tokens.colors.darkMuted : tokens.colors.textMuted};
`;

function useCountUp(end, duration = 2200) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();
    const step = (t) => {
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) animate(); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animate]);

  return { count, ref };
}

function StatItem({ value, displayValue, suffix, label, variant }) {
  const { count, ref } = useCountUp(value || 0);
  return (
    <StatCard ref={ref} $variant={variant}>
      <CyberCorners $color={tokens.colors.mint} $size={6} />
      <StatValue $variant={variant}>
        {displayValue || count.toLocaleString('de-DE')}
        {suffix && <StatSuffix>{suffix}</StatSuffix>}
      </StatValue>
      <StatLabel $variant={variant}>{label}</StatLabel>
    </StatCard>
  );
}

export default function StatsRow({ stats = [], variant = 'light' }) {
  return (
    <Row $cols={stats.length}>
      {stats.map((s) => (
        <StatItem key={s.label} {...s} variant={variant} />
      ))}
    </Row>
  );
}
