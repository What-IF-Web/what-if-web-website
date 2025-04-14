//home page stuff

import { animateProjectsSection } from "./animations/projectsLoad.js";

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

$(document).ready(function () {
  $(".cta_heading-span.is-2 strong").append($(".cta_scribble"));
  $(".cta_heading-span.is-1 strong").append($(".cta_burst-lines"));

  $(".services_list .card.is-services").each(function () {
    let card = $(this);
    let linkTargetID = card.find(".card_link-target").attr("id");

    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: `#${linkTargetID}`,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  });
});

const paths = [
  ".path2",
  ".path3",
  ".path4",
  ".path5",
  ".path6",
  ".path7",
  ".path2",
];

const morphPath = gsap.timeline({
  repeat: -1,
  yoyo: true,
  defaults: { duration: 1, ease: "power1.inOut" },
});

paths.forEach((path) => {
  morphPath.to(".path1", { morphSVG: path });
});

//hero section animation
var heroSplit = new SplitText(".home-header_heading", { type: "lines" });

var heroLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_home-header" },
});

heroLoad
  .from(heroSplit.lines, {
    opacity: 0,
    y: 400,
    stagger: 0.125,
  })
  .from(
    ".home-header_heading",
    { scale: 0.6, duration: 0.625, ease: "back.out(1.7)" },
    ">-0.5"
  );
heroLoad.from(".home-header_subheading", { y: 200, opacity: 0 }, ">-0.25");
heroLoad.from(".home-header_component > a", { y: 200, opacity: 0 }, ">-0.25");
heroLoad.from(
  ".home-header_lottie.is-dinkus",
  { y: 70, x: 180, duration: 0.5, scale: 0 },
  ">-0.5"
);
heroLoad.from(
  ".home-header_lottie.is-brazzo",
  { y: -200, x: 240, duration: 0.625, scale: 0 },
  "<-0.25"
);
heroLoad.from(
  ".home-header_lottie.is-slice",
  { y: -100, x: -200, duration: 0.75, scale: 0 },
  "<-0.125"
);

animateProjectsSection();

// //Projects/case studies section
// var projectsLoad = gsap.timeline({
//   scrollTrigger: { trigger: ".section_projects", start: "-=400 center" },
// });

// var projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
//   type: "lines",
// });

// projectsLoad.from(projectsSplit.lines, {
//   opacity: 0,
//   y: 150,
//   scale: 0.8,
//   stagger: 0.125,
// });
// projectsLoad.fromTo(
//   ".projects_video-wrapper",
//   { duration: 0.875, opacity: 0, y: 100 },
//   { opacity: 1, y: 0 },
//   ">-0.5"
// );
// projectsLoad.from(
//   ".projects_content > .projects_item > .projects_card",
//   { duration: 0.5, opacity: 0, y: 60, stagger: 0.1 },
//   ">-0.75"
// );
// projectsLoad.from(".projects_component > a", { y: 100, opacity: 0 }, "<0.25");

// projectsLoad
//   .from("#projects-highlight", { color: "EB5B30", duration: 0 }, "<")
//   .to(
//     "#projects-highlight",
//     { scale: 1.1, duration: 0.3, ease: "power2.in" },
//     "<"
//   )
//   .to("#projects-highlight", { scale: 1, duration: 0.2 }, "<0.4");
// projectsLoad.from(
//   "#projects-line > svg > path",
//   { drawSVG: "0% 0%", duration: 0.6 },
//   "<"
// );
// projectsLoad.to(
//   "#projects-line > svg > path",
//   { drawSVG: "100% 100%", duration: 0.6 },
//   ">-0.3"
// );
// projectsLoad.to(
//   "#projects-line > svg > path",
//   { opacity: 0, duration: 0 },
//   ">-0.01"
// );

//Services section animation
var servicesLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_services", start: "-=400 center" },
});

servicesLoad.from(".services_heading-wrapper > h2", {
  y: 80,
  opacity: 0,
});

//testimonials section animation
var testimonialsLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_testimonials", start: "-=400 center" },
});

var testimonialSplit = new SplitText("#testimonial-heading", { type: "lines" });

testimonialsLoad
  .from(".testimonials_star-wrapper > div", {
    opacity: 0,
    y: 75,
  })
  .from(
    testimonialSplit.lines,
    {
      opacity: 0,
      y: 100,
      scale: 0.8,
      stagger: 0.125,
    },
    "<0.25"
  );

//About Section Animation
var aboutLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_home-about", start: "top center" },
});

