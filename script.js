document.addEventListener('DOMContentLoaded', () => {
    // --- Preloader Functionality - 
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Use window.onload to ensure all assets (images, etc.) are loaded
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
        });
        // Fallback for very fast loads or if 'load' event doesn't fire as expected
        setTimeout(() => {
            if (!preloader.classList.contains('hidden')) {
                preloader.classList.add('hidden');
            }
        }, 3000); // Hide after 3 seconds even if 'load' isn't triggered
    }

    // --- Hamburger menu functionality ---
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinksContainer = document.getElementById('navLinksContainer');
    const body = document.body;

    if (hamburgerMenu && navLinksContainer && body) {
        hamburgerMenu.addEventListener('click', () => {
            // Toggle 'open' class on hamburger icon for animation
            hamburgerMenu.classList.toggle('open');
            // Toggle 'active' class on navigation links container to show/hide
            navLinksContainer.classList.toggle('active');
            // Toggle 'no-scroll' class on body to prevent background scrolling
            body.classList.toggle('no-scroll');
        });
    }

    // --- Search input toggle functionality ---
    const searchToggle = document.getElementById('searchToggle');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle && searchInput) {
        searchToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from bubbling up to document and immediately closing
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            } else {
                searchInput.value = ''; // Clear input when hiding
            }
        });

        // Hide search input if clicking outside when active
        document.addEventListener('click', (event) => {
            if (!searchToggle.contains(event.target) && !searchInput.contains(event.target) && searchInput.classList.contains('active')) {
                searchInput.classList.remove('active');
                searchInput.value = ''; // Clear input when hiding
            }
        });

        // Prevent clicking inside the input from closing it
        searchInput.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

  
});
