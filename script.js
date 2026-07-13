// Inicializamos el efecto 3D "Tilt" en los elementos seleccionados
VanillaTilt.init(document.querySelectorAll(".hero-image-container, .card, .feat-card"), {
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.15,
});

// Animación sutil de seguimiento de luces en el fondo al mover el mouse
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.background-glow');
    glow.style.transform = `translate(${e.clientX * 0.1}px, ${e.clientY * 0.1}px)`;
});
