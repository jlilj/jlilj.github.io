
gsap.registerPlugin(ScrollTrigger);
gsap.from('.hero', {
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out'
});
gsap.from('.stat', {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out'
});
document.querySelectorAll('.animate-text').forEach(el => {
    gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        scrollTrigger: {
            trigger: el,
            start: 'top 80%'
        }
    });
});
document.querySelectorAll('.animate-card').forEach(el => {
    gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        scrollTrigger: {
            trigger: el,
            start: 'top 90%'
        }
    });
});
document.querySelectorAll('.animate-img').forEach(el => {
    gsap.from(el, {
        scale: 0.7,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)'
    });
});
document.querySelectorAll('.glass-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(el, { scale: 1.03, duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(el, { scale: 1, duration: 0.3 });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
