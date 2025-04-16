
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("boeEA", function(module, exports) {
//case studies template
var $84ad4d8299894c9f$var$csTemplateHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_case-study-header"
    }
});
$84ad4d8299894c9f$var$csTemplateHeader.from(".case-study-header_image-wrapper", {
    y: 50,
    opacity: 0,
    ease: "power3.out",
    duration: 1.5
}, 0);
$84ad4d8299894c9f$var$csTemplateHeader.from(".case-study-header_pill", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power4.out"
}, 0.5);
$84ad4d8299894c9f$var$csTemplateHeader.from(".case-study-header_heading", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "<0.25");
$84ad4d8299894c9f$var$csTemplateHeader.from(".case-study-header_heading-content > .max-width-custom", {
    y: 50,
    opacity: 0,
    duration: 0.875,
    ease: "power4.out"
}, "<0.2");
$84ad4d8299894c9f$var$csTemplateHeader.from(".case-study-header_bottom-content > .button", {
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "<0.5");
var $84ad4d8299894c9f$var$csTemplateBody = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_case-study",
        start: "top-=400 center"
    }
});
$84ad4d8299894c9f$var$csTemplateBody.from(".table-of-contents", {
    y: 80,
    opacity: 0.5,
    ease: "power3.out",
    duration: 1
}, 0);
$84ad4d8299894c9f$var$csTemplateBody.from(".case-study_content", {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    duration: 1
}, 0.25);
$84ad4d8299894c9f$var$csTemplateBody.from(".case-study_content > div", {
    y: 25,
    opacity: 0,
    ease: "power4.out",
    duration: 1,
    stagger: 0.125
}, "<0.125");
var $84ad4d8299894c9f$var$csTechStack = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_tech-stack",
        start: "top-=400 center"
    }
});
$84ad4d8299894c9f$var$csTechStack.from("#tech-stack-wrapper > h2", {
    y: 80,
    opacity: 0,
    ease: "power4.out",
    duration: 0.875
}, 0);
$84ad4d8299894c9f$var$csTechStack.from("#tech-stack-wrapper > p", {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.75
}, 0.25);
$84ad4d8299894c9f$var$csTechStack.from(".tech-stack_item", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, 0.5);
$84ad4d8299894c9f$var$csTechStack.from(".tech-stack_image", {
    y: 30,
    duration: 0.75,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, "<");
$84ad4d8299894c9f$var$csTechStack.from(".tech-stack_item-front > h3", {
    y: 50,
    duration: 0.75,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, "<0.125");
//quote CTA animation
var $84ad4d8299894c9f$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$84ad4d8299894c9f$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: 0.875,
    ease: "power4.out"
});
$84ad4d8299894c9f$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
    opacity: 0,
    scale: 0,
    y: 400
}, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
}, "<+0.125");
//content
$84ad4d8299894c9f$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$84ad4d8299894c9f$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$84ad4d8299894c9f$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$84ad4d8299894c9f$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: 0.125,
    ease: "power3.out"
}, "<.125");
$84ad4d8299894c9f$var$ctaLoad.from("#ctaScribble", {
    drawSVG: "0% 0%",
    duration: 1,
    ease: "power3.out"
}, "<");
$84ad4d8299894c9f$var$ctaLoad.to("#ctaScribble", {
    drawSVG: "100% 100%",
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$84ad4d8299894c9f$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//related section
var $84ad4d8299894c9f$var$relatedSplit = new SplitText(".related-case-studies_content-top > h2", {
    type: "lines"
});
var $84ad4d8299894c9f$var$relatedLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_related-case-studies",
        start: "top-=400 center"
    }
});
$84ad4d8299894c9f$var$relatedLoad.from($84ad4d8299894c9f$var$relatedSplit.lines, {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.875,
    stagger: 0.125
}, 0);
$84ad4d8299894c9f$var$relatedLoad.from(".related-case-studies_content-top > p", {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.75
}, 0.25);
$84ad4d8299894c9f$var$relatedLoad.from(".case-studies_item", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.125
}, ">-0.5");
//footer animation
var $84ad4d8299894c9f$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $84ad4d8299894c9f$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$84ad4d8299894c9f$var$footerLoad.from($84ad4d8299894c9f$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$84ad4d8299894c9f$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$84ad4d8299894c9f$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$84ad4d8299894c9f$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$84ad4d8299894c9f$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
let $84ad4d8299894c9f$var$gm = gsap.matchMedia();
// desktop
$84ad4d8299894c9f$var$gm.add("(min-width: 991px)", ()=>{
    // case studies table of contents pin
    var contentsPin = gsap.timeline({
        scrollTrigger: {
            trigger: ".case-study_component",
            start: "top top",
            end: "bottom+=520 bottom",
            scrub: true,
            pin: ".table-of-contents_wrapper",
            pinSpacing: false
        }
    });
});

});


//# sourceMappingURL=case-studies-template.0454cd0b.js.map
