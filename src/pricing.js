// Set global defaults
gsap.defaults({
  ease: "power4.out",
  duration: 1,
  overwrite: "auto", // Prevent animation stacking
});

// Optimize: Use single timeline instance
const pricingLoad = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_pricing",
    start: "top 80%", // triggers earlier to preload animation
    toggleActions: "play none none none",
  },
});

pricingLoad
  .from(".pricing_content-top > h1", {
    y: 80,
    opacity: 0,
  })
  .from(
    ".pricing_paragraph-wrapper",
    {
      y: 100,
      opacity: 0,
    },
    "<+0.2"
  )
  .from(
    ".pricing_content-bottom",
    {
      y: 120,
      opacity: 0,
    },
    "<+0.2"
  );

// MatchMedia for responsive animation (desktop only)
gsap.matchMedia().add("(min-width: 991px)", () => {
  // Debounce ScrollTrigger setup using requestIdleCallback (if available)
  const setupScroll = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_services",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".services_content-top-wrapper",
        pinSpacing: false,
        // markers: true // uncomment for debugging
      },
    });
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(setupScroll);
  } else {
    setTimeout(setupScroll, 200); // Fallback
  }
});
