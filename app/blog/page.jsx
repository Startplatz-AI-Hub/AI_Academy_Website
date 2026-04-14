'use client';

import React from 'react';
import styled from 'styled-components';
import { tokens, media } from '../../styles/tokens';
import SubpageLayout from '../../components/SubpageLayout';
import PageHero from '../../components/ui/PageHero';
import BlogCard from '../../components/ui/BlogCard';
import CTABanner from '../../components/ui/CTABanner';
import Button from '../../components/ui/Button';

/* Blog posts data */
const BLOG_POSTS = [
  {
    id: 1,
    slug: 'generative-ai-kreativbranche',
    title: 'Wie Generative AI die Kreativbranche revolutioniert',
    badge: 'Trend Report',
    excerpt: 'Entdecken Sie, wie generative KI-Modelle Design, Fotografie und kreative Prozesse transformieren.',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8f45a1ad0991b17a4c0ea29a73?w=800&h=500&fit=crop',
    meta: '15 Apr 2026 • 8 min Lesezeit',
    featured: true,
  },
  {
    id: 2,
    slug: '5-skills-ki-manager',
    title: '5 Skills, die jeder KI-Manager braucht',
    badge: 'Karriere',
    excerpt: 'Entwickeln Sie die wichtigsten Fähigkeiten, um in der KI-Wirtschaft erfolgreich zu sein.',
    meta: '12 Apr 2026 • 6 min Lesezeit',
  },
  {
    id: 3,
    slug: 'prompt-engineering-anfaenger',
    title: 'Prompt Engineering: Der ultimative Einsteiger Guide',
    badge: 'Tutorial',
    excerpt: 'Lernen Sie, wie Sie bessere Prompts schreiben und das Beste aus KI-Modellen herausholen.',
    meta: '10 Apr 2026 • 10 min Lesezeit',
  },
  {
    id: 4,
    slug: 'interview-zukunft-arbeit-ki',
    title: 'Interview: Die Zukunft der Arbeit mit KI',
    badge: 'Interview',
    excerpt: 'Experten diskutieren, wie KI die Arbeitswelt und unsere berufliche Zukunft verändern wird.',
    meta: '08 Apr 2026 • 12 min Lesezeit',
  },
  {
    id: 5,
    slug: 'chatgpt-claude-gemini-vergleich',
    title: 'ChatGPT vs. Claude vs. Gemini: Der große Vergleich 2026',
    badge: 'Vergleich',
    excerpt: 'Umfassender Überblick über die führenden KI-Sprachmodelle und ihre Stärken.',
    meta: '05 Apr 2026 • 9 min Lesezeit',
  },
  {
    id: 6,
    slug: 'bildungsgutschein-ki-kurse',
    title: 'Bildungsgutschein für KI-Kurse: Alles was du wissen musst',
    badge: 'Förderung',
    excerpt: 'So nutzt du Bildungsgutscheine und weitere Förderungen für KI-Weiterbildung.',
    meta: '02 Apr 2026 • 7 min Lesezeit',
  },
  {
    id: 7,
    slug: 'machine-learning-basics',
    title: 'Machine Learning Basics: Von der Theorie zur Praxis',
    badge: 'Deep Dive',
    excerpt: 'Fundamentale Konzepte des Machine Learning verständlich erklärt und angewendet.',
    meta: '31 Mär 2026 • 14 min Lesezeit',
  },
];

const Section = styled.section`
  padding: ${tokens.spacing['3xl']} 0;
  background: ${tokens.colors.pageBg};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${tokens.spacing.lg};
  ${media.xl} {
    padding: 0 ${tokens.spacing['2xl']};
  }
`;

const FeaturedWrapper = styled.div`
  margin-bottom: ${tokens.spacing['4xl']};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing['2xl']};
  margin-bottom: ${tokens.spacing['4xl']};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  const regularPosts = BLOG_POSTS.filter((post) => !post.featured);

  return (
    <SubpageLayout>
      <PageHero
        badge="Blog & Insights"
        title="Wissen für die <span>KI-Zukunft</span>"
        subtitle="Erkunden Sie unsere Artikel, Tutorials, Interviews und Guides zu generativer KI, Machine Learning und modernem Karriereaufbau."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <Section>
        <Container>
          {featuredPost && (
            <FeaturedWrapper>
              <BlogCard
                title={featuredPost.title}
                badge={featuredPost.badge}
                meta={featuredPost.meta}
                excerpt={featuredPost.excerpt}
                image={featuredPost.image}
                slug={featuredPost.slug}
                featured
              />
            </FeaturedWrapper>
          )}

          <GridWrapper>
            {regularPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                badge={post.badge}
                meta={post.meta}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            ))}
          </GridWrapper>
        </Container>
      </Section>

      <CTABanner
        title="Bereit zum <span>KI-Einstieg?</span>"
        subtitle="Entdecke unsere speziell entwickelten Kurse und erlerne die Fähigkeiten für die KI-Zukunft."
      >
        <Button variant="primary" size="lg" href="/">
          Zu den Kursen
        </Button>
        <Button variant="secondary" size="lg" href="/">
          Mehr erfahren
        </Button>
      </CTABanner>
    </SubpageLayout>
  );
}
