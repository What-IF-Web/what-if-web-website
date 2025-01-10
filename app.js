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

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText) 
gsap.registerPlugin(DrawSVGPlugin)
gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(MorphSVGPlugin)

//morphing shape for the projects section
var morph1 = gsap.to(".shape-1", { duration: 3, morphSVG:".shape-2", repeat:-1, yoyo:true, repeatDelay:0})
var morph2 = gsap.to(".shape-3", { duration: 3, morphSVG:".shape-4", repeat:-1, yoyo:true, repeatDelay:0})
var morph3 = gsap.to(".shape-5", { duration: 3, morphSVG:".shape-6", repeat:-1, yoyo:true, repeatDelay:0})

//cards scroll through animation for the services section
$(document).ready(function () {
  let cardsArray = [];

  // Select all .card.is-services elements inside .services_list
  $('.services_list .card.is-services').each(function () {
    let card = $(this);
    let linkTargetID = card.find('.card_link-target').attr('id');

    // Push the card element and ID into the array as an object
    cardsArray.push({
      cardElement: card,
      linkTargetID: linkTargetID
    });
  });
  cardsArray.forEach(function (item) {
    // GSAP ScrollTrigger animation for each card
    gsap.fromTo(item.cardElement,
      { opacity: 0, scale: 0.2, y: 0 }, 
      { 
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `#${item.linkTargetID}`, // Trigger based on the ID
          start: "top 90%", // Adjust to trigger when card enters viewport
          end: "top 20%",
          scrub: true, 
          markers: false
        }
      }
    );
  });
});

//splitHeadingIntoLines
var heroSplit = new SplitText(".home-header_heading", {type: "lines"});

//hero section animation
var heroLoad = gsap.timeline({scrollTrigger: {trigger: ".section_home-header"}});

//content
heroLoad.from(heroSplit.lines, {duration: 1, opacity: 0, ease: "power4.out", y: 500, stagger: 0.125}).from(".home-header_heading", {scale: 0.6, duration: 0.625, ease: "back.out(1.7)"}, ">-0.5");
heroLoad.from(".home-header_subheading", {duration: .875, y:300, opacity: 0, ease: "power4.out"}, ">-0.25");
heroLoad.from(".home-header_component > a", {duration: .875, y: 200, opacity: 0, ease: "power3.out"}, ">-0.25");

//critters
heroLoad.from(".home-header_lottie.is-dinkus", {y: 70, x: 180, duration: 0.5, scale: 0, ease: "power4.out"}, ">-0.5");
heroLoad.from(".home-header_lottie.is-brazzo", {y: -200, x: 240, duration: 0.625, scale: 0, ease: "power4.out"}, "<-0.25");
heroLoad.from(".home-header_lottie.is-slice", {y: -100, x: -200, duration: 0.75, scale: 0, ease: "power4.out"}, "<-0.125");

//featured projects animation
var projectsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_projects", start: "top+=100 center"}});

var projectsSplit = new SplitText(".projects_heading-wrapper > h2", {type: "lines"});

projectsLoad.from(projectsSplit.lines, {duration: 1, opacity: 0, y: 150, scale: 0.8, ease: "power3.out", stagger: 0.125}); 
projectsLoad.from(".projects_content > .projects_item > .projects_card", {duration: 1.5, opacity: 0, y:100, ease: "power3.out", stagger: 0.125}, ">-0.5");
projectsLoad.from(".projects_component > a", {y:100, opacity: 0, ease: "power3.out"}, "<0.25");

projectsLoad.from("#projects-highlight", {color: "EB5B30", duration: 0}, "<").to("#projects-highlight", {scale: 1.1, duration: 0.3, ease: "power2.in"}, "<").to("#projects-highlight", {scale: 1, duration: 0.2, ease: "power2.out"}, "<0.4");
projectsLoad.from("#projects-line > svg > path", {drawSVG: 0, duration: 0.6, ease: "power3.out"}, "<");

//solutions/services section animation
var servicesLoad = gsap.timeline({scrollTrigger: {trigger: ".section_services", start: "top+=100 center"}});

