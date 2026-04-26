'use client';

import React from 'react';
import styled from 'styled-components';
import {
  Button,
  CTABanner,
  DetailTable,
  FeatureCard,
  MiniFAQ,
  PageHero,
  ResponsiveGrid,
  SectionBlock,
  TwoColumn,
  VisualSlot,
} from './ui';
import SubpageLayout from './SubpageLayout';
import { tokens, media } from '../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../styles/cyberpunk';
import { CALENDLY_URL } from '../lib/site';

const accentMap = {
  primary: {
    color: tokens.colors.primary,
    bg: tokens.colors.primaryLighter,
    glow: tokens.colors.glow,
  },
  orange: {
    color: tokens.colors.orange,
    bg: tokens.colors.orangeBg,
    glow: tokens.colors.glowOrange,
  },
  mint: {
    color: tokens.colors.mint,
    bg: tokens.colors.mintBg,
    glow: tokens.colors.glowMint,
  },
};

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing.md};
  margin-top: ${tokens.spacing['2xl']};

  ${media.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MetaItem = styled.div`
  position: relative;
  padding: ${tokens.spacing.lg};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
`;

const MetaValue = styled.div`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes['2xl']};
  font-weight: ${tokens.fontWeights.black};
  color: ${({ $color }) => $color};
  line-height: ${tokens.lineHeights.tight};
  margin-bottom: ${tokens.spacing.xs};
`;

const MetaLabel = styled.div`
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  color: ${tokens.colors.textDim};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Schedule = styled.div`
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.lg)}
  overflow: hidden;
`;

const ScheduleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing.sm};
  padding: ${tokens.spacing.lg};
  border-bottom: 1px solid rgba(0,0,0,0.06);
  background: ${({ $highlight, $bg }) => ($highlight ? $bg : 'transparent')};

  &:last-child {
    border-bottom: 0;
  }

  ${media.md} {
    grid-template-columns: 120px 1fr;
    gap: ${tokens.spacing.xl};
    padding: ${tokens.spacing.xl};
  }
`;

const Time = styled.div`
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.semi};
  color: ${({ $color }) => $color};
`;

const SessionTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.xl};
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
  margin-bottom: ${tokens.spacing.xs};
`;

const SessionText = styled.p`
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

const Tag = styled.span`
  display: inline-flex;
  margin-top: ${tokens.spacing.sm};
  padding: 4px 10px;
  font-family: ${tokens.fonts.mono};
  font-size: 10px;
  font-weight: ${tokens.fontWeights.semi};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  ${clipBR(CHAMFER.xs)}
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing['2xl']};
  align-items: start;

  ${media.lg} {
    grid-template-columns: 0.85fr 1.15fr;
  }
`;

const PricingCard = styled.article`
  position: relative;
  padding: ${tokens.spacing['2xl']};
  background: ${tokens.colors.surface};
  border: 1px solid ${({ $color }) => `${$color}55`};
  ${clipBR(CHAMFER.lg)}
  box-shadow: ${tokens.shadows.card};
`;

const PriceEyebrow = styled.div`
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.semi};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  margin-bottom: ${tokens.spacing.md};
`;

const Price = styled.div`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['4xl']}, 7vw, ${tokens.fontSizes['6xl']});
  font-weight: ${tokens.fontWeights.black};
  line-height: ${tokens.lineHeights.tight};
  color: ${tokens.colors.text};
  margin-bottom: ${tokens.spacing.sm};
`;

const PriceSub = styled.p`
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
  margin-bottom: ${tokens.spacing.xl};
`;

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
  margin-bottom: ${tokens.spacing.xl};
`;

const FeatureItem = styled.li`
  display: flex;
  gap: ${tokens.spacing.sm};
  color: ${tokens.colors.textSoft};
  line-height: ${tokens.lineHeights.relaxed};

  &::before {
    content: '✓';
    color: ${({ $color }) => $color};
    font-weight: ${tokens.fontWeights.bold};
    flex-shrink: 0;
  }
`;

const Note = styled.p`
  margin-top: ${tokens.spacing.lg};
  color: ${tokens.colors.textMuted};
  font-size: ${tokens.fontSizes.sm};
  line-height: ${tokens.lineHeights.relaxed};
