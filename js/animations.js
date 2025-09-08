// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animaciones del hero
function initHeroAnimations() {
    // Timeline para la secuencia de entrada
    const heroTl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 1
        }
    });

    heroTl
        .from(".pre-ini, .pre-fin", {
            opacity: 0,
            y: 50,
            duration: 1.2,
            stagger: 0.2
        })
        .from(".titulo-central", {
            opacity: 0,
            y: 100,
            duration: 1.5
        }, "-=0.8")
        .from(".gpez", {
            opacity: 0,
            scale: 0.8,
            duration: 1.2
        }, "-=1")
        .from(".fi-izq, .fi-der", {
            opacity: 0,
            x: (index) => index === 0 ? -50 : 50,
            duration: 1
        }, "-=0.8")
        .from(".fecha-ini, .fecha-fin", {
            opacity: 0,
            y: 20,
            stagger: 0.2
        }, "-=0.5")
        .from(".texto-inferior", {
            opacity: 0,
            y: 20
        }, "-=0.3");
}

// Animaciones de la sección de contenido
function initContentAnimations() {
    // Animación del título izquierdo
    gsap.from(".left-title", {
        scrollTrigger: {
            trigger: ".content",
            start: "top center",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out"
    });

    // Animación del texto
    gsap.from(".text-column p", {
        scrollTrigger: {
            trigger: ".text-column",
            start: "top center",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
}

// Inicializar todas las animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initContentAnimations();
});
