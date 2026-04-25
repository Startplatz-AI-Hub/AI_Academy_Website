'use client';

import React, { useCallback } from 'react';
import styled from 'styled-components';
import { tokens, media } from '../../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';

const Card = styled.article`
  --mx: 50%;
  --my: 0%;
  --rx: 0deg;
  --ry: 0deg;

  position: relative;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  padding: ${tokens.spacing.xl};
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,246,251,0.84)),
    radial-gradient(circle at var(--mx) var(--my), ${({ $accent }) => `${$accent}30`}, transparent 38%),
    ${tokens.colors.surface};
  border: 1px solid rgba(15, 15, 15, 0.08);
  box-shadow: ${tokens.shadows.card};
  ${clipBR(CHAMFER.lg)}
  transform-style: preserve-3d;
  transition:
    transform 260ms ease,
    border-color 260ms ease,
    box-shadow 260ms ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: -1;
  }

  &::before {
    background:
      linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.74) 38%, transparent 58%),
      repeating-linear-gradient(90deg, rgba(124,58,237,0.06) 0 1px, transparent 1px 16px);
    opacity: 0;
    transform: translateX(-28%);
    transition: opacity 260ms ease, transform 420ms ease;
  }

  &::after {
    inset: auto 0 0;
    height: 34%;
    background: linear-gradient(0deg, ${({ $accent }) => `${$accent}18`}, transparent);
  }

  &:focus-visible {
    outline: 2px solid ${({ $accent }) => $accent};
    outline-offset: 4px;
  }

  ${media.hover} {
    &:hover {
      transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-6px);
      border-color: ${({ $accent }) => `${$accent}55`};
      box-shadow: ${tokens.shadows.cardHover};
    }

    &:hover::before {
      opacity: 1;
      transform: translateX(18%);
    }
  }
`;

const TopLine = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${tokens.spacing.md};
  margin-bottom: ${tokens.spacing.xl};
`;

const Initials = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes['2xl']};
  font-weight: ${tokens.fontWeights.black};
  color: ${({ $accent }) => $accent};
  background:
    linear-gradient(135deg, rgba(255,255,255,0.88), rgba(255,255,255,0.4)),
    ${({ $accent }) => `${$accent}14`};
  border: 1px solid ${({ $accent }) => `${$accent}32`};
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.75);
  ${clipBR(CHAMFER.md)}
`;

const Signal = styled.span`
  padding: 6px 10px;
  font-family: ${tokens.fonts.mono};
  font-size: 10px;
  font-weight: ${tokens.fontWeights.semi};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => `${$accent}10`};
  border: 1px solid ${({ $accent }) => `${$accent}22`};
  ${clipBR(CHAMFER.xs)}
`;

const Name = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['2xl']}, 3vw, ${tokens.fontSizes['3xl']});
  font-weight: ${tokens.fontWeights.black};
  line-height: ${tokens.lineHeights.snug};
  letter-spacing: 0;
  color: ${tokens.colors.text};
  margin-bottom: ${tokens.spacing.xs};
`;

const Role = styled.p`
  font-family: ${tokens.fonts.mono};
  font-size: 11px;
  font-weight: ${tokens.fontWeights.semi};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $accent }) => $accent};
  margin-bottom: ${tokens.spacing.lg};
`;

const Bio = styled.p`
  color: ${tokens.colors.textSoft};
  line-height: ${tokens.lineHeights.relaxed};
  margin-bottom: ${tokens.spacing.xl};
`;

const FocusLabel = styled.span`
  display: block;
  margin-top: auto;
  margin-bottom: ${tokens.spacing.sm};
  font-family: ${tokens.fonts.mono};
  font-size: 10px;
  font-weight: ${tokens.fontWeights.semi};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${tokens.colors.textDim};
`;

const FocusText = styled.p`
  color: ${tokens.colors.text};
  font-weight: ${tokens.fontWeights.semi};
  line-height: ${tokens.lineHeights.snug};
  margin-bottom: ${tokens.spacing.lg};
`;

const ToolRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.sm};
`;

const ToolChip = styled.span`
  padding: 6px 10px;
  font-family: ${tokens.fonts.mono};
  font-size: 10px;
  font-weight: ${tokens.fontWeights.medium};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tokens.colors.textSoft};
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.07);
  ${clipBR(CHAMFER.xs)}
`;

export default function ReflectiveInstructorCard({
  initials,
  name,
  role,
  bio,
  focus,
  signal,
  tools = [],
  accent = tokens.colors.primary,
}) {
  const handleMove = useCallback((event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    card.style.setProperty('--mx', `${Math.round(px * 100)}%`);
    card.style.setProperty('--my', `${Math.round(py * 100)}%`);
    card.style.setProperty('--ry', `${(px - 0.5) * 7}deg`);
    card.style.setProperty('--rx', `${(0.5 - py) * 7}deg`);
  }, []);

  const handleLeave = useCallback((event) => {
    const card = event.currentTarget;
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '0%');
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  }, []);

  return (
    <Card
      $accent={accent}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onBlur={handleLeave}
      tabIndex={0}
      aria-label={`${name}, ${role}`}
    >
      <CyberCorners $color={accent} $size={10} />
      <TopLine>
        <Initials $accent={accent}>{initials}</Initials>
        <Signal $accent={accent}>{signal}</Signal>
      </TopLine>
      <Name>{name}</Name>
      <Role $accent={accent}>{role}</Role>
      <Bio>{bio}</Bio>
      <FocusLabel>Praxisfokus</FocusLabel>
      <FocusText>{focus}</FocusText>
      <ToolRow aria-label="Schwerpunkte">
        {tools.map((tool) => (
          <ToolChip key={tool}>{tool}</ToolChip>
        ))}
      </ToolRow>
    </Card>
  );
}
