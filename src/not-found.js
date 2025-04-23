//404 page animation

//call modular animations
document.addEventListener('DOMContentLoaded', () => {
    if (window.Animations) {
      Animations.animateFooter();
    }
  });

var notFoundLoad = gsap.timeline({scrollTrigger: {trigger: ".section_not-found-header"}});

notFoundLoad.from('.not-found-header_heading-wrapper > h1, .not-found-header_heading-wrapper > .not-found-header_lottie', {scale: 0.9, y: 150, opacity: 0, duration: 1, stagger: 0.125, ease: "power4.out"}, 0);
notFoundLoad.from('.not-found-header_heading-text', {y: 150, opacity: 0, duration: 1.25, ease: 'power3.out'}, 0.25);
notFoundLoad.from('.not-found-header_component > .button', {y: 100, opacity: 0, duration: 1, ease: 'power3.out'}, 0.35);