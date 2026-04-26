'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  CTABanner,
  MiniFAQ,
  PageHero,
  SectionBlock,
} from '../../components/ui';
import SubpageLayout from '../../components/SubpageLayout';
import { tokens, media } from '../../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../../styles/cyberpunk';
import { CALENDLY_URL } from '../../lib/site';

const CLAUDE_IMAGE = 'https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_1200/v1777162756/ai-hub/website/AI-Academy-Website-Images/oneday-claude-cowork-hero.png';
const IMMOBILIEN_IMAGE = 'https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_1200/v1777162756/ai-hub/website/AI-Academy-Website-Images/oneday-immobilien-hero.png';
const CLAUDE_CODE_IMAGE = 'https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_1200/v1777167146/ai-hub/website/AI-Academy-Website-Images/oneday-claude-code-hero.png';
const KI_KOMPETENZ_IMAGE = 'https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_1200/v1777167151/ai-hub/website/AI-Academy-Website-Images/oneday-ki-kompetenz-hero.png';
const KI_START_IMAGE = 'https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_1200/v1777167150/ai-hub/website/AI-Academy-Website-Images/oneday-ki-start-hero.png';

const ExplorerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing['2xl']};
  align-items: start;

  ${media.lg} {
    grid-template-columns: minmax(0, 1.04fr) minmax(360px, 0.96fr);
  }
`;

const PreviewPanel = styled.article`
  position: relative;
  min-height: 560px;
  overflow: hidden;
  background: ${tokens.colors.dark};
  border: 1px solid rgba(124, 58, 237, 0.22);
  ${clipBR(CHAMFER.lg)}
  box-shadow: ${tokens.shadows.card};

  ${media.lg} {
    position: sticky;
    top: 112px;
  }
`;

const PreviewImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: opacity ${tokens.transitions.base}, transform ${tokens.transitions.smooth};
`;

const PreviewShade = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(10, 10, 10, 0.08) 0%, rgba(10, 10, 10, 0.28) 48%, rgba(10, 10, 10, 0.84) 100%),
    linear-gradient(90deg, rgba(124, 58, 237, 0.2), transparent 45%);
`;

const PreviewCopy = styled.div`
  position: absolute;
  inset: auto ${tokens.spacing.xl} ${tokens.spacing.xl};
  color: ${tokens.colors.darkText};
`;

const PreviewKicker = styled.div`
  display: inline-flex;
  margin-bottom: ${tokens.spacing.sm};
  padding: 5px 10px;
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.semi};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tokens.colors.primaryLight};
  background: rgba(124, 58, 237, 0.22);
  border: 1px solid rgba(167, 139, 250, 0.35);
  ${clipBR(CHAMFER.xs)}
`;

const PreviewTitle = styled.h3`
  max-width: 680px;
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['3xl']}, 5vw, ${tokens.fontSizes['5xl']});
  font-weight: ${tokens.fontWeights.black};
  line-height: ${tokens.lineHeights.tight};
  color: ${tokens.colors.darkText};
  margin-bottom: ${tokens.spacing.sm};
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.34);
`;

const PreviewText = styled.p`
  max-width: 620px;
  color: rgba(245, 245, 245, 0.82);
  line-height: ${tokens.lineHeights.relaxed};
`;

const PreviewFacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.sm};
  margin-top: ${tokens.spacing.lg};
`;

const PreviewFact = styled.span`
  padding: 7px 10px;
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  color: ${tokens.colors.darkText};
  background: rgba(255, 255, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.16);
  ${clipBR(CHAMFER.xs)}
`;

const WorkshopList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
`;

const WorkshopItem = styled.article`
  position: relative;
  background: ${({ $active }) => ($active ? tokens.colors.surface : 'rgba(255, 255, 255, 0.58)')};
  border: 1px solid ${({ $active }) => ($active ? 'rgba(124, 58, 237, 0.32)' : tokens.colors.glassBorder)};
  ${clipBR(CHAMFER.md)}
  transition: transform ${tokens.transitions.fast}, border-color ${tokens.transitions.fast}, background ${tokens.transitions.fast};

  &:hover {
    transform: translateX(4px);
    border-color: rgba(124, 58, 237, 0.32);
    background: ${tokens.colors.surface};
  }
`;

const WorkshopButton = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${tokens.spacing.md};
  align-items: start;
  padding: ${tokens.spacing.lg};
  color: inherit;
  background: transparent;
  border: 0;
  text-align: left;
  cursor: pointer;
`;

const WorkshopIndex = styled.span`
  width: 34px;
  height: 34px;
  display: inline-grid;
  place-items: center;
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.semi};
  color: ${({ $active }) => ($active ? tokens.colors.primary : tokens.colors.textDim)};
  background: ${({ $active }) => ($active ? tokens.colors.primaryLighter : tokens.colors.surfaceAlt)};
  border: 1px solid ${({ $active }) => ($active ? 'rgba(124, 58, 237, 0.2)' : tokens.colors.glassBorder)};
  ${clipBR(CHAMFER.xs)}
`;

const WorkshopTitleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${tokens.spacing.sm};
  margin-bottom: ${tokens.spacing.xs};
`;

const WorkshopTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.xl};
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
`;

const WorkshopPrice = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const WorkshopText = styled.p`
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

const WorkshopDeliverables = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.sm};
  margin-top: ${tokens.spacing.md};
`;

const WorkshopDeliverable = styled.li`
  padding: 5px 9px;
  font-family: ${tokens.fonts.mono};
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tokens.colors.textSoft};
  background: ${tokens.colors.surfaceAlt};
  border: 1px solid rgba(0, 0, 0, 0.06);
  ${clipBR(CHAMFER.xs)}
`;

const ProductActions = styled.div`
  padding: 0 ${tokens.spacing.lg} ${tokens.spacing.lg} calc(${tokens.spacing.lg} + 50px);
`;

const DeliverableBoard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing.xl};
  padding: ${tokens.spacing['2xl']};
  background:
    linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(255, 255, 255, 0.72)),
    ${tokens.colors.surface};
  border: 1px solid rgba(124, 58, 237, 0.16);
  ${clipBR(CHAMFER.lg)}
  box-shadow: ${tokens.shadows.card};

  ${media.lg} {
    grid-template-columns: 0.88fr 1.12fr;
    align-items: center;
  }
`;

const BoardHeadline = styled.div`
  max-width: 440px;
`;

const BoardKicker = styled.span`
  display: inline-flex;
  margin-bottom: ${tokens.spacing.md};
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  color: ${tokens.colors.primary};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const BoardTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['3xl']}, 4vw, ${tokens.fontSizes['5xl']});
  font-weight: ${tokens.fontWeights.black};
  line-height: ${tokens.lineHeights.tight};
  color: ${tokens.colors.text};
  margin-bottom: ${tokens.spacing.md};
`;

const BoardText = styled.p`
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

const DeliverableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing.md};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DeliverableStep = styled.div`
  position: relative;
  min-height: 178px;
  padding: ${tokens.spacing.lg};
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(0, 0, 0, 0.07);
  ${clipBR(CHAMFER.md)}
`;

const StepLabel = styled.span`
  display: block;
  margin-bottom: ${tokens.spacing.md};
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.semi};
  color: ${tokens.colors.primary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const StepTitle = styled.h4`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes.xl};
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
  margin-bottom: ${tokens.spacing.sm};
`;

const StepText = styled.p`
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing.md};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BenefitItem = styled.article`
  position: relative;
  min-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${tokens.spacing.xl};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  ${clipBR(CHAMFER.md)}
`;

const BenefitValue = styled.div`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['3xl']}, 4vw, ${tokens.fontSizes['5xl']});
  font-weight: ${tokens.fontWeights.black};
  line-height: 1;
  color: ${tokens.colors.text};
`;

const BenefitLabel = styled.p`
  margin-top: ${tokens.spacing.lg};
  color: ${tokens.colors.textMuted};
  line-height: ${tokens.lineHeights.relaxed};
`;

