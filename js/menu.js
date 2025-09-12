// Funcionalidad del menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.navbar-toggle');
    const menuList = document.querySelector('.navbar-menu');
    
    if (menuButton && menuList) {
        // Toggle menu al hacer click
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            menuButton.classList.toggle('active');
            menuList.classList.toggle('active');
            // Toggle aria-expanded para accesibilidad
            const isExpanded = menuButton.classList.contains('active');
            menuButton.setAttribute('aria-expanded', isExpanded);
        });

        // Cerrar menú al hacer click en cualquier enlace
        const menuLinks = document.querySelectorAll('.navbar-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuButton.classList.remove('active');
                menuList.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.navbar-container') && menuList.classList.contains('active')) {
                menuButton.classList.remove('active');
                menuList.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Cerrar menú con la tecla Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && menuList.classList.contains('active')) {
                menuButton.classList.remove('active');
                menuList.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
