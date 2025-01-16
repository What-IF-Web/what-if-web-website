//Case studies page

var csHeaderLoad = gsap.timeline({scrollTrigger: {trigger: ".section_case-studies"}});

csHeaderLoad.from(".case-studies_content-top > h1", {y: 150, duration: .75, opacity: 0, ease: "power3.out"});
csHeaderLoad.from(".case-studies_content-top > p", {y: 100, duration: 1, opacity: 0, ease: "power3.out"}, "<0.125");
csHeaderLoad.from(".case-studies_filter-item", {y: 120, duration: 0.75, stagger: 0.125, ease: "power3.out"}, "<0.5");
csHeaderLoad.from(".reset-link", {y: 120, duration: 1, opacity: 0, ease: "power3.out"}, ">-0.25");

var solutionsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_solutions", start: "top+=100 center"}});

solutionsLoad.from(".solutions_bespoke-item", {y: 100, opacity: 0, duration: 1, ease: "power4.out"}, 0);
solutionsLoad.from(".solutions_bespoke-item > h2, .solutions_bespoke-item > p", {y: 80, opacity: 0, duration: 0.875, ease: "power3.out", stagger: "0.05"}, "<0.25");
solutionsLoad.from(".solutions_service-item", {y: 100, opacity: 0, duration: 1, ease: "power4.out", stagger: "0.125"}, 0.35);
solutionsLoad.from(".solutions_service-item > .solutions_service-icon-wrapper > .solutions_service-icon", {y: 50, opacity: 0, duration: 1, ease: "power4.out", stagger: "0.125"}, 0.25);

const cards = document.querySelectorAll(".case-studies_item");

cards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom",
      end: "top 60%",
      scrub: true,
      markers: false
    },
    scale: 0.8,
    y: 100,
    ease: "power3.out",
    rotateX: 45,
    opacity: 0
  });
});

//testimonials section animation
var testimonialsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_testimonials", start: "top+=100 center"}});

var testimonialSplit = new SplitText("#testimonial-heading", {type: "lines"});

testimonialsLoad.from(".testimonials_star-wrapper > div", {opacity: 0, y: 75, duration: 0.75, ease: "power3.out"}).from(testimonialSplit.lines, {opacity: 0, y: 100, duration: 1, scale: 0.8, stagger: 0.125, ease: "power4.out"}, "<0.25");

//footer animation
var footerLoad = gsap.timeline({scrollTrigger: {trigger: ".footer_component", start: "top+=100 center"}});

var footerSplit = new SplitText(".footer_top-wrapper > h2", {type: "lines"});

footerLoad.from(footerSplit.lines, {scale: 0.8, opacity: 0, y: 100, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
footerLoad.from(".footer_top-wrapper > p", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.25");
footerLoad.from(".footer_form_component", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1}, "<0.5");