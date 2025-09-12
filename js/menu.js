document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const menuButton = document.querySelector('.navbar-toggle');

    // Función para verificar si el menú está abierto
    const isMenuOpen = () => body.classList.contains('menu-open');
    
    // Función para abrir el menú
    const openMenu = () => {
        body.classList.add('menu-open');
        menuButton?.classList.add('active');
        menuButton?.setAttribute('aria-expanded', 'true');
    };
    
    // Función para cerrar el menú
    const closeMenu = () => {
        body.classList.remove('menu-open');
        menuButton?.classList.remove('active');
        menuButton?.setAttribute('aria-expanded', 'false');
    };

    // Toggle del menú al hacer click en el botón
    menuButton?.addEventListener('click', () => {
        if (isMenuOpen()) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Cerrar menú al hacer click en cualquier enlace
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar menú con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isMenuOpen()) {
            closeMenu();
        }
    });
});
