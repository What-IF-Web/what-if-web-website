/* testimonial slider */
$(document).ready(function () {
    var testimonialsSlider = new Swiper('#testimonials-slider', {
        loop: true,
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 16,
        draggable: true,
        grabCursor: true,
        pagination: {
            el: '.swiper_pagination',
            clickable: true,
        },
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        speed: 1000,
        freeMode: true,
        freeModeMomentum: true,
    });
});

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollSmoother)
gsap.registerPlugin(DrawSVGPlugin)

//morphing shape for the projects section
var morph1 = gsap.to(".shape-1", { duration: 1, morphSVG:".shape-2", repeat:-1, yoyo:true, repeatDelay:0})
var morph2 = gsap.to(".shape-3", { duration: 1, morphSVG:".shape-4", repeat:-1, yoyo:true, repeatDelay:0})
var morph2 = gsap.to(".shape-5", { duration: 1, morphSVG:".shape-6", repeat:-1, yoyo:true, repeatDelay:0})

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
var projectsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_projects"}});

projectsLoad.from(".projects_heading-wrapper > h2", {duration: 1, opacity: 0, y: 150, ease: "power3.out"}); 
projectsLoad.from(".projects_content > .projects_item > .projects_card", {duration: 1.5, opacity: 0, y:100, ease: "power3.out", stagger: 0.125}, ">-0.5");
projectsLoad.from(".projects_component > a", {y:100, opacity: 0, ease: "power3.out"}, "<0.25");

projectsLoad.from("#projects-highlight", {color: "EB5B30", duration: 0}, "<").to("#projects-highlight", {scale: 1.1, duration: 0.3, ease: "power2.in"}, "<").to("#projects-highlight", {scale: 1, duration: 0.2, ease: "power2.out"}, "<0.4");
projectsLoad.from("#projects-line > svg > path", {drawSVG: 0, duration: 0.6, ease: "power3.out"}, "<");

//cta form animation
var ctaFormLoad = gsap.timeline({scrollTrigger: {trigger: ".cta_form-block", scrub: true, start: "top bottom", end: "bottom bottom", markers: true}});

ctaFormLoad.from(".cta_form_input-wrapper", {y: 900, ease: "power3.out"});
ctaFormLoad.to(".cta_graphic", {y: -300, opacity: 0, ease: "power3.out"}, ">+0.25");
ctaFormLoad.to(".cta_form", {gap: 400, y: -300}, "<1").from("#cta-form-bottom", {y: 800, ease: "power3.out"}, "<0.25");

//process section animation
var processLoad = gsap.timeline({scrollTrigger: {trigger: ".process_component", scrub: true, start: "top bottom", end: "bottom bottom", markers: true}});

processLoad.to("#process-heading", {y: -700, ease: "power3.out"}, .5);
processLoad.to(".process_critter", {width: "100dvw", height: "50dvw"}, ">");
processLoad.to(".process_card-wrapper", {x: "-300dvw"}, ">-0.5");





//testimonials section animation
var testimonialsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_testimonials"}});

testimonialsLoad.from(".testimonials_star-wrapper > div", {opacity: 0, y: 75, duration: 0.75, ease: "power3.out"}).from("#testimonial-heading", {opacity: 0, y: 100, duration: 1, ease: "power4.out"}, "<0.25");

//About Section Animation
var aboutLoad = gsap.timeline({scrollTrigger: {trigger: ".section_home-about"}});

//text
aboutLoad.from(".home-about_content-left > p, .home-about_content-left > h2, .home-about_content-left > a", {y:100, duration: 1, ease:"power3.out", opacity: 0, stagger: 0.125});

//images
aboutLoad.from(".home-about_background-shape", {scale: 0}, -.25);
aboutLoad.from(".home-about_card-wrapper.is-first", {x: 2500, rotation: 100, duration: 1.25, ease: "power4.out"}, "<0.5");
aboutLoad.from(".home-about_card-wrapper.is-second", {x: 2500, rotation: 60, duration: 1.25, ease: "power4.out"}, 0.25);
aboutLoad.from(".home-about_card-wrapper.is-third", {x: 2000, rotation: 130, duration: 1.5, ease: "power4.out"}, 0.125);

aboutLoad.from(".home-about_lottie", {scale: 0, duration: 1, ease: "back.out(1.7)"}, ">0.125").from(".home-about_lottie-2", {scale: 0, duration: 1, ease: "back.out(1.7)"}, "<0.25");

//quote CTA animation
var ctaLoad = gsap.timeline({scrollTrigger: {trigger: ".section_quote-cta"}});

//main elements
ctaLoad.from(".quote-cta_component", {scale: 0.7, y: 400, duration: 1.75, ease:"power4.out"}).fromTo(".quote-cta_heading-wrapper", {opacity: 0, scale: 0, y: 300}, {opacity: 1, scale: 1, y: 100, duration: 1, ease: "power4.out"}, "<0.5");

//text span
ctaLoad.from(".quote-cta_heading > .text-color-alternate", {color: "#fff9f3", duration: 0.5, ease: "power3.out"}, 0.75).to(".text-color-alternate", {scale: 1.2, duration: 0.25, ease: "power4.out"}).to(".text-color-alternate", {scale: 1, duration: 0.25,})
.from("#ctaScribble", {drawSVG: 0, duration: 1, ease: "power4.in"}, "<0.25");

//content
ctaLoad.fromTo(".quote-cta_heading-wrapper", {y:100}, {y: 0, duration: 1, ease: "power2.out"}, "<1");
ctaLoad.from(".quote-cta_subheading", {y:150, duration: 0.875, ease: "power2.out", opacity: 0}, "<0.5");
ctaLoad.from("#ctaButton", {y: 200, duration: 0.875, ease: "power2.out", opacity: 0,}, "<0.125");

//blog section
var blogLoad = gsap.timeline({scrollTrigger: {trigger: ".section_related-blog"}});

blogLoad.from(".related-blog_heading-wrapper > div", {y: 100, opacity: 0, duration: 1, ease: "power3.out"}).from(".related-blog_list > .related-blog_item", {y:180, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.125}, "<0.5");