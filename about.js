//about page scroll section

let am = gsap.matchMedia();

am.add("(min-width: 991px)", () => {
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
//about page animations

//about hero load
var aboutHero = gsap.timeline({
  scrollTrigger: { trigger: ".section_about-header" },
});

var aboutSplit = new SplitText(".about-header_heading-wrapper > h1", {
  type: "lines",
});

aboutHero.from(
  aboutSplit.lines,
  { opacity: 0, y: 100, ease: "power4.out", duration: 1, stagger: 0.125 },
  "0"
);
aboutHero.from(
  ".home-about_card-wrapper",
  { opacity: 0, y: 50, ease: "power3.out", duration: 1, stagger: 0.125 },
  "0.5"
);

//team load
var teamLoad = gsap.timeline({ scrollTrigger: { trigger: ".section_team" } });

teamLoad.from(
  ".team_content-top",
  { y: 75, opacity: 0, duration: 1, ease: "power4.out" },
  "0"
);
teamLoad.from(
  ".team_item",
  { y: 150, opacity: 0, stagger: 0.125, duration: 1, ease: "power4.out" },
  "0.25"
);

//testimonials section animation
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

//footer animation
var footerLoad = gsap.timeline({
  scrollTrigger: { trigger: ".footer_component", start: "-=400 center" },
});

var footerSplit = new SplitText(".footer_top-wrapper > h2", { type: "lines" });

footerLoad.from(
  footerSplit.lines,
  {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1,
  },
  0
);
footerLoad.from(
  ".footer_top-wrapper > p",
  { scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1 },
  "<0.25"
);
footerLoad.from(
  ".footer_form_component",
  { scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1 },
  "<0.125"
);
footerLoad.from(
  ".footer_links-wrapper > a",
  { y: 32, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25 },
  "<0.5"
);
footerLoad.from(
  ".footer_contact-wrapper > .footer_contact-item",
  { y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1 },
  "<0.5"
);