servicesLoad.from(".services_heading-wrapper > h2", {y: 200, scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"});
servicesLoad.from(".services_service-list > .services_service-item", {y: 100, opacity: 0, duration: .5, stagger: 0.25, ease: "power.4out"}, "<0.5");

//CTA FORM ANIMATION
var ctaFormTrigger = gsap.timeline({scrollTrigger: {trigger: ".cta_form", start: "top+=100 center"}});

//CTA FORM ELEMENTS POP IN
ctaFormTrigger.to("#cta-star-1", {duration: 0.4, scale: 1.6, ease: "power3.inOut", repeat: 1, yoyo: true}, 0);
ctaFormTrigger.to("#cta-star-2", {duration: 0.3, scale: 1.4, ease: "power3.inOut", repeat: 1, yoyo: true}, 0.25);
ctaFormTrigger.from(".cta_lottie", {duration: 0.75, scale: 0.8, y: 200, ease: "power3.out"}, "<");
ctaFormTrigger.from(".cta_burst-lines > svg > path", {drawSVG: 0, opacity: 0, scale: 0.9, duration: .25, ease: "power2.in"}, "<.25");
ctaFormTrigger.from("#cta-form-orange", {color: "#0f2756", duration: .125, ease: "power3.out"}, "<.5");
ctaFormTrigger.to("#cta-form-orange", {scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3}, "<");
ctaFormTrigger.from(".cta_scribble > svg > path", {drawSVG: 0, duration: 0.75, ease: "power4.in"}, "<0.125");

//process section animation
var processLoad = gsap.timeline({scrollTrigger: {trigger: ".process_component", scrub: true, start: "top bottom", end: "bottom bottom", markers: false}});

//testimonials section animation
var testimonialsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_testimonials", start: "top+=100 center"}});

var testimonialSplit = new SplitText("#testimonial-heading", {type: "lines"});

testimonialsLoad.from(".testimonials_star-wrapper > div", {opacity: 0, y: 75, duration: 0.75, ease: "power3.out"}).from(testimonialSplit.lines, {opacity: 0, y: 100, duration: 1, scale: 0.8, stagger: 0.125, ease: "power4.out"}, "<0.25");

//About Section Animation
var aboutLoad = gsap.timeline({scrollTrigger: {trigger: ".section_home-about", start: "top center"}});

var aboutSplit = new SplitText(".home-about_content-left > h2", {type: "lines"});

//text
aboutLoad.from(aboutSplit.lines, {y: 100, scale: 0.8, opacity: 0, stagger: 0.125, ease: "power3.out"}, 0);
aboutLoad.from(".home-about_content-left > p, .home-about_content-left > a", {duration: 1, ease:"power3.out", opacity: 0, stagger: 0.125}, "<0.5");

//images
aboutLoad.from(".home-about_background-shape", {scale: 0}, -.25);
aboutLoad.from(".home-about_card-wrapper.is-first", {x: 2500, rotation: 100, duration: 1.25, ease: "power4.out"}, "<0.5");
aboutLoad.from(".home-about_card-wrapper.is-second", {x: 2500, rotation: 60, duration: 1.25, ease: "power4.out"}, 0.25);
aboutLoad.from(".home-about_card-wrapper.is-third", {x: 2000, rotation: 130, duration: 1.5, ease: "power4.out"}, 0.125);

aboutLoad.from(".home-about_lottie", {scale: 0, duration: 1, ease: "back.out(1.7)"}, ">0.125").from(".home-about_lottie-2", {scale: 0, duration: 1, ease: "back.out(1.7)"}, "<0.25");

//quote CTA animation
var ctaLoad = gsap.timeline({scrollTrigger: {trigger: ".section_quote-cta", start: "top+=100 center"}});

//main elements
ctaLoad.from(".quote-cta_component", {scale: 0.7, y: 400, duration: 1.75, ease:"power4.out"}).fromTo(".quote-cta_heading-wrapper", {opacity: 0, scale: 0, y: 300}, {opacity: 1, scale: 1, y: 100, duration: 1, ease: "power4.out"}, "<0.5");

//text span
// ctaLoad.from(".quote-cta_heading > .text-color-alternate", {color: "#fff9f3", duration: 0.5, ease: "power3.out"}, 0.75).to(".text-color-alternate", {scale: 1.2, duration: 0.25, ease: "power4.out"}).to(".text-color-alternate", {scale: 1, duration: 0.25,})
// .from("#ctaScribble", {drawSVG: 0, duration: 1, ease: "power4.in"}, "<-0.25");

ctaLoad.to(".quote-cta_heading > .text-color-alternate", {scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3}, 1);
ctaLoad.from(".quote-cta_heading > .text-color-alternate", {color: "#fff9f3", duration: .125, ease: "power3.out"}, "<.125");
ctaLoad.from("#ctaScribble", {drawSVG: 0, duration: 1, ease: "power4.in"}, "<");

//content
ctaLoad.fromTo(".quote-cta_heading-wrapper", {y:100}, {y: 0, duration: 1, ease: "power2.out"}, "<.25");
ctaLoad.from(".quote-cta_subheading", {y:150, duration: 0.875, ease: "power2.out", opacity: 0}, "<0.5");
ctaLoad.from("#ctaButton", {y: 200, duration: 0.875, ease: "power2.out", opacity: 0,}, "<0.125");

//blog section
var blogLoad = gsap.timeline({scrollTrigger: {trigger: ".section_related-blog", start: "top+=100 center"}});

blogLoad.from(".related-blog_heading-wrapper > div", {y: 100, scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"}).from(".related-blog_list > .related-blog_item", {y:180, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.125}, "<0.5");

//footer animation
var footerLoad = gsap.timeline({scrollTrigger: {trigger: ".footer_component", start: "top+=100 center"}});

var footerSplit = new SplitText(".footer_top-wrapper > h2", {type: "lines"});

footerLoad.from(footerSplit.lines, {scale: 0.8, opacity: 0, y: 100, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
footerLoad.from(".footer_top-wrapper > p", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.25");
footerLoad.from(".footer_form_component", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1}, "<0.5");

let mm = gsap.matchMedia();

// desktop
mm.add("(min-width: 991px)", () => {

  processLoad.fromTo("#process-heading", {lineHeight: "2"}, {lineHeight: "0.79"}, 0);
  processLoad.to("#process-heading", {y: -700, opacity: 0, ease: "power3.out"}, .5);
  processLoad.fromTo("#process-heading", {lineHeight: "0.79"}, {lineHeight: "1.5"}, "<");
  processLoad.to(".process_critter", {width: "100dvw", height: "50dvw", ease: "power4.out"}, ">-0.5");
  gsap.set(".process_card-wrapper > .card", {xPercent: -50, yPercent: -50, transformOrigin: "50%, 50%"});
  processLoad.to(".process_card-wrapper > .card", {stagger: 0.1, ease: "none", motionPath: {path: "#process-path", align: "#process-path", autoRotate: 180}}, ">");

  var ctaFormLoad = gsap.timeline({scrollTrigger: {trigger: ".cta_form-block", scrub: true, start: "top bottom", end: "bottom bottom", markers: false}});
  
  ctaFormLoad.from(".cta_graphic", {scale: 0.5, ease: "power3.out"}, 0);
  ctaFormLoad.from(".cta_form", { gap: 300, ease: "power3.out"}, 0.25);
  ctaFormLoad.to(".cta_form", {gap: 80, ease: "power3.out"}, ">");
  ctaFormLoad.to(".cta_form", {y: -300, ease: "power3.out"}, "<");
  ctaFormLoad.from("#cta-form-bottom", { opacity: "0", y: 700, ease: "power4.out"}, "<-0.125");
  ctaFormLoad.to(".cta_graphic", {y: -600, opacity: "0", ease: "power4.out"}, "<");

});
//mobile
mm.add("(max-width: 991px)", () => {

  processLoad.to("#process-heading", {y: -300, opacity: 0, ease: "power3.out"}, 1.15);
  processLoad.to(".process_critter", {y: -200, opacity: 0, ease: "power3.out"}, 1.2);
  processLoad.to(".process_card-container", {x: "-300rem", ease: "none", duration: 2}, ">-0.3");

});