gsap.registerPlugin(
  ScrollTrigger,
  SplitText,
  DrawSVGPlugin,
  MotionPathPlugin,
  ScrollSmoother
);

// Now that the preloader is hidden, you can run your GSAP code
ScrollSmoother.create({
  content: ".main-wrapper",
  smooth: 1.5,
  effects: true,
});


let url = window.location.pathname;

// Optimized function to preload and execute scripts
function preloadAndExecuteScript(src, id) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.src = src;
  script.id = id;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// List of scripts to load based on URL and selectors
const scriptsToLoad = [
  {
    src: "https://what-if-web.github.io/what-if-web-website/home.js",
    id: "home-script",
    condition: () => url.includes("/"),
  },
  {
    src: "https://what-if-web.github.io/what-if-web-website/case-studies-template.js",
    id: "case-study-script",
    selector: ".section_case-study-header",
  },
  {
    src: "https://what-if-web.github.io/what-if-web-website/case-studies.js",
    id: "case-studies-script",
    condition: () => url.includes("case-studies"),
  },
  {
    src: "https://what-if-web.github.io/what-if-web-website/not-found.js",
    id: "not-found-script",
    selector: ".section_not-found-header",
  },
  {
    src: "https://what-if-web.github.io/what-if-web-website/pricing.js",
    id: "pricing-script",
    condition: () => url.includes("pricing"),
  },
  {
    src: "https://what-if-web.github.io/what-if-web-website/contact.js",
    id: "contact-script",
    condition: () => url.includes("contact"),
  },
  {
    src: "https://what-if-web.github.io/what-if-web-website/roast.js",
    id: "roast-script",
    condition: () => url.includes("roast"),
  },
];

// Load scripts conditionally
scriptsToLoad.forEach(({ src, id, selector, condition }) => {
  if (selector && document.querySelector(selector)) {
    preloadAndExecuteScript(src, id);
  } else if (condition && condition()) {
    preloadAndExecuteScript(src, id);
  }
});

// Testimonial slider initialization
var testimonialsSlider = new Swiper("#testimonials-slider", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 8,
  grabCursor: true,
  pagination: {
    el: ".swiper_pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    478: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1366: {
      slidesPerView: 4,
    },
  },
});

// Confetti on form submit
const form = document.querySelector("#email-form");
const footerForm = document.querySelector("#footer-form");

  let formConfetti = function () {
    setTimeout(function () {
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

  if (form) {
    form.addEventListener("submit", function (event) {
      formConfetti();
    });
  }

  if (footerForm) {
    footerForm.addEventListener("submit", function (event) {
      formConfetti();
    });
  };

