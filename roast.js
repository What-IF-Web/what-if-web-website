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

//FAQ section

var faqLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_faq", start: "-=400 center" },
});

faqLoad.from(
  "#faq-heading",
  { y: 80, opacity: 0, duration: 0.875, ease: "power3.out" },
  0
);
faqLoad.from(
  ".faq_list > .faq_item",
  { y: 50, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.125 },
  0.25
);
faqLoad.from(
  ".faq_lottie",
  { scale: 0, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.25 },
  "<0.5"
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
  { opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.5 },
  "<0.5"
);
footerLoad.from(
  ".footer_contact-wrapper > .footer_contact-item",
  { y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1 },
  "<0.5"
);

let gm = gsap.matchMedia();

// desktop
gm.add("(min-width: 991px)", () => {
  // roast page cards pin
  var contentsPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".how-it-works_component",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: ".how-it-works_content",
      pinSpacing: false,
    },
  });
});
