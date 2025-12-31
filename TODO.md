# 📝 Projekt-Roadmap & Offene Aufgaben

Dieses Dokument dient als Übersicht für die nächsten Schritte zur Perfektionierung der Neujahrsgruß-App 2026.

## 🔴 Hohe Priorität (Muss bald erledigt werden)
- [ ] **Double-Opt-In (DOI) Prozess:** Aktuell werden E-Mails nur in Supabase gesammelt. Um sie rechtssicher anzuschreiben, müssen sie in ein Marketing-Tool (z.B. Brevo, Mailchimp) importiert werden, das eine Bestätigungsmail verschickt.

## 🟡 Mittlere Priorität (Optimierung)
- [ ] **Sprach-Vorlagen erweitern:** In `messages_i18n.js` die `messageTemplates` für Englisch, Türkisch, Spanisch etc. auf das gleiche Detail-Level wie die deutschen Vorlagen bringen.
- [ ] **Performance Check:** Prüfen, ob die vielen Animationen (Sparkles, Parallax) auf älteren Smartphones flüssig laufen. Eventuell Option zum Deaktivieren hinzufügen.
- [ ] **Saisonale Updates:** Den Prompt in `api/generate.js` so vorbereiten, dass er ab März automatisch auf "Ostergrüße" umgestellt werden kann (oder per Parameter steuerbar machen).

## 🟢 Niedrige Priorität (Visionen & Ideen)
- [ ] **Audio-Wiedergabe (Text-to-Speech):** Den generierten Gruß per Klick vorlesen lassen (Gänsehaut-Moment!).
- [ ] **Export-Styles:** Verschiedene Schriftarten und Hintergründe für den Bild-Export (z.B. "Elegant", "Playful", "Classic").
- [ ] **Animierte Partikel:** Echte Schnee- oder Feuerwerk-Effekte im Hintergrund, die auf Mausbewegungen reagieren.
- [ ] **Emoji-Shortcuts:** Eine Schnellwahl-Leiste für passende Emojis im Eingabefeld.
- [ ] **Viral-Loop:** Ein "Freunde einladen" Button nach der Generierung, um die App bekannter zu machen.
- [ ] **Themes:** Verschiedene Farbschemata anbieten (z.B. "Silver Night", "Classic Red", "Deep Sea").
- [ ] **Sound-Effekte:** Dezente Sound-Effekte beim Generieren (Zauberstab-Sound) oder beim Herunterladen.

## ✅ Erledigt
- [x] **Impressum & Datenschutz vervollständigen:** Alexander Rheindorf eingetragen. Vercel, Perplexity AI und Supabase als Datenverarbeiter ergänzt.
- [x] **Social Media Preview:** Hochwertiges Vorschaubild (`og-image.png`) erstellt und eingebunden.
- [x] Internationalisierung (i18n) Grundgerüst.
- [x] KI-Anbindung (Perplexity API) mit Sprach-Support.
- [x] "Als Bild speichern" Funktion (html2canvas).
- [x] Favoriten-Verlauf (LocalStorage).
- [x] Newsletter-Backend (Supabase).
- [x] DSGVO-Konformität (Checkbox + Rechtstexte).
- [x] Visual Polish (Sparkle Cursor, Countdown, Toasts).
- [x] Monetarisierung (Ko-fi Integration).
- [x] PWA (Progressive Web App) Modus & Manifest.
- [x] QR-Code auf Export-Bildern.
- [x] Smart AI Status-Meldungen.
