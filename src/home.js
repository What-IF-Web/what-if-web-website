// Default animation settings
const animationDefaults = {
  ease: "power4.out",
  duration: 1,
};

// Reusable ScrollTrigger configuration
const defaultScrollTrigger = (trigger, start = "top center", options = {}) => ({
  trigger,
  start,
  toggleActions: "play none none reset",
  ...options,
});

// Reusable SVG animation function
const animateSVG = (selector, timeline, offset = 0) => {
  timeline
    .from(`${selector} > svg > path`, { drawSVG: "0% 0%" }, offset)
    .to(`${selector} > svg > path`, { drawSVG: "100% 100%" }, ">-0.3")
    .to(`${selector} > svg > path`, { opacity: 0, duration: 0 }, ">-0.05");
};

// Selectors for repeated elements
const selectors = {
  heroHeading: ".home-header_heading",
  heroSubheading: ".home-header_subheading",
  heroCta: ".home-header_component > a",
  lottieDinkus: ".home-header_lottie.is-dinkus",
  lottieBrazzo: ".home-header_lottie.is-brazzo",
  lottieSlice: ".home-header_lottie.is-slice",
  aboutHeading: ".home-about_heading-wrapper > h2",
  aboutContent: ".home-about_content-left > p, .home-about_content-left > a",
  aboutBackground: ".home-about_background-shape",
  aboutCardFirst: ".home-about_card-wrapper.is-first",
  aboutCardSecond: ".home-about_card-wrapper.is-second",
  aboutCardThird: ".home-about_card-wrapper.is-third",
  aboutLottie: ".home-about_lottie",
  aboutLottie2: ".home-about_lottie-2",
  ctaForm: ".cta_form",
  ctaHeadingSpan: ".cta_heading-span",
  ctaFormInput: ".cta_form_input-wrapper",
  ctaFormBottom: "#cta-form-bottom",
  ctaFormOrange: "#cta-form-orange",
  ctaBurstLines: ".cta_burst-lines",
  ctaScribble: ".cta_scribble",
  processComponent: ".process_component",
  processHeadingSpan: ".process_heading-span",
  processCritterWrapper: ".process_critter-wrapper",
  processCritter: ".process_critter",
  processCritterEyes: ".process_critter-eyes",
  processCard: ".process_card-wrapper > .process_card",
  processPath: "#process-path",
  servicesSection: ".section_services",
  servicesContentTop: ".services_content-top-wrapper",
};

// Hero Section Animation
const animateHero = () => {
  const heroSplit = new SplitText(selectors.heroHeading, { type: "lines" });
  const heroLoad = gsap.timeline({
    scrollTrigger: defaultScrollTrigger(".section_home-header"),
    defaults: animationDefaults,
  });

  heroLoad
    .from(heroSplit.lines, { opacity: 0, y: 400, stagger: 0.125 })
    .from(
      selectors.heroHeading,
      { scale: 0.6, duration: 0.625, ease: "back.out(1.7)" },
      ">-0.5"
    )
    .from(
      [selectors.heroSubheading, selectors.heroCta],
      { y: 200, opacity: 0, stagger: 0.125 },
      ">-0.25"
    )
    .from(
      [selectors.lottieDinkus, selectors.lottieBrazzo, selectors.lottieSlice],
      {
        y: (i) => [70, -200, -100][i],
        x: (i) => [180, 240, -200][i],
        scale: 0,
        duration: 0.625,
        stagger: 0.125,
      },
      ">-0.5"
    );
};

// About Section Animation
const animateAbout = () => {
  const aboutSplit = new SplitText(selectors.aboutHeading, { type: "lines" });
  const aboutLoad = gsap.timeline({
    scrollTrigger: defaultScrollTrigger(selectors.aboutHeading, "top center"),
    defaults: animationDefaults,
  });

  aboutLoad
    .from(aboutSplit.lines, { y: 100, scale: 0.8, opacity: 0, stagger: 0.125 })
    .from(selectors.aboutContent, { opacity: 0, stagger: 0.125 }, "<0.5")
    .from(selectors.aboutBackground, { scale: 0 }, "<-0.25")
    .from(
      [
        selectors.aboutCardFirst,
        selectors.aboutCardSecond,
        selectors.aboutCardThird,
      ],
      {
        x: 2500,
        rotation: (i) => [100, 60, 130][i],
        stagger: 0.125,
      },
      "<0.5"
    )
    .from(selectors.aboutLottie, { scale: 0 }, ">0.125")
    .from(selectors.aboutLottie2, { scale: 0 }, "<0.25");
};

