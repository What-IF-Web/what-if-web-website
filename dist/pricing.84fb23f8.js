
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire94c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("5ZPN9", function(module, exports) {
//Pricing stuff
gsap.defaults({
    ease: "power4.out",
    duration: 1
});
//case studies blob morph -- modularise
var $01206ec23b8ea65f$var$morphPath = gsap.timeline({
    repeat: -1,
    yoyo: true
});
$01206ec23b8ea65f$var$morphPath.to(".path1", {
    duration: 2,
    morphSVG: ".path2",
    ease: "power1.inOut"
}).to(".path1", {
    duration: 2,
    morphSVG: ".path3",
    ease: "power1.inOut"
}).to(".path1", {
    duration: 2,
    morphSVG: ".path4",
    ease: "power1.inOut"
}).to(".path1", {
    duration: 2,
    morphSVG: ".path5",
    ease: "power1.inOut"
}).to(".path1", {
    duration: 2,
    morphSVG: ".path6",
    ease: "power1.inOut"
}).to(".path1", {
    duration: 2,
    morphSVG: ".path7",
    ease: "power1.inOut"
}).to(".path1", {
    duration: 2,
    morphSVG: ".path2",
    ease: "power1.inOut"
});
//quote CTA animation -- make modular
var $01206ec23b8ea65f$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$01206ec23b8ea65f$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: .875,
    ease: "power4.out"
});
$01206ec23b8ea65f$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
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
$01206ec23b8ea65f$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$01206ec23b8ea65f$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$01206ec23b8ea65f$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$01206ec23b8ea65f$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: .125,
    ease: "power3.out"
}, "<.125");
$01206ec23b8ea65f$var$ctaLoad.from("#ctaScribble", {
    drawSVG: '0% 0%',
    duration: 1,
    ease: "power3.out"
}, "<");
$01206ec23b8ea65f$var$ctaLoad.to("#ctaScribble", {
    drawSVG: '100% 100%',
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$01206ec23b8ea65f$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//featured projects animation -- make modular
var $01206ec23b8ea65f$var$projectsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_projects",
        start: "-=400 center"
    }
});
var $01206ec23b8ea65f$var$projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
    type: "lines"
});
$01206ec23b8ea65f$var$projectsLoad.from($01206ec23b8ea65f$var$projectsSplit.lines, {
    duration: 1,
    opacity: 0,
    y: 150,
    scale: 0.8,
    ease: "power3.out",
    stagger: 0.125
});
$01206ec23b8ea65f$var$projectsLoad.from(".projects_content > .projects_item > .projects_card", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    stagger: 0.125
}, ">-0.5");
$01206ec23b8ea65f$var$projectsLoad.from(".projects_component > a", {
    y: 100,
    opacity: 0,
    ease: "power3.out"
}, "<0.25");
$01206ec23b8ea65f$var$projectsLoad.from("#projects-highlight", {
    color: "EB5B30",
    duration: 0
}, "<").to("#projects-highlight", {
    scale: 1.1,
    duration: 0.3,
    ease: "power2.in"
}, "<").to("#projects-highlight", {
    scale: 1,
    duration: 0.2,
    ease: "power2.out"
}, "<0.4");
$01206ec23b8ea65f$var$projectsLoad.from("#projects-line > svg > path", {
    drawSVG: '0% 0%',
    duration: 0.6,
    ease: "power3.out"
}, "<");
$01206ec23b8ea65f$var$projectsLoad.to("#projects-line > svg > path", {
    drawSVG: '100% 100%',
    duration: 0.6,
    ease: "power3.out"
}, ">-0.3");
$01206ec23b8ea65f$var$projectsLoad.to("#projects-line > svg > path", {
    opacity: 0,
    duration: 0
}, ">-0.01");
//solutions/services section animation -- make MODULAR
var $01206ec23b8ea65f$var$servicesLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_services",
        start: "-=400 center"
    }
});
$01206ec23b8ea65f$var$servicesLoad.from(".services_heading-wrapper > h2", {
    y: 80,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});
//cards scroll through animation for the services section
$(document).ready(function() {
    let cardsArray = [];
    // Select all .card.is-services elements inside .services_list
    $('.services_list .card.is-services').each(function() {
        let card = $(this);
        let linkTargetID = card.find('.card_link-target').attr('id');
        // Push the card element and ID into the array as an object
        cardsArray.push({
            cardElement: card,
            linkTargetID: linkTargetID
        });
    });
    cardsArray.forEach(function(item) {
        // GSAP ScrollTrigger animation for each card
        gsap.fromTo(item.cardElement, {
            opacity: 0,
            scale: 0.2,
            y: 0
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: `#${item.linkTargetID}`,
                start: "top 90%",
                end: "top 40%",
                scrub: true,
                markers: false
            }
        });
    });
});
// pricing header load in
var $01206ec23b8ea65f$var$pricingLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_pricing"
    }
});
$01206ec23b8ea65f$var$pricingLoad.from(".pricing_content-top > h1", {
    y: 100,
    opacity: 0
});
$01206ec23b8ea65f$var$pricingLoad.from(".pricing_paragraph-wrapper", {
    y: 150,
    opacity: 0
}, "<+0.25");
$01206ec23b8ea65f$var$pricingLoad.from(".pricing_content-bottom", {
    y: 200,
    opacity: 0
}, "<+0.25");
//footer animation
var $01206ec23b8ea65f$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "-=400 center"
    }
});
var $01206ec23b8ea65f$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$01206ec23b8ea65f$var$footerLoad.from($01206ec23b8ea65f$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$01206ec23b8ea65f$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$01206ec23b8ea65f$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$01206ec23b8ea65f$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$01206ec23b8ea65f$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
let $01206ec23b8ea65f$var$mm = gsap.matchMedia();
// desktop
$01206ec23b8ea65f$var$mm.add("(min-width: 991px)", ()=>{
    //pinned service element
    var servicesPinTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_services",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: ".services_content-top-wrapper",
            pinSpacing: false
        }
    });
});

});


//# sourceMappingURL=pricing.84fb23f8.js.map
