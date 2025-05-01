/*uncomment the below when in localhost */
// window.parceled = true;

// // Register GSAP plugins
// gsap.registerPlugin(
//   ScrollTrigger,
//   SplitText,
//   DrawSVGPlugin,
//   MotionPathPlugin,
//   MorphSVGPlugin
// );


const url = window.location.pathname;

// Define mappings for scripts based on DOM selectors
const scriptsMap = new Map([
  [
    ".section_home-header",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/home.js",
      id: `home-script-${Date.now()}`,
    },
  ],
  [
    ".section_case-study-header",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/case-studies-template.js",
      id: "case-study-script",
    },
  ],
  [
    ".section_case-studies",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/case-studies.js",
      id: "case-studies-script",
    },
  ],
  [
    ".section_not-found-header",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/not-found.js",
      id: "not-found-script",
    },
  ],
]);

// Define mappings for scripts based on URL
const urlScriptsMap = new Map([
  [
    "pricing",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/pricing.js",
      id: "pricing-script",
    },
  ],
  [
    "contact",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/contact.js",
      id: "contact-script",
    },
  ],
  [
    "blog",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/blog-template.js",
      id: "blog-template-script",
    },
  ],
  [
    "services",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/services.js",
      id: "services-script",
    },
  ],
  [
    "cloneables",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/cloneables.js",
      id: "cloneables-script",
    },
  ],
  [
    "code-snippet",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/code-snippet.js",
      id: "code-snippet-script",
    },
  ],
  [
    "about",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/about.js",
      id: "about-script",
    },
  ],
  [
    "resources",
    {
      src: "https://what-if-web.github.io/what-if-web-website/src/resources.js",
      id: "resources-script",
    },
  ],
]);

function preloadAndExecuteScript(src, id) {
  if (!document.getElementById(id)) {
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.defer = true;
    document.head.appendChild(script);
  }
}

// Load scripts based on elements found in DOM
scriptsMap.forEach((scriptInfo, selector) => {
  if (scriptInfo && scriptInfo.src && scriptInfo.id) {
    const element = document.querySelector(selector);
    if (element) {
      preloadAndExecuteScript(scriptInfo.src, scriptInfo.id);
    }
  }
});

// Load scripts based on URL matching
urlScriptsMap.forEach(({ src, id }, key) => {
  if (url.includes(key)) {
    preloadAndExecuteScript(src, id);
  }
});

// Fallback for homepage to ensure home.js loads
if (url === "/" || url === "/home") {
  const scriptInfo = scriptsMap.get(".section_home-header");
  if (scriptInfo) {
    preloadAndExecuteScript(scriptInfo.src, scriptInfo.id);
  }
}

// Testimonial slider initialization
if (document.querySelector("#testimonials-slider")) {
  try {
    new Swiper("#testimonials-slider", {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 8,
      grabCursor: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      autoplay: { delay: 2200, disableOnInteraction: false },
      speed: 600,
      breakpoints: {
        478: { slidesPerView: 2 },
        991: { slidesPerView: 3, spaceBetween: 16 },
        1366: { slidesPerView: 4 },
      },
    });
    console.log("Swiper initialized");
  } catch (error) {
    console.error("Failed to initialize Swiper", error);
  }
}

// Testimonial pagination color change
const variantField = document.querySelector(".wf-variant-dropdown");
if (variantField?.value === "White") {
  const style = document.createElement("style");
  style.textContent = `.swiper-pagination-bullet { background-color: var(--background-color--background-black) !important; }`;
  document.head.appendChild(style);
}

// Confetti on form submit
const confettiEffect = () => {
  setTimeout(() => {
    try {
      confetti({
        particleCount: 150,
        startVelocity: 30,
        spread: 360,
        scalar: 3,
        flat: true,
        origin: { x: 0.5, y: 0 },
        shapes: ["square"],
        colors: [
          "#A41212",
          "#FE0D04",
          "#C36A66",
          "#008B47",
          "#FFFF00",
          "#0074E3",
          "#FF9CD2",
          "#3FDCE3",
          "#FFC25D",
          "#CDEAF2",
        ],
      });
      console.log("Confetti triggered");
    } catch (error) {
      console.error("Failed to trigger confetti", error);
    }
  }, 1600);
};

document.querySelectorAll("#email-form, #footer-form").forEach((form) => {
  form.addEventListener("submit", confettiEffect);
});

// Navbar toggle
document.addEventListener("click", (event) => {
  if (
    event.target.matches(
      ".navbar_menu-button, .button.is-small.is-navbar.is-open"
    )
  ) {
    document.body.classList.toggle("no-scroll");
  }
});

