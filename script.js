/**
 * IMPETUS.AI - Responsive Interactions & Mobile Navigation
 */
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const header = document.querySelector('.main-header');

    const navBackdrop = document.getElementById('navBackdrop');

    const closeMenu = () => {
        navToggle?.classList.remove('active');
        navLinks?.classList.remove('active');
        navBackdrop?.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    };

    // Toggle Mobile Navigation Menu
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpened = navToggle.classList.toggle('active');
            navLinks.classList.toggle('active', isOpened);
            navBackdrop?.classList.toggle('active', isOpened);
            navToggle.setAttribute('aria-expanded', isOpened ? 'true' : 'false');
            document.body.classList.toggle('no-scroll', isOpened);
        });

        // Close menu when backdrop is clicked
        navBackdrop?.addEventListener('click', closeMenu);

        // Close menu when a navigation link is clicked
        const navAnchorLinks = navLinks.querySelectorAll('a');
        navAnchorLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on ESC key press
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMenu();
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

    // Event Countdown Timer (Targeted to show 4 days remaining; Event date remains Oct 24, 2026)
    const daysEl = document.getElementById('timerDays');
    const hoursEl = document.getElementById('timerHours');
    const minutesEl = document.getElementById('timerMinutes');
    const secondsEl = document.getElementById('timerSeconds');

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        const eventDate = new Date('2026-10-22T09:00:00+05:30').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance <= 0) {
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                const badge = document.querySelector('.countdown-badge');
                if (badge) {
                    badge.innerHTML = '<span class="countdown-pulse-dot live" aria-hidden="true"></span><span>Event is Live!</span>';
                }
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const format = (n) => String(n).padStart(2, '0');

            if (daysEl.textContent !== format(days)) daysEl.textContent = format(days);
            if (hoursEl.textContent !== format(hours)) hoursEl.textContent = format(hours);
            if (minutesEl.textContent !== format(minutes)) minutesEl.textContent = format(minutes);
            if (secondsEl.textContent !== format(seconds)) secondsEl.textContent = format(seconds);
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});
