// Animation utilities
const animationUtils = {
    // Text reveal animation
    revealText: (element, delay = 0) => {
        return gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay,
            ease: "power3.out"
        });
    },

    // Parallax effect
    initParallax: (element, intensity = 1) => {
        let xTo = gsap.quickTo(element, "x", {duration: 0.6, ease: "power3"}),
            yTo = gsap.quickTo(element, "y", {duration: 0.6, ease: "power3"});

        return (e) => {
            const rect = element.getBoundingClientRect(),
                centerX = rect.left + rect.width / 2,
                centerY = rect.top + rect.height / 2,
                mouseX = e.clientX,
                mouseY = e.clientY;

            xTo((mouseX - centerX) * 0.1 * intensity);
            yTo((mouseY - centerY) * 0.1 * intensity);
        };
    },

    // Button hover effect
    buttonHover: (button) => {
        const timeline = gsap.timeline({ paused: true });
        
        timeline.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });

        button.addEventListener("mouseenter", () => timeline.play());
        button.addEventListener("mouseleave", () => timeline.reverse());

        return timeline;
    }
};

// Export for use in main script
export default animationUtils;
