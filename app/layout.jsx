import StyledComponentsRegistry from '../lib/registry';

export const metadata = {
  title: 'STARTPLATZ AI Hub | KI-Weiterbildung & Bootcamps in Köln & Düsseldorf',
  description:
    'STARTPLATZ AI Hub – Geförderte KI-Weiterbildungen, praxisnahe Bootcamps und anerkannte Zertifizierungen in Köln & Düsseldorf. 100 % förderfähig mit Bildungsgutschein. Starte jetzt deine Karriere in der KI-Branche.',
  keywords:
    'KI Weiterbildung, AI Bootcamp, Bildungsgutschein, Künstliche Intelligenz Kurs, STARTPLATZ, Köln, Düsseldorf, Machine Learning, Prompt Engineering, ChatGPT, KI-Manager, geförderte Weiterbildung, AZAV zertifiziert',
  authors: [{ name: 'STARTPLATZ AI Hub' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  metadataBase: new URL('https://ai-hub.startplatz.de'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'STARTPLATZ AI Hub',
    title: 'STARTPLATZ AI Hub | KI-Weiterbildung & Bootcamps',
    description:
      'Geförderte Bootcamps, praxisnahe Kurse und eine starke Community für KI-Kompetenz in NRW. 100 % förderfähig mit Bildungsgutschein.',
    url: 'https://ai-hub.startplatz.de/',
    images: [
      {
        url: 'https://res.cloudinary.com/startplatz/image/upload/v1771197824/ai-hub/website/website_stock_images/gruppenfoto.png',
        width: 1200,
        height: 630,
        alt: 'STARTPLATZ AI Hub Team – Gruppenfoto',
      },
    ],
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STARTPLATZ AI Hub | KI-Weiterbildung & Bootcamps',
    description:
      'Geförderte Bootcamps, praxisnahe Kurse und eine starke Community für KI-Kompetenz in NRW.',
    images: [
      {
        url: 'https://res.cloudinary.com/startplatz/image/upload/v1771197824/ai-hub/website/website_stock_images/gruppenfoto.png',
        alt: 'STARTPLATZ AI Hub Team – Gruppenfoto',
      },
    ],
  },
  other: {
    'theme-color': '#7C3AED',
    'color-scheme': 'light',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'STARTPLATZ AI Hub',
    url: 'https://ai-hub.startplatz.de/',
    logo: 'https://res.cloudinary.com/startplatz/image/upload/v1735664652/ai-hub/Logos/Logos%20-%20Regular/Logo-Black.png',
    description:
      'Geförderte KI-Weiterbildungen, praxisnahe Bootcamps und anerkannte Zertifizierungen in Köln und Düsseldorf.',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Im Mediapark 5',
        addressLocality: 'Köln',
        postalCode: '50670',
        addressCountry: 'DE',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Düsseldorf',
        addressCountry: 'DE',
      },
    ],
    telephone: '+49221123456',
    email: 'hello@ai-hub.de',
    sameAs: [
      'https://www.linkedin.com/company/startplatz',
      'https://www.instagram.com/startplatz',
      'https://www.youtube.com/@startplatz',
    ],
    offers: {
      '@type': 'Offer',
      category: 'KI-Weiterbildung',
      description: '100 % förderfähig mit Bildungsgutschein',
      areaServed: {
        '@type': 'Place',
        name: 'Nordrhein-Westfalen, Deutschland',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'STARTPLATZ AI Hub',
    url: 'https://ai-hub.startplatz.de/',
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Preload hero images */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_800/v1767662279/ai-hub/website/website_stock_images/EVENT-01.png"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_800/v1767662282/ai-hub/website/website_stock_images/EVENT-03.png"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_800/v1767662288/ai-hub/website/website_stock_images/EVENT-04.png"
        />

        {/* JSON-LD */}
        {jsonLd.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}

        {/* Inline critical CSS for preloader / base reset */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
              html { scroll-behavior: smooth; }
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                background: #FFFFFF;
                color: #111827;
                overflow-x: hidden;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              #__next { min-height: 100vh; }
              .preloader {
                position: fixed; inset: 0; z-index: 10000;
                background: #FFFFFF;
                display: flex; align-items: center; justify-content: center;
              }
              .preloader-ring {
                width: 48px; height: 48px;
                border: 3px solid rgba(124, 58, 237, 0.15);
                border-top-color: #7C3AED;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
              }
              @keyframes spin { to { transform: rotate(360deg); } }
            `,
          }}
        />
      </head>
      <body>
        <div className="preloader" id="preloader">
          <div className="preloader-ring" />
        </div>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
