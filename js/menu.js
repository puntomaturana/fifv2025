// Funcionalidad del menú móvil
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".navbar-toggle");
    const menuList = document.querySelector(".navbar-menu");
    let scrollPosition = 0;
    
    if (menuButton && menuList) {
        // Toggle menu al hacer click
        menuButton.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpening = !menuButton.classList.contains("active");
            
            if (isOpening) {
                // Guardar posición del scroll antes de fijar el body
                scrollPosition = window.pageYOffset;
                document.body.style.top = `-${scrollPosition}px`;
            }
            
            menuButton.classList.toggle("active");
            menuList.classList.toggle("active");
            document.body.classList.toggle("menu-open");
            
            if (!isOpening) {
                // Restaurar posición del scroll al cerrar
                document.body.style.top = "";
                window.scrollTo(0, scrollPosition);
            }
            
            // Toggle aria-expanded para accesibilidad
            menuButton.setAttribute("aria-expanded", isOpening);
        });

        // Cerrar menú al hacer click en cualquier enlace
        const menuLinks = document.querySelectorAll(".navbar-link");
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuButton.classList.remove("active");
                menuList.classList.remove("active");
                document.body.classList.remove("menu-open");
                document.body.style.top = "";
                window.scrollTo(0, scrollPosition);
                menuButton.setAttribute("aria-expanded", "false");
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".navbar-container") && menuList.classList.contains("active")) {
                menuButton.classList.remove("active");
                menuList.classList.remove("active");
                document.body.classList.remove("menu-open");
                document.body.style.top = "";
                window.scrollTo(0, scrollPosition);
                menuButton.setAttribute("aria-expanded", "false");
            }
        });

        // Cerrar menú con la tecla Escape
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && menuList.classList.contains("active")) {
                menuButton.classList.remove("active");
                menuList.classList.remove("active");
                document.body.classList.remove("menu-open");
                document.body.style.top = "";
                window.scrollTo(0, scrollPosition);
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    }
});
