import OneDayDetailPage from '../../../components/OneDayDetailPage';
import { CALENDLY_URL } from '../../../lib/site';

export const metadata = {
  title: 'OneDay Claude Cowork | STARTPLATZ AI Academy',
  description:
    'Ein intensiver Praxistag für Claude im Arbeitsalltag: Workflows, Prompt-Systeme, Recherche, Schreiben, Analyse und direkte Anwendung an eigenen Aufgaben.',
  alternates: { canonical: '/oneday/claude-cowork' },
};

const config = {
  href: '/oneday/claude-cowork',
  breadcrumb: 'Claude Cowork',
  badge: 'OneDay Workshop · Claude',
  accent: 'primary',
  title: 'OneDay <span>Claude Cowork.</span>',
  subtitle:
    'Ein Tag, an dem du Claude nicht erklärt bekommst, sondern mit Claude arbeitest. Du baust deinen persönlichen AI-Arbeitsmodus für Recherche, Schreiben, Analyse und operative Aufgaben.',
  heroImage: 'https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_1400/v1777162756/ai-hub/website/AI-Academy-Website-Images/oneday-claude-cowork-hero.png',
  ctaHref: CALENDLY_URL,
  primaryCta: 'Platz sichern',
  meta: [
    { value: '1 Tag', label: '09-17 Uhr' },
    { value: '590 EUR', label: 'Early Bird' },
    { value: '790 EUR', label: 'Regulär' },
    { value: 'Köln', label: 'STARTPLATZ' },
  ],
  why: {
    badge: 'Warum Claude Cowork',
    title: 'Vom Chatten zum <span>Arbeitsmodus.</span>',
    subtitle:
      'Claude wird stark, wenn Kontext, Rollen, Dateien, Denkstruktur und Output-Standards zusammenkommen. Genau das trainieren wir hands-on.',
    cards: [
      {
        title: 'Eigene Aufgaben statt Demo',
        description:
          'Du bringst echte Texte, Entscheidungen, Recherchen oder Prozessaufgaben mit und arbeitest direkt daran.',
      },
      {
        title: 'Prompt-Systeme statt Einzelprompts',
        description:
          'Du baust wiederverwendbare Arbeitsvorlagen, die jeden Tag schneller und konsistenter machen.',
      },
      {
        title: 'Claude richtig nutzen',
        description:
          'Du lernst, wie du Kontextfenster, Dateien, Artefakte und Iterationen sinnvoll steuerst.',
      },
      {
        title: 'Direkt produktiv',
        description:
          'Am Ende hast du dein eigenes Claude-Setup, nicht nur Notizen aus einem Seminar.',
      },
    ],
  },
  useCases: {
    badge: 'Was du baust',
    title: 'Vier Workflows, die <span>morgen laufen.</span>',
    subtitle:
      'Der Tag ist so aufgebaut, dass du konkrete Ergebnisse mitnimmst und nicht bei Theorie hängenbleibst.',
    items: [
      {
        title: 'Research Sprint',
        description:
          'Markt, Wettbewerb, Kundengruppe oder Fachthema strukturiert recherchieren und in ein verwertbares Briefing verdichten.',
        features: ['Recherche-Framework', 'Quellen-Check', 'Executive Summary'],
      },
      {
        title: 'Writing System',
        description:
          'Claude so briefen, dass Texte nach deinem Stil, deiner Tonalität und deinem Ziel entstehen.',
        features: ['Styleguide', 'Copy-Varianten', 'Review-Prompt'],
      },
      {
        title: 'Analyse & Entscheidung',
        description:
          'Dokumente, Tabellen oder Notizen analysieren und daraus Entscheidungsgrundlagen machen.',
        features: ['Strukturierte Auswertung', 'Risiko-Fragen', 'Nächste Schritte'],
      },
      {
        title: 'Persönlicher AI-Coworker',
        description:
          'Ein wiederverwendbares Setup für deine häufigsten Aufgaben, inklusive Rollen, Kontext und Output-Regeln.',
        features: ['Master-Prompt', 'Arbeitsroutine', 'Qualitätscheck'],
      },
    ],
  },
  visual: {
    title: 'Claude Cowork Workspace',
    image: 'https://res.cloudinary.com/startplatz/image/upload/f_auto,q_auto,w_1200/v1777162756/ai-hub/website/AI-Academy-Website-Images/oneday-claude-cowork-hero.png',
    prompt:
      'New generated STARTPLATZ AI Academy visual: professionals in a premium AI coworking workshop, purple CI, no logos, no readable text.',
  },
  schedule: {
    title: 'Ein Tag. <span>Kein Leerlauf.</span>',
    subtitle:
      'Jede Einheit endet mit einem verwertbaren Zwischenstand. Du arbeitest an deinen eigenen Aufgaben.',
    items: [
      {
        time: '09:00',
        title: 'Setup & Claude-Grundlagen',
        description:
          'Was Claude besonders gut kann, wo Grenzen liegen und wie du Aufgaben so vorbereitest, dass gute Ergebnisse entstehen.',
      },
      {
        time: '09:45',
        title: 'Workflow 1: Research Sprint',
        description:
          'Von einer offenen Frage zu einem strukturierten Briefing mit Quellen, Zusammenfassung und Entscheidungsvorlage.',
        tag: 'Hands-on',
        highlight: true,
      },
      {
        time: '11:15',
        title: 'Workflow 2: Schreiben im eigenen Stil',
        description:
          'Du baust ein Style-System für E-Mails, LinkedIn, Landingpage-Abschnitte oder interne Kommunikation.',
        tag: 'Hands-on',
        highlight: true,
      },
      {
        time: '12:30',
        title: 'Lunch & Austausch',
        description: 'Pause, Sparring und Beispiele aus der Gruppe.',
      },
      {
        time: '13:15',
        title: 'Workflow 3: Dokumente analysieren',
        description:
          'Lange Dokumente, Notizen oder Tabellen in klare Aussagen, Risiken und nächste Schritte übersetzen.',
        tag: 'Hands-on',
        highlight: true,
      },
      {
        time: '14:45',
        title: 'Workflow 4: Persönlicher AI-Coworker',
        description:
          'Du baust dein eigenes Claude-Arbeitssystem für die Aufgaben, die sich bei dir jede Woche wiederholen.',
        tag: 'Toolkit',
        highlight: true,
      },
      {
        time: '16:15',
        title: 'Feinschliff & Transfer',
        description:
          'Prompt-Bibliothek, Qualitätschecks und konkrete nächste Schritte für deinen Arbeitsalltag.',
      },
    ],
  },
  pricing: {
    title: 'Ein Preis. <span>Ein produktiver Tag.</span>',
    subtitle:
      'Claude Cowork ist als intensives OneDay-Format gebaut: klarer Fokus, kleine Gruppe, direkt nutzbare Ergebnisse.',
    eyebrow: 'Early Bird',
    price: '590 EUR',
    priceSub: 'Regulär 790 EUR · pro Person · eintägiger Workshop',
    features: [
      'Ganztages-Workshop von 09:00 bis 17:00 Uhr',
      'Eigene Aufgaben und Materialien willkommen',
      'Claude-Workflow-Toolkit zum Mitnehmen',
      'Kleine Gruppe mit direktem Sparring',
      'Zertifikat der STARTPLATZ AI Academy',
    ],
    cta: 'Platz sichern',
    note: 'Für Teams und Inhouse-Termine erstellen wir ein separates Angebot.',
  },
  details: [
    { label: 'Format', value: 'OneDay Workshop, vor Ort in Köln' },
    { label: 'Zielgruppe', value: 'Professionals, Gründer:innen, Teams und Entscheider:innen, die Claude produktiv einsetzen wollen.' },
    { label: 'Vorkenntnisse', value: 'Keine technischen Vorkenntnisse nötig. Erste KI-Erfahrung ist hilfreich, aber nicht erforderlich.' },
    { label: 'Mitbringen', value: 'Laptop, Claude-Zugang und 2-3 echte Aufgaben aus deinem Alltag.' },
  ],
  faqTitle: 'Fragen zu <span>Claude Cowork.</span>',
  faq: [
    {
      q: 'Brauche ich Claude Pro?',
      a: 'Ein eigener Claude-Zugang ist sinnvoll. Für intensives Arbeiten empfehlen wir einen bezahlten Account, weil Limits im Workshop sonst stören können.',
    },
    {
      q: 'Ist das ein Prompt-Engineering-Kurs?',
      a: 'Nicht nur. Wir bauen vollständige Arbeitsabläufe: Kontext, Rollen, Dateien, Qualitätschecks und wiederverwendbare Vorlagen.',
    },
    {
      q: 'Kann ich eigene Dokumente mitbringen?',
      a: 'Ja. Genau dafür ist der Tag gedacht. Bitte keine vertraulichen Daten einbringen, die du nicht in ein KI-Tool laden darfst.',
    },
  ],
  finalCta: {
    title: 'Bereit für deinen <span>AI-Coworker?</span>',
    subtitle:
      'Sichere dir einen Platz oder sprich mit uns über einen Termin für dein Team.',
    button: 'Platz sichern',
  },
};

export default function ClaudeCoworkPage() {
  return <OneDayDetailPage config={config} />;
}
