'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { tokens, media } from '../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../styles/cyberpunk';
import PlanetSection from './PlanetSection';

/* ─────────────────────────────────────────────
   TESTIMONIALS – DomeGallery (3D hemisphere)
   Inspired by reactbits.dev/components/dome-gallery
   Adapted for Next.js + styled-components
   ───────────────────────────────────────────── */

const VIDEOS = [
  {
    title: 'Thomas – Vom Lehrer zum KI-Entwickler',
    thumb: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format',
  },
  {
    title: 'Sarah – Mein Weg ins Tech-Startup',
    thumb: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format',
  },
  {
    title: 'Michael – Warum sich der Kurs lohnt',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format',
  },
  {
    title: 'Julia – KI im Marketing nutzen',
    thumb: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format',
  },
  {
    title: 'Tutorial – Prompt Engineering Basics',
    thumb: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80&auto=format',
  },
  {
    title: 'Einblick – Campus Tour Köln',
    thumb: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80&auto=format',
  },
];

/* ── Dome geometry ─────────────────────────── */

/**
 * Distribute N items on the upper hemisphere of a dome.
 * Returns [{ x, y, z, rotateX, rotateY }] for each item.
 *
 * The dome is a half-sphere viewed from slightly above —
 * items sit on its surface at varying (phi, theta) angles.
 */
function computeDomePositions(count, radius = 320) {
  const positions = [];
  // Golden-angle distribution for pleasant spacing
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    // Map i to a position on the upper hemisphere.
    // t ∈ [0, 1]  — 0 = top of dome, 1 = equator
    const t = (i + 0.5) / count;
    const phi = Math.acos(1 - t);        // polar angle (0 at top → π/2 at equator)
    const theta = i * goldenAngle;         // azimuthal angle

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = -radius * Math.cos(phi);     // negative so top = up
    const z = radius * Math.sin(phi) * Math.sin(theta);

    // Tilt cards to face outward from the dome center
    const rotateX = -(phi * 180 / Math.PI) + 90;        // face outward vertically
    const rotateY = (theta * 180 / Math.PI);              // face outward horizontally

    positions.push({ x, y, z, rotateX, rotateY });
  }
  return positions;
}

/* ── Styled Components ────────────────────── */

const DomeWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  min-height: 420px;

  ${media.md} { min-height: 520px; }
  ${media.lg} { min-height: 600px; }
`;

const DomeScene = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;

  ${media.md} {
    width: 400px;
    height: 400px;
  }
  ${media.lg} {
    width: 500px;
    height: 500px;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 110px;
  transform-style: preserve-3d;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
              box-shadow 0.3s ease,
              opacity 0.4s ease;
  will-change: transform;

  ${media.md} {
    width: 200px;
    height: 135px;
  }
  ${media.lg} {
    width: 240px;
    height: 160px;
  }

  &:hover {
    z-index: 10;
    box-shadow: 0 12px 40px rgba(124, 58, 237, 0.25),
                0 0 20px rgba(124, 58, 237, 0.08);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${clipBR(CHAMFER.md)}
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: ${tokens.colors.dark};
  backface-visibility: hidden;

  ${Card}:hover & {
    border-color: rgba(124, 58, 237, 0.35);
  }
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${tokens.transitions.slow}, filter ${tokens.transitions.base};
  filter: brightness(0.85) saturate(0.9);

  ${Card}:hover & {
    transform: scale(1.08);
    filter: brightness(1) saturate(1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(10, 10, 10, 0.75) 100%);
  pointer-events: none;
`;

const PlayBtn = styled.div`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.9);
  ${clipBR(CHAMFER.xs)}
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
  transition: transform ${tokens.transitions.base}, background ${tokens.transitions.fast};
  pointer-events: none;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 9px;
    border-color: transparent transparent transparent ${tokens.colors.primary};
    margin-left: 2px;
  }

  ${Card}:hover & {
    transform: translate(-50%, -50%) scale(1.15);
    background: #fff;
  }

  ${media.md} {
    width: 36px;
    height: 36px;

    &::after {
      border-width: 6px 0 6px 10px;
    }
  }
`;

const VideoTitle = styled.span`
  position: absolute;
  bottom: 6px;
  left: 8px;
  right: 8px;
  font-family: ${tokens.fonts.display};
  font-size: 9px;
  font-weight: ${tokens.fontWeights.semi};
  color: #fff;
  line-height: ${tokens.lineHeights.snug};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  pointer-events: none;

  ${media.md} {
    font-size: 10px;
    bottom: 8px;
    left: 10px;
    right: 10px;
  }
  ${media.lg} {
    font-size: ${tokens.fontSizes.xs};
    bottom: 10px;
    left: 12px;
    right: 12px;
  }
`;

/* ── Reflection floor ────────────────────── */

const ReflectionGlow = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 60px;
  background: radial-gradient(
    ellipse at center,
    rgba(124, 58, 237, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
  filter: blur(8px);
`;

/* ── Component ────────────────────────────── */

export default function Testimonials() {
  const sceneRef = useRef(null);
  const wrapperRef = useRef(null);
  const [tilt, setTilt] = useState({ x: -20, y: 0 });
  const rafRef = useRef(null);
  const targetTilt = useRef({ x: -20, y: 0 });

  // Responsive radius
  const [radius, setRadius] = useState(320);
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w >= 1024) setRadius(320);
      else if (w >= 768) setRadius(260);
      else setRadius(200);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const positions = computeDomePositions(VIDEOS.length, radius);

  // Smooth mouse-follow tilt
  const handleMouseMove = useCallback((e) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Normalize to [-1, 1]
    const nx = (e.clientX - cx) / (rect.width / 2);
    const ny = (e.clientY - cy) / (rect.height / 2);

    // Map to tilt degrees (limited range for subtlety)
    targetTilt.current = {
      x: -20 + ny * 15,    // base tilt -20° (looking slightly down at dome) ± 15°
      y: nx * 25,           // rotate left/right ± 25°
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    targetTilt.current = { x: -20, y: 0 }; // reset to default angle
  }, []);

  // Animation loop for smooth interpolation
  useEffect(() => {
    let active = true;
    const tick = () => {
      if (!active) return;
      setTilt((prev) => ({
        x: prev.x + (targetTilt.current.x - prev.x) * 0.08,
        y: prev.y + (targetTilt.current.y - prev.y) * 0.08,
      }));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      active = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <PlanetSection
      id="testimonials"
      badge="Was Teilnehmer sagen"
      title="Echte <span>Erfolgsgeschichten</span>"
    >
      <DomeWrapper
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <DomeScene
          ref={sceneRef}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {VIDEOS.map((v, i) => {
            const pos = positions[i];
            return (
              <Card
                key={v.title}
                tabIndex={0}
                role="button"
                aria-label={`Video: ${v.title}`}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)
                    rotateY(${pos.rotateY}deg)
                    rotateX(${pos.rotateX}deg)
                  `,
                }}
              >
                <CardInner>
                  <CyberCorners $color={tokens.colors.primary} $size={8} />
                  <Thumb
                    src={v.thumb}
                    alt={v.title}
                    loading="lazy"
                    width="240"
                    height="160"
                  />
                  <Overlay />
                  <PlayBtn />
                  <VideoTitle>{v.title}</VideoTitle>
                </CardInner>
              </Card>
            );
          })}
        </DomeScene>
        <ReflectionGlow />
      </DomeWrapper>
    </PlanetSection>
  );
}
