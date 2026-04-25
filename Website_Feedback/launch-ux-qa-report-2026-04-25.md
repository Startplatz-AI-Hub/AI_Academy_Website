# STARTPLATZ AI Academy - Launch UX & Accessibility QA

Stand: 25.04.2026  
Scope: Accessibility-Check, UX-Smoke-Test, Content-/Trust-Review, Desktop/Mobile Browsercheck, Core-Routen und Conversion-Flows.

## Kurzfazit

Die Website ist aus UX-, Brand- und Content-Sicht launch-ready. Die wichtigsten Launch-Probleme aus dem alten Report sind erledigt: `/blog` dupliziert keine Inhalte mehr, Calendly ist zentral eingebunden, die Hero-/Logo-/Subpage-Bildthemen sind bereinigt, die Hauptseiten wirken konsistent und die zentralen CTAs funktionieren.

Im Accessibility-Check wurden keine harten Blocker gefunden. Ich habe im Zuge dieses Checks mehrere kleine A11y- und Trust-Fixes direkt umgesetzt: bessere Keyboard-Navigation im Desktop-Menü, gültige ARIA-Verweise, dekorative Hero-Bilder aus der Accessibility-Struktur genommen, Footer-Headings geglättet und alte AI-Hub-Mailadressen durch `academy@startplatz.de` ersetzt. Die festgelegten Brandfarben Mint, Sky und Coral bleiben unverändert.

## Geprüfte Seiten

- `/`
- `/arbeitssuchende`
- `/berufstaetige`
- `/unternehmen`
- `/oneday`
- `/experten`
- `/ueber-uns`
- `/insights`
- `/insights/generative-ai-kreativbranche`
- `/wissens-test`
- `/presse`
- `/datenschutz`
- `/impressum`
- `/agb`
- Redirects: `/blog`, `/blog/generative-ai-kreativbranche`

Browsercheck: Desktop plus Mobile 390 x 844.  
Buildcheck: `npm run build` erfolgreich, 18 Routen generiert.  
Runtime-Smoke-Test: alle 14 geprüften Seiten laden mit Main, Heading, Footer und ohne frische Runtime-Errors.

## Accessibility Ergebnis

Bestanden:

- `html lang="de"` ist vorhanden.
- Skip-Link zum Hauptinhalt ist vorhanden.
- Jede geprüfte Route hat einen Hauptbereich.
- Jede Route hat einen sichtbaren H1; `/wissens-test` nach Client-Hydration ebenfalls.
- Keine sichtbaren Bilder ohne `alt` gefunden.
- Dekorative PageHero-Bilder sind jetzt `aria-hidden`.
- Keine leeren sichtbaren Links oder Buttons gefunden.
- Newsletter-Felder haben Labels und Autocomplete.
- Externe `_blank`-Links haben `rel="noopener noreferrer"`.
- Keine Duplicate IDs gefunden.
- Defekte `aria-labelledby`-Referenzen auf Startseite wurden behoben.
- Globale `:focus-visible`-Styles und `prefers-reduced-motion`-Fallback sind vorhanden.
- Mobile Navigation hat ein Dialog-Label, einen klar benannten Schließen-Button und sprechende Links.
- Calendly-CTA öffnet weiterhin als Popup und bleibt auf der Seite.

Direkt umgesetzt:

- `components/Navigation.jsx`: Desktop-Dropdowns sind jetzt per Fokus erreichbar (`focus-within`) und die Hauptpunkte bleiben als echte Links nutzbar.
- `components/PlanetSection.jsx`: `aria-labelledby` wird nur gesetzt, wenn tatsächlich ein Section-Titel existiert.
- `components/ui/PageHero.jsx`: dekorative Subpage-Hero-Bilder werden aus der Accessibility-Struktur genommen.
- `components/Footer.jsx`: Footer-Gruppentitel von H4 auf semantisch passendere H2 geändert.
- `app/presse/page.jsx`, `app/datenschutz/page.jsx`, `app/layout.jsx`, `app/impressum/page.jsx`: alte AI-Hub-E-Mails/Telefon-Platzhalter an offensichtlichen Stellen bereinigt.

## Nicht Mehr Offen

Diese Punkte aus dem alten Report sind erledigt oder nicht mehr als aktuelles Risiko zu führen:

- `/blog` und `/insights` sind keine Content-Duplikate mehr. `/blog` und Artikelrouten redirecten per 308 auf `/insights`.
- Calendly ist integriert und geprüft.
- Hero-Bildgrößen bleiben beim Claim-Wechsel stabil.
- Partner-/Zertifikatslogos sind visuell deutlich ruhiger und nicht mehr in hässlichen weißen Kacheln.
- Zielgruppen-Karten sind gleichmäßiger, CTA-Achsen sitzen sauber.
- Team-Sektion ist wieder im gewünschten Bildlayout.
- Subpage-Hero-Bilder nutzen wieder die passenden Zielgruppenbilder.
- Presse-Logo-Assets sind nutzbar.
- AGB-Farbübergang ist weicher.
- Impressum enthält Geschäftsführer, HRB und jetzt auch eine konkrete Telefonnummer.

## Offene Launch-Hinweise

### P1 - Rechtliche Endfassung

