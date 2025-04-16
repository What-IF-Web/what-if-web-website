
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire41e5"];
var parcelRegister = parcelRequire.register;
parcelRegister("8mohK", function(module, exports) {
//404 page animation
var $6163375a4b314d34$var$notFoundLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_not-found-header"
    }
});
$6163375a4b314d34$var$notFoundLoad.from('.not-found-header_heading-wrapper > h1, .not-found-header_heading-wrapper > .not-found-header_lottie', {
    scale: 0.9,
    y: 150,
    opacity: 0,
    duration: 1,
    stagger: 0.125,
    ease: "power4.out"
}, 0);
$6163375a4b314d34$var$notFoundLoad.from('.not-found-header_heading-text', {
    y: 150,
    opacity: 0,
    duration: 1.25,
    ease: 'power3.out'
}, 0.25);
$6163375a4b314d34$var$notFoundLoad.from('.not-found-header_component > .button', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
}, 0.35);
//footer animation
var $6163375a4b314d34$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $6163375a4b314d34$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$6163375a4b314d34$var$footerLoad.from($6163375a4b314d34$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$6163375a4b314d34$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$6163375a4b314d34$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$6163375a4b314d34$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$6163375a4b314d34$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");

});


