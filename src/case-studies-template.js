//case studies template

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

var csTemplateHeader = gsap.timeline({
  scrollTrigger: { trigger: ".section_case-study-header" },
});

csTemplateHeader.from(
  ".case-study-header_image-wrapper",
  { y: 50, opacity: 0, duration: 1.5 },
  0
);
csTemplateHeader.from(
  ".case-study-header_pill",
  { y: 50, opacity: 0},
  0.5
);
csTemplateHeader.from(
  ".case-study-header_heading",
  { y: 80, opacity: 0},
  "<0.25"
);
csTemplateHeader.from(
  ".case-study-header_heading-content > .max-width-custom",
  { y: 50, opacity: 0},
  "<0.2"
);
csTemplateHeader.from(
  ".case-study-header_bottom-content > .button",
  { opacity: 0},
  "<0.5"
);

var csTemplateBody = gsap.timeline({
  scrollTrigger: { trigger: ".section_case-study", start: "top-=400 center" },
});

csTemplateBody.from(
  ".table-of-contents",
  { y: 80, opacity: 0.5},
  0
);
csTemplateBody.from(
  ".case-study_content",
  { y: 100, opacity: 0},
  0.25
);
csTemplateBody.from(
  ".case-study_content > div",
  { y: 25, opacity: 0, stagger: 0.125 },
  "<0.125"
);