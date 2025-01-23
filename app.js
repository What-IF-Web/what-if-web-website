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


const homeScriptURL = new URL(
  'https://what-if-web.github.io/what-if-web-website/home.js'
);
const caseStudiesScriptURL = new URL(
  'https://what-if-web.github.io/what-if-web-website/home.js'
);
const caseStudiesTempScriptURL = new URL(
  'https://what-if-web.github.io/what-if-web-website/home.js'
);
const contactScriptURL = new URL(
  'https://what-if-web.github.io/what-if-web-website/home.js'
);
const notFoundScriptURL = new URL(
  'https://what-if-web.github.io/what-if-web-website/home.js'
);
const pricingScriptURL = new URL(
  'https://what-if-web.github.io/what-if-web-website/home.js'
);

/*
switch (true) {
  case homeHeader !== null:
    import(homeScriptURL.href)
    .then((module) => {
      module.default();
    });
    break;
  case caseStudy !== null:
  import(caseStudiesTempScriptURL.href)
    .then((module) => {
      module.default();
    });
    break;
  case caseStudies !== null:
    import(caseStudiesScriptURL.href)
    .then((module) => {
      module.default();
    });  
    break;
  case notFound !== null:
    import(notFoundScriptURL.href)
    .then((module) => {
      module.default();
    });
    break;
  case url.includes("pricing"):
    import(pricingScriptURL.href)
    .then((module) => {
      module.default();
    });
    break;
  case url.includes("contact"):
    import(contactScriptURL.href)
    .then((module) => {
      module.default();
    }
    );
    break;
  default:
    console.log("no-script");
}*/

if (homeHeader !== null) {
  import(homeScriptURL.href).then((module) => {
    module.default();
  });
} else if (caseStudy !== null) {
  import(caseStudiesTempScriptURL.href).then((module) => {
    module.default();
  });
} else if (caseStudies !== null) {
  import(caseStudiesScriptURL.href).then((module) => {
    module.default();
  });
} else if (notFound !== null) {
  import(notFoundScriptURL.href).then((module) => {
    module.default();
  });
} else if (url.includes("pricing")) {
  import(pricingScriptURL.href).then((module) => {
    module.default();
  });
} else if (url.includes("contact")) {
  import(contactScriptURL.href).then((module) => {
    module.default();
  });
} else {
  console.log("no-script");
}

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
