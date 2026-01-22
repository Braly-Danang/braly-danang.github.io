/**
 * Main JavaScript file for Braly Website
 * Handles global functionality like footer loading fallback, etc.
 */

document.addEventListener("DOMContentLoaded", function () {
    // Placeholder for future global scripts

    // --- Header Spacing Fix (Global) ---
    // Fixes issue where fixed navbar overlaps content on pages with hero-section-small
    const heroSection = document.querySelector('.hero-section-small');
    if (heroSection) {
        // Apply padding to ensure content is visible below fixed header
        heroSection.style.paddingTop = '120px';
    }


});
