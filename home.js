//home page stuff

$(document).ready(function () {
  $(".cta_heading-span.is-2 strong").append($(".cta_scribble"));
  $(".cta_heading-span.is-1 strong").append($(".cta_burst-lines"));
});


//case studies blob morph
var morphPath = gsap.timeline({ repeat: -1 });

morphPath
  .to(".path1", {duration: 2, morphSVG: { shape: ".path2", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path3", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path4", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path5", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path6", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path7", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path2", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path1", shapeIndex: "auto" } });


//cards scroll through animation for the services section
$(document).ready(function () {
  let cardsArray = [];

  // Select all .card.is-services elements inside .services_list
  $(".services_list .card.is-services").each(function () {
    let card = $(this);
    let linkTargetID = card.find(".card_link-target").attr("id");

    // Push the card element and ID into the array as an object
    cardsArray.push({
      cardElement: card,
      linkTargetID: linkTargetID,
    });
  });
  cardsArray.forEach(function (item) {
    // GSAP ScrollTrigger animation for each card
    gsap.fromTo(
      item.cardElement,
      { opacity: 0, scale: 0.2, y: 0 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `#${item.linkTargetID}`, // Trigger based on the ID
          start: "top 90%", // Adjust to trigger when card enters viewport
          end: "top 40%",
          scrub: true,
          markers: false,
        },
      }
    );
  });
});

//splitHeadingIntoLines
var heroSplit = new SplitText(".home-header_heading", { type: "lines" });

//hero section animation
var heroLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_home-header" },
});

//content
heroLoad
  .from(heroSplit.lines, {
    duration: 1,
    opacity: 0,
    ease: "power4.out",
    y: 500,
    stagger: 0.125,
  })
  .from(
    ".home-header_heading",
    { scale: 0.6, duration: 0.625, ease: "back.out(1.7)" },
    ">-0.5"
  );
heroLoad.from(
  ".home-header_subheading",
  { duration: 0.875, y: 300, opacity: 0, ease: "power4.out" },
  ">-0.25"
);
heroLoad.from(
  ".home-header_component > a",
  { duration: 0.875, y: 200, opacity: 0, ease: "power3.out" },
  ">-0.25"
);

//critters
heroLoad.from(
  ".home-header_lottie.is-dinkus",
  { y: 70, x: 180, duration: 0.5, scale: 0, ease: "power4.out" },
  ">-0.5"
);
heroLoad.from(
  ".home-header_lottie.is-brazzo",
  { y: -200, x: 240, duration: 0.625, scale: 0, ease: "power4.out" },
  "<-0.25"
);
heroLoad.from(
  ".home-header_lottie.is-slice",
  { y: -100, x: -200, duration: 0.75, scale: 0, ease: "power4.out" },
  "<-0.125"
);

//featured projects animation
var projectsLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_projects", start: "-=400 center" },
});

var projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
  type: "lines",
});

projectsLoad.from(projectsSplit.lines, {
  duration: 1,
  opacity: 0,
  y: 150,
  scale: 0.8,
  ease: "power3.out",
  stagger: 0.125,
});
projectsLoad.from(
  ".projects_content > .projects_item > .projects_card",
  { duration: 1.5, opacity: 0, y: 100, ease: "power3.out", stagger: 0.125 },
  ">-0.5"
);
projectsLoad.from(
  ".projects_component > a",
  { y: 100, opacity: 0, ease: "power3.out" },
  "<0.25"
);

projectsLoad
  .from("#projects-highlight", { color: "EB5B30", duration: 0 }, "<")
  .to(
    "#projects-highlight",
    { scale: 1.1, duration: 0.3, ease: "power2.in" },
    "<"
  )
  .to(
    "#projects-highlight",
    { scale: 1, duration: 0.2, ease: "power2.out" },
    "<0.4"
  );
