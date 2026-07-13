// Inicializamos el efecto 3D "Tilt" de Vanilla-Tilt
VanillaTilt.init(document.querySelectorAll(".hero-image-container, .card, .feat-card"), {
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.15,
});

// Animación de seguimiento de luces en el fondo
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.background-glow');
    // Calcula la posición para que el resplandor siga sutilmente al cursor
    const x = e.clientX * 0.1;
    const y = e.clientY * 0.1;
    glow.style.transform = `translate(${x}px, ${y}px)`;
});
