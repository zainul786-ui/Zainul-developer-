// JavaScript for Theme Toggle
const themeToggleButton = document.getElementById('theme-toggle-btn');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    // Remove existing theme classes
    body.classList.remove('light-theme', 'dark-theme');
    // Add the new theme class
    body.classList.add(theme + '-theme');
    // Store the theme preference in local storage
    localStorage.setItem('theme', theme);
}

// Check user's preferred theme from local storage on load
// Default to 'light' if no preference is found
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme); // Apply the saved or default theme

// Add event listener to the theme toggle button
themeToggleButton.addEventListener('click', () => {
    // Check current theme and toggle to the opposite
    if (body.classList.contains('light-theme')) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

// JavaScript for Mobile Menu Toggle (the "small box")
const menuToggleButton = document.getElementById('menu-toggle-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const closeMenuButton = document.getElementById('close-menu-btn');
const hamburgerIconLines = document.getElementById('hamburger-icon-lines');
const mobileMenuLinks = mobileMenuOverlay.querySelectorAll('a');

// Function to open the mobile menu
function openMobileMenu() {
    mobileMenuOverlay.classList.add('open');
    hamburgerIconLines.classList.add('open');
    // Optional: Disable body scroll when menu is open
    document.body.style.overflow = 'hidden';
}

// Function to close the mobile menu
function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('open');
    hamburgerIconLines.classList.remove('open');
    // Optional: Re-enable body scroll
    document.body.style.overflow = '';
}

// Event listener for opening the menu
menuToggleButton.addEventListener('click', openMobileMenu);

// Event listener for closing the menu using the 'X' button
closeMenuButton.addEventListener('click', closeMobileMenu);

// Close mobile menu when a link inside it is clicked
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu if clicked outside the content box
mobileMenuOverlay.addEventListener('click', (event) => {
    // Check if the click occurred directly on the overlay (not on the content box)
    if (event.target === mobileMenuOverlay) {
        closeMobileMenu();
    }
});

// Scroll-Reveal Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    // Select all section elements that need to be animated on scroll
    const scrollRevealSections = document.querySelectorAll('.scroll-reveal-section');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback function for the Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is in the viewport, add the 'active' class
                entry.target.classList.add('active');
                // Stop observing once it's animated
                observer.unobserve(entry.target);
            }
        });
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each scroll-reveal section
    scrollRevealSections.forEach(section => {
        observer.observe(section);
    });
});
