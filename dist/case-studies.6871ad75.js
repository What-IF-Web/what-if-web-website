
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire41e5"];
var parcelRegister = parcelRequire.register;
parcelRegister("akn5f", function(module, exports) {
//Case studies page
gsap.defaults({
    ease: "power4.out",
    duration: 1
});
var $784dad906f823cb0$var$csHeaderLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_case-studies"
    }
});
$784dad906f823cb0$var$csHeaderLoad.from(".case-studies_content-top > h1", {
    y: 150,
    opacity: 0
});
$784dad906f823cb0$var$csHeaderLoad.from(".case-studies_content-top > p", {
    y: 100,
    opacity: 0
}, "<0.125");
$784dad906f823cb0$var$csHeaderLoad.from(".case-studies_filter-item", {
    y: 120,
    stagger: 0.125
}, "<0.5");
$784dad906f823cb0$var$csHeaderLoad.from(".reset-link", {
    y: 120,
    opacity: 0
}, ">-0.25");
//cards animation
const $784dad906f823cb0$var$cards = document.querySelectorAll(".case-studies_item");
var $784dad906f823cb0$var$cardsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".case-studies_list"
    }
});
$784dad906f823cb0$var$cardsLoad.from($784dad906f823cb0$var$cards, {
    y: 300,
    opacity: 0,
    duration: 1.5,
    stagger: 0.125
}, 0.25);
$784dad906f823cb0$var$cardsLoad.from(".case-studies_content-wrapper", {
    y: 300,
    opacity: 0,
    duration: 1.5,
    stagger: 0.125
}, "<+0.125");
var $784dad906f823cb0$var$solutionsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_solutions",
        start: "-=400 center"
    }
});
$784dad906f823cb0$var$solutionsLoad.from(".solutions_bespoke-item", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, 0);
$784dad906f823cb0$var$solutionsLoad.from(".solutions_bespoke-item > h2, .solutions_bespoke-item > p", {
    y: 80,
    opacity: 0,
    duration: 0.875,
    ease: "power3.out",
    stagger: "0.05"
}, "<0.25");
$784dad906f823cb0$var$solutionsLoad.from(".solutions_service-item", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: "0.125"
}, 0.35);
$784dad906f823cb0$var$solutionsLoad.from(".solutions_service-item > .solutions_service-icon-wrapper > .solutions_service-icon", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: "0.125"
}, 0.25);
//testimonials section animation -- modularise
var $784dad906f823cb0$var$testimonialsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_testimonials",
        start: "-=400 center"
    }
});
var $784dad906f823cb0$var$testimonialSplit = new SplitText("#testimonial-heading", {
    type: "lines"
});
$784dad906f823cb0$var$testimonialsLoad.from(".testimonials_star-wrapper > div", {
    opacity: 0,
    y: 75,
    duration: 0.75,
    ease: "power3.out"
}).from($784dad906f823cb0$var$testimonialSplit.lines, {
    opacity: 0,
    y: 100,
    duration: 1,
    scale: 0.8,
    stagger: 0.125,
    ease: "power4.out"
}, "<0.25");
document.addEventListener('DOMContentLoaded', ()=>{
    if (window.Animations) Animations.animateFooter();
});

});