// CTA Form Animation (Shared for Desktop and Mobile)
const animateCtaForm = (isMobile = false) => {
  const ctaFormTrigger = gsap.timeline({
    scrollTrigger: defaultScrollTrigger(selectors.ctaForm, "-=400 center"),
  });

  ctaFormTrigger
    .from(
      selectors.ctaFormOrange,
      { color: "#0f2756", duration: 0.125 },
      "<0.5"
    )
    .to(
      selectors.ctaFormOrange,
      {
        scale: 1.1,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
        duration: 0.3,
      },
      "<"
    );
  animateSVG(selectors.ctaBurstLines, ctaFormTrigger, "<");
  animateSVG(selectors.ctaScribble, ctaFormTrigger, "<+0.125");

  if (!isMobile) {
    const ctaFormLoad = gsap.timeline({
      scrollTrigger: {
        ...defaultScrollTrigger(".cta_component"),
        scrub: true,
        start: "top top",
        end: "bottom bottom",
        pin: ".cta_form-block",
        pinSpacing: false,
        fastScrollEnd: true,
      },
      defaults: animationDefaults,
    });

    ctaFormLoad
      .from(
        [
          selectors.ctaHeadingSpan,
          selectors.ctaFormInput,
          selectors.ctaFormBottom,
        ],
        {
          y: (i) => [200, 300, 400][i],
          opacity: 0,
          stagger: 0.05,
        },
        0
      )
      .to(
        [
          selectors.ctaHeadingSpan,
          selectors.ctaFormInput,
          selectors.ctaFormBottom,
        ],
        {
          y: (i) => [-400, -300, -200][i],
          opacity: 0,
          stagger: 0.05,
        },
        ">+0.25"
      );
  }
};

// Process Section Animation (Desktop)
const animateProcessDesktop = () => {
  const processLoad = gsap.timeline({
    scrollTrigger: {
      ...defaultScrollTrigger(selectors.processComponent),
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      pin: ".process_content-top",
      fastScrollEnd: true,
    },
    defaults: animationDefaults,
  });

  processLoad
    .from(
      selectors.processHeadingSpan,
      { y: 200, scale: 0.95, opacity: 0, stagger: 0.05 },
      0
    )
    .from(
      selectors.processCritterWrapper,
      { y: 300, scale: 0.9, opacity: 0 },
      "<"
    )
    .to(
      selectors.processHeadingSpan,
      { y: -400, scale: 0.95, opacity: 0, stagger: 0.05 },
      ">"
    )
    .to(
      selectors.processCritterWrapper,
      {
        y: -200,
        onUpdate: () => {
          gsap.to(selectors.processCritter, {
            width: "100dvw",
            height: "150dvh",
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            border: "transparent",
          });
        },
      },
      "<+0.15"
    )
    .to(selectors.processCritterEyes, { opacity: 0, duration: 0.125 }, "<");

  gsap.set(selectors.processCard, {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50%, 50%",
  });
  processLoad.to(
    selectors.processCard,
    {
      stagger: 0.2,
      ease: "none",
      motionPath: {
        path: selectors.processPath,
        align: selectors.processPath,
        autoRotate: 180,
      },
    },
    ">"
  );
};

// Process Section Animation (Mobile)
const animateProcessMobile = () => {
  const processMobile = gsap.timeline({
    scrollTrigger: defaultScrollTrigger(selectors.processComponent),
    defaults: animationDefaults,
  });

  processMobile
    .from(selectors.processHeadingSpan, { y: 100, stagger: 0.1, opacity: 0 }, 0)
    .from(selectors.processCard, { y: 50, stagger: 0.1, opacity: 0 }, "<0.25");
};

// Services Section Animation (Desktop)
const animateServices = () => {
  gsap.timeline({
    scrollTrigger: {
      ...defaultScrollTrigger(selectors.servicesSection),
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: selectors.servicesContentTop,
      pinSpacing: false,
      fastScrollEnd: true,
    },
  });
};

// Initialize animations based on screen size
const mm = gsap.matchMedia();

mm.add("(min-width: 991px)", () => {
  animateHero();
  animateAbout();
  animateCtaForm();
  animateProcessDesktop();
  animateServices();
});

mm.add("(max-width: 991px)", () => {
  animateHero();
  animateAbout();
  animateCtaForm(true);
  animateProcessMobile();
});

// Respect reduced motion preferences
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.globalTimeline.timeScale(0);
}

// Clean up animations on page unload
window.addEventListener("beforeunload", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
