gsap.registerPlugin(
  ScrollTrigger,
  SplitText,
  DrawSVGPlugin,
  MotionPathPlugin,
  ScrollSmoother
);


ScrollSmoother.create({
  content: ".main-wrapper",
  smooth: 1.5,
  effects: true,
});

const url = window.location.pathname;

// Function to preload scripts
function preloadScript(src) {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "script";
  link.href = src;
  document.head.appendChild(link);
}

// Function to load script from cache or fetch it
function loadScript(src, id) {
  const existingScript = document.getElementById(id);
  if (existingScript) existingScript.remove();

  const cachedScript = localStorage.getItem(id);
  if (cachedScript) {
    eval(cachedScript); // Load from cache instantly
    return;
  }

  fetch(src)
    .then((res) => res.text())
    .then((scriptContent) => {
      localStorage.setItem(id, scriptContent);
      eval(scriptContent);
    })
    .catch((err) => console.error("Failed to load script:", err));
}

// Preload all scripts (for faster loading)
const scriptsToLoad = [
  {
    src: "https://what-if-web.github.io/what-if-web-website/home.js",
    id: "home-script",
    selector: ".section_home-header",
  },
  {
    src: "https://what-if-web.github.io/what-if-web-website/case-studies-template.js",
    id: "case-study-script",
    selector: ".section_case-study-header",
  },
  {
    src: "https://what-if-web.github.io/what-if-web-website/case-studies.js",
    id: "case-studies-script",
    selector: ".section_case-studies",
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

// Preload all scripts first
scriptsToLoad.forEach(({ src }) => preloadScript(src));

document.addEventListener("DOMContentLoaded", function () {
  let scriptLoaded = false;

  scriptsToLoad.forEach(({ src, id, selector, condition }) => {
    if (selector && document.querySelector(selector)) {
      loadScript(src, id);
      scriptLoaded = true;
    } else if (condition && condition()) {
      loadScript(src, id);
      scriptLoaded = true;
    }
  });

  if (!scriptLoaded) console.log("No script loaded for this page.");
});

/* testimonial slider */
$(document).ready(function () {
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
});

//confetti on form submit
document.addEventListener("DOMContentLoaded", function () {
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
  }
});
