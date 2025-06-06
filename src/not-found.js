//404 page animation

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

var notFoundLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_not-found-header" },
});

notFoundLoad.from(
  ".not-found-header_heading-wrapper > h1, .not-found-header_heading-wrapper > .not-found-header_lottie",
  {
    scale: 0.9,
    y: 150,
    opacity: 0,
    stagger: 0.125,
  },
  0
);
notFoundLoad.from(
  ".not-found-header_heading-text",
  { y: 150, opacity: 0},
  0.25
);
notFoundLoad.from(
  ".not-found-header_component > .button",
  { y: 100, opacity: 0},
  0.35
);