// Animations object
window.Animations = {
  animateFooter() {
    const footerLoad = gsap.timeline({
      scrollTrigger: { trigger: ".footer_component", start: "-=400 center" },
    });
    const footerSplit = new SplitText(".footer_top-wrapper > h2", {
      type: "lines",
    });

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
  },
  animateProjects() {
    const projectsLoad = gsap.timeline({
      scrollTrigger: { trigger: ".section_projects", start: "-=400 center" },
    });
    const projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
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
      { duration: 1, opacity: 0, y: 100, ease: "power3.out", stagger: 0.125 },
      ">-0.5"
    );
    projectsLoad.from(
      ".projects_component > a",
      { y: 100, opacity: 0, ease: "power3.out" },
      "<0.25"
    );

    projectsLoad
      .from("#projects-highlight", { color: "#EB5B30", duration: 0 }, "<")
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
  },
  animateServices() {
    const servicesLoad = gsap.timeline({
      scrollTrigger: { trigger: ".section_services", start: "-=400 center" },
    });
    servicesLoad.from(".services_heading-wrapper > h2", {
      y: 80,
      opacity: 0,
    });

    document
      .querySelectorAll(".services_list .card.is-services")
      .forEach((card) => {
        const linkTargetID = card.querySelector(".card_link-target")?.id;
        if (linkTargetID) {
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
        }
      });
  },
  animateTestimonial() {
    const testimonialsLoad = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_testimonials",
        start: "-=400 center",
      },
    });
    const testimonialSplit = new SplitText("#testimonial-heading", {
      type: "lines",
    });
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
  },
  animateCTA() {
    const ctaLoad = gsap.timeline({
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
    ctaLoad.from(
      "#ctaButton",
      { y: 200, duration: 0.875, opacity: 0 },
      "<0.125"
    );
    ctaLoad.to(
      ".quote-cta_heading > .text-color-alternate",
      {
        scale: 1.1,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
        duration: 0.3,
      },
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
  },
  animateBlogs() {
    const blogLoad = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_related-blog",
        start: "-=400 center",
      },
    });
    blogLoad
      .from(".related-blog_heading-wrapper > div", {
        y: 100,
        scale: 0.8,
        opacity: 0,
      })
      .from(
        ".related-blog_list > .related-blog_item",
        { y: 180, opacity: 0, stagger: 0.125 },
        "<0.5"
      );
  },
  animateFAQ() {
    const faqLoad = gsap.timeline({
      scrollTrigger: { trigger: ".section_faq", start: "-=400 center" },
    });
    faqLoad.from("#faq-heading", { y: 80, opacity: 0 }, 0);
    faqLoad.from(
      ".faq_list > .faq_item",
      { y: 50, opacity: 0, stagger: 0.125 },
      0.25
    );
    faqLoad.from(
      ".faq_lottie",
      { scale: 0, opacity: 0, stagger: 0.25 },
      "<0.5"
    );
  },
  animateMorph() {
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
  },
  animateCTAMobile () {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 991px)", () => {
      var ctaMobile = gsap.timeline({
        scrollTrigger: { trigger: ".cta_component" },
      });
      ctaMobile.from(".cta_heading-span", { y: 100, opacity: 0, stagger: 0.1 }, 0);
      ctaMobile.from(".cta_form_input-wrapper", { y: 150, opacity: 0 }, ">-0.25");
      ctaMobile.from(
        "#cta-form-bottom",
        { y: 150, opacity: 0, duration: 0.75 },
        ">-0.5"
      );
    });
  },
  animateSolutions () {
    var solutionsLoad = gsap.timeline({
      scrollTrigger: { trigger: ".section_solutions", start: "-=400 center" },
    });
    
    solutionsLoad.from(
      ".solutions_bespoke-item",
      { y: 100, opacity: 0},
      0
    );
    solutionsLoad.from(
      ".solutions_bespoke-item > h2, .solutions_bespoke-item > p",
      { y: 80, opacity: 0, stagger: "0.05" },
      "<0.25"
    );
    solutionsLoad.from(
      ".solutions_service-item",
      { y: 100, opacity: 0, stagger: "0.125" },
      0.35
    );
    solutionsLoad.from(
      ".solutions_service-card > .solutions_service-icon-wrapper > .solutions_service-icon",
      { y: 50, opacity: 0, stagger: "0.125" },
      0.25
    );
  },
  animateTechStack () {
    var csTechStack = gsap.timeline({
      scrollTrigger: { trigger: ".section_tech-stack", start: "top-=400 center" },
    });
    
    csTechStack.from(
      "#tech-stack-wrapper > h2",
      { y: 80, opacity: 0},
      0
    );
    csTechStack.from(
      ".tech-stack_subheading-wrapper > p",
      { y: 50, opacity: 0},
      0.25
    );
    csTechStack.from(
      ".tech-stack_item",
      { y: 100, opacity: 0, stagger: 0.125},
      0.5
    );
    csTechStack.from(
      ".tech-stack_image",
      { y: 30, opacity: 0, stagger: 0.125},
      "<"
    );
    csTechStack.from(
      ".tech-stack_item-front > h3",
      { y: 50, opacity: 0, stagger: 0.125},
      "<0.125"
    );    
  }
};