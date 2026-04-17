'use client';

import React from 'react';
import styled from 'styled-components';
import { tokens, media } from '../styles/tokens';
import PlanetSection from './PlanetSection';
import DomeGallery from './DomeGallery';

/* ─────────────────────────────────────────────
   TESTIMONIALS – DomeGallery presentation
   Uses reactbits.dev DomeGallery for 3D hemisphere
   ───────────────────────────────────────────── */

const TESTIMONIAL_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format',
    alt: 'Thomas – Vom Lehrer zum KI-Entwickler',
  },
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format',
    alt: 'Sarah – Mein Weg ins Tech-Startup',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format',
    alt: 'Michael – Warum sich der Kurs lohnt',
  },
  {
    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format',
    alt: 'Julia – KI im Marketing nutzen',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format',
    alt: 'Prompt Engineering Workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format',
    alt: 'Campus Tour Köln',
  },
];

const DomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  margin-top: ${tokens.spacing.lg};

  ${media.md} {
    height: 520px;
  }

  ${media.lg} {
    height: 600px;
  }
`;

export default function Testimonials() {
  return (
    <PlanetSection
      id="testimonials"
      badge="Was Teilnehmer sagen"
      title="Echte <span>Erfolgsgeschichten</span>"
    >
      <DomeContainer>
        <DomeGallery
          images={TESTIMONIAL_IMAGES}
          overlayBlurColor={tokens.colors.pageBg}
          imageBorderRadius="6px"
          openedImageBorderRadius="8px"
          openedImageWidth="300px"
          openedImageHeight="400px"
          grayscale={false}
          segments={35}
          fit={0.5}
          minRadius={400}
          dragDampening={2}
        />
      </DomeContainer>
    </PlanetSection>
  );
}
