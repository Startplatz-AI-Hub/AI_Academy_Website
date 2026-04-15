'use client';

import React from 'react';
import styled from 'styled-components';
import SubpageLayout from '../../components/SubpageLayout';
import { tokens, media } from '../../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';

/* ─────────────────────────────────────────────
   AGB – Allgemeine Geschäftsbedingungen
   Platzhalter – finale Fassung folgt
   ───────────────────────────────────────────── */

const Section = styled.section`
  padding: ${tokens.spacing['4xl']} 0;
  background: ${tokens.colors.pageBg};
  min-height: 60vh;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${tokens.spacing.lg};
  ${media.xl} { padding: 0 ${tokens.spacing['2xl']}; }
`;

const Hero = styled.div`
  padding: 120px 0 ${tokens.spacing['3xl']};
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['3xl']}, 5vw, ${tokens.fontSizes['5xl']});
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
  margin-bottom: ${tokens.spacing.md};
`;

const Subtitle = styled.p`
  font-size: ${tokens.fontSizes.lg};
  color: ${tokens.colors.textMuted};
  max-width: 600px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
  padding: ${tokens.spacing['3xl']};
  margin-bottom: ${tokens.spacing['2xl']};

  ${media.md} { padding: ${tokens.spacing['4xl']}; }
`;

const SectionTitle = styled.h2`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.xl};
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
  margin-top: ${tokens.spacing['2xl']};
  margin-bottom: ${tokens.spacing.md};

  &:first-child { margin-top: 0; }
`;

const Text = styled.p`
  font-family: ${tokens.fonts.body};
  font-size: ${tokens.fontSizes.base};
  color: ${tokens.colors.textSoft};
  line-height: ${tokens.lineHeights.relaxed};
  margin-bottom: ${tokens.spacing.md};
`;

const Link = styled.a`
  color: ${tokens.colors.primary};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

export default function AGBPage() {
  return (
    <SubpageLayout>
      <Hero>
        <Container>
          <Title>Allgemeine Geschäftsbedingungen</Title>
          <Subtitle>Die finalen AGB werden in Kürze ergänzt. Bei Fragen zu Verträgen und Leistungen kontaktiere uns bitte direkt.</Subtitle>
        </Container>
      </Hero>

      <Section>
        <Container>
          <Card>
            <CyberCorners $color={tokens.colors.primary} $size={10} />

            <SectionTitle>§ 1 Geltungsbereich</SectionTitle>
            <Text>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der STARTPLATZ AI Academy (im Folgenden „Anbieterin") und den Teilnehmenden (im Folgenden „Teilnehmende") über die Durchführung von Weiterbildungsmaßnahmen, Bootcamps, Workshops, Inhouse-Trainings und sonstigen Lehrveranstaltungen.
            </Text>

            <SectionTitle>§ 2 Vertragsschluss</SectionTitle>
            <Text>
              Der Vertrag kommt zustande, wenn die Anbieterin die Anmeldung oder die Buchung der Teilnehmenden in Textform bestätigt. Bei AZAV-geförderten Maßnahmen erfolgt der Vertragsschluss nach Vorlage und Einlösung des Bildungsgutscheins.
            </Text>

            <SectionTitle>§ 3 Leistungen</SectionTitle>
            <Text>
              Die konkreten Leistungen (Inhalte, Dauer, Format, Abschluss) ergeben sich aus der jeweiligen Kursbeschreibung. Inhalte können aktualisiert werden, soweit dies für die Teilnehmenden zumutbar ist.
            </Text>

            <SectionTitle>§ 4 Preise und Zahlung</SectionTitle>
            <Text>
              Preise verstehen sich zzgl. gesetzlicher Umsatzsteuer, sofern nicht anders angegeben. Bei AZAV-geförderten Maßnahmen übernimmt der Kostenträger (Agentur für Arbeit / Jobcenter) die Kurskosten vollständig.
            </Text>

            <SectionTitle>§ 5 Widerrufsrecht</SectionTitle>
            <Text>
              Verbraucher:innen haben ein Widerrufsrecht nach den gesetzlichen Bestimmungen. Die vollständige Widerrufsbelehrung wird bei Vertragsschluss in Textform zur Verfügung gestellt.
            </Text>

            <SectionTitle>§ 6 Schlussbestimmungen</SectionTitle>
            <Text>
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </Text>

            <Text style={{ marginTop: '2rem', fontStyle: 'italic' }}>
              Diese AGB sind eine vorläufige Fassung. Die rechtlich verbindliche Endfassung wird ergänzt. Für konkrete Rückfragen:{' '}
              <Link href="mailto:academy@startplatz.de">academy@startplatz.de</Link>
            </Text>
          </Card>
        </Container>
      </Section>
    </SubpageLayout>
  );
}
