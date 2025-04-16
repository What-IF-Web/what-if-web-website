
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("6sHFh", function(module, exports) {
//404 page animation
var $4b473a8215725acf$var$notFoundLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_not-found-header"
    }
});
$4b473a8215725acf$var$notFoundLoad.from('.not-found-header_heading-wrapper > h1, .not-found-header_heading-wrapper > .not-found-header_lottie', {
    scale: 0.9,
    y: 150,
    opacity: 0,
    duration: 1,
    stagger: 0.125,
    ease: "power4.out"
}, 0);
$4b473a8215725acf$var$notFoundLoad.from('.not-found-header_heading-text', {
    y: 150,
    opacity: 0,
    duration: 1.25,
    ease: 'power3.out'
}, 0.25);
$4b473a8215725acf$var$notFoundLoad.from('.not-found-header_component > .button', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
}, 0.35);
//footer animation
var $4b473a8215725acf$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $4b473a8215725acf$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$4b473a8215725acf$var$footerLoad.from($4b473a8215725acf$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$4b473a8215725acf$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$4b473a8215725acf$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$4b473a8215725acf$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$4b473a8215725acf$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");

});


//# sourceMappingURL=not-found.35c6a275.js.map