var aboutSplit = new SplitText(".home-about_heading-wrapper > h2", {
  type: "lines",
});

aboutLoad.from(
  aboutSplit.lines,
  { y: 100, scale: 0.8, opacity: 0, stagger: 0.125 },
  0
);
aboutLoad.from(
  ".home-about_content-left > p, .home-about_content-left > a",
  { opacity: 0, stagger: 0.125 },
  "<0.5"
);
aboutLoad.from(".home-about_background-shape", { scale: 0 }, -0.25);
aboutLoad.from(
  ".home-about_card-wrapper.is-first",
  { x: 2500, rotation: 100 },
  "<0.5"
);
aboutLoad.from(
  ".home-about_card-wrapper.is-second",
  { x: 2500, rotation: 60 },
  0.25
);
aboutLoad.from(
  ".home-about_card-wrapper.is-third",
  { x: 2000, rotation: 130 },
  0.125
);
aboutLoad
  .from(".home-about_lottie", { scale: 0 }, ">0.125")
  .from(".home-about_lottie-2", { scale: 0 }, "<0.25");

//quote CTA animation
var ctaLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_quote-cta", start: "-=400 center" },
});

ctaLoad.from(".quote-cta_component", { y: 100, scale: 0.9 });
ctaLoad.fromTo(
  ".quote-cta_heading-wrapper",
  { opacity: 0, scale: 0, y: 400 },
  { opacity: 1, scale: 1, y: 0 },
  "<+0.125"
);
ctaLoad.from(
  ".quote-cta_subheading",
  { y: 150, duration: 0.875, opacity: 0 },
  "<.25"
);
ctaLoad.from("#ctaButton", { y: 200, duration: 0.875, opacity: 0 }, "<0.125");
ctaLoad.to(
  ".quote-cta_heading > .text-color-alternate",
  { scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3 },
  ">-0.5"
);
ctaLoad.from(
  ".quote-cta_heading > .text-color-alternate",
  { color: "#fff9f3", duration: 0.125 },
  "<.125"
);
ctaLoad.from("#ctaScribble", { drawSVG: "0% 0%" }, "<");
ctaLoad.to("#ctaScribble", { drawSVG: "100% 100%" }, ">-0.3");
ctaLoad.to("#ctaScribble", { opacity: 0, duration: 0 }, ">-0.02");

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
  },
  0
);
footerLoad.from(
  ".footer_top-wrapper > p",
  { scale: 0.8, opacity: 0, y: 100 },
  "<0.25"
);
footerLoad.from(
  ".footer_form_component",
  { scale: 0.8, opacity: 0, y: 100 },
  "<0.125"
);
footerLoad.from(
  ".footer_links-wrapper > a",
  { opacity: 0, stagger: 0.125, duration: 0.5 },
  "<0.5"
);
footerLoad.from(
  ".footer_contact-wrapper > .footer_contact-item",
  { y: 50, opacity: 0, stagger: 0.125 },
  "<0.5"
);

let mm = gsap.matchMedia();

