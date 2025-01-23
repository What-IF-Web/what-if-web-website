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


const scriptURL = new URL(
  'https://what-if-web.github.io/what-if-web-website/home.js'
);

import(scriptURL.href)
  .then((module) => {
    module.default();
  })
  .catch((error) => {
    console.error('Error loading the module:', error);
  });

/*switch (true) {
  case homeHeader !== null:
    import("https://what-if-web.github.io/what-if-web-website/home.js").then(
      (module) => {
        module.default();
      }
    );
    break;
  case caseStudy !== null:
    import(
      "https://what-if-web.github.io/what-if-web-website/case-studies-template.js"
    ).then((module) => {
      module.default();
    });
    break;
  case caseStudies !== null:
    import(
      "https://what-if-web.github.io/what-if-web-website/case-studies.js"
    ).then((module) => {
      module.default();
    });
    break;
  case notFound !== null:
    import(
      "https://what-if-web.github.io/what-if-web-website/not-found.js"
    ).then((module) => {
      module.default();
    });
    console.log("not-found");
    break;
  case url.includes("pricing"):
    import("https://what-if-web.github.io/what-if-web-website/pricing.js").then(
      (module) => {
        module.default();
      }
    );
    break;
  case url.includes("contact"):
    import("https://what-if-web.github.io/what-if-web-website/contact.js").then(
      (module) => {
        module.default();
      }
    );
    break;
  default:
    console.log("no-script");
}*/

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
