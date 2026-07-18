// actu.js - Lógica para Notas de Actualización
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistema de notas de actualización cargado.");

    // Animación de entrada suave para las tarjetas
    const cards = document.querySelectorAll('.update-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
