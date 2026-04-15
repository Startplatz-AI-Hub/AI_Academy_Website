'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { tokens, media } from '../../../styles/tokens';
import SubpageLayout from '../../../components/SubpageLayout';
import PageHero from '../../../components/ui/PageHero';
import BlogCard from '../../../components/ui/BlogCard';
import CTABanner from '../../../components/ui/CTABanner';
import Button from '../../../components/ui/Button';

/* Blog content data mapping */
const BLOG_CONTENT = {
  'generative-ai-kreativbranche': {
    title: 'Wie Generative AI die Kreativbranche revolutioniert',
    badge: 'Trend Report',
    category: 'Trend Report',
    excerpt: 'Generative KI-Modelle transformieren die Kreativbranche. Von Design über Content Creation bis zur Fotografie – erfahren Sie, wie KI kreative Prozesse verändert und neue Möglichkeiten eröffnet.',
    publishedAt: '15 Apr 2026',
    readingTime: '8 min Lesezeit',
    author: 'STARTPLATZ AI Academy',
    content: `
      <h2>Einleitung</h2>
      <p>Die Kreativbranche steht an einem Wendepunkt. Generative Künstliche Intelligenz ist nicht mehr Science Fiction, sondern Realität. Tools wie DALL-E, Midjourney und Stable Diffusion ermöglichen es Kreativfachleuten, ihre Visionen schneller und effizienter zu realisieren. Gleichzeitig eröffnen diese Technologien völlig neue Möglichkeiten für Innovation und Experimentation.</p>

      <h2>Die transformative Kraft der generativen KI</h2>
      <p>Generative KI-Systeme lernen aus riesigen Mengen an Trainingsdaten und können anschließend völlig neue Inhalte erstellen – sei es Bilder, Text oder Code. Für die Kreativbranche bedeutet dies eine fundamentale Veränderung der Arbeitsweise:</p>
      <ul>
        <li><strong>Schnellere Ideation:</strong> Kreative können mehrere Konzepte in Minuten statt Stunden generieren</li>
        <li><strong>Überwindung von Blockaden:</strong> KI kann helfen, kreative Herausforderungen zu überwinden</li>
        <li><strong>Neue Kunstformen:</strong> Völlig neue Wege der künstlerischen Ausdrucksfähigkeit entstehen</li>
      </ul>

      <h2>Praktische Anwendungen</h2>
      <p>Die praktischen Anwendungen sind vielfältig und wachsen täglich. In der Grafikdesign werden KI-Tools zur Komposition, zur Erstellung von Variationen und zur Automatisierung von wiederholten Aufgaben eingesetzt. Content Creator nutzen Text-zu-Bild-Modelle, um schnell visuelle Konzepte zu kommunizieren. Fotografen experimentieren mit KI-gestützter Bildbearbeitung und kreativen Filtern.</p>

      <p>Auch in der Werbung, dem Filmmaking und der Spielentwicklung zeigen sich enorme Potenziale. Es entstehen neue Rollen und neue Spezialisierungen – etwa der „AI-Prompt-Engineer" oder der „Kreative KI-Direktor".</p>

      <h2>Chancen und Herausforderungen</h2>
      <p>Die größten Chancen liegen in der Demokratisierung von kreativen Tools: Nicht nur große Studios mit großen Budgets können fotorealistische 3D-Umgebungen oder Illustrationen erstellen. Kleine Teams und Einzelne erhalten Zugang zu Fähigkeiten, die früher unerreichbar waren.</p>

      <p>Die Herausforderungen sind ebenso real. Fragen zu Urheberrecht, zur authentischen menschlichen Kreativität und zur Verlagerung von Arbeitsplätzen müssen diskutiert werden. Viele Kreative fragen: Wird KI meine Fähigkeiten ersetzen? Die Antwort ist nuanciert: KI ersetzt Fähigkeiten, die durch wiederholte, strukturierte Arbeit erworben wurden. Kreativität im engeren Sinne – die Fähigkeit, einzigartige Perspektiven zu haben und innovative Probleme zu lösen – wird auf absehbare Zeit menschlich geprägt bleiben.</p>

      <h2>Best Practices und Ansätze</h2>
      <p>Kreative, die erfolgreich mit generativer KI arbeiten, folgen einigen bewährten Praktiken:</p>
      <ul>
        <li>Sie nutzen KI als Werkzeug, nicht als Ersatz für ihre Expertise</li>
        <li>Sie verstehen die technischen Grundlagen ihrer Tools</li>
        <li>Sie experimentieren und iterieren kontinuierlich</li>
        <li>Sie behalten die Kontrolle über Qualität, Stil und Vision</li>
      </ul>

      <h2>Fazit</h2>
      <p>Generative KI revolutioniert nicht die Kreativbranche, sondern verschiebt sie. Die wichtigsten Fähigkeiten der Zukunft werden nicht darin bestehen, Techniken zu kennen, sondern zu wissen, wie man KI als Werkzeug effektiv einsetzt, um bessere, schneller und kreativer zu arbeiten. Kreative, die diesen Übergang aktiv gestalten und ihr Verständnis von KI vertiefen, werden in der kommenden Dekade führend sein.</p>
    `,
    relatedArticles: [
      {
        slug: 'prompt-engineering-anfaenger',
        title: 'Prompt Engineering: Der ultimative Einsteiger Guide',
        badge: 'Tutorial',
      },
      {
        slug: 'machine-learning-basics',
        title: 'Machine Learning Basics: Von der Theorie zur Praxis',
        badge: 'Deep Dive',
      },
      {
        slug: '5-skills-ki-manager',
        title: '5 Skills, die jeder KI-Manager braucht',
        badge: 'Karriere',
      },
    ],
  },
  '5-skills-ki-manager': {
    title: '5 Skills, die jeder KI-Manager braucht',
    badge: 'Karriere',
    category: 'Karriere',
    excerpt: 'Welche Kompetenzen sind entscheidend für die Führung von KI-Projekten? Erfahren Sie, welche 5 Skills in der modernen KI-Wirtschaft unverzichtbar sind.',
    publishedAt: '12 Apr 2026',
    readingTime: '6 min Lesezeit',
    author: 'STARTPLATZ AI Academy',
    content: `
      <h2>Einleitung</h2>
      <p>Placeholder-Inhalte. Dieser Artikel wird ausführlich besprechen, welche Skills KI-Manager im Jahr 2026 und darüber hinaus benötigen, um erfolgreich Projekte zu leiten und Teams zu führen.</p>
      <p>Bleiben Sie dran für den vollständigen Artikel.</p>
    `,
    relatedArticles: [
      {
        slug: 'generative-ai-kreativbranche',
        title: 'Wie Generative AI die Kreativbranche revolutioniert',
        badge: 'Trend Report',
      },
      {
        slug: 'interview-zukunft-arbeit-ki',
        title: 'Interview: Die Zukunft der Arbeit mit KI',
        badge: 'Interview',
      },
      {
        slug: 'prompt-engineering-anfaenger',
        title: 'Prompt Engineering: Der ultimative Einsteiger Guide',
        badge: 'Tutorial',
      },
    ],
  },
  'prompt-engineering-anfaenger': {
    title: 'Prompt Engineering: Der ultimative Einsteiger Guide',
    badge: 'Tutorial',
    category: 'Tutorial',
    excerpt: 'Meistern Sie die Kunst, bessere Prompts zu schreiben. In diesem Guide lernen Sie, wie Sie das Beste aus KI-Modellen herausholen.',
    publishedAt: '10 Apr 2026',
    readingTime: '10 min Lesezeit',
    author: 'STARTPLATZ AI Academy',
    content: `
      <h2>Einleitung</h2>
      <p>Placeholder-Inhalte. Dieser umfassende Tutorial-Artikel wird Ihnen Schritt für Schritt zeigen, wie Sie effektive Prompts schreiben und versteckte Fähigkeiten von KI-Modellen freisetzen.</p>
      <p>Vollständiger Inhalt folgt demnächst.</p>
    `,
    relatedArticles: [
      {
        slug: 'generative-ai-kreativbranche',
        title: 'Wie Generative AI die Kreativbranche revolutioniert',
        badge: 'Trend Report',
      },
      {
        slug: 'machine-learning-basics',
        title: 'Machine Learning Basics: Von der Theorie zur Praxis',
        badge: 'Deep Dive',
      },
      {
        slug: 'chatgpt-claude-gemini-vergleich',
        title: 'ChatGPT vs. Claude vs. Gemini: Der große Vergleich 2026',
        badge: 'Vergleich',
      },
    ],
  },
  'interview-zukunft-arbeit-ki': {
    title: 'Interview: Die Zukunft der Arbeit mit KI',
    badge: 'Interview',
    category: 'Interview',
    excerpt: 'Führende Experten teilen ihre Perspektive auf die zukünftige Arbeitswelt mit KI.',
    publishedAt: '08 Apr 2026',
    readingTime: '12 min Lesezeit',
    author: 'STARTPLATZ AI Academy',
    content: `
      <h2>Einleitung</h2>
      <p>Placeholder-Inhalte. Dieses exklusives Interview mit Branchenexperten diskutiert die Auswirkungen von KI auf verschiedene Branchen und Karrieren.</p>
      <p>Der vollständige Interview-Artikel wird in Kürze verfügbar sein.</p>
    `,
    relatedArticles: [
      {
        slug: '5-skills-ki-manager',
        title: '5 Skills, die jeder KI-Manager braucht',
        badge: 'Karriere',
      },
      {
        slug: 'generative-ai-kreativbranche',
        title: 'Wie Generative AI die Kreativbranche revolutioniert',
        badge: 'Trend Report',
      },
      {
        slug: 'bildungsgutschein-ki-kurse',
        title: 'Bildungsgutschein für KI-Kurse: Alles was du wissen musst',
        badge: 'Förderung',
      },
    ],
  },
  'chatgpt-claude-gemini-vergleich': {
    title: 'ChatGPT vs. Claude vs. Gemini: Der große Vergleich 2026',
    badge: 'Vergleich',
    category: 'Vergleich',
    excerpt: 'Ein umfassender Vergleich der führenden Sprachmodelle und ihrer jeweiligen Stärken.',
    publishedAt: '05 Apr 2026',
    readingTime: '9 min Lesezeit',
    author: 'STARTPLATZ AI Academy',
    content: `
      <h2>Einleitung</h2>
      <p>Placeholder-Inhalte. In diesem Vergleich werden die Unterschiede, Stärken und Schwächen der führenden KI-Sprachmodelle analysiert.</p>
      <p>Der vollständige Vergleichsartikel wird demnächst veröffentlicht.</p>
    `,
    relatedArticles: [
      {
        slug: 'prompt-engineering-anfaenger',
        title: 'Prompt Engineering: Der ultimative Einsteiger Guide',
        badge: 'Tutorial',
      },
      {
        slug: 'machine-learning-basics',
        title: 'Machine Learning Basics: Von der Theorie zur Praxis',
        badge: 'Deep Dive',
      },
      {
        slug: 'generative-ai-kreativbranche',
        title: 'Wie Generative AI die Kreativbranche revolutioniert',
        badge: 'Trend Report',
      },
    ],
  },
  'bildungsgutschein-ki-kurse': {
    title: 'Bildungsgutschein für KI-Kurse: Alles was du wissen musst',
    badge: 'Förderung',
    category: 'Förderung',
    excerpt: 'Erfahren Sie, wie Sie Bildungsgutscheine und andere Förderungen für KI-Weiterbildung nutzen können.',
    publishedAt: '02 Apr 2026',
    readingTime: '7 min Lesezeit',
    author: 'STARTPLATZ AI Academy',
    content: `
      <h2>Einleitung</h2>
      <p>Placeholder-Inhalte. Dieser Leitfaden unterstützt Sie dabei, verfügbare Fördermöglichkeiten und Bildungsgutscheine für KI-Kurse zu finden und zu nutzen.</p>
      <p>Der vollständige Artikel folgt bald.</p>
    `,
    relatedArticles: [
      {
        slug: '5-skills-ki-manager',
        title: '5 Skills, die jeder KI-Manager braucht',
        badge: 'Karriere',
      },
      {
        slug: 'interview-zukunft-arbeit-ki',
        title: 'Interview: Die Zukunft der Arbeit mit KI',
        badge: 'Interview',
      },
      {
        slug: 'machine-learning-basics',
        title: 'Machine Learning Basics: Von der Theorie zur Praxis',
        badge: 'Deep Dive',
      },
    ],
  },
  'machine-learning-basics': {
    title: 'Machine Learning Basics: Von der Theorie zur Praxis',
    badge: 'Deep Dive',
    category: 'Deep Dive',
    excerpt: 'Verstehen Sie die Fundamentalprinzipien des Machine Learning und wenden Sie diese in praktischen Projekten an.',
    publishedAt: '31 Mär 2026',
    readingTime: '14 min Lesezeit',
    author: 'STARTPLATZ AI Academy',
    content: `
      <h2>Einleitung</h2>
      <p>Placeholder-Inhalte. Dieser tiefgreifende Artikel erklärt Machine Learning-Konzepte vom Anfänger bis zum fortgeschrittenen Niveau.</p>
      <p>Der vollständige Artikel wird in Kürze verfügbar sein.</p>
    `,
    relatedArticles: [
      {
        slug: 'prompt-engineering-anfaenger',
        title: 'Prompt Engineering: Der ultimative Einsteiger Guide',
        badge: 'Tutorial',
      },
      {
        slug: 'generative-ai-kreativbranche',
        title: 'Wie Generative AI die Kreativbranche revolutioniert',
        badge: 'Trend Report',
      },
      {
        slug: 'chatgpt-claude-gemini-vergleich',
        title: 'ChatGPT vs. Claude vs. Gemini: Der große Vergleich 2026',
        badge: 'Vergleich',
      },
    ],
  },
};

