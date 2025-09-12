document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        offset: 0,
        once: true,
        mirror: false
    });

    // Manejo del menú móvil
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
});

// Inicializar AOS cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        offset: 0,
        once: true,
        mirror: false
    });
});
