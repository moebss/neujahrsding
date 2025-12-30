// api/generate.js
const ipCache = new Map();

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const clientIp = req.headers['x-forwarded-for'] || '0.0.0.0';
    const now = Date.now();

    if (ipCache.has(clientIp) && (now - ipCache.get(clientIp) < 10000)) {
        return res.status(429).json({ error: 'Limit', message: 'Bitte kurz warten.' });
    }

    const { name, relation, info, tone, lang } = req.body;

    try {
        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.PPLX_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-sonar-large-128k-online',
                messages: [
                    { role: 'system', content: `Write a festive New Year 2026 greeting in ${lang}. Use rich vocabulary and emojis. Respond ONLY with the text.` },
                    { role: 'user', content: `Name: ${name}, Relation: ${relation}, Details: ${info || 'None'}, Style: ${tone}` }
                ],
                max_tokens: 800,
                temperature: 0.85
            })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || 'Perplexity API Error');

        ipCache.set(clientIp, now);
        return res.status(200).json({ text: data.choices[0].message.content.trim() });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
