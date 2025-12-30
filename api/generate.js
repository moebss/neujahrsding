const fetch = require('node-fetch');

// In-Memory Cache für IP-Limitierung
const ipCache = new Map();

module.exports = async (req, res) => {
    // CORS Header
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // IP-Tracking für Rate Limiting
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const now = Date.now();
    const lastRequest = ipCache.get(clientIp);

    // 1 Minute Cooldown zum Testen (später auf 24h/86400000 erhöhen)
    if (lastRequest && (now - lastRequest < 60000)) {
        return res.status(429).json({
            error: 'Limit erreicht',
            message: 'Du darfst nur einen Gruß pro Minute generieren.'
        });
    }

    const { name, relation, info, tone, lang } = req.body;

    const systemPrompt = `You are a world-class creative writer and festive expert. 
    Write a spectacular New Year's greeting for 2026 in ${lang}. 
    Use a rich vocabulary and many emojis. Respond ONLY with the greeting text.`;

    const userPrompt = `Name: ${name}, Relationship: ${relation}, Context: ${info || 'General'}, Style: ${tone}`;

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
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                max_tokens: 800,
                temperature: 0.85
            })
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.error?.message || 'API Error');

        const aiText = data.choices[0].message.content.trim();
        ipCache.set(clientIp, now);

        return res.status(200).json({ text: aiText });
    } catch (error) {
        console.error('Backend Error:', error);
        return res.status(500).json({ error: 'Generation failed', details: error.message });
    }
};
