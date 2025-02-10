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


//process section testbed

/*
var ctaFormLoad = gsap.timeline({scrollTrigger: {trigger: ".cta_form-block", scrub: true, start: "top bottom", end: "bottom+=25% center", markers: false}});

ctaFormLoad.from(".cta_form", { gap: 300, ease: "power3.out"}, 0.25);
ctaFormLoad.to(".cta_form", {gap: 80, ease: "power3.out"}, ">");
ctaFormLoad.to(".cta_form", {y: -300, ease: "power3.out"}, "<");
ctaFormLoad.from("#cta-form-bottom", { opacity: "0", y: 700, ease: "power4.out"}, "<-0.125");
ctaFormLoad.to(".cta_form", {opacity: 0, y: -500, ease: "power4.out"}, ">-0.5");
*/
//CTA FORM ELEMENTS POP IN
// ctaFormTrigger.to("#cta-star-1", {duration: 0.4, scale: 1.6, ease: "power3.inOut", repeat: 1, yoyo: true}, 0);
// ctaFormTrigger.to("#cta-star-2", {duration: 0.3, scale: 1.4, ease: "power3.inOut", repeat: 1, yoyo: true}, 0.25);
// ctaFormTrigger.from(".cta_lottie", {duration: 0.75, scale: 0.8, y: 200, ease: "power3.out"}, "<");
// ctaFormTrigger.from(".cta_scribble > svg > path", {drawSVG: 0, duration: 0.75, ease: "power4.in"}, "<0.125");
// ctaFormTrigger.from(".cta_burst-lines > svg > path", {drawSVG: 0, opacity: 0, scale: 0.9, duration: .25, ease: "power2.in"}, "<.25"); 


//CTA FORM ANIMATION
var ctaFormTrigger = gsap.timeline({scrollTrigger: {trigger: ".cta_form", start: "top+=100 center", markers: true}});

//real animation starts here 
var ctaFormLoad = gsap.timeline({scrollTrigger: {trigger: ".cta_form-block", scrub: true, start: "top top", end: "bottom bottom", markers: false, pin: ".cta_form", pinSpacing: false}});
//contents fade in
ctaFormLoad.from(".cta_heading-span", {y: 200, scale: 0.95, opacity: 0, duration: 1, stagger: 0.05, ease: "power3.out"}, 0);
ctaFormLoad.from(".cta_form_input-wrapper", {y: 300, opacity: 0, duration: 1, ease: "power3.out"}, "<");
ctaFormLoad.from("#cta-form-bottom", {y: 400, opacity: 0, duration: 1, ease: "power3.out"}, "<");
//form field wobble or something
// ctaFormLoad.to("", {}, ">+0.25");
//contents fade out
ctaFormLoad.to(".cta_heading-span", {y: -400, stagger: 0.05, scale: 0.95, opacity: 0, duration: 1, ease: "power3.out"}, ">+0.25");
ctaFormLoad.to(".cta_form_input-wrapper", {y: -300, opacity: 0, duration: 1, ease: "power3.out"}, "<+.05");
ctaFormLoad.to("#cta-form-bottom", {y: -200, opacity: 0, duration: 1, ease: "power3.out"}, "<");

//elements pop in -- need to add a text split somehow
ctaFormTrigger.from("#cta-form-orange", {color: "#0f2756", duration: .125, ease: "power3.out"}, "<.5");
ctaFormTrigger.to("#cta-form-orange", {scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3}, "<");
ctaFormTrigger.from(".cta_burst-lines > svg > path", {drawSVG: '0% 0%', duration: 1, ease: "power3.out"}, "<");
ctaFormTrigger.to(".cta_burst-lines > svg > path", {drawSVG: '100% 100%', duration: 1, ease: "power3.out"}, ">-0.3");
ctaFormTrigger.to(".cta_burst-lines > svg > path", {opacity: 0, duration: 0}, ">-0.05");
ctaFormTrigger.from(".cta_scribble > svg > path", {drawSVG: '0% 0%', duration: 1, ease: "power3.out"}, "<+0.125");
ctaFormTrigger.to(".cta_scribble > svg > path", {drawSVG: '100% 100%', duration: 1, ease: "power3.out"}, ">-0.3");
ctaFormTrigger.to(".cta_scribble > svg > path", {opacity: 0, duration: 0}, ">-0.02");

//process section animation
var processLoad = gsap.timeline({scrollTrigger: {trigger: ".process_component", scrub: true, start: "top top", end: "bottom bottom", markers: false, pin: ".process_content-top"}});
//contents fade in
processLoad.from(".process_heading-span", {y: 200, scale: 0.95, opacity: 0, duration: 1, stagger: 0.05, ease: "power3.out"}, 0);
processLoad.from(".process_critter-wrapper", {y: 300, scale: 0.9, opacity: 0, duration: 1, ease: "power3.out"}, "<");
//contents fade out
processLoad.to(".process_heading-span", {y: -400, scale: 0.95, opacity: 0, duration: 1, stagger: 0.05, ease: "power3.out"}, ">+.05");
processLoad.to(".process_critter-wrapper", {y: -200, duration: 1, ease: "power3.out"}, "<+0.15");
//critter grows
processLoad.to(".process_critter", {width: "100dvw", y: 200, height: "50dvw", ease: "power4.out"}, ">+0.5");
//cards path animation
gsap.set(".process_card-wrapper > .card", {xPercent: -50, yPercent: -50, transformOrigin: "50%, 50%"});
processLoad.to(".process_card-wrapper > .card", {stagger: 0.1, ease: "none", motionPath: {path: "#process-path", align: "#process-path", autoRotate: 180}}, ">");

//pinned elements
var servicesPinTrigger = gsap.timeline({scrollTrigger: {trigger: ".section_services", start: "top top", end: "bottom bottom", scrub: true, pin: ".services_content-top-wrapper", pinSpacing: false}});