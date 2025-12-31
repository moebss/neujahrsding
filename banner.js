// ===========================
// GRUSSGENERATOR BANNER
// Cross-Promotion & Newsletter
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initGrussgeneratorBanner();
});

function initGrussgeneratorBanner() {
    const banner = document.querySelector('.grussgenerator-banner');
    const closeBtn = document.getElementById('closeBanner');
    const form = document.getElementById('bannerSubscribeForm');
    const successMsg = document.getElementById('bannerSuccess');

    // Check if banner was closed before
    const bannerClosed = localStorage.getItem('grussgenerator_banner_closed');
    if (bannerClosed) {
        banner?.classList.add('hidden');
        return;
    }

    // Close button handler
    closeBtn?.addEventListener('click', () => {
        banner?.classList.add('hidden');
        localStorage.setItem('grussgenerator_banner_closed', 'true');
        // Auto-remove from localstorage after 7 days
        setTimeout(() => {
            localStorage.removeItem('grussgenerator_banner_closed');
        }, 7 * 24 * 60 * 60 * 1000);
    });

    // Form submission
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('bannerEmail');
        const email = emailInput?.value.trim();

        if (!email || !email.includes('@')) {
            showToast('Bitte gib eine gültige E-Mail ein');
            return;
        }

        const submitBtn = form.querySelector('.btn-banner-subscribe');
        const originalText = submitBtn?.innerHTML;

        // Loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>⏳ Wird gesendet...</span>';
        }

        try {
            // Use the same API as neujahrsgruesse
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    source: 'neujahrsgruesse_grussgenerator_banner'
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Success
                form.style.display = 'none';
                successMsg?.classList.add('show');

                // Track in localStorage
                localStorage.setItem('grussgenerator_subscribed', 'true');

                showToast('🎉 Du bist für grussgenerator.de angemeldet!');

                // Auto-hide banner after 5 seconds
                setTimeout(() => {
                    banner?.classList.add('hidden');
                }, 5000);

            } else {
                throw new Error(data.error || 'Fehler beim Anmelden');
            }

        } catch (err) {
            console.error('Banner subscription error:', err);
            showToast('Fehler: ' + err.message);

            // Reset button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        }
    });

    // Show banner with animation
    setTimeout(() => {
        banner?.style.opacity = '1';
    }, 500);
}

// Helper: Show toast (uses existing function if available)
function showToast(message) {
    if (window.showToast && typeof window.showToast === 'function') {
        window.showToast(message);
    } else {
        console.log('Toast:', message);
    }
}
