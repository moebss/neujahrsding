// ===========================
// COOKIE CONSENT MANAGER (GDPR)
// ===========================

(function () {
    'use strict';

    const GA4_ID = 'G-NJ2C07L1QJ'; // Deine echte ID
    const STORAGE_KEY = 'cookieConsent_v1';

    // Check consent status
    function checkConsent() {
        const consent = localStorage.getItem(STORAGE_KEY);
        if (!consent) {
            showBanner();
        } else if (consent === 'accepted') {
            loadGA4();
        }
    }

    // Show the Cookie Banner
    function showBanner() {
        // Create Banner HTML
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-title">🍪 Wir nutzen Cookies</div>
                <p class="cookie-text">
                    Wir verwenden Tracking-Cookies, um die Performance zu verbessern und Besucherzahlen zu analysieren (Google Analytics 4). 
                    Deine Daten bleiben anonym.
                    <a href="rechtliches.html#datenschutz">Mehr Infos</a>
                </p>
                <div class="cookie-settings" id="openPrivacySettings" style="display:none;">Einstellungen anpassen</div>
            </div>
            <div class="cookie-actions">
                <button class="btn-cookie btn-cookie-deny" id="denyCookies">Nur Notwendige</button>
                <button class="btn-cookie btn-cookie-accept" id="acceptCookies">Alle Akzeptieren</button>
            </div>
        `;

        document.body.appendChild(banner);

        // Trigger animation
        setTimeout(() => banner.classList.add('show'), 100);

        // Event Listeners
        document.getElementById('acceptCookies').addEventListener('click', () => {
            saveConsent('accepted');
            loadGA4();
            hideBanner(banner);
        });

        document.getElementById('denyCookies').addEventListener('click', () => {
            saveConsent('rejected');
            hideBanner(banner);
        });
    }

    // Save decision to LocalStorage
    function saveConsent(status) {
        localStorage.setItem(STORAGE_KEY, status);
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
    }

    // Hide Banner Animation
    function hideBanner(banner) {
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 500);

        // Show privacy badge re-opener
        showPrivacyBadge();
    }

    // Show little badge in corner to change settings later
    function showPrivacyBadge() {
        const badge = document.createElement('div');
        badge.className = 'privacy-badge';
        badge.innerHTML = '🛡️';
        badge.title = 'Datenschutz-Einstellungen';
        badge.onclick = () => {
            localStorage.removeItem(STORAGE_KEY);
            badge.remove();
            showBanner();
        };
        document.body.appendChild(badge);
    }

    // DYNAMICALLY LOAD GOOGLE ANALYTICS 4
    // Only runs if user accepted!
    function loadGA4() {
        if (window.ga4Loaded) return; // Prevent double loading

        console.log('🚀 Loading Google Analytics...');

        // 1. Script Tag
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
        document.head.appendChild(script);

        // 2. Config
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA4_ID, { 'anonymize_ip': true });

        window.ga4Loaded = true;

        // Track initial pageview manually since script loaded late
        /* gtag('event', 'page_view'); - gtag handles this automatically usually */
    }

    // Function public for other scripts to use
    window.trackCustomEvent = function (action, category, label) {
        if (window.dataLayer && window.ga4Loaded) {
            // Need to recreate gtag function in scope or access globally
            function gtag() { dataLayer.push(arguments); }
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    };

    // Init
    window.addEventListener('load', checkConsent);

})();
