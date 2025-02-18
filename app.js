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

const url = window.location.pathname;

// Optimized function to preload and execute scripts
function preloadAndExecuteScript(src, id) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.src = src;
  script.id = id;
  script.async = true; // Make sure it's async for early execution
  document.head.appendChild(script);
}

// List of scripts to load based on URL and selectors
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

// Load scripts conditionally
scriptsToLoad.forEach(({ src, id, selector, condition }) => {
  if (selector && document.querySelector(selector)) {
    preloadAndExecuteScript(src, id);
  } else if (condition && condition()) {
    preloadAndExecuteScript(src, id);
  }
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

//quote CTA animation
var ctaLoad = gsap.timeline({scrollTrigger: {trigger: ".section_quote-cta", start: "-=400 center"}});

//main elements
ctaLoad.from(".quote-cta_component", {y: 100, duration: 1, ease:"power4.out"})
.fromTo(".quote-cta_heading-wrapper", {opacity: 0, scale: 0, y: 300}, {opacity: 1, scale: 1, y: 100, duration: 1, ease: "power4.out"}, "<0.5");

ctaLoad.to(".quote-cta_heading > .text-color-alternate", {scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3}, 1);
ctaLoad.from(".quote-cta_heading > .text-color-alternate", {color: "#fff9f3", duration: .125, ease: "power3.out"}, "<.125");
ctaLoad.from("#ctaScribble", {drawSVG: '0% 0%', duration: 1, ease: "power3.out"}, "<");
ctaLoad.to("#ctaScribble", {drawSVG: '100% 100%', duration: 1, ease: "power3.out"}, ">-0.3");
ctaLoad.to("#ctaScribble", {opacity: 0, duration: 0}, ">-0.02");

//content
ctaLoad.fromTo(".quote-cta_heading-wrapper", {y:100}, {y: 0, duration: 1, ease: "power2.out"}, "<.25");
ctaLoad.from(".quote-cta_subheading", {y:150, duration: 0.875, ease: "power2.out", opacity: 0}, "<0.5");
ctaLoad.from("#ctaButton", {y: 200, duration: 0.875, ease: "power2.out", opacity: 0,}, "<0.125");