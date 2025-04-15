//Case studies page

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

var solutionsLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_solutions", start: "-=400 center" },
});

solutionsLoad.from(
  ".solutions_bespoke-item",
  { y: 100, opacity: 0, duration: 1, ease: "power4.out" },
  0
);
solutionsLoad.from(
  ".solutions_bespoke-item > h2, .solutions_bespoke-item > p",
  { y: 80, opacity: 0, duration: 0.875, ease: "power3.out", stagger: "0.05" },
  "<0.25"
);
solutionsLoad.from(
  ".solutions_service-item",
  { y: 100, opacity: 0, duration: 1, ease: "power4.out", stagger: "0.125" },
  0.35
);
solutionsLoad.from(
  ".solutions_service-item > .solutions_service-icon-wrapper > .solutions_service-icon",
  { y: 50, opacity: 0, duration: 1, ease: "power4.out", stagger: "0.125" },
  0.25
);

//testimonials section animation -- modularise
var testimonialsLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_testimonials", start: "-=400 center" },
});

var testimonialSplit = new SplitText("#testimonial-heading", { type: "lines" });

testimonialsLoad
  .from(".testimonials_star-wrapper > div", {
    opacity: 0,
    y: 75,
    duration: 0.75,
    ease: "power3.out",
  })
  .from(
    testimonialSplit.lines,
    {
      opacity: 0,
      y: 100,
      duration: 1,
      scale: 0.8,
      stagger: 0.125,
      ease: "power4.out",
    },
    "<0.25"
  );

document.addEventListener('DOMContentLoaded', () => {
  if (window.Animations) {
    Animations.animateFooter();
  }
})