
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire41e5"];
var parcelRegister = parcelRequire.register;
parcelRegister("9YKLP", function(module, exports) {
//blog template
var $743dff42d218f9eb$var$resourceTemplateHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_blog-header"
    }
});
$743dff42d218f9eb$var$resourceTemplateHeader.from(".resources-heading", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, 0);
$743dff42d218f9eb$var$resourceTemplateHeader.from(".blog-header_subheading", {
    y: 50,
    opacity: 0,
    duration: 0.875,
    ease: "power4.out"
}, "<0.2");
var $743dff42d218f9eb$var$resourceTemplateBody = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_blog-content",
        start: "top-=400 center"
    }
});
$743dff42d218f9eb$var$resourceTemplateBody.from(".author-card, .table-of-contents", {
    y: 80,
    opacity: 0,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$743dff42d218f9eb$var$resourceTemplateBody.from(".blog_content-wrapper", {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    duration: 1
}, 0.25);
//quote CTA animation
var $743dff42d218f9eb$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$743dff42d218f9eb$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: .875,
    ease: "power4.out"
});
$743dff42d218f9eb$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
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
$743dff42d218f9eb$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$743dff42d218f9eb$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$743dff42d218f9eb$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$743dff42d218f9eb$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: .125,
    ease: "power3.out"
}, "<.125");
$743dff42d218f9eb$var$ctaLoad.from("#ctaScribble", {
    drawSVG: '0% 0%',
    duration: 1,
    ease: "power3.out"
}, "<");
$743dff42d218f9eb$var$ctaLoad.to("#ctaScribble", {
    drawSVG: '100% 100%',
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$743dff42d218f9eb$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//footer animation
var $743dff42d218f9eb$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $743dff42d218f9eb$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$743dff42d218f9eb$var$footerLoad.from($743dff42d218f9eb$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$743dff42d218f9eb$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$743dff42d218f9eb$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$743dff42d218f9eb$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$743dff42d218f9eb$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
//blog section
var $743dff42d218f9eb$var$blogLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_related-blog",
        start: "-=400 center"
    }
});
$743dff42d218f9eb$var$blogLoad.from(".related-blog_heading-wrapper > div", {
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
let $743dff42d218f9eb$var$gm = gsap.matchMedia();
// desktop
$743dff42d218f9eb$var$gm.add("(min-width: 991px)", ()=>{
    // case studies table of contents pin
    var contentsPin = gsap.timeline({
        scrollTrigger: {
            trigger: ".blog-content_component",
            start: "top-=150 top",
            end: "bottom center+=200",
            scrub: true,
            pin: ".blog-content_content-left",
            pinSpacing: false
        }
    });
});

});