projectsLoad.from(
  "#projects-line > svg > path",
  { drawSVG: "0% 0%", duration: 0.6, ease: "power3.out" },
  "<"
);
projectsLoad.to(
  "#projects-line > svg > path",
  { drawSVG: "100% 100%", duration: 0.6, ease: "power3.out" },
  ">-0.3"
);
projectsLoad.to(
  "#projects-line > svg > path",
  { opacity: 0, duration: 0 },
  ">-0.01"
);

//solutions/services section animation
var servicesLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_services", start: "-=400 center" },
});

servicesLoad.from(".services_heading-wrapper > h2", {
  y: 80,
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
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

//About Section Animation
var aboutLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_home-about", start: "top center" },
});

var aboutSplit = new SplitText(".home-about_content-left > h2", {
  type: "lines",
});

//text
aboutLoad.from(
  aboutSplit.lines,
  { y: 100, scale: 0.8, opacity: 0, stagger: 0.125, ease: "power3.out" },
  0
);
aboutLoad.from(
  ".home-about_content-left > p, .home-about_content-left > a",
  { duration: 1, ease: "power3.out", opacity: 0, stagger: 0.125 },
  "<0.5"
);

//images
aboutLoad.from(".home-about_background-shape", { scale: 0 }, -0.25);
aboutLoad.from(
  ".home-about_card-wrapper.is-first",
  { x: 2500, rotation: 100, duration: 1.25, ease: "power4.out" },
  "<0.5"
);
aboutLoad.from(
  ".home-about_card-wrapper.is-second",
  { x: 2500, rotation: 60, duration: 1.25, ease: "power4.out" },
  0.25
);
aboutLoad.from(
  ".home-about_card-wrapper.is-third",
  { x: 2000, rotation: 130, duration: 1.5, ease: "power4.out" },
  0.125
);

aboutLoad
  .from(
    ".home-about_lottie",
    { scale: 0, duration: 1, ease: "back.out(1.7)" },
    ">0.125"
  )
  .from(
    ".home-about_lottie-2",
    { scale: 0, duration: 1, ease: "back.out(1.7)" },
    "<0.25"
  );

//blog section
var blogLoad = gsap.timeline({
  scrollTrigger: { trigger: ".section_related-blog", start: "-=400 center" },
});

