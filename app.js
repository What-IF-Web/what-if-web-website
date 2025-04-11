/*uncomment the below when in localhost */
// window.parceled = true;

gsap.registerPlugin(
  ScrollTrigger,
  SplitText,
  DrawSVGPlugin,
  MotionPathPlugin,
  ScrollSmoother
);

// ScrollSmoother.create({
//   content: ".main-wrapper",
//   smooth: 0.8,
//   effects: false,
// });

/*this is where you add imports for localhost */
// import "./home";

const url = window.location.pathname;
const scriptsMap = new Map([
  [
    ".section_home-header",
    {
      src: "https://what-if-web.github.io/what-if-web-website/home.js",
      id: "home-script",
    },
  ],
  [
    ".section_case-study-header",
    {
      src: "https://what-if-web.github.io/what-if-web-website/case-studies-template.js",
      id: "case-study-script",
    },
  ],
  [
    ".section_case-studies",
    {
      src: "https://what-if-web.github.io/what-if-web-website/case-studies.js",
      id: "case-studies-script",
    },
  ],
  [
    ".section_not-found-header",
    {
      src: "https://what-if-web.github.io/what-if-web-website/not-found.js",
      id: "not-found-script",
    },
  ],
]);

const urlScriptsMap = new Map([
  [
    "pricing",
    {
      src: "https://what-if-web.github.io/what-if-web-website/pricing.js",
      id: "pricing-script",
    },
  ],
  [
    "contact",
    {
      src: "https://what-if-web.github.io/what-if-web-website/contact.js",
      id: "contact-script",
    },
  ],
  [
    "blog",
    {
      src: "https://what-if-web.github.io/what-if-web-website/blog-template.js",
      id: "blog-template-script",
    },
  ],
  [
    "services",
    {
      src: "https://what-if-web.github.io/what-if-web-website/services.js",
      id: "services-script",
    },
  ],
  [
    "cloneables",
    {
      src: "https://what-if-web.github.io/what-if-web-website/cloneables.js",
      id: "cloneables-script",
    },
  ],
  [
    "code-snippet",
    {
      src: "https://what-if-web.github.io/what-if-web-website/code-snippet.js",
      id: "code-snippet-script",
    },
  ],
  [
    "about",
    {
      src: "https://what-if-web.github.io/what-if-web-website/about.js",
      id: "about-script",
    },
  ],
  [
    "resources",
    {
      src: "https://what-if-web.github.io/what-if-web-website/resources.js",
      id: "resources-script",
    },
  ],
]);

function preloadAndExecuteScript(src, id) {
  if (!document.getElementById(id)) {
    requestIdleCallback(() => {
      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      script.defer = true;
      document.head.appendChild(script);
    });
  }
}

// Load scripts based on elements found in DOM
scriptsMap.forEach((scriptInfo, selector) => {
  if (scriptInfo && scriptInfo.src && scriptInfo.id) {
    if (document.querySelector(selector)) {
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

// Testimonial slider initialization
if (document.querySelector("#testimonials-slider")) {
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
}

// Testimonial pagination color change based on variant
const variantField = document.querySelector(".wf-variant-dropdown");
if (variantField?.value === "White") {
  const style = document.createElement("style");
  style.textContent = `.swiper-pagination-bullet { background-color: var(--background-color--background-black) !important; }`;
  document.head.appendChild(style);
}

// Confetti on form submit
const confettiEffect = () => {
  setTimeout(() => {
    confetti({
      particleCount: 150,
      startVelocity: 30,
      spread: 360,
      scalar: 3,
      flat: true,
      origin: { x: 0.5, y: 0 },
      shapes: ["square", "diamonds"],
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

// Resources animations (only if the section is in view)
const resourcesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap
          .timeline({ scrollTrigger: { trigger: entry.target } })
          .from(".resources_top-content > h1, .resources_top-content > p", {
            y: 100,
            stagger: 0.125,
            ease: "power4.out",
            duration: 1,
            opacity: 0,
          });
        resourcesObserver.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  },
  { threshold: 0.5 }
);

const resourcesSection = document.querySelector(".section_resources");
if (resourcesSection) {
  resourcesObserver.observe(resourcesSection);
}

document.addEventListener("click", function (event) {
  if (event.target.matches(".button.is-small.is-navbar.is-open")) {
    document.body.classList.toggle("no-scroll");
  }
});

$(".navbar_logo-link").click(function (e) {
  e.preventDefault();
  const linkUrl = $(this).attr("href");
  setTimeout(() => (window.location = linkUrl), 750);
});

//resources animations

// var resourcesLoad = gsap.timeline({scrollTrigger: {trigger: ".section_resources"}});

// resourcesLoad.from(".resources_top-content > h1, .resources_top-content > p", {y: 100, stagger: 0.125, ease: "power4.out", duration: 1, opacity: 0});
