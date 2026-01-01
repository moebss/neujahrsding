
// ===========================
// FREEMIUM SYSTEM INTEGRATION
// ===========================

// Show/Hide Upgrade Modal
function showUpgradeModal() {
    const modal = document.getElementById('upgradeModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeUpgradeModal() {
    const modal = document.getElementById('upgradeModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Update Remaining Counter
function updateRemainingCounter(remaining) {
    const counter = document.getElementById('remainingCounter');
    const countEl = document.getElementById('remainingCount');

    if (!counter || !countEl) return;

    if (remaining <= 0) {
        counter.classList.add('hidden');
        return;
    }

    counter.classList.remove('hidden');
    countEl.textContent = remaining;

    if (remaining === 1) {
        counter.classList.add('low');
    } else {
        counter.classList.remove('low');
    }
}

// Payment Functions
async function buySingleImage() {
    console.log('🛒 Single Image purchase initiated');
    alert('Stripe Integration folgt: €0.99 für 1 Bild ohne Wasserzeichen');
    // TODO: Implement Stripe Checkout
}

async function buyCredits() {
    console.log('🛒 Credits purchase initiated');
    alert('Stripe Integration folgt: €2.99 für 10 Extra-Grüße');
    // TODO: Implement Stripe Checkout
}

async function subscribePremium() {
    console.log('🛒 Premium subscription initiated');
    alert('Stripe Integration folgt: €4.99/Monat Premium Unlimited');
    // TODO: Implement Stripe Checkout
}

// Check single image credit
function checkSingleImageCredit() {
    const credit = localStorage.getItem('singleImageCredit');
    return credit === 'available';
}

// Consume single image credit
function consumeSingleImageCredit() {
    localStorage.removeItem('singleImageCredit');
    showToast('✅ Bild ohne Wasserzeichen heruntergeladen!');
}

// Set single image credit (after successful payment)
function setSingleImageCredit() {
    localStorage.setItem('singleImageCredit', 'available');
}

console.log('✅ Freemium System Integration loaded');