/* Styled components */
const ArticleSection = styled.section`
  padding: ${tokens.spacing['3xl']} 0;
  background: ${tokens.colors.pageBg};
`;

const ArticleContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${tokens.spacing.lg};
  ${media.lg} {
    padding: 0 ${tokens.spacing['2xl']};
  }
`;

const ArticleBody = styled.div`
  max-width: 720px;
  margin: 0 auto ${tokens.spacing['4xl']};
  padding: ${tokens.spacing['3xl']} ${tokens.spacing.lg};
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  border-radius: ${tokens.radii.md};

  ${media.md} {
    padding: ${tokens.spacing['3xl']};
  }

  h2 {
    font-family: ${tokens.fonts.display};
    font-size: ${tokens.fontSizes['2xl']};
    font-weight: ${tokens.fontWeights.bold};
    color: ${tokens.colors.text};
    margin-top: ${tokens.spacing['2xl']};
    margin-bottom: ${tokens.spacing.lg};
    line-height: ${tokens.lineHeights.snug};
  }

  h2:first-child {
    margin-top: 0;
  }

  p {
    font-family: ${tokens.fonts.body};
    font-size: ${tokens.fontSizes.base};
    color: ${tokens.colors.textSoft};
    line-height: ${tokens.lineHeights.relaxed};
    margin-bottom: ${tokens.spacing.lg};
  }

  ul, ol {
    margin: ${tokens.spacing.lg} 0;
    padding-left: ${tokens.spacing['2xl']};
  }

  li {
    font-family: ${tokens.fonts.body};
    font-size: ${tokens.fontSizes.base};
    color: ${tokens.colors.textSoft};
    line-height: ${tokens.lineHeights.relaxed};
    margin-bottom: ${tokens.spacing.sm};
  }

  strong {
    font-weight: ${tokens.fontWeights.bold};
    color: ${tokens.colors.text};
  }
