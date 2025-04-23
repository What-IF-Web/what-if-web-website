//about page animations

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

let mm = gsap.matchMedia();

mm.add("(min-width: 991px)", () => {
  var aboutScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_about-header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      pin: ".about-header_component",
    },
  });

  aboutScroll.to(".about-header_frame", { x: "-300dvw" });
});

//about hero load
var aboutHero = gsap.timeline({
  scrollTrigger: { trigger: ".section_about-header" },
});

var aboutSplit = new SplitText(".about-header_heading-wrapper > h1", {
  type: "lines",
});

aboutHero.from(aboutSplit.lines, { opacity: 0, y: 100, stagger: 0.125 }, 0);
aboutHero.from(
  ".home-about_card-wrapper.is-about-2",
  { opacity: 0, y: 500, x: 400, rotation: "50" },
  0.5
);
aboutHero.from(
  ".home-about_card-wrapper.is-about-1",
  { opacity: 0, y: 300, x: 300, rotation: "40" },
  0.75
);



let am = gsap.matchMedia();

// desktop
am.add("(min-width: 991px)", () => {
  var aboutHeroLast = gsap.timeline({
    scrollTrigger: { trigger: ".about-header_trigger" },
  });
  
  aboutHeroLast.from(
    ".about-header_minimal-card.is-first",
    { opacity: 0, y: -700, x: -150, rotation: "50" },
    0
  );
  aboutHeroLast.from(
    ".about-header_minimal-card.is-second",
    { opacity: 0, y: -800, x: -300, rotation: "64" },
    0.125
  );
  aboutHeroLast.from(
    ".about-header_minimal-card.is-last",
    { opacity: 0, y: -900, x: -50, rotation: "80" },
    0.25
  );
  aboutHeroLast.from(
    ".about-header_heading-wrapper > div",
    { y: 100, opacity: 0, stagger: 0.25 },
    0.25
  );
  aboutHeroLast.from(
    ".about-header_card-ghost",
    { y: 100, scale: 0.8, opacity: 0 },
    0.5
  );
  aboutHeroLast.from(
    ".about-header_card-brazzo",
    { y: 80, scale: 0.8, opacity: 0 },
    0.75
  );
});

// mobile
am.add("(max-width: 991px)", () => {
  var aboutHeroLast = gsap.timeline({
    scrollTrigger: { trigger: ".about-header_trigger" },
  });
  
  aboutHeroLast.from(
    ".about-header_minimal-card.is-first",
    { opacity: 0, y: 100, x: -150, rotation: "50" },
    0
  );
  aboutHeroLast.from(
    ".about-header_minimal-card.is-second",
    { opacity: 0, y: 200, x: -300, rotation: "64" },
    0.125
  );
  aboutHeroLast.from(
    ".about-header_minimal-card.is-last",
    { opacity: 0, y: 250, x: -50, rotation: "80" },
    0.25
  );
  aboutHeroLast.from(
    ".about-header_heading-wrapper > div",
    { y: 100, opacity: 0, stagger: 0.25 },
    0.25
  );
  aboutHeroLast.from(
    ".about-header_card-ghost",
    { y: 100, scale: 0.8, opacity: 0 },
    0.5
  );
  aboutHeroLast.from(
    ".about-header_card-brazzo",
    { y: 80, scale: 0.8, opacity: 0 },
    0.75
  );
});

//team load
var teamLoad = gsap.timeline({ scrollTrigger: { trigger: ".section_team" } });

teamLoad.from(".team_content-top", { y: 75, opacity: 0 }, 0);
teamLoad.from(".team_item", { y: 150, opacity: 0, stagger: 0.125 }, 0.25);