`;

export default function OneDayDetailPage({ config }) {
  const accent = accentMap[config.accent || 'primary'] || accentMap.primary;
  const ctaHref = config.ctaHref || CALENDLY_URL;

  return (
    <SubpageLayout>
      <PageHero
        badge={config.badge}
        badgeColor={accent.color}
        badgeBg={accent.bg}
        title={config.title}
        subtitle={config.subtitle}
        breadcrumbs={[
          { label: 'OneDay', href: '/oneday' },
          { label: config.breadcrumb, href: config.href, active: true },
        ]}
        accentColor={accent.bg}
        image={config.heroImage}
      >
        <Button href={ctaHref} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" arrow>
          {config.primaryCta || 'Platz sichern'}
        </Button>
        <Button href="#programm" variant="secondary" size="lg">
          Programm ansehen
        </Button>
      </PageHero>

      <SectionBlock variant="white" accent={accent.glow}>
        <MetaGrid>
          {config.meta.map((item) => (
            <MetaItem key={item.label}>
              <CyberCorners $color={accent.color} $size={7} />
              <MetaValue $color={accent.color}>{item.value}</MetaValue>
              <MetaLabel>{item.label}</MetaLabel>
            </MetaItem>
          ))}
        </MetaGrid>
      </SectionBlock>

      <SectionBlock
        badge={config.why.badge}
        title={config.why.title}
        subtitle={config.why.subtitle}
        accent={accent.glow}
      >
        <ResponsiveGrid $cols={4}>
          {config.why.cards.map((card, index) => (
            <FeatureCard
              key={card.title}
              step={String(index + 1).padStart(2, '0')}
              title={card.title}
              description={card.description}
              features={card.features}
              accentColor={accent.color}
              accentBg={accent.bg}
              cornerColor={accent.color}
            />
          ))}
        </ResponsiveGrid>
      </SectionBlock>

      <SectionBlock
        badge={config.useCases.badge}
        title={config.useCases.title}
        subtitle={config.useCases.subtitle}
        variant="muted"
        accent={accent.glow}
      >
        <TwoColumn>
          <ResponsiveGrid $cols={2}>
            {config.useCases.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                step={String(index + 1).padStart(2, '0')}
                title={item.title}
                description={item.description}
                features={item.features}
                accentColor={accent.color}
                accentBg={accent.bg}
                cornerColor={accent.color}
              />
            ))}
          </ResponsiveGrid>
          <VisualSlot
            title={config.visual.title}
            image={config.visual.image}
            prompt={config.visual.prompt}
            accentColor={accent.color}
          />
        </TwoColumn>
      </SectionBlock>

      <SectionBlock
        id="programm"
        badge="Tagesablauf"
        title={config.schedule.title}
        subtitle={config.schedule.subtitle}
        accent={accent.glow}
      >
        <Schedule>
          {config.schedule.items.map((item) => (
            <ScheduleRow key={`${item.time}-${item.title}`} $highlight={item.highlight} $bg={accent.bg}>
              <Time $color={accent.color}>{item.time}</Time>
              <div>
                <SessionTitle>{item.title}</SessionTitle>
                <SessionText>{item.description}</SessionText>
                {item.tag && (
                  <Tag $color={accent.color} $bg={accent.bg}>
                    {item.tag}
                  </Tag>
                )}
              </div>
            </ScheduleRow>
          ))}
        </Schedule>
      </SectionBlock>

      <SectionBlock
        badge="Investment"
        title={config.pricing.title}
        subtitle={config.pricing.subtitle}
        variant="white"
        accent={accent.glow}
      >
        <PricingGrid>
          <PricingCard $color={accent.color}>
            <CyberCorners $color={accent.color} $size={12} />
            <PriceEyebrow $color={accent.color}>{config.pricing.eyebrow}</PriceEyebrow>
            <Price>{config.pricing.price}</Price>
            <PriceSub>{config.pricing.priceSub}</PriceSub>
            <FeatureList>
              {config.pricing.features.map((feature) => (
                <FeatureItem key={feature} $color={accent.color}>{feature}</FeatureItem>
              ))}
            </FeatureList>
            <Button href={ctaHref} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" arrow>
              {config.pricing.cta || 'Platz sichern'}
            </Button>
            {config.pricing.note && <Note>{config.pricing.note}</Note>}
          </PricingCard>
          <DetailTable items={config.details} />
        </PricingGrid>
      </SectionBlock>

      <SectionBlock badge="FAQ" title={config.faqTitle} accent={accent.glow}>
        <MiniFAQ items={config.faq} accentColor={accent.color} />
      </SectionBlock>

      <CTABanner title={config.finalCta.title} subtitle={config.finalCta.subtitle}>
        <Button href={ctaHref} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" arrow>
          {config.finalCta.button}
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