blogLoad
  .from(".related-blog_heading-wrapper > div", {
    y: 100,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
  .from(".related-blog_list", { opacity: 0, duration: 0.5, ease: "power3.out" })
  .from(
    ".related-blog_list > .related-blog_item",
    { y: 180, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.125 },
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
  { opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25 },
  "<0.5"
);
footerLoad.from(
  ".footer_contact-wrapper > .footer_contact-item",
  { y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1 },
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
      markers: true,
    },
  });
  var ctaFormLoad = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta_form-block",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      markers: false,
      pin: ".cta_form",
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
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
    },
    0
  );
  ctaFormLoad.from(
    ".cta_form_input-wrapper",
    { y: 300, opacity: 0, duration: 1, ease: "power3.out" },
    "<"
  );
  ctaFormLoad.from(
    "#cta-form-bottom",
    { y: 400, opacity: 0, duration: 1, ease: "power3.out" },
    "<"
  );
  //form field wobble or something
  // ctaFormLoad.to("", {}, ">+0.25");
  //contents fade out
  ctaFormLoad.to(
    ".cta_heading-span",
    {
      y: -400,
      stagger: 0.05,
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    ">+0.25"
  );
  ctaFormLoad.to(
    ".cta_form_input-wrapper",
    { y: -300, opacity: 0, duration: 1, ease: "power3.out" },
    "<+.05"
  );
  ctaFormLoad.to(
    "#cta-form-bottom",
    { y: -200, opacity: 0, duration: 1, ease: "power3.out" },
    "<"
  );

  ctaFormTrigger.from(
    "#cta-form-orange",
    { color: "#0f2756", duration: 0.125, ease: "power3.out" },
    "<.5"
  );
  ctaFormTrigger.to(
    "#cta-form-orange",
    { scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3 },
    "<"
  );
  ctaFormTrigger.from(
    ".cta_burst-lines > svg > path",
    { drawSVG: "0% 0%", duration: 1, ease: "power3.out" },
    "<"
  );
  ctaFormTrigger.to(
    ".cta_burst-lines > svg > path",
    { drawSVG: "100% 100%", duration: 1, ease: "power3.out" },
    ">-0.3"
  );
  ctaFormTrigger.to(
    ".cta_burst-lines > svg > path",
    { opacity: 0, duration: 0 },
    ">-0.05"
  );
  ctaFormTrigger.from(
    ".cta_scribble > svg > path",
    { drawSVG: "0% 0%", duration: 1, ease: "power3.out" },
    "<+0.125"
  );
  ctaFormTrigger.to(
    ".cta_scribble > svg > path",
    { drawSVG: "100% 100%", duration: 1, ease: "power3.out" },
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
      markers: false,
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
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
    },
    0
  );
  processLoad.from(
    ".process_critter-wrapper",
    { y: 300, scale: 0.9, opacity: 0, duration: 1, ease: "power3.out" },
    "<"
  );
  //contents fade out
  processLoad.to(".process_heading-span", {y: -400, scale: 0.95, opacity: 0, duration: 1, stagger: 0.05, ease: "power3.out"}, ">");
  processLoad.to(".process_critter-wrapper", {y: -200, duration: 1, ease: "power3.out"}, "<+0.15");
  //critter grows
  processLoad.to(".process_critter", {width: "100dvw", height: "150dvh", ease: "power4.out", borderTopRightRadius: 0, borderTopLeftRadius: 0, border: "transparent"}, "<");
  processLoad.to(".process_critter-eyes", {opacity: 0, duration: 0.125}, "<")
  //cards path animation
  gsap.set(".process_card-wrapper > .process_card", {xPercent: -50, yPercent: -50, transformOrigin: "50%, 50%"});
  processLoad.to(".process_card-wrapper > .process_card", {stagger: 0.1, ease: "none", motionPath: {path: "#process-path", align: "#process-path", autoRotate: 180}}, ">");

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
    { y: 100, stagger: 0.1, opacity: 0, ease: "power3.out" },
    1.15
  );

  //mobile cta load
  var ctaMobile = gsap.timeline({
    scrollTrigger: { trigger: ".cta_component" },
  });
  var ctaFormTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta_form",
      start: "-=400 center",
      markers: true,
    },
  });

  ctaMobile.from(
    ".cta_heading-span",
    { y: 100, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1 },
    0
  );
  ctaMobile.from(
    ".cta_form_input-wrapper",
    { y: 150, opacity: 0, duration: 0.875, ease: "power3.out" },
    ">-0.25"
  );
  ctaMobile.from(
    "#cta-form-bottom",
    { y: 150, opacity: 0, duration: 0.75, ease: "power3.out" },
    ">-0.5"
  );

  ctaFormTrigger.from(
    "#cta-form-orange",
    { color: "#0f2756", duration: 0.125, ease: "power3.out" },
    "<.5"
  );
  ctaFormTrigger.to(
    "#cta-form-orange",
    { scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3 },
    "<"
  );
  ctaFormTrigger.from(
    ".cta_burst-lines > svg > path",
    { drawSVG: "0% 0%", duration: 1, ease: "power3.out" },
    "<"
  );
  ctaFormTrigger.to(
    ".cta_burst-lines > svg > path",
    { drawSVG: "100% 100%", duration: 1, ease: "power3.out" },
    ">-0.3"
  );
  ctaFormTrigger.to(
    ".cta_burst-lines > svg > path",
    { opacity: 0, duration: 0 },
    ">-0.05"
  );
  ctaFormTrigger.from(
    ".cta_scribble > svg > path",
    { drawSVG: "0% 0%", duration: 1, ease: "power3.out" },
    "<+0.125"
  );
  ctaFormTrigger.to(
    ".cta_scribble > svg > path",
    { drawSVG: "100% 100%", duration: 1, ease: "power3.out" },
    ">-0.3"
  );
  ctaFormTrigger.to(
    ".cta_scribble > svg > path",
    { opacity: 0, duration: 0 },
    ">-0.02"
  );
});
