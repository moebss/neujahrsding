export default async (req, res) => {
    // CORS Header setzen
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Preflight Request behandeln
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Nur POST-Anfragen sind erlaubt' });
    }

    const { name, relation, info, tone, lang } = req.body;

    // Check, ob der API Key überhaupt da ist
    if (!process.env.PPLX_API_KEY) {
        return res.status(500).json({ error: 'Konfigurationsfehler: API Key fehlt in Vercel' });
    }

    try {
        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.PPLX_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'sonar-pro',
                messages: [
                    { role: 'system', content: `Du schreibst Neujahrsgrüße für 2026 auf ${lang}. Antworte NUR mit dem Gruß.` },
                    { role: 'user', content: `Name: ${name}, Verhältnis: ${relation}, Details: ${info}, Ton: ${tone}` }
                ],
                max_tokens: 600,
                temperature: 0.8
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: `Perplexity API Error: ${data.error?.message || response.statusText}` });
        }

        return res.status(200).json({ text: data.choices[0].message.content.trim() });

    } catch (err) {
        console.error('SERVER ERROR:', err);
        return res.status(500).json({ error: `Server-Fehler: ${err.message}` });
    }
};
