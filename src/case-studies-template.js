//case studies template

//call modular animations
document.addEventListener('DOMContentLoaded', () => {
  if (window.Animations) {
    Animations.animateBlogs();
    Animations.animateFooter();
    Animations.animateCTA();
  }
});

var csTemplateHeader = gsap.timeline({
  scrollTrigger: { trigger: ".section_case-study-header" },
});

csTemplateHeader.from(
  ".case-study-header_image-wrapper",
  { y: 50, opacity: 0, ease: "power3.out", duration: 1.5 },
  0
);
csTemplateHeader.from(
  ".case-study-header_pill",
  { y: 50, opacity: 0, duration: 0.75, ease: "power4.out" },
  0.5
);
csTemplateHeader.from(
  ".case-study-header_heading",
  { y: 80, opacity: 0, duration: 1, ease: "power4.out" },
  "<0.25"
);
csTemplateHeader.from(
  ".case-study-header_heading-content > .max-width-custom",
  { y: 50, opacity: 0, duration: 0.875, ease: "power4.out" },
  "<0.2"
);
csTemplateHeader.from(
  ".case-study-header_bottom-content > .button",
  { opacity: 0, duration: 1, ease: "power4.out" },
  "<0.5"
);

var csTemplateBody = gsap.timeline({
  scrollTrigger: { trigger: ".section_case-study", start: "top-=400 center" },
});

csTemplateBody.from(
  ".table-of-contents",
  { y: 80, opacity: 0.5, ease: "power3.out", duration: 1 },
  0
);
csTemplateBody.from(
  ".case-study_content",
  { y: 100, opacity: 0, ease: "power3.out", duration: 1 },
  0.25
);
csTemplateBody.from(
  ".case-study_content > div",
  { y: 25, opacity: 0, ease: "power4.out", duration: 1, stagger: 0.125 },
  "<0.125"
);

var csTechStack = gsap.timeline({
  scrollTrigger: { trigger: ".section_tech-stack", start: "top-=400 center" },
});

csTechStack.from(
  "#tech-stack-wrapper > h2",
  { y: 80, opacity: 0, ease: "power4.out", duration: 0.875 },
  0
);
csTechStack.from(
  "#tech-stack-wrapper > p",
  { y: 50, opacity: 0, ease: "power4.out", duration: 0.75 },
  0.25
);
csTechStack.from(
  ".tech-stack_item",
  { y: 100, duration: 1, opacity: 0, stagger: 0.125, ease: "power.4out" },
  0.5
);
csTechStack.from(
  ".tech-stack_image",
  { y: 30, duration: 0.75, opacity: 0, stagger: 0.125, ease: "power.4out" },
  "<"
);
csTechStack.from(
  ".tech-stack_item-front > h3",
  { y: 50, duration: 0.75, opacity: 0, stagger: 0.125, ease: "power.4out" },
  "<0.125"
);

let gm = gsap.matchMedia();

// desktop
gm.add("(min-width: 991px)", () => {
  // case studies table of contents pin
  var contentsPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".case-study_component",
      start: "top top",
      end: "bottom+=520 bottom",
      scrub: true,
      pin: ".table-of-contents_wrapper",
      pinSpacing: false,
    },
  });
});