document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');

            // Prevent scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });
    }

    // Sticky Header Effect
    const header = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // Category Description Interaction
    const categoryCards = document.querySelectorAll('.category-card');
    const descriptionBox = document.getElementById('category-description');
    const descriptionText = document.getElementById('category-text');


    if (categoryCards.length > 0 && descriptionBox && descriptionText) {
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior if any

                // Remove active class from all other cards
                categoryCards.forEach(c => c.classList.remove('active-category'));

                // Add active class to clicked card
                card.classList.add('active-category');

                const description = card.getAttribute('data-description');

                // Update text
                descriptionText.textContent = description;

                // Show box with animation restart
                descriptionBox.style.display = 'block';
                descriptionBox.style.animation = 'none';
                descriptionBox.offsetHeight; /* trigger reflow */
                descriptionBox.style.animation = 'fadeIn 0.5s ease';
            });
        });
    }
});