// desktop
mm.add("(min-width: 991px)", () => {
  //cta form + process animation starts here
  var ctaFormTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta_form",
      start: "-=400 center",
    },
  });
  var ctaFormLoad = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta_component",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      pin: ".cta_form-block",
      pinSpacing: false,
    },
  });
  //contents fade in
  ctaFormLoad.from(
    ".cta_heading-span",
    {
      y: 200,
      scale: 0.95,
      opacity: 0,
      stagger: 0.05,
    },
    0
  );
  ctaFormLoad.from(".cta_form_input-wrapper", { y: 300, opacity: 0 }, "<");
  ctaFormLoad.from("#cta-form-bottom", { y: 400, opacity: 0 }, "<");
  //contents fade out
  ctaFormLoad.to(
    ".cta_heading-span",
    {
      y: -400,
      stagger: 0.05,
      scale: 0.95,
      opacity: 0,
    },
    ">+0.25"
  );
  ctaFormLoad.to(".cta_form_input-wrapper", { y: -300, opacity: 0 }, "<+.05");
  ctaFormLoad.to("#cta-form-bottom", { y: -200, opacity: 0 }, "<");

  ctaFormTrigger.from(
    "#cta-form-orange",
    { color: "#0f2756", duration: 0.125 },
    "<.5"
  );
  ctaFormTrigger.to(
    "#cta-form-orange",
    { scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3 },
    "<"
  );
  ctaFormTrigger.from(
    ".cta_burst-lines > svg > path",
    { drawSVG: "0% 0%" },
    "<"
  );
  ctaFormTrigger.to(
    ".cta_burst-lines > svg > path",
    { drawSVG: "100% 100%" },
    ">-0.3"
  );
  ctaFormTrigger.to(
    ".cta_burst-lines > svg > path",
    { opacity: 0, duration: 0 },
    ">-0.05"
  );
  ctaFormTrigger.from(
    ".cta_scribble > svg > path",
    { drawSVG: "0% 0%" },
    "<+0.125"
  );
  ctaFormTrigger.to(
    ".cta_scribble > svg > path",
    { drawSVG: "100% 100%" },
    ">-0.3"
  );
  ctaFormTrigger.to(
    ".cta_scribble > svg > path",
    { opacity: 0, duration: 0 },
    ">-0.02"
  );

  //process section animation

  var processLoad = gsap.timeline({
    scrollTrigger: {
      trigger: ".process_component",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      pin: ".process_content-top",
    },
  });

  //contents fade in
  processLoad.from(
    ".process_heading-span",
    {
      y: 200,
      scale: 0.95,
      opacity: 0,
      stagger: 0.05,
    },
    0
  );
  processLoad.from(
    ".process_critter-wrapper",
    { y: 300, scale: 0.9, opacity: 0 },
    "<"
  );
  //contents fade out
  processLoad.to(
    ".process_heading-span",
    { y: -400, scale: 0.95, opacity: 0, duration: 1, stagger: 0.05 },
    ">"
  );
  processLoad.to(".process_critter-wrapper", { y: -200 }, "<+0.15");
  //critter grows
  processLoad.to(
    ".process_critter",
    {
      width: "100dvw",
      height: "150dvh",
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      border: "transparent",
    },
    "<"
  );
  processLoad.to(".process_critter-eyes", { opacity: 0, duration: 0.125 }, "<");
  //cards path animation
  gsap.set(".process_card-wrapper > .process_card", {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50%, 50%",
  });
  processLoad.to(
    ".process_card-wrapper > .process_card",
    {
      stagger: 0.2,
      ease: "none",
      motionPath: {
        path: "#process-path",
        align: "#process-path",
        autoRotate: 180,
      },
    },
    ">"
  );

  //process + cta ends here

  //pinned service element
  var servicesPinTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_services",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: ".services_content-top-wrapper",
      pinSpacing: false,
    },
  });
});
//mobile
mm.add("(max-width: 991px)", () => {
  var processMobile = gsap.timeline({
    scrollTrigger: { trigger: ".process_component" },
  });

  processMobile.from(
    ".process_heading-span",
    { y: 100, stagger: 0.1, opacity: 0 },
    0
  );

  //mobile cta load
  var ctaMobile = gsap.timeline({
    scrollTrigger: { trigger: ".cta_component" },
  });
  var ctaFormTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta_form",
      start: "-=400 center",
    },
  });

  ctaMobile.from(".cta_heading-span", { y: 100, opacity: 0, stagger: 0.1 }, 0);
  ctaMobile.from(".cta_form_input-wrapper", { y: 150, opacity: 0 }, ">-0.25");
  ctaMobile.from(
    "#cta-form-bottom",
    { y: 150, opacity: 0, duration: 0.75 },
    ">-0.5"
  );

  ctaFormTrigger.from(
    "#cta-form-orange",
    { color: "#0f2756", duration: 0.125 },
    "<.5"
  );
  ctaFormTrigger.to(
    "#cta-form-orange",
    { scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3 },
    "<"
  );
  ctaFormTrigger.from(
    ".cta_burst-lines > svg > path",
    { drawSVG: "0% 0%" },
    "<"
  );
  ctaFormTrigger.to(
    ".cta_burst-lines > svg > path",
    { drawSVG: "100% 100%" },
    ">-0.3"
  );
  ctaFormTrigger.to(
    ".cta_burst-lines > svg > path",
    { opacity: 0, duration: 0 },
    ">-0.05"
  );
  ctaFormTrigger.from(
    ".cta_scribble > svg > path",
    { drawSVG: "0% 0%" },
    "<+0.125"
  );
  ctaFormTrigger.to(
    ".cta_scribble > svg > path",
    { drawSVG: "100% 100%" },
    ">-0.3"
  );
  ctaFormTrigger.to(
    ".cta_scribble > svg > path",
    { opacity: 0, duration: 0 },
    ">-0.02"
  );
});