`;

const RelatedSection = styled.section`
  padding: ${tokens.spacing['3xl']} 0;
  background: ${tokens.colors.surface};
`;

const RelatedTitle = styled.h2`
  font-family: ${tokens.fonts.display};
  font-size: clamp(${tokens.fontSizes['2xl']}, 3vw, ${tokens.fontSizes['4xl']});
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
  text-align: center;
  margin-bottom: ${tokens.spacing['3xl']};
  line-height: ${tokens.lineHeights.snug};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing['2xl']};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params?.slug;

  const article = slug ? BLOG_CONTENT[slug] : null;

  if (!article) {
    return (
      <SubpageLayout>
        <PageHero
          badge="Artikel nicht gefunden"
          title="Seite nicht <span>gefunden</span>"
          subtitle="Der Artikel, den Sie suchen, existiert nicht."
          breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
        />
        <ArticleSection>
          <ArticleContainer style={{ textAlign: 'center' }}>
            <p style={{ fontSize: tokens.fontSizes.lg, color: tokens.colors.textMuted }}>
              Zurück zur <a href="/blog" style={{ color: tokens.colors.primary }}>Blog-Übersicht</a>
            </p>
          </ArticleContainer>
        </ArticleSection>
      </SubpageLayout>
    );
  }

  return (
    <SubpageLayout>
      <PageHero
        badge={article.badge}
        title={article.title}
        subtitle={article.excerpt}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: article.title },
        ]}
      />

      <ArticleSection>
        <ArticleContainer>
          <ArticleBody dangerouslySetInnerHTML={{ __html: article.content }} />
        </ArticleContainer>
      </ArticleSection>

      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <RelatedSection>
          <ArticleContainer>
            <RelatedTitle>Mehr Artikel</RelatedTitle>
            <RelatedGrid>
              {article.relatedArticles.map((relatedArticle) => (
                <BlogCard
                  key={relatedArticle.slug}
                  title={relatedArticle.title}
                  badge={relatedArticle.badge}
                  slug={relatedArticle.slug}
                />
              ))}
            </RelatedGrid>
          </ArticleContainer>
        </RelatedSection>
      )}

      <CTABanner
        title="Mehr über <span>KI-Trends</span> erfahren?"
        subtitle="Folgen Sie unserem Blog für die neuesten Einsichten und praktische Guides zur Künstlichen Intelligenz."
      >
        <Button variant="primary" size="lg" href="/blog">
          Zu allen Artikeln
        </Button>
        <Button variant="secondary" size="lg" href="/">
          Zu den Kursen
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