export default function OneDayPage() {
  const products = [
    {
      title: 'OneDay Claude Cowork',
      subline: 'Ab morgen bist du Viele.',
      price: '590 EUR Early Bird / 790 EUR',
      href: '/oneday/claude-cowork',
      cta: 'Details ansehen',
      image: CLAUDE_IMAGE,
      badge: 'Claude Workflows',
      deliverables: ['Research', 'Writing', 'Analyse'],
      preview:
        'Du baust deinen persönlichen Claude-Arbeitsmodus für Recherche, Schreiben, Analyse und operative Aufgaben.',
    },
    {
      title: 'OneDay Claude Code',
      subline: 'Road to Thousand Commits.',
      price: '590 EUR Early Bird / 790 EUR',
      href: CALENDLY_URL,
      cta: 'Termin anfragen',
      external: true,
      image: CLAUDE_CODE_IMAGE,
      badge: 'AI Coding',
      deliverables: ['Setup', 'Prompts', 'Review'],
      preview:
        'Ein kompakter Coding-Sprint für Teams und Builder, die Claude Code in echte Entwicklungsabläufe bringen wollen.',
    },
    {
      title: 'OneDay KI-Kompetenz',
      subline: 'EU-Zertifizierung an einem Tag.',
      price: '890 EUR',
      href: CALENDLY_URL,
      cta: 'Platz anfragen',
      external: true,
      image: KI_KOMPETENZ_IMAGE,
      badge: 'Compliance & Kompetenz',
      deliverables: ['EU AI Act', 'Rollen', 'Nachweis'],
      preview:
        'Ein strukturierter Tag für Teams, die KI-Kompetenz nicht nur behaupten, sondern sauber dokumentieren wollen.',
    },
    {
      title: 'OneDay KI-Start',
      subline: 'Der kompakte Einstieg in KI.',
      price: '250 EUR',
      href: CALENDLY_URL,
      cta: 'Platz anfragen',
      external: true,
      image: KI_START_IMAGE,
      badge: 'Einstieg',
      deliverables: ['Toolklarheit', 'Prompts', 'Routine'],
      preview:
        'Der schnelle Einstieg für alle, die KI endlich produktiv testen und erste wiederholbare Routinen aufbauen wollen.',
    },
    {
      title: 'OneDay Immobilien',
      subline: 'KI-Workflows für Makleralltag, Exposés und Akquise.',
      price: '449 EUR Pilotplatz',
      href: '/oneday/immobilien',
      cta: 'Details ansehen',
      image: IMMOBILIEN_IMAGE,
      badge: 'Immobilien',
      deliverables: ['Exposé', 'Content', 'Akquise'],
      preview:
        'Branchenspezifische Workflows für Exposés, Social Content, Eigentümer-Akquise und Kundenkommunikation.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const deliverables = [
    {
      label: 'Input',
      title: 'Dein echter Fall',
      text: 'Du bringst Aufgabe, Ziel oder Teamfrage mit. Wir arbeiten nicht im Demo-Modus.',
    },
    {
      label: 'System',
      title: 'Workflow statt Einzelprompt',
      text: 'Aus Kontext, Rollen, Qualitätscheck und Output-Format entsteht ein wiederholbarer Ablauf.',
    },
    {
      label: 'Output',
      title: 'Ergebnis zum Mitnehmen',
      text: 'Briefing, Prompt-Toolkit, Prototyp, Zertifizierung oder konkrete Entscheidungsgrundlage.',
    },
    {
      label: 'Transfer',
      title: 'Nächste Woche nutzbar',
      text: 'Du gehst mit den nächsten Schritten raus und weißt, wie der Workflow in deinen Alltag kommt.',
    },
  ];

  const benefits = [
    { value: '3-5 Std.', label: 'pro Woche einsparen, wenn ein wiederkehrender Workflow sauber sitzt.' },
    { value: '1 Toolkit', label: 'Prompts, Checklisten und nächste Schritte statt einer losen Mitschrift.' },
    { value: '0 Vorwissen', label: 'du kannst starten, ohne technischen Hintergrund oder Tool-Overload.' },
    { value: '1 Ergebnis', label: 'am Ende steht ein nutzbarer Workflow, Prototyp oder Kompetenznachweis.' },
  ];

  const faq = [
    { q: 'Was lerne ich an einem Tag?', a: 'Du arbeitest an einem klaren Thema und gehst mit einem konkreten Ergebnis raus: Workflow, Tool-Setup, Zertifizierung oder Entscheidungsgrundlage.' },
    { q: 'Für wen sind die OneDay Workshops geeignet?', a: 'Für Einzelpersonen, Professionals und Teams, die schnell Orientierung oder einen produktiven Einstieg in ein konkretes KI-Thema brauchen.' },
    { q: 'Brauche ich Vorkenntnisse?', a: 'Nein. Die Workshops sind praxisnah aufgebaut und starten mit dem nötigen Kontext. Fortgeschrittene Formate werden entsprechend gekennzeichnet.' },
    { q: 'Kann mein Arbeitgeber die Kosten übernehmen?', a: 'Ja. Viele Teilnehmer buchen OneDay über Weiterbildungbudgets. Für Teamtermine erstellen wir ein separates Angebot.' },
    { q: 'Gibt es Folgeprogramme nach dem OneDay?', a: 'Ja. Je nach Ziel passen danach AfterWork, FortyDays oder eine Inhouse-Schulung für dein Team.' },
  ];

  return (
    <SubpageLayout>
      <PageHero
        badge="Tagesformate"
        badgeColor={tokens.colors.primary}
        badgeBg={tokens.colors.primaryLighter}
        title="Ein Tag verändert, <span>was du morgen tust.</span>"
        subtitle="Intensive Tagesworkshops. Praxisnah, mit konkreten Deliverables. Kein Vorwissen nötig."
        breadcrumbs={[{ label: 'OneDay', href: '/oneday', active: true }]}
        accentColor={tokens.colors.primaryLighter}
        image="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_900/v1776473243/ai-hub/website/AI-Academy-Website-Images/hero-panel-unternehmen-upscaled.png"
      >
        <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" arrow>
          Platz sichern
        </Button>
        <Button href="/wissens-test" variant="secondary" size="lg">
          Format finden
        </Button>
      </PageHero>

      <SectionBlock
        badge="Produkte"
        title="Wähle deinen <span>OneDay.</span>"
        subtitle="Links das Gefühl, rechts die Entscheidung: Fahre über einen Workshop und sieh sofort, was du mitnimmst."
        accent={tokens.colors.glow}
      >
        <ExplorerGrid>
          <PreviewPanel aria-live="polite">
            <CyberCorners $color={tokens.colors.primary} $size={14} />
            <PreviewImage key={activeProduct.image} src={activeProduct.image} alt="" loading="eager" />
            <PreviewShade />
            <PreviewCopy>
              <PreviewKicker>{activeProduct.badge}</PreviewKicker>
              <PreviewTitle>{activeProduct.title}</PreviewTitle>
              <PreviewText>{activeProduct.preview}</PreviewText>
              <PreviewFacts>
                <PreviewFact>{activeProduct.price}</PreviewFact>
                {activeProduct.deliverables.map((deliverable) => (
                  <PreviewFact key={deliverable}>{deliverable}</PreviewFact>
                ))}
              </PreviewFacts>
            </PreviewCopy>
          </PreviewPanel>

          <WorkshopList>
            {products.map((product, index) => {
              const isActive = index === activeIndex;
              return (
                <WorkshopItem key={product.title} $active={isActive}>
                  <CyberCorners $color={isActive ? tokens.colors.primary : tokens.colors.textDim} $size={7} />
                  <WorkshopButton
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <WorkshopIndex $active={isActive}>{String(index + 1).padStart(2, '0')}</WorkshopIndex>
                    <div>
                      <WorkshopTitleRow>
                        <WorkshopTitle>{product.title}</WorkshopTitle>
                        <WorkshopPrice>{product.price}</WorkshopPrice>
                      </WorkshopTitleRow>
                      <WorkshopText>{product.subline}</WorkshopText>
                      <WorkshopDeliverables>
                        {product.deliverables.map((deliverable) => (
                          <WorkshopDeliverable key={deliverable}>{deliverable}</WorkshopDeliverable>
                        ))}
                      </WorkshopDeliverables>
                    </div>
                  </WorkshopButton>
                  {isActive && product.href && (
                    <ProductActions>
                      <Button
                        href={product.href}
                        target={product.external ? '_blank' : undefined}
                        rel={product.external ? 'noopener noreferrer' : undefined}
                        variant="secondary"
                        size="sm"
                        arrow
                      >
                        {product.cta}
                      </Button>
                    </ProductActions>
                  )}
                </WorkshopItem>
              );
            })}
          </WorkshopList>
        </ExplorerGrid>
      </SectionBlock>

      <SectionBlock
        badge="Deliverable"
        title="Ein Tag, ein klares <span>Ergebnis.</span>"
        variant="muted"
        accent={tokens.colors.glow}
      >
        <DeliverableBoard>
          <CyberCorners $color={tokens.colors.primary} $size={14} />
          <BoardHeadline>
            <BoardKicker>Workshop Operating System</BoardKicker>
            <BoardTitle>Vom offenen Thema zum nutzbaren Arbeitsablauf.</BoardTitle>
            <BoardText>
              OneDay ist bewusst kein Folienmarathon. Jede Einheit ist so gebaut, dass aus einem echten Fall ein
              verwertbarer Output entsteht.
            </BoardText>
          </BoardHeadline>
          <DeliverableGrid>
            {deliverables.map((item) => (
              <DeliverableStep key={item.label}>
                <CyberCorners $color={tokens.colors.primary} $size={6} />
                <StepLabel>{item.label}</StepLabel>
                <StepTitle>{item.title}</StepTitle>
                <StepText>{item.text}</StepText>
              </DeliverableStep>
            ))}
          </DeliverableGrid>
        </DeliverableBoard>
      </SectionBlock>

      <SectionBlock
        badge="Benefit"
        title="Was sich nach einem Tag <span>verändert.</span>"
        subtitle="Die Zahlen sind kein Selbstzweck. Sie beschreiben, was der Workshop im Alltag leichter machen soll."
        accent={tokens.colors.glow}
      >
        <BenefitGrid>
          {benefits.map((item) => (
            <BenefitItem key={item.value}>
              <CyberCorners $color={tokens.colors.primary} $size={7} />
              <BenefitValue>{item.value}</BenefitValue>
              <BenefitLabel>{item.label}</BenefitLabel>
            </BenefitItem>
          ))}
        </BenefitGrid>
      </SectionBlock>

      <SectionBlock badge="FAQ" title="Fragen zu <span>OneDay.</span>" accent={tokens.colors.glow}>
        <MiniFAQ items={faq} accentColor={tokens.colors.primary} />
      </SectionBlock>

      <CTABanner
        title="Sichert euch den <span>nächsten Termin.</span>"
        subtitle="Wir helfen dir, den passenden OneDay für dich oder dein Team auszuwählen."
      >
        <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" arrow>
          Platz sichern
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
