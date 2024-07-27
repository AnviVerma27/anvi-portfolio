// src/scrollAnimations.js

export const handleScrollAnimations = () => {
    const sections = document.querySelectorAll('.animated-section');
    
        sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    
        if (isVisible) {
            if (index % 2 === 0) {
            section.classList.add('slide-in-right');
            } else {
            section.classList.add('slide-in-left');
            }
            section.classList.remove('section-hidden');
        }
        });
    };
    
    export const initScrollAnimations = () => {
        document.addEventListener('scroll', handleScrollAnimations);
        handleScrollAnimations(); // Initial call to handle sections already in view
    };