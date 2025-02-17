gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(ScrollSmoother)

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

const url = window.location.pathname;
const homeHeader = document.querySelector(".section_home-header");
const caseStudy = document.querySelector(".section_case-study-header");
const caseStudies = document.querySelector(".section_case-studies");
const notFound = document.querySelector(".section_not-found-header");

function loadScript(src, id) {
  // Remove existing script if it exists
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  // Create new script
  const script = document.createElement("script");
  script.type = "module";
  script.src = `${src}?v=${new Date().getTime()}`; // Cache-busting
  script.id = id;
  script.defer = true;
  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".section_home-header")) {
    loadScript(
      "https://what-if-web.github.io/what-if-web-website/home.js",
      "home-script"
    );
  } else if (document.querySelector(".section_case-study-header")) {
    loadScript(
      "https://what-if-web.github.io/what-if-web-website/case-studies-template.js",
      "case-study-script"
    );
  } else if (document.querySelector(".section_case-studies")) {
    loadScript(
      "https://what-if-web.github.io/what-if-web-website/case-studies.js",
      "case-studies-script"
    );
  } else if (document.querySelector(".section_not-found-header")) {
    loadScript(
      "https://what-if-web.github.io/what-if-web-website/not-found.js",
      "not-found-script"
    );
  } else if (window.location.pathname.includes("pricing")) {
    loadScript(
      "https://what-if-web.github.io/what-if-web-website/pricing.js",
      "pricing-script"
    );
  } else if (window.location.pathname.includes("contact")) {
    loadScript(
      "https://what-if-web.github.io/what-if-web-website/contact.js",
      "contact-script"
    );
  } else if (window.location.pathname.includes("roast")) {
    loadScript(
      "https://what-if-web.github.io/what-if-web-website/roast.js",
      "roast-script"
    );
  } else {
    console.log("No script loaded for this page.");
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

//case studies card testing

//case studies cards animation
// const cards = document.querySelectorAll(".case-studies_item");

// var cardsTl = gsap.timeline();

// cards.forEach((card, index) => {
//   cardsTl.from(card, {
//     scrollTrigger: {
//       trigger: card,
//       start: "top bottom",
//       end: "top 50%",
//       scrub: true,
//       markers: false
//     },
//     scale: 0.8,
//     y: 100,
//     ease: "power3.out",
//     rotateX: 5,
//     opacity: 0
//   });
// });

// $(".case-studies_checkbox-button").click(cardsTl.ScrollTrigger.refresh());
/*
const initCardsAnimation = () => {
  // Kill all existing ScrollTriggers and GSAP animations
  ScrollTrigger.getAll().forEach(st => st.kill());
  gsap.killTweensOf(".case-studies_image-wrapper");

  // Wait for the DOM update before selecting elements
  requestAnimationFrame(() => {
    const cards = document.querySelectorAll(".case-studies_image-wrapper");

    cards.forEach((card) => {
      gsap.fromTo(card, 
        {
          scale: 0.8,
          y: 100,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top 50%",
            scrub: true,
            markers: false
          },
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out"
        }
      );
    });

    // Refresh ScrollTrigger after new elements are in place
    ScrollTrigger.refresh();
  });
};

// Run animation setup initially
initCardsAnimation();

// Reinitialize on filter change
$(".case-studies_checkbox-button").click(() => {
  setTimeout(() => {
    initCardsAnimation();
  }, 100); // Small delay to ensure the DOM updates first
});
*/