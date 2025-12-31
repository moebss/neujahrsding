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

    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Ungültige E-Mail-Adresse' });
    }

    // Supabase Konfiguration aus Environment Variablen
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return res.status(500).json({ error: 'Supabase Konfiguration fehlt auf dem Server' });
    }

    try {
        // IP für DSGVO Nachweis (gehasht oder direkt, je nach Auslegung)
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        const response = await fetch(`${supabaseUrl}/rest/v1/newsletter`, {
            method: 'POST',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                email: email,
                created_at: new Date().toISOString(),
                signup_ip: ip,
                confirmed: false // Standardmäßig nicht bestätigt für DSGVO Double-Opt-In
            })
        });

        if (!response.ok) {
            const error = await response.json();
            // Wenn E-Mail schon existiert, trotzdem Erfolg melden (Sicherheit/Privacy)
            if (error.code === '23505') {
                return res.status(200).json({ success: true, message: 'Bereits eingetragen' });
            }
            throw new Error(error.message || 'Supabase Request failed');
        }

        return res.status(200).json({ success: true });

    } catch (err) {
        console.error('SERVER ERROR:', err);
        return res.status(500).json({ error: `Server-Fehler: ${err.message}` });
    }
};
