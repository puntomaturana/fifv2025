// Cuenta regresiva al 25 de octubre de 2025
function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    // Fecha objetivo: 25 de octubre de 2025, 00:00:00
    const targetDate = new Date('2025-10-25T00:00:00-03:00');
    const now = new Date();
    let diff = targetDate - now;
    if (diff <= 0) {
        countdownEl.textContent = '¡El festival ha comenzado! Revisa el programa.';
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);
    countdownEl.textContent = `${days} días, ${hours} horas, ${minutes} minutos`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
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
