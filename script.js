/**
 * IMPETUS.AI - Responsive Interactions & Mobile Navigation
 */
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const header = document.querySelector('.main-header');

    // Toggle Mobile Navigation Menu
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpened = navToggle.classList.toggle('active');
            navLinks.classList.toggle('active', isOpened);
            navToggle.setAttribute('aria-expanded', isOpened ? 'true' : 'false');
            document.body.classList.toggle('no-scroll', isOpened);
        });

        // Close menu when a navigation link is clicked
        const navAnchorLinks = navLinks.querySelectorAll('a');
        navAnchorLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
            });
        });

        // Close menu if user clicks outside of header/menu
        document.addEventListener('click', (event) => {
            if (!header.contains(event.target) && navLinks.classList.contains('active')) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
            }
        });

        // Close on ESC key press
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navLinks.classList.contains('active')) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    // Dynamic Header Background On Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }, { passive: true });
});
