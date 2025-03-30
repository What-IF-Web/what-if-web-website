//cloneable template

var cloneableTemplateHeader = gsap.timeline({scrollTrigger: {trigger: ".section_cloneable-header"}});

cloneableTemplateHeader.from(".resources-heading", {y: 80, opacity: 0, duration: 1, ease: "power4.out"}, 0);
cloneableTemplateHeader.from(".cloneable-header_image-wrapper", {y: 50, opacity: 0, rotateX: 35, ease: "power3.out", duration: 1.5}, "<0.25");
cloneableTemplateHeader.from(".cloneable-header_button-wrapper", {y: 50, opacity: 0, duration: 0.875, ease: "power4.out"}, "<0.2");

var cloneableTemplateBody = gsap.timeline({scrollTrigger: {trigger: ".section_cloneable-content",  start: "top-=400 center"}})

cloneableTemplateBody.from(".cloneable-content_content", {y: 100, opacity: 0, ease: "power3.out", duration: 1}, 0.25);

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

//blog section
var blogLoad = gsap.timeline({scrollTrigger: {trigger: ".section_related-blog", start: "-=400 center"}});

blogLoad.from(".related-blog_heading-wrapper > div", {y: 100, scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"}).from(".related-blog_list > .related-blog_item", {y:180, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.125}, "<0.5");

//footer animation
var footerLoad = gsap.timeline({scrollTrigger: {trigger: ".footer_component", start: "top-=400 center"}});

var footerSplit = new SplitText(".footer_top-wrapper > h2", {type: "lines"});

footerLoad.from(footerSplit.lines, {scale: 0.8, opacity: 0, y: 100, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
footerLoad.from(".footer_top-wrapper > p", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.25");
footerLoad.from(".footer_form_component", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.5}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1}, "<0.5");