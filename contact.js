//contact page stuff

var contactLoad = gsap.timeline({scrollTrigger: {trigger: ".section_contact-header"}});

contactLoad.from(".contact-header_heading-wrapper", {y: 80, opacity: 0, duration: 1, ease: "power3.out"}, 0);
contactLoad.from(".container-header_card", {y: 50, opacity: 0, duration: 1, ease: "power4.out"}, 0.125);
contactLoad.from(".contact-header_info-callout", {y: 50, opacity: 0, duration: 1, ease: "power4.out"}, 0.25);
contactLoad.from(".contact-header_info-callout > h2, .contact-header_info-callout > p", {y: 30, opacity: 0, duration: .75, ease: "power3.out", stagger: "0.125"}, 0.35);
contactLoad.from(".contact-header_contact", {y: 30, opacity: 0, duration: .75, ease: "power3.out", stagger: 0.125}, 0.625);
contactLoad.from(".contact-header_form-wrapper", {y: 100, opacity: 0, duration: 1.25, ease: "power4.out"}, 0.75);
contactLoad.from(".contact-header_form > .form_input-wrapper, .contact-header_form > .button", {y: 10, opacity: 0, duration: 0.5, stagger: 0.125}, "<0.125");
contactLoad.to(".button.is-form-submit", {duration: 0.25, scale: 1.05, ease: "power3.inOut", repeat: 1, yoyo: true}, ">")

//FAQ section

var faqLoad = gsap.timeline({scrollTrigger: {trigger: ".section_faq", start: "-=400 center"}});

faqLoad.from("#faq-heading", {y: 80, opacity: 0, duration: 0.875, ease: "power3.out"}, 0);
faqLoad.from(".faq_list > .faq_item", {y: 50, opacity: 0 , duration: 1, ease: "power4.out", stagger: 0.125}, 0.25);
faqLoad.from(".faq_lottie", {scale: 0, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.25}, "<0.5");
//need to add optional cta bit

/*blog section
var blogLoad = gsap.timeline({scrollTrigger: {trigger: ".section_related-blog", start: "-=400 center"}});

blogLoad.from(".related-blog_heading-wrapper > div", {y: 100, scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"}).from(".related-blog_list > .related-blog_item", {y:180, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.125}, "<0.5");
*/
//footer animation
var footerLoad = gsap.timeline({scrollTrigger: {trigger: ".footer_component", start: "-=400 center"}});

var footerSplit = new SplitText(".footer_top-wrapper > h2", {type: "lines"});

footerLoad.from(footerSplit.lines, {scale: 0.8, opacity: 0, y: 100, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
footerLoad.from(".footer_top-wrapper > p", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.25");
footerLoad.from(".footer_form_component", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {y: 32, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1}, "<0.5");