
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("hAQX4", function(module, exports) {
//code snippet
var $cceedf987d5174c1$var$codeSnippetsHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".code-content_heading-wrapper"
    }
});
$cceedf987d5174c1$var$codeSnippetsHeader.from(".resources-heading", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "<0.25");
$cceedf987d5174c1$var$codeSnippetsHeader.from(".code-content_heading-wrapper > p", {
    y: 50,
    opacity: 0,
    duration: 0.875,
    ease: "power4.out"
}, "<0.2");
var $cceedf987d5174c1$var$codeSnippetsTemplateBody = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_code-content",
        start: "top-=400 center"
    }
});
$cceedf987d5174c1$var$codeSnippetsTemplateBody.from(".text-rich-text, .code-content_content-wrapper", {
    y: 80,
    opacity: 0,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
//quote CTA animation
var $cceedf987d5174c1$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$cceedf987d5174c1$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: .875,
    ease: "power4.out"
});
$cceedf987d5174c1$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
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
$cceedf987d5174c1$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$cceedf987d5174c1$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$cceedf987d5174c1$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$cceedf987d5174c1$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: .125,
    ease: "power3.out"
}, "<.125");
$cceedf987d5174c1$var$ctaLoad.from("#ctaScribble", {
    drawSVG: '0% 0%',
    duration: 1,
    ease: "power3.out"
}, "<");
$cceedf987d5174c1$var$ctaLoad.to("#ctaScribble", {
    drawSVG: '100% 100%',
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$cceedf987d5174c1$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//footer animation
var $cceedf987d5174c1$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $cceedf987d5174c1$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$cceedf987d5174c1$var$footerLoad.from($cceedf987d5174c1$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$cceedf987d5174c1$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$cceedf987d5174c1$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$cceedf987d5174c1$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$cceedf987d5174c1$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
//blog section
var $cceedf987d5174c1$var$blogLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_related-blog",
        start: "-=400 center"
    }
});
$cceedf987d5174c1$var$blogLoad.from(".related-blog_heading-wrapper > div", {
    y: 100,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}).from(".related-blog_list > .related-blog_item", {
    y: 180,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.125
}, "<0.5");

});


//# sourceMappingURL=code-snippet.c0786cb0.js.map
