//Resources page

var resourceHeaderLoad = gsap.timeline({scrollTrigger: {trigger: ".section_resources"}});

resourceHeaderLoad.from(".resources_top-content > h1", {y: 150, duration: .75, opacity: 0, ease: "power3.out"});
resourceHeaderLoad.from(".resources_top-content > p", {y: 100, duration: 1, opacity: 0, ease: "power3.out"}, "<0.125");
resourceHeaderLoad.from(".resources_tab-link", {y: 120, duration: 0.75, stagger: 0.125, ease: "power3.out"}, "<0.5");

//simplified cards animation
const cards = document.querySelectorAll(".resources_card-wrapper");
var cardsLoad = gsap.timeline({scrollTrigger: {trigger: ".resources_list"}});

cardsLoad.from(cards, {y: 300, opacity: 0, duration: 1.5, stagger: 0.125, ease: "power4.out"});

//footer animation
var footerLoad = gsap.timeline({scrollTrigger: {trigger: ".footer_component", start: "-=400 center"}});

var footerSplit = new SplitText(".footer_top-wrapper > h2", {type: "lines"});

footerLoad.from(footerSplit.lines, {scale: 0.8, opacity: 0, y: 100, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
footerLoad.from(".footer_top-wrapper > p", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.25");
footerLoad.from(".footer_form_component", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1}, "<0.5");