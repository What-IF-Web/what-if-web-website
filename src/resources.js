//Resources page

//call modular animations
document.addEventListener('DOMContentLoaded', () => {
    if (window.Animations) {
      Animations.animateFooter();
    }
  });

var resourceHeaderLoad = gsap.timeline({scrollTrigger: {trigger: ".section_resources"}});

resourceHeaderLoad.from(".resources_top-content > h1", {y: 150, duration: .75, opacity: 0, ease: "power3.out"});
resourceHeaderLoad.from(".resources_top-content > p", {y: 100, duration: 1, opacity: 0, ease: "power3.out"}, "<0.125");
resourceHeaderLoad.from(".resources_tab-link", {y: 35, duration: 0.75, stagger: 0.125, ease: "power3.out"}, "<0.5");

//simplified cards animation
const cards = document.querySelectorAll(".resources_item");
var cardsLoad = gsap.timeline({scrollTrigger: {trigger: ".resources_list"}});

cardsLoad.from(cards, {y: 400, opacity: 0, duration: 1.5, stagger: 0.125, ease: "power4.out"});