gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MorphSVGPlugin);

const url = window.location.pathname;
const homeHeader = document.querySelector(".section_home-header");
const caseStudy = document.querySelector(".section_case-study-header");
const caseStudies = document.querySelector(".section_case-studies");
const notFound = document.querySelector(".section_not-found-header");

function loadScript(src) {
  const script = document.createElement("script");
  script.type = "module";
  script.src = `${src}?v=${new Date().getTime()}`; // Cache-busting query parameter
  script.defer = true;
  document.body.appendChild(script);
}

// Check for elements or URL paths to load the correct script
if (document.querySelector(".section_home-header")) {
  loadScript("https://what-if-web.github.io/what-if-web-website/home.js");
} else if (document.querySelector(".section_case-study-header")) {
  loadScript(
    "https://what-if-web.github.io/what-if-web-website/case-studies-template.js"
  );
} else if (document.querySelector(".section_case-studies")) {
  loadScript(
    "https://what-if-web.github.io/what-if-web-website/case-studies.js"
  );
} else if (document.querySelector(".section_not-found-header")) {
  loadScript("https://what-if-web.github.io/what-if-web-website/not-found.js");
} else if (window.location.pathname.includes("pricing")) {
  loadScript("https://what-if-web.github.io/what-if-web-website/pricing.js");
} else if (window.location.pathname.includes("contact")) {
  loadScript("https://what-if-web.github.io/what-if-web-website/contact.js");
} else if (window.location.pathname.includes("roast")) {
  loadScript("https://what-if-web.github.io/what-if-web-website/roast.js");
} else {
  console.log("No script loaded for this page.");
}

// const homeScriptURL = new URL(
//   "https://what-if-web.github.io/what-if-web-website/home.js"
// );
// const caseStudiesScriptURL = new URL(
//   "https://what-if-web.github.io/what-if-web-website/case-studies.js"
// );
// const caseStudiesTempScriptURL = new URL(
//   "https://what-if-web.github.io/what-if-web-website/case-studies-template.js"
// );
// const contactScriptURL = new URL(
//   "https://what-if-web.github.io/what-if-web-website/contact.js"
// );
// const notFoundScriptURL = new URL(
//   "https://what-if-web.github.io/what-if-web-website/not-found.js"
// );
// const pricingScriptURL = new URL(
//   "https://what-if-web.github.io/what-if-web-website/pricing.js"
// );
// const roastScriptURL = new URL(
//   "https://what-if-web.github.io/what-if-web-website/roast.js"
// );

// switch (true) {
//   case homeHeader !== null:
//     import(homeScriptURL.href);
//     break;
//   case caseStudy !== null:
//     import(caseStudiesTempScriptURL.href);
//     break;
//   case caseStudies !== null:
//     import(caseStudiesScriptURL.href);
//     break;
//   case notFound !== null:
//     import(notFoundScriptURL.href);
//     break;
//   case url.includes("pricing"):
//     import(pricingScriptURL.href);
//     break;
//   case url.includes("contact"):
//     import(contactScriptURL.href);
//     break;
//   case url.includes("roast"):
//     import(roastScriptURL.href);
//     break;
//   default:
//     console.log("no-script");
//     break;
// };

/* testimonial slider */
$(document).ready(function () {
  var testimonialsSlider = new Swiper("#testimonials-slider", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 8,
    draggable: true,
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
