# 📝 Projekt-Roadmap & Offene Aufgaben

Dieses Dokument dient als Übersicht für die nächsten Schritte zur Perfektionierung der Neujahrsgruß-App 2026.

## 🔴 Hohe Priorität (Muss bald erledigt werden)
- [ ] **Impressum vervollständigen:** In `rechtliches.html` die Platzhalter `[DEINE STRASSE]` und `[DEINE PLZ & STADT]` durch echte Daten ersetzen (Rechtspflicht!).
- [ ] **Double-Opt-In (DOI) Prozess:** Aktuell werden E-Mails nur in Supabase gesammelt. Um sie rechtssicher anzuschreiben, müssen sie in ein Marketing-Tool (z.B. Brevo, Mailchimp) importiert werden, das eine Bestätigungsmail verschickt.
- [ ] **Social Media Preview:** Ein echtes Vorschaubild (`og-image.jpg`) erstellen und unter `https://neujahrsgruss2026.de/og-image.jpg` hochladen, damit Links bei WhatsApp/Facebook schick aussehen.

## 🟡 Mittlere Priorität (Optimierung)
- [ ] **Sprach-Vorlagen erweitern:** In `messages_i18n.js` die `messageTemplates` für Englisch, Türkisch, Spanisch etc. auf das gleiche Detail-Level wie die deutschen Vorlagen bringen.
- [ ] **Performance Check:** Prüfen, ob die vielen Animationen (Sparkles, Parallax) auf älteren Smartphones flüssig laufen. Eventuell Option zum Deaktivieren hinzufügen.
- [ ] **Saisonale Updates:** Den Prompt in `api/generate.js` so vorbereiten, dass er ab März automatisch auf "Ostergrüße" umgestellt werden kann (oder per Parameter steuerbar machen).

## 🟢 Niedrige Priorität (Visionen & Ideen)
- [ ] **PWA (Progressive Web App):** Die Seite installierbar machen, damit sie wie eine native App auf dem Homescreen erscheint.
- [ ] **QR-Code Integration:** Auf dem exportierten Bild einen winzigen QR-Code einblenden, der direkt zur App führt.
- [ ] **Themes:** Verschiedene Farbschemata anbieten (z.B. "Silver Night", "Classic Red", "Deep Sea").
- [ ] **Sound-Effekte:** Dezente Sound-Effekte beim Generieren (Zauberstab-Sound) oder beim Herunterladen.

## ✅ Erledigt
- [x] Internationalisierung (i18n) Grundgerüst.
- [x] KI-Anbindung (Perplexity API) mit Sprach-Support.
- [x] "Als Bild speichern" Funktion (html2canvas).
- [x] Favoriten-Verlauf (LocalStorage).
- [x] Newsletter-Backend (Supabase).
- [x] DSGVO-Konformität (Checkbox + Rechtstexte).
- [x] Visual Polish (Sparkle Cursor, Countdown, Toasts).
- [x] Monetarisierung (Ko-fi Integration).
