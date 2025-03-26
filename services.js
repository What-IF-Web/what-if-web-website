//services animations

//services hero load
var servicesHero = gsap.timeline({scrollTrigger: {trigger: ".section_services-header"}});

var servicesSplit = new SplitText(".services-header_text-wrapper > h1", {type: "lines"});

servicesHero.from(servicesSplit.lines, {opacity: 0, y: 100, ease: "power4.out", duration: 1, stagger: 0.125}, "0");
servicesHero.from(".services-header_text-wrapper > p", {opacity: 0, y: 80, ease: "power4.out", duration: 1}, "0.25");
servicesHero.from(".services-header_image-wrapper", {opacity: 0, y: 100, ease: "power3.out", duration: 1}, "0.5")

var servicesCaseStudies = gsap.timeline({scrollTrigger: {trigger: ".services-case-studies_content-top"}});

var serviceCsSplit = new SplitText(".services-case-studies_heading-wrapper > .projects-rich-text > h2", {type: "lines"});

servicesCaseStudies.from(".services-case-studies_image-wrapper", {y: 80, opacity: 0, ease: "power4.out", duration: 0.875}, 0);
servicesCaseStudies.from(".services-case-studies_image-background", {y: 50, duration: 0.875, ease: "power4.out"}, 0.125);
servicesCaseStudies.from(".services-case-studies_eyes", {y: 150, duration: 0.75, ease: "power4.out"}, 0.25);
servicesCaseStudies.from(serviceCsSplit.lines, {y: 80, opacity: 0, ease: "power4.out", duration: 1, stagger: 0.125}, 0.25);
servicesCaseStudies.from(".services-case-studies_heading-wrapper > p", {y: 80, opacity: 0, ease: "power4.out", duration: 1}, 0.5);
servicesCaseStudies.from(".services-case-studies_content-middle", {y: 100, opacity: 0, ease: "power3.out", duration: 1}, "<+0.5");
servicesCaseStudies.from(".services-case-studies_content-bottom", {y: 100, opacity: 0, ease: "power3.out", duration: 1}, "<+0.25");

var csTechStack = gsap.timeline({scrollTrigger: {trigger: ".section_tech-stack", start: "top-=400 center"}}); 

csTechStack.from("#tech-stack-wrapper > h2", {y: 80, opacity: 0, ease: "power4.out", duration: 0.875}, 0);
csTechStack.from(".tech-stack_subheading-wrapper > p", {y: 50, opacity: 0, ease: "power4.out", duration: 0.75}, 0.25);
csTechStack.from(".tech-stack_item", {y: 100, duration: 1, opacity: 0, stagger: 0.125, ease: "power.4out"}, 0.5);
csTechStack.from(".tech-stack_image", {y: 30, duration: 0.75, opacity: 0, stagger: 0.125, ease: "power.4out"}, "<");
csTechStack.from(".tech-stack_item-front > h3", {y: 50, duration: 0.75, opacity: 0, stagger: 0.125, ease: "power.4out"}, "<0.125");

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

//sub services section
var subServices = gsap.timeline({scrollTrigger: {trigger: ".section_sub-services"}});

var subServicesPin = gsap.timeline({scrollTrigger: {trigger: ".section_sub-services", scrub: true, pin: ".sub-services_content-wrapper", end: "bottom+=300 bottom"}});

var subServiceSplit = new SplitText(".sub-services_content-wrapper > .services-rich-text > h2", {type: "lines"});

subServices.from(".sub-services_tag", {y: 80, opacity: 0, ease: "power4.out", duration: 0.875}, 0);
subServices.from(subServiceSplit.lines, {y: 80, opacity: 0, ease: "power4.out", duration: 0.875, stagger: 0.125}, "<+0.25");
subServices.from(".sub-services_content-wrapper > p", {y: 100, opacity: 0, ease: "power4.out", duration: 1}, "<+0.25");

//solutions animation
var solutionsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_solutions", start: "-=400 center"}});

solutionsLoad.from(".solutions_bespoke-item", {y: 100, opacity: 0, duration: 1, ease: "power4.out"}, 0);
solutionsLoad.from(".solutions_bespoke-item > h2, .solutions_bespoke-item > p", {y: 80, opacity: 0, duration: 0.875, ease: "power3.out", stagger: "0.05"}, "<0.25");
solutionsLoad.from(".solutions_service-item", {y: 100, opacity: 0, duration: 1, ease: "power4.out", stagger: "0.125"}, 0.35);
solutionsLoad.from(".solutions_service-item > .solutions_service-icon-wrapper > .solutions_service-icon", {y: 50, opacity: 0, duration: 1, ease: "power4.out", stagger: "0.125"}, 0.25);


//footer animation
var footerLoad = gsap.timeline({scrollTrigger: {trigger: ".footer_component", start: "top-=400 center"}});

var footerSplit = new SplitText(".footer_top-wrapper > h2", {type: "lines"});

footerLoad.from(footerSplit.lines, {scale: 0.8, opacity: 0, y: 100, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
footerLoad.from(".footer_top-wrapper > p", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.25");
footerLoad.from(".footer_form_component", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1}, "<0.5");

//testimonials section animation
var testimonialsLoad = gsap.timeline({
    scrollTrigger: { trigger: ".section_testimonials", start: "-=400 center" },
});
  
var testimonialSplit = new SplitText("#testimonial-heading", { type: "lines" });
  
testimonialsLoad
.from(".testimonials_star-wrapper > div", {
    opacity: 0,
    y: 75,
    duration: 0.75,
    ease: "power3.out",
})
.from(
    testimonialSplit.lines,
    {
    opacity: 0,
    y: 100,
    duration: 1,
    scale: 0.8,
    stagger: 0.125,
    ease: "power4.out",
    },
    "<0.25"
);