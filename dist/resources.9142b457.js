
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire41e5"];
var parcelRegister = parcelRequire.register;
parcelRegister("1wgra", function(module, exports) {
//Resources page
var $11b587b15167ac3c$var$resourceHeaderLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_resources"
    }
});
$11b587b15167ac3c$var$resourceHeaderLoad.from(".resources_top-content > h1", {
    y: 150,
    duration: .75,
    opacity: 0,
    ease: "power3.out"
});
$11b587b15167ac3c$var$resourceHeaderLoad.from(".resources_top-content > p", {
    y: 100,
    duration: 1,
    opacity: 0,
    ease: "power3.out"
}, "<0.125");
$11b587b15167ac3c$var$resourceHeaderLoad.from(".resources_tab-link", {
    y: 35,
    duration: 0.75,
    stagger: 0.125,
    ease: "power3.out"
}, "<0.5");
//simplified cards animation
const $11b587b15167ac3c$var$cards = document.querySelectorAll(".resources_item");
var $11b587b15167ac3c$var$cardsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".resources_list"
    }
});
$11b587b15167ac3c$var$cardsLoad.from($11b587b15167ac3c$var$cards, {
    y: 400,
    opacity: 0,
    duration: 1.5,
    stagger: 0.125,
    ease: "power4.out"
});
//footer animation
var $11b587b15167ac3c$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "-=400 center"
    }
});
var $11b587b15167ac3c$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$11b587b15167ac3c$var$footerLoad.from($11b587b15167ac3c$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$11b587b15167ac3c$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$11b587b15167ac3c$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$11b587b15167ac3c$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$11b587b15167ac3c$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");

});


