//contact page stuff

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

var contactLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_contact-header" },
});

contactLoad.from(
  ".contact-header_heading-wrapper",
  { y: 80, opacity: 0},
  0
);
contactLoad.from(
  ".container-header_card",
  { y: 50, opacity: 0},
  0.125
);
contactLoad.from(
  ".contact-header_info-callout",
  { y: 50, opacity: 0},
  0.25
);
contactLoad.from(
  ".contact-header_info-callout > h2, .contact-header_info-callout > p",
  { y: 30, opacity: 0, stagger: "0.125" },
  0.35
);
contactLoad.from(
  ".contact-header_contact",
  { y: 30, opacity: 0, stagger: 0.125 },
  0.625
);
contactLoad.from(
  ".contact-header_form-wrapper",
  { y: 100, opacity: 0, duration: 1.25},
  0.75
);
contactLoad.from(
  ".contact-header_form > .form_input-wrapper, .contact-header_form > .button",
  { y: 10, opacity: 0, duration: 0.5, stagger: 0.125 },
  "<0.125"
);
contactLoad.to(
  ".button.is-form-submit",
  { duration: 0.25, scale: 1.05, repeat: 1, yoyo: true },
  ">"
);