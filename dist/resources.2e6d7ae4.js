
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("6du2I", function(module, exports) {
//Resources page
var $486b42d39330c6dc$var$resourceHeaderLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_resources"
    }
});
$486b42d39330c6dc$var$resourceHeaderLoad.from(".resources_top-content > h1", {
    y: 150,
    duration: .75,
    opacity: 0,
    ease: "power3.out"
});
$486b42d39330c6dc$var$resourceHeaderLoad.from(".resources_top-content > p", {
    y: 100,
    duration: 1,
    opacity: 0,
    ease: "power3.out"
}, "<0.125");
$486b42d39330c6dc$var$resourceHeaderLoad.from(".resources_tab-link", {
    y: 35,
    duration: 0.75,
    stagger: 0.125,
    ease: "power3.out"
}, "<0.5");
//simplified cards animation
const $486b42d39330c6dc$var$cards = document.querySelectorAll(".resources_item");
var $486b42d39330c6dc$var$cardsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".resources_list"
    }
});
$486b42d39330c6dc$var$cardsLoad.from($486b42d39330c6dc$var$cards, {
    y: 400,
    opacity: 0,
    duration: 1.5,
    stagger: 0.125,
    ease: "power4.out"
});
//footer animation
var $486b42d39330c6dc$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "-=400 center"
    }
});
var $486b42d39330c6dc$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$486b42d39330c6dc$var$footerLoad.from($486b42d39330c6dc$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$486b42d39330c6dc$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$486b42d39330c6dc$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$486b42d39330c6dc$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$486b42d39330c6dc$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");

});


//# sourceMappingURL=resources.2e6d7ae4.js.map
