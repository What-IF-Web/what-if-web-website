//Resources page

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

var resourceHeaderLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_resources" },
});

resourceHeaderLoad.from(".resources_top-content > h1", {
  y: 150,
  duration: 0.75,
  opacity: 0,
});
resourceHeaderLoad.from(
  ".resources_top-content > p",
  { y: 100, opacity: 0},
  "<0.125"
);
resourceHeaderLoad.from(
  ".resources_tab-link",
  { y: 35, duration: 0.75, stagger: 0.125},
  "<0.5"
);

//cards animation
const cards = document.querySelectorAll(".resources_item");
var cardsLoad = gsap.timeline({
  scrollTrigger: { trigger: ".resources_list" },
});

cardsLoad.from(".resources_item", {
  y: 400,
  opacity: 0,
  duration: 1.5,
  stagger: 0.125,
});
