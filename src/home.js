// src/home.js
// Uses global gsap (loaded via Webflow footer CDN)

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

// Hero section animation
function animateHero() {
  const heroSplit = new SplitText(".home-header_heading", { type: "lines" });
  const heroLoad = gsap.timeline({
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
    )
    .from(".home-header_subheading", { y: 200, opacity: 0 }, ">-0.25")
    .from(".home-header_component > a", { y: 200, opacity: 0 }, ">-0.25")
    .from(
      ".home-header_lottie.is-dinkus",
      { y: 70, x: 180, duration: 0.5, scale: 0 },
      ">-0.5"
    )
    .from(
      ".home-header_lottie.is-brazzo",
      { y: -200, x: 240, duration: 0.625, scale: 0 },
      "<-0.25"
    )
    .from(
      ".home-header_lottie.is-slice",
      { y: -100, x: -200, duration: 0.75, scale: 0 },
      "<-0.125"
    );
}

// About section animation
function animateAbout() {
  const aboutLoad = gsap.timeline({
    scrollTrigger: { trigger: ".section_home-about", start: "top center" },
  });
  const aboutSplit = new SplitText(".home-about_heading-wrapper > h2", {
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
}

// CTA form and process animations
function animateCTAandProcess() {
  const mm = gsap.matchMedia();

  // Desktop
  mm.add("(min-width: 991px)", () => {
    const ctaFormTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta_form",
        start: "-=400 center",
      },
    });
    const ctaFormLoad = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta_component",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
        pin: ".cta_form-block",
        pinSpacing: false,
      },
    });

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
      {
        scale: 1.1,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
        duration: 0.3,
      },
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

    const processLoad = gsap.timeline({
      scrollTrigger: {
        trigger: ".process_component",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
        pin: ".process_content-top",
      },
    });

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
    processLoad.to(
      ".process_heading-span",
      { y: -400, scale: 0.95, opacity: 0, duration: 1, stagger: 0.05 },
      ">"
    );
    processLoad.to(".process_critter-wrapper", { y: -200 }, "<+0.15");
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
    processLoad.to(
      ".process_critter-eyes",
      { opacity: 0, duration: 0.125 },
      "<"
    );
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

    const servicesPinTrigger = gsap.timeline({
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

  // Mobile
  mm.add("(max-width: 991px)", () => {
    const processMobile = gsap.timeline({
      scrollTrigger: { trigger: ".process_component" },
    });
    processMobile.from(
      ".process_heading-span",
      { y: 100, stagger: 0.1, opacity: 0 },
      0
    );

    const ctaMobile = gsap.timeline({
      scrollTrigger: { trigger: ".cta_component" },
    });
    const ctaFormTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta_form",
        start: "-=400 center",
      },
    });

    ctaMobile.from(
      ".cta_heading-span",
      { y: 100, opacity: 0, stagger: 0.1 },
      0
    );
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
      {
        scale: 1.1,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
        duration: 0.3,
      },
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
}

// Run animations
function initHome() {
  console.log("Home script loaded");
  animateHero();
  animateAbout();
  animateCTAandProcess();
}

initHome();
