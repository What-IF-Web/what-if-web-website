//Case studies page

//call modular animations
document.addEventListener('DOMContentLoaded', () => {
  if (window.Animations) {
    Animations.animateSolutions();
    Animations.animateFooter();
    Animations.animateTestimonial();
  }
});

gsap.defaults({
    ease: "power4.out",
    duration: 1,
});

var csHeaderLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_case-studies" },
});

csHeaderLoad.from(".case-studies_content-top > h1", {
  y: 150,
  opacity: 0
});
csHeaderLoad.from(
  ".case-studies_content-top > p",
  { y: 100, opacity: 0},
  "<0.125"
);
csHeaderLoad.from(
  ".case-studies_filter-item",
  { y: 120, stagger: 0.125},
  "<0.5"
);
csHeaderLoad.from(
  ".reset-link",
  { y: 120, opacity: 0},
  ">-0.25"
);

//cards animation
const cards = document.querySelectorAll(".case-studies_item");

var cardsLoad = gsap.timeline({
  scrollTrigger: { trigger: ".case-studies_list" },
});

cardsLoad.from(
  cards,
  { y: 300, opacity: 0, duration: 1.5, stagger: 0.125},
  0.25
);
cardsLoad.from(
  ".case-studies_content-wrapper",
  { y: 300, opacity: 0, duration: 1.5, stagger: 0.125},
  "<+0.125"
);