// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero-section');
    const ctaButton = document.querySelector('.cta-button');

    // Initial animation
    gsap.to(heroContent, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    // Mouse movement parallax effect
    heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(heroContent, {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Button hover animation
    ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});
