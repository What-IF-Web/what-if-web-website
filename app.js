
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText) 
gsap.registerPlugin(DrawSVGPlugin)
gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(MorphSVGPlugin)

if (document.querySelector(".section_home-header")) {
  import('./home.js').then((module) => {
    module.default(); // Run the home page GSAP code
  }).catch((err) => {
    console.error('Error loading the home page script', err);
  });
}
if (document.querySelector(".section_case-study-header")) {
  import('./case-studies-template.js').then((module) => {
    module.default(); // Run the case-studies-template page GSAP code
  }).catch((err) => {
    console.error('Error loading the case-studies-template page script', err);
  });
}
if (document.querySelector(".section_case-studies")) {
  import('./case-studies.js').then((module) => {
    module.default(); // Run the case-studies page GSAP code
  }).catch((err) => {
    console.error('Error loading the case-studies page script', err);
  });
}
if (window.location.pathname.includes('contact')) {
  import('./contact.js').then((module) => {
    module.default(); // Run the Contact page GSAP code
  }).catch((err) => {
    console.error('Error loading the contact page script', err);
  });
}
if (window.location.pathname.includes('pricing')) {
  import('./pricing.js').then((module) => {
    module.default(); // Run the pricing page GSAP code
  }).catch((err) => {
    console.error('Error loading the pricing page script', err);
  });
}

/* testimonial slider */
$(document).ready(function () {
    var testimonialsSlider = new Swiper('#testimonials-slider', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 8,
        draggable: true,
        grabCursor: true,
        pagination: {
            el: '.swiper_pagination',
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
            spaceBetween: 16
          },
          1366: {
            slidesPerView: 4
          }
        }
    });
});