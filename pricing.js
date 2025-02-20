//Pricing stuff


//case studies blob morph
var morphPath = gsap.timeline({ repeat: -1, yoyo: true });

morphPath
  .to(".path1", { duration: 2, morphSVG: ".path2", ease: "power1.inOut" })
  .to(".path1", { duration: 2, morphSVG: ".path3", ease: "power1.inOut" })
  .to(".path1", { duration: 2, morphSVG: ".path4", ease: "power1.inOut" })
  .to(".path1", { duration: 2, morphSVG: ".path5", ease: "power1.inOut" })
  .to(".path1", { duration: 2, morphSVG: ".path6", ease: "power1.inOut" })
  .to(".path1", { duration: 2, morphSVG: ".path7", ease: "power1.inOut" })
  .to(".path1", { duration: 2, morphSVG: ".path2", ease: "power1.inOut" });


//quote CTA animation
var ctaLoad = gsap.timeline({scrollTrigger: {trigger: ".section_quote-cta", start: "-=400 center"}});

//main elements
ctaLoad.from(".quote-cta_component", {y: 100, scale: 0.9, duration: .875, ease:"power4.out"})
ctaLoad.fromTo(".quote-cta_heading-wrapper", {opacity: 0, scale: 0, y: 400}, {opacity: 1, scale: 1, y: 0, duration: 1, ease: "power4.out"}, "<+0.125");
//content
ctaLoad.from(".quote-cta_subheading", {y:150, duration: 0.875, ease: "power2.out", opacity: 0}, "<.25");
ctaLoad.from("#ctaButton", {y: 200, duration: 0.875, ease: "power2.out", opacity: 0,}, "<0.125");

ctaLoad.to(".quote-cta_heading > .text-color-alternate", {scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3}, ">-0.5");
ctaLoad.from(".quote-cta_heading > .text-color-alternate", {color: "#fff9f3", duration: .125, ease: "power3.out"}, "<.125");
ctaLoad.from("#ctaScribble", {drawSVG: '0% 0%', duration: 1, ease: "power3.out"}, "<");
ctaLoad.to("#ctaScribble", {drawSVG: '100% 100%', duration: 1, ease: "power3.out"}, ">-0.3");
ctaLoad.to("#ctaScribble", {opacity: 0, duration: 0}, ">-0.02");


//featured projects animation
var projectsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_projects", start: "-=400 center"}});

var projectsSplit = new SplitText(".projects_heading-wrapper > h2", {type: "lines"});

projectsLoad.from(projectsSplit.lines, {duration: 1, opacity: 0, y: 150, scale: 0.8, ease: "power3.out", stagger: 0.125}); 
projectsLoad.from(".projects_content > .projects_item > .projects_card", {duration: 1.5, opacity: 0, y:100, ease: "power3.out", stagger: 0.125}, ">-0.5");
projectsLoad.from(".projects_component > a", {y:100, opacity: 0, ease: "power3.out"}, "<0.25");

projectsLoad.from("#projects-highlight", {color: "EB5B30", duration: 0}, "<").to("#projects-highlight", {scale: 1.1, duration: 0.3, ease: "power2.in"}, "<").to("#projects-highlight", {scale: 1, duration: 0.2, ease: "power2.out"}, "<0.4");
projectsLoad.from("#projects-line > svg > path", {drawSVG: '0% 0%', duration: 0.6, ease: "power3.out"}, "<");
projectsLoad.to("#projects-line > svg > path", {drawSVG: '100% 100%', duration: 0.6, ease: "power3.out"}, ">-0.3");
projectsLoad.to("#projects-line > svg > path", {opacity: 0, duration: 0}, ">-0.01");


//solutions/services section animation
var servicesLoad = gsap.timeline({scrollTrigger: {trigger: ".section_services", start: "-=400 center"}});

servicesLoad.from(".services_heading-wrapper > h2", {y: 80, scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"});


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
          end: "top 40%",
          scrub: true, 
          markers: false
        }
      }
    );
  });
});



// pricing header load in
var pricingLoad = gsap.timeline({scrollTrigger: {trigger: ".section_pricing"}});

pricingLoad.from(".pricing_content-top > h1", {y: 100, opacity: 0, duration: 1, ease: 'power4.out'});
pricingLoad.from(".pricing_paragraph-wrapper", {y: 150, opacity: 0, duration: 1, ease: 'power4.out'}, "<+0.25");
pricingLoad.from(".pricing_content-bottom", {y: 200, opacity: 0, duration: 1, ease: 'power4.out'}, "<+0.25");

//FAQ section

var faqLoad = gsap.timeline({scrollTrigger: {trigger: ".section_faq", start: "-=400 center"}});

faqLoad.from("#faq-heading", {y: 80, opacity: 0, duration: 0.875, ease: "power3.out"}, 0);
faqLoad.from(".faq_list > .faq_item", {y: 50, opacity: 0 , duration: 1, ease: "power4.out", stagger: 0.125}, 0.25);
faqLoad.from(".faq_lottie", {scale: 0, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.25}, "<0.5");

//footer animation
var footerLoad = gsap.timeline({scrollTrigger: {trigger: ".footer_component", start: "-=400 center"}});

var footerSplit = new SplitText(".footer_top-wrapper > h2", {type: "lines"});

footerLoad.from(footerSplit.lines, {scale: 0.8, opacity: 0, y: 100, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
footerLoad.from(".footer_top-wrapper > p", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.25");
footerLoad.from(".footer_form_component", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1}, "<0.5");

let mm = gsap.matchMedia();

// desktop
mm.add("(min-width: 991px)", () => {
   //pinned service element
   var servicesPinTrigger = gsap.timeline({scrollTrigger: {trigger: ".section_services", start: "top top", end: "bottom bottom", scrub: true, pin: ".services_content-top-wrapper", pinSpacing: false}});
});
