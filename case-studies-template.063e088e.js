
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire41e5"];
var parcelRegister = parcelRequire.register;
parcelRegister("d6o0T", function(module, exports) {
//case studies template
var $989e767bd77982c6$var$csTemplateHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_case-study-header"
    }
});
$989e767bd77982c6$var$csTemplateHeader.from(".case-study-header_image-wrapper", {
    y: 50,
    opacity: 0,
    ease: "power3.out",
    duration: 1.5
}, 0);
$989e767bd77982c6$var$csTemplateHeader.from(".case-study-header_pill", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    ease: "power4.out"
}, 0.5);
$989e767bd77982c6$var$csTemplateHeader.from(".case-study-header_heading", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "<0.25");
$989e767bd77982c6$var$csTemplateHeader.from(".case-study-header_heading-content > .max-width-custom", {
    y: 50,
    opacity: 0,
    duration: 0.875,
    ease: "power4.out"
}, "<0.2");
$989e767bd77982c6$var$csTemplateHeader.from(".case-study-header_bottom-content > .button", {
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "<0.5");
var $989e767bd77982c6$var$csTemplateBody = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_case-study",
        start: "top-=400 center"
    }
});
$989e767bd77982c6$var$csTemplateBody.from(".table-of-contents", {
    y: 80,
    opacity: 0.5,
    ease: "power3.out",
    duration: 1
}, 0);
$989e767bd77982c6$var$csTemplateBody.from(".case-study_content", {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    duration: 1
}, 0.25);
$989e767bd77982c6$var$csTemplateBody.from(".case-study_content > div", {
    y: 25,
    opacity: 0,
    ease: "power4.out",
    duration: 1,
    stagger: 0.125
}, "<0.125");
var $989e767bd77982c6$var$csTechStack = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_tech-stack",
        start: "top-=400 center"
    }
});
$989e767bd77982c6$var$csTechStack.from("#tech-stack-wrapper > h2", {
    y: 80,
    opacity: 0,
    ease: "power4.out",
    duration: 0.875
}, 0);
$989e767bd77982c6$var$csTechStack.from("#tech-stack-wrapper > p", {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.75
}, 0.25);
$989e767bd77982c6$var$csTechStack.from(".tech-stack_item", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, 0.5);
$989e767bd77982c6$var$csTechStack.from(".tech-stack_image", {
    y: 30,
    duration: 0.75,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, "<");
$989e767bd77982c6$var$csTechStack.from(".tech-stack_item-front > h3", {
    y: 50,
    duration: 0.75,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, "<0.125");
//quote CTA animation
var $989e767bd77982c6$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$989e767bd77982c6$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: 0.875,
    ease: "power4.out"
});
$989e767bd77982c6$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
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
$989e767bd77982c6$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$989e767bd77982c6$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$989e767bd77982c6$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$989e767bd77982c6$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: 0.125,
    ease: "power3.out"
}, "<.125");
$989e767bd77982c6$var$ctaLoad.from("#ctaScribble", {
    drawSVG: "0% 0%",
    duration: 1,
    ease: "power3.out"
}, "<");
$989e767bd77982c6$var$ctaLoad.to("#ctaScribble", {
    drawSVG: "100% 100%",
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$989e767bd77982c6$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//related section
var $989e767bd77982c6$var$relatedSplit = new SplitText(".related-case-studies_content-top > h2", {
    type: "lines"
});
var $989e767bd77982c6$var$relatedLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_related-case-studies",
        start: "top-=400 center"
    }
});
$989e767bd77982c6$var$relatedLoad.from($989e767bd77982c6$var$relatedSplit.lines, {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.875,
    stagger: 0.125
}, 0);
$989e767bd77982c6$var$relatedLoad.from(".related-case-studies_content-top > p", {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.75
}, 0.25);
$989e767bd77982c6$var$relatedLoad.from(".case-studies_item", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.125
}, ">-0.5");
//footer animation
var $989e767bd77982c6$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $989e767bd77982c6$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$989e767bd77982c6$var$footerLoad.from($989e767bd77982c6$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$989e767bd77982c6$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$989e767bd77982c6$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$989e767bd77982c6$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$989e767bd77982c6$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
let $989e767bd77982c6$var$gm = gsap.matchMedia();
// desktop
$989e767bd77982c6$var$gm.add("(min-width: 991px)", ()=>{
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


