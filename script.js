// Main animation controller
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero-section');
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');

    // Performance optimization
    let ticking = false;

    // Initial animations
    const initAnimations = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" }});
        
        // Animate title with character split
        const titleText = title.textContent;
        title.innerHTML = '';
        titleText.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            title.appendChild(span);
        });

        tl.to(title.children, {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.8,
            stagger: 0.02
        })
        .to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, "-=0.4")
        .to(ctaButton, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, "-=0.4");
    };

    // Mouse parallax effect
    const handleMouseMove = (e) => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 20;
                const yPos = (clientY / window.innerHeight - 0.5) * 20;

                gsap.to(heroContent, {
                    x: xPos,
                    y: yPos,
                    rotationY: xPos * 0.1,
                    rotationX: -yPos * 0.1,
                    duration: 1,
                    ease: "power2.out"
                });

                ticking = false;
            });
            ticking = true;
        }
    };

    // Button hover animation
    const setupButtonAnimation = () => {
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                scale: 1.05,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    };

    // Initialize all animations
    initAnimations();
    setupButtonAnimation();

    // Event listeners
    heroSection.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    window.addEventListener('unload', () => {
        heroSection.removeEventListener('mousemove', handleMouseMove);
    });
});
