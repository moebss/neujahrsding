const fetch = require('node-fetch');

// Einfaches In-Memory IP Tracking (Hinweis: Vercel Funktionen teilen sich den Speicher nicht immer, 
// für echtes Rate-Limiting wäre Redis ideal, aber das hier ist ein guter Start)
const ipCache = new Map();

export default async function handler(req, res) {
    // CORS Header setzen
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // IP des Nutzers ermitteln
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Rate Limiting Check
    const lastRequest = ipCache.get(clientIp);
    const now = Date.now();

    // Wir erlauben einen Gruß pro IP alle 24 Stunden (oder wie gewünscht)
    // Cooldown in Millisekunden: 24 * 60 * 60 * 1000 = 86400000
    if (lastRequest && (now - lastRequest < 60000)) { // Aktuell zum Testen: 1 Minute Cooldown
        return res.status(429).json({
            error: 'Limit erreicht',
            message: 'Du darfst nur einen Gruß generieren. Bitte warte einen Moment.'
        });
    }

    const { name, relation, info, tone, lang } = req.body;

    const systemPrompt = `You are a world-class creative writer and festive expert. Your goal is to write the most incredible, lively, and emotionally resonant New Year's greetings for 2026. 
    The language must be ${lang}. Use a rich vocabulary, festive imagery, and plenty of appropriate emojis. Respond ONLY with the greeting text itself.`;

    const userPrompt = `Write a spectacular New Year's greeting for 2026.
    Language: ${lang}, Recipient: ${name}, Relationship: ${relation}, Details: ${info || 'General'}, Style: ${tone}`;

    try {
        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.PPLX_API_KEY}`, // Key aus Umgebungsvariablen
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-sonar-large-128k-online',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                max_tokens: 800,
                temperature: 0.85
            })
        });

        if (!response.ok) throw new Error('AI API Error');

        const data = await response.json();
        const text = data.choices[0].message.content.trim();

        // Zeitstempel für diese IP speichern
        ipCache.set(clientIp, now);

        return res.status(200).json({ text });
    } catch (error) {
        return res.status(500).json({ error: 'Generation failed' });
    }
}