`/agb` sagt weiterhin explizit, dass die finale Fassung folgt. `/impressum` enthält noch Platzhalter für USt-ID und Zertifizierer. `/datenschutz` sollte vor echter Domainaufschaltung juristisch gegen die tatsächlich geladenen Dienste geprüft werden, insbesondere Calendly, ElevenLabs, Vercel, Cloudinary, Google Fonts/Aileron und mögliche Analytics-/CRM-Anbindungen.

### P1 - Newsletter Ist Noch Nur UI

`components/Newsletter.jsx` setzt nach Name und E-Mail lokal `submitted=true`, sendet aber nichts an CRM, Newsletter-Tool oder API. Für Launch entweder anbinden oder bewusst entfernen/entschärfen, sonst bekommen Nutzer eine Erfolgsmeldung ohne echte Anmeldung.

### P2 - Mobile Menü Formal Noch Nicht Perfekt Inert

Das mobile Menü ist sichtbar gut bedienbar und als Dialog benannt. Im Accessibility-Tree bleibt der Seiteninhalt darunter aber weiterhin vorhanden. Für einen sehr strengen WCAG-Pass wäre ein Fokus-Trap plus `inert`/`aria-hidden` für den Hintergrund der nächste Schritt.

### P2 - Event-Karussell Braucht Noch Stärkere Keyboard-Signale

Das Event-Karussell ist visuell gut, aber stark auf Drag/Scroll ausgelegt. Für Accessibility und normale Nutzer wären sichtbare Pfeilbuttons oder klarere Keyboard-Hinweise sinnvoll.

### P2 - Domain/SEO Metadaten Vor Domainlaunch Setzen

In `app/layout.jsx` stehen Canonicals/OpenGraph/JSON-LD-URLs noch auf `ai-hub.startplatz.de`. Da die finale Domain laut Setup später kommt, ist das kein aktueller Content-Blocker, muss aber vor Domainaufschaltung sauber gesetzt werden.

### P2 - Einzelne Micro-Kontraste Sind Noch Design-Entscheidung

Die festgelegten Brandfarben bleiben unverändert. Bei einem formalen WCAG-AA-Ziel bleiben einzelne kleine Meta-/Eyebrow-Texte, dekorative Akzentlabels und helle Brand-CTAs ein bewusstes Design-/Brand-Thema. Aktuell ist das kein offensichtlicher Nutzungsbruch, sollte aber als bewusste Markenentscheidung dokumentiert bleiben.

### P3 - OneDay Preise

Auf `/oneday` stehen noch `Preis tbd` bei einzelnen Angeboten. Falls die Seite aktiv beworben wird, besser auf `Preis auf Anfrage` oder konkrete Preise ändern.

## Seitenbezogene Notizen

### Startseite `/`

Starker Launch-Eindruck. Hero, Zielgruppen, Team, Trust, Events und Testimonials fühlen sich jetzt konsistent an. Accessibility-Struktur ist grundsätzlich sauber; Restpunkt ist primär das mobile Menü-Inert-Verhalten und Event-Karussell.

### Arbeitssuchende `/arbeitssuchende`

Inhaltlich klar, guter Bildungsgutschein-Fokus. Keine A11y-Blocker gefunden.

### Berufstätige `/berufstaetige`

Gute AfterWork-Positionierung. QCG-Erklärung bleibt ein sinnvoller Content-Ausbau, aber kein Launch-Blocker.

### Unternehmen `/unternehmen`

B2B-Seite ist klarer geworden, Anker funktionieren. Formatvergleich und konkrete Deliverables können später noch weiter verdichtet werden.

### OneDay `/oneday`

Visuell und inhaltlich brauchbar. Vor Vermarktung Preise/Termine finalisieren.

### Experten `/experten`

Reflective Cards passen zur Marke. Echte Headshots wären später ein Premium-Upgrade.

### Über Uns `/ueber-uns`

Story und Team-/Location-Signale funktionieren. Die Timeline nutzt weiterhin die definierten Brand-Akzente.

### Insights `/insights`

Redirect-/Duplicate-Thema ist erledigt. Featured-Badge ist lesbarer. Redaktionelle Strategie und Bildkompression bleiben spätere Optimierung.

### Wissens-Test `/wissens-test`

H1 ist nach Hydration vorhanden, Flow lädt ohne Fehler. Als Lead-Magnet wäre Analytics/Lead-Capture später sinnvoll.

### Presse `/presse`

Assets funktionieren, alte AI-Hub-Mail ist ersetzt. Download-Logik ist nutzbar; ZIP/SVG-Paket bleibt optionaler Ausbau.

### Datenschutz / Impressum / AGB

Technisch und mobil sauber. Rechtlich bleibt die Endprüfung separat wichtig, besonders wegen Drittanbietern und der AGB-Platzhalter.

## Empfohlene Reihenfolge Ab Jetzt

1. AGB/Datenschutz/Impressum juristisch finalisieren.
2. Newsletter anbinden oder bis dahin ausblenden.
3. Domain-/Canonical-/OpenGraph-Daten setzen, sobald die finale Domain feststeht.
4. Mobile Menü Fokus-Trap/Inert und Event-Karussell-Pfeile als Accessibility-Finish nachziehen.
5. OneDay Preise/Termine finalisieren.
