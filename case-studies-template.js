//case studies template

var csTemplateHeader = gsap.timeline({scrollTrigger: {trigger: ".section_case-study-header"}});

csTemplateHeader.from(".case-study-header_image-wrapper", {y: 50, opacity: 0, rotateX: 35, ease: "power3.out", duration: 1.5}, 0);
csTemplateHeader.from(".case-study-header_pill", {y: 50, opacity: 0, duration: 0.75, ease: "power4.out"}, 0.5);
csTemplateHeader.from(".case-study-header_heading", {y: 80, opacity: 0, duration: 1, ease: "power4.out"}, "<0.25");
csTemplateHeader.from(".case-study-header_heading-content > p", {y: 50, opacity: 0, duration: 0.875, ease: "power4.out"}, "<0.2");
csTemplateHeader.from(".case-study-header_bottom-content > .button", {opacity: 0, duration: 1, ease: "power4.out"}, "<0.5");

var csTemplateBody = gsap.timeline({scrollTrigger: {trigger: ".section_case-study",  start: "top+=100 center"}})

csTemplateBody.from(".table-of-contents", {y: 80, opacity: 0, ease: "power3.out", duration: 1}, 0);
csTemplateBody.from(".case-study_content", {y: 100, opacity: 0, ease: "power3.out", duration: 1}, 0.25);
csTemplateBody.from(".case-study_content > div", {y: 25, opacity: 0, ease: "power4.out", duration: 1, stagger: 0.125}, "<0.125");

var csTechStack = gsap.timeline({scrollTrigger: {trigger: ".section_tech-stack", start: "top+=100 center"}}); 

csTechStack.from("#tech-stack-wrapper > h2", {y: 80, opacity: 0, ease: "power4.out", duration: 0.875}, 0);
csTechStack.from("#tech-stack-wrapper > p", {y: 50, opacity: 0, ease: "power4.out", duration: 0.75}, 0.25);
csTechStack.from(".tech-stack_item", {y: 100, duration: 1, opacity: 0, stagger: 0.125, ease: "power.4out"}, 0.5);
csTechStack.from(".tech-stack_image", {y: 30, duration: 0.75, opacity: 0, stagger: 0.125, ease: "power.4out"}, "<");
csTechStack.from(".tech-stack_item-front > h3", {y: 50, duration: 0.75, opacity: 0, stagger: 0.125, ease: "power.4out"}, "<0.125");

//quote CTA animation
var ctaLoad = gsap.timeline({scrollTrigger: {trigger: ".section_quote-cta", start: "top+=100 center"}});

//main elements
ctaLoad.from(".quote-cta_component", {scale: 0.7, y: 400, duration: 1.75, ease:"power4.out"}).fromTo(".quote-cta_heading-wrapper", {opacity: 0, scale: 0, y: 300}, {opacity: 1, scale: 1, y: 100, duration: 1, ease: "power4.out"}, "<0.5");

ctaLoad.to(".quote-cta_heading > .text-color-alternate", {scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3}, 1);
ctaLoad.from(".quote-cta_heading > .text-color-alternate", {color: "#fff9f3", duration: .125, ease: "power3.out"}, "<.125");
ctaLoad.from("#ctaScribble", {drawSVG: 0, duration: 1, ease: "power4.in"}, "<");

//content
ctaLoad.fromTo(".quote-cta_heading-wrapper", {y:100}, {y: 0, duration: 1, ease: "power2.out"}, "<.25");
ctaLoad.from(".quote-cta_subheading", {y:150, duration: 0.875, ease: "power2.out", opacity: 0}, "<0.5");
ctaLoad.from("#ctaButton", {y: 200, duration: 0.875, ease: "power2.out", opacity: 0,}, "<0.125");