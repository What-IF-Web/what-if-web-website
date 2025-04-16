// src/app.js
// src/home.js
// Uses global gsap (loaded via Webflow footer CDN)
gsap.defaults({
    ease: "power4.out",
    duration: 1
});
// Hero section animation
function $8f3f92462d146827$var$animateHero() {
    const heroSplit = new SplitText(".home-header_heading", {
        type: "lines"
    });
    const heroLoad = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_home-header"
        }
    });
    heroLoad.from(heroSplit.lines, {
        opacity: 0,
        y: 400,
        stagger: 0.125
    }).from(".home-header_heading", {
        scale: 0.6,
        duration: 0.625,
        ease: "back.out(1.7)"
    }, ">-0.5").from(".home-header_subheading", {
        y: 200,
        opacity: 0
    }, ">-0.25").from(".home-header_component > a", {
        y: 200,
        opacity: 0
    }, ">-0.25").from(".home-header_lottie.is-dinkus", {
        y: 70,
        x: 180,
        duration: 0.5,
        scale: 0
    }, ">-0.5").from(".home-header_lottie.is-brazzo", {
        y: -200,
        x: 240,
        duration: 0.625,
        scale: 0
    }, "<-0.25").from(".home-header_lottie.is-slice", {
        y: -100,
        x: -200,
        duration: 0.75,
        scale: 0
    }, "<-0.125");
}
// About section animation
function $8f3f92462d146827$var$animateAbout() {
    const aboutLoad = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_home-about",
            start: "top center"
        }
    });
    const aboutSplit = new SplitText(".home-about_heading-wrapper > h2", {
        type: "lines"
    });
    aboutLoad.from(aboutSplit.lines, {
        y: 100,
        scale: 0.8,
        opacity: 0,
        stagger: 0.125
    }, 0);
    aboutLoad.from(".home-about_content-left > p, .home-about_content-left > a", {
        opacity: 0,
        stagger: 0.125
    }, "<0.5");
    aboutLoad.from(".home-about_background-shape", {
        scale: 0
    }, -0.25);
    aboutLoad.from(".home-about_card-wrapper.is-first", {
        x: 2500,
        rotation: 100
    }, "<0.5");
    aboutLoad.from(".home-about_card-wrapper.is-second", {
        x: 2500,
        rotation: 60
    }, 0.25);
    aboutLoad.from(".home-about_card-wrapper.is-third", {
        x: 2000,
        rotation: 130
    }, 0.125);
    aboutLoad.from(".home-about_lottie", {
        scale: 0
    }, ">0.125").from(".home-about_lottie-2", {
        scale: 0
    }, "<0.25");
}
// CTA form and process animations
function $8f3f92462d146827$var$animateCTAandProcess() {
    const mm = gsap.matchMedia();
    // Desktop
    mm.add("(min-width: 991px)", ()=>{
        const ctaFormTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: ".cta_form",
                start: "-=400 center"
            }
        });
        const ctaFormLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".cta_component",
                scrub: true,
                start: "top top",
                end: "bottom bottom",
                pin: ".cta_form-block",
                pinSpacing: false
            }
        });
        ctaFormLoad.from(".cta_heading-span", {
            y: 200,
            scale: 0.95,
            opacity: 0,
            stagger: 0.05
        }, 0);
        ctaFormLoad.from(".cta_form_input-wrapper", {
            y: 300,
            opacity: 0
        }, "<");
        ctaFormLoad.from("#cta-form-bottom", {
            y: 400,
            opacity: 0
        }, "<");
        ctaFormLoad.to(".cta_heading-span", {
            y: -400,
            stagger: 0.05,
            scale: 0.95,
            opacity: 0
        }, ">+0.25");
        ctaFormLoad.to(".cta_form_input-wrapper", {
            y: -300,
            opacity: 0
        }, "<+.05");
        ctaFormLoad.to("#cta-form-bottom", {
            y: -200,
            opacity: 0
        }, "<");
        ctaFormTrigger.from("#cta-form-orange", {
            color: "#0f2756",
            duration: 0.125
        }, "<.5");
        ctaFormTrigger.to("#cta-form-orange", {
            scale: 1.1,
            repeat: 1,
            yoyo: true,
            ease: "power2.inOut",
            duration: 0.3
        }, "<");
        ctaFormTrigger.from(".cta_burst-lines > svg > path", {
            drawSVG: "0% 0%"
        }, "<");
        ctaFormTrigger.to(".cta_burst-lines > svg > path", {
            drawSVG: "100% 100%"
        }, ">-0.3");
        ctaFormTrigger.to(".cta_burst-lines > svg > path", {
            opacity: 0,
            duration: 0
        }, ">-0.05");
        ctaFormTrigger.from(".cta_scribble > svg > path", {
            drawSVG: "0% 0%"
        }, "<+0.125");
        ctaFormTrigger.to(".cta_scribble > svg > path", {
            drawSVG: "100% 100%"
        }, ">-0.3");
        ctaFormTrigger.to(".cta_scribble > svg > path", {
            opacity: 0,
            duration: 0
        }, ">-0.02");
        const processLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".process_component",
                scrub: true,
                start: "top top",
                end: "bottom bottom",
                pin: ".process_content-top"
            }
        });
        processLoad.from(".process_heading-span", {
            y: 200,
            scale: 0.95,
            opacity: 0,
            stagger: 0.05
        }, 0);
        processLoad.from(".process_critter-wrapper", {
            y: 300,
            scale: 0.9,
            opacity: 0
        }, "<");
        processLoad.to(".process_heading-span", {
            y: -400,
            scale: 0.95,
            opacity: 0,
            duration: 1,
            stagger: 0.05
        }, ">");
        processLoad.to(".process_critter-wrapper", {
            y: -200
        }, "<+0.15");
        processLoad.to(".process_critter", {
            width: "100dvw",
            height: "150dvh",
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            border: "transparent"
        }, "<");
        processLoad.to(".process_critter-eyes", {
            opacity: 0,
            duration: 0.125
        }, "<");
        gsap.set(".process_card-wrapper > .process_card", {
            xPercent: -50,
            yPercent: -50,
            transformOrigin: "50%, 50%"
        });
        processLoad.to(".process_card-wrapper > .process_card", {
            stagger: 0.2,
            ease: "none",
            motionPath: {
                path: "#process-path",
                align: "#process-path",
                autoRotate: 180
            }
        }, ">");
        const servicesPinTrigger = gsap.timeline({
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
    // Mobile
    mm.add("(max-width: 991px)", ()=>{
        const processMobile = gsap.timeline({
            scrollTrigger: {
                trigger: ".process_component"
            }
        });
        processMobile.from(".process_heading-span", {
            y: 100,
            stagger: 0.1,
            opacity: 0
        }, 0);
        const ctaMobile = gsap.timeline({
            scrollTrigger: {
                trigger: ".cta_component"
            }
        });
        const ctaFormTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: ".cta_form",
                start: "-=400 center"
            }
        });
        ctaMobile.from(".cta_heading-span", {
            y: 100,
            opacity: 0,
            stagger: 0.1
        }, 0);
        ctaMobile.from(".cta_form_input-wrapper", {
            y: 150,
            opacity: 0
        }, ">-0.25");
        ctaMobile.from("#cta-form-bottom", {
            y: 150,
            opacity: 0,
            duration: 0.75
        }, ">-0.5");
        ctaFormTrigger.from("#cta-form-orange", {
            color: "#0f2756",
            duration: 0.125
        }, "<.5");
        ctaFormTrigger.to("#cta-form-orange", {
            scale: 1.1,
            repeat: 1,
            yoyo: true,
            ease: "power2.inOut",
            duration: 0.3
        }, "<");
        ctaFormTrigger.from(".cta_burst-lines > svg > path", {
            drawSVG: "0% 0%"
        }, "<");
        ctaFormTrigger.to(".cta_burst-lines > svg > path", {
            drawSVG: "100% 100%"
        }, ">-0.3");
        ctaFormTrigger.to(".cta_burst-lines > svg > path", {
            opacity: 0,
            duration: 0
        }, ">-0.05");
        ctaFormTrigger.from(".cta_scribble > svg > path", {
            drawSVG: "0% 0%"
        }, "<+0.125");
        ctaFormTrigger.to(".cta_scribble > svg > path", {
            drawSVG: "100% 100%"
        }, ">-0.3");
        ctaFormTrigger.to(".cta_scribble > svg > path", {
            opacity: 0,
            duration: 0
        }, ">-0.02");
    });
}
// Run animations
function $8f3f92462d146827$var$initHome() {
    console.log("Home script loaded");
    $8f3f92462d146827$var$animateHero();
    $8f3f92462d146827$var$animateAbout();
    $8f3f92462d146827$var$animateCTAandProcess();
}
$8f3f92462d146827$var$initHome();


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


//Pricing stuff
gsap.defaults({
    ease: "power4.out",
    duration: 1
});
//case studies blob morph -- modularise
var $20bba31bceb30262$var$morphPath = gsap.timeline({
    repeat: -1,
    yoyo: true
});
$20bba31bceb30262$var$morphPath.to(".path1", {
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
var $20bba31bceb30262$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$20bba31bceb30262$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: .875,
    ease: "power4.out"
});
$20bba31bceb30262$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
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
$20bba31bceb30262$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$20bba31bceb30262$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$20bba31bceb30262$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$20bba31bceb30262$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: .125,
    ease: "power3.out"
}, "<.125");
$20bba31bceb30262$var$ctaLoad.from("#ctaScribble", {
    drawSVG: '0% 0%',
    duration: 1,
    ease: "power3.out"
}, "<");
$20bba31bceb30262$var$ctaLoad.to("#ctaScribble", {
    drawSVG: '100% 100%',
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$20bba31bceb30262$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//featured projects animation -- make modular
var $20bba31bceb30262$var$projectsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_projects",
        start: "-=400 center"
    }
});
var $20bba31bceb30262$var$projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
    type: "lines"
});
$20bba31bceb30262$var$projectsLoad.from($20bba31bceb30262$var$projectsSplit.lines, {
    duration: 1,
    opacity: 0,
    y: 150,
    scale: 0.8,
    ease: "power3.out",
    stagger: 0.125
});
$20bba31bceb30262$var$projectsLoad.from(".projects_content > .projects_item > .projects_card", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    stagger: 0.125
}, ">-0.5");
$20bba31bceb30262$var$projectsLoad.from(".projects_component > a", {
    y: 100,
    opacity: 0,
    ease: "power3.out"
}, "<0.25");
$20bba31bceb30262$var$projectsLoad.from("#projects-highlight", {
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
$20bba31bceb30262$var$projectsLoad.from("#projects-line > svg > path", {
    drawSVG: '0% 0%',
    duration: 0.6,
    ease: "power3.out"
}, "<");
$20bba31bceb30262$var$projectsLoad.to("#projects-line > svg > path", {
    drawSVG: '100% 100%',
    duration: 0.6,
    ease: "power3.out"
}, ">-0.3");
$20bba31bceb30262$var$projectsLoad.to("#projects-line > svg > path", {
    opacity: 0,
    duration: 0
}, ">-0.01");
//solutions/services section animation -- make MODULAR
var $20bba31bceb30262$var$servicesLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_services",
        start: "-=400 center"
    }
});
$20bba31bceb30262$var$servicesLoad.from(".services_heading-wrapper > h2", {
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
var $20bba31bceb30262$var$pricingLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_pricing"
    }
});
$20bba31bceb30262$var$pricingLoad.from(".pricing_content-top > h1", {
    y: 100,
    opacity: 0
});
$20bba31bceb30262$var$pricingLoad.from(".pricing_paragraph-wrapper", {
    y: 150,
    opacity: 0
}, "<+0.25");
$20bba31bceb30262$var$pricingLoad.from(".pricing_content-bottom", {
    y: 200,
    opacity: 0
}, "<+0.25");
//footer animation
var $20bba31bceb30262$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "-=400 center"
    }
});
var $20bba31bceb30262$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$20bba31bceb30262$var$footerLoad.from($20bba31bceb30262$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$20bba31bceb30262$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$20bba31bceb30262$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$20bba31bceb30262$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$20bba31bceb30262$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
let $20bba31bceb30262$var$mm = gsap.matchMedia();
// desktop
$20bba31bceb30262$var$mm.add("(min-width: 991px)", ()=>{
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


//contact page stuff
var $3aa93ea345ab650d$var$contactLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_contact-header"
    }
});
$3aa93ea345ab650d$var$contactLoad.from(".contact-header_heading-wrapper", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, 0);
$3aa93ea345ab650d$var$contactLoad.from(".container-header_card", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, 0.125);
$3aa93ea345ab650d$var$contactLoad.from(".contact-header_info-callout", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, 0.25);
$3aa93ea345ab650d$var$contactLoad.from(".contact-header_info-callout > h2, .contact-header_info-callout > p", {
    y: 30,
    opacity: 0,
    duration: .75,
    ease: "power3.out",
    stagger: "0.125"
}, 0.35);
$3aa93ea345ab650d$var$contactLoad.from(".contact-header_contact", {
    y: 30,
    opacity: 0,
    duration: .75,
    ease: "power3.out",
    stagger: 0.125
}, 0.625);
$3aa93ea345ab650d$var$contactLoad.from(".contact-header_form-wrapper", {
    y: 100,
    opacity: 0,
    duration: 1.25,
    ease: "power4.out"
}, 0.75);
$3aa93ea345ab650d$var$contactLoad.from(".contact-header_form > .form_input-wrapper, .contact-header_form > .button", {
    y: 10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.125
}, "<0.125");
$3aa93ea345ab650d$var$contactLoad.to(".button.is-form-submit", {
    duration: 0.25,
    scale: 1.05,
    ease: "power3.inOut",
    repeat: 1,
    yoyo: true
}, ">");
//FAQ section
var $3aa93ea345ab650d$var$faqLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_faq",
        start: "-=400 center"
    }
});
$3aa93ea345ab650d$var$faqLoad.from("#faq-heading", {
    y: 80,
    opacity: 0,
    duration: 0.875,
    ease: "power3.out"
}, 0);
$3aa93ea345ab650d$var$faqLoad.from(".faq_list > .faq_item", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.125
}, 0.25);
$3aa93ea345ab650d$var$faqLoad.from(".faq_lottie", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.25
}, "<0.5");
//need to add optional cta bit
/*blog section
var blogLoad = gsap.timeline({scrollTrigger: {trigger: ".section_related-blog", start: "-=400 center"}});

blogLoad.from(".related-blog_heading-wrapper > div", {y: 100, scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"}).from(".related-blog_list > .related-blog_item", {y:180, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.125}, "<0.5");
*/ //footer animation
var $3aa93ea345ab650d$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "-=400 center"
    }
});
var $3aa93ea345ab650d$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$3aa93ea345ab650d$var$footerLoad.from($3aa93ea345ab650d$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$3aa93ea345ab650d$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$3aa93ea345ab650d$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$3aa93ea345ab650d$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$3aa93ea345ab650d$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");


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


//services animations
//services hero load
var $13fef695322b3b38$var$servicesHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_services-header"
    }
});
var $13fef695322b3b38$var$servicesSplit = new SplitText(".services-header_text-wrapper > h1", {
    type: "lines"
});
$13fef695322b3b38$var$servicesHero.from($13fef695322b3b38$var$servicesSplit.lines, {
    opacity: 0,
    y: 180,
    ease: "power4.out",
    duration: 1,
    stagger: 0.125
}, "0");
$13fef695322b3b38$var$servicesHero.from(".services-header_text-wrapper > p", {
    opacity: 0,
    y: 80,
    ease: "power4.out",
    duration: 1
}, "0.25");
$13fef695322b3b38$var$servicesHero.from(".services-header_image-wrapper", {
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "0.5");
var $13fef695322b3b38$var$servicesCaseStudies = gsap.timeline({
    scrollTrigger: {
        trigger: ".services-case-studies_content-top"
    }
});
var $13fef695322b3b38$var$serviceCsSplit = new SplitText(".services-case-studies_heading-wrapper > .projects-rich-text > h2", {
    type: "lines"
});
$13fef695322b3b38$var$servicesCaseStudies.from(".services-case-studies_image-wrapper", {
    y: 80,
    opacity: 0,
    ease: "power4.out",
    duration: 0.875
}, 0);
$13fef695322b3b38$var$servicesCaseStudies.from(".services-case-studies_image-background", {
    y: 50,
    duration: 0.875,
    ease: "power4.out"
}, 0.125);
$13fef695322b3b38$var$servicesCaseStudies.from(".services-case-studies_eyes", {
    y: 150,
    duration: 0.75,
    ease: "power4.out"
}, 0.25);
$13fef695322b3b38$var$servicesCaseStudies.from($13fef695322b3b38$var$serviceCsSplit.lines, {
    y: 80,
    opacity: 0,
    ease: "power4.out",
    duration: 1,
    stagger: 0.125
}, 0.25);
$13fef695322b3b38$var$servicesCaseStudies.from(".services-case-studies_heading-wrapper > p", {
    y: 80,
    opacity: 0,
    ease: "power4.out",
    duration: 1
}, 0.5);
$13fef695322b3b38$var$servicesCaseStudies.from(".services-case-studies_content-middle", {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    duration: 1
}, "<+0.5");
$13fef695322b3b38$var$servicesCaseStudies.from(".services-case-studies_content-bottom", {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    duration: 1
}, "<+0.25");
var $13fef695322b3b38$var$csTechStack = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_tech-stack",
        start: "top-=400 center"
    }
});
$13fef695322b3b38$var$csTechStack.from("#tech-stack-wrapper > h2", {
    y: 80,
    opacity: 0,
    ease: "power4.out",
    duration: 0.875
}, 0);
$13fef695322b3b38$var$csTechStack.from(".tech-stack_subheading-wrapper > p", {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.75
}, 0.25);
$13fef695322b3b38$var$csTechStack.from(".tech-stack_item", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, 0.5);
$13fef695322b3b38$var$csTechStack.from(".tech-stack_image", {
    y: 30,
    duration: 0.75,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, "<");
$13fef695322b3b38$var$csTechStack.from(".tech-stack_item-front > h3", {
    y: 50,
    duration: 0.75,
    opacity: 0,
    stagger: 0.125,
    ease: "power.4out"
}, "<0.125");
//quote CTA animation
var $13fef695322b3b38$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$13fef695322b3b38$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: .875,
    ease: "power4.out"
});
$13fef695322b3b38$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
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
$13fef695322b3b38$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$13fef695322b3b38$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$13fef695322b3b38$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$13fef695322b3b38$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: .125,
    ease: "power3.out"
}, "<.125");
$13fef695322b3b38$var$ctaLoad.from("#ctaScribble", {
    drawSVG: '0% 0%',
    duration: 1,
    ease: "power3.out"
}, "<");
$13fef695322b3b38$var$ctaLoad.to("#ctaScribble", {
    drawSVG: '100% 100%',
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$13fef695322b3b38$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//sub services section
var $13fef695322b3b38$var$subServices = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_sub-services"
    }
});
$13fef695322b3b38$var$subServices.from(".sub-services_tag", {
    y: 80,
    opacity: 0,
    ease: "power4.out",
    duration: 0.875
}, 0);
$13fef695322b3b38$var$subServices.from(".sub-services_content-wrapper > .services-rich-text > h2", {
    y: 80,
    opacity: 0,
    ease: "power4.out",
    duration: 0.875,
    stagger: 0.125
}, "<+0.25");
$13fef695322b3b38$var$subServices.from(".sub-services_content-wrapper > p", {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    duration: 1
}, "<+0.25");
//solutions animation
var $13fef695322b3b38$var$solutionsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_solutions",
        start: "-=400 center"
    }
});
$13fef695322b3b38$var$solutionsLoad.from(".solutions_bespoke-item", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, 0);
$13fef695322b3b38$var$solutionsLoad.from(".solutions_bespoke-item > h2, .solutions_bespoke-item > p", {
    y: 80,
    opacity: 0,
    duration: 0.875,
    ease: "power3.out",
    stagger: "0.05"
}, "<0.25");
$13fef695322b3b38$var$solutionsLoad.from(".solutions_service-item", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: "0.125"
}, 0.35);
$13fef695322b3b38$var$solutionsLoad.from(".solutions_service-item > .solutions_service-icon-wrapper > .solutions_service-icon", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: "0.125"
}, 0.25);
//footer animation
var $13fef695322b3b38$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $13fef695322b3b38$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$13fef695322b3b38$var$footerLoad.from($13fef695322b3b38$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$13fef695322b3b38$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$13fef695322b3b38$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$13fef695322b3b38$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$13fef695322b3b38$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
//testimonials section animation
var $13fef695322b3b38$var$testimonialsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_testimonials",
        start: "-=400 center"
    }
});
var $13fef695322b3b38$var$testimonialSplit = new SplitText("#testimonial-heading", {
    type: "lines"
});
$13fef695322b3b38$var$testimonialsLoad.from(".testimonials_star-wrapper > div", {
    opacity: 0,
    y: 75,
    duration: 0.75,
    ease: "power3.out"
}).from($13fef695322b3b38$var$testimonialSplit.lines, {
    opacity: 0,
    y: 100,
    duration: 1,
    scale: 0.8,
    stagger: 0.125,
    ease: "power4.out"
}, "<0.25");
let $13fef695322b3b38$var$gm = gsap.matchMedia();
let $13fef695322b3b38$var$subContainer = document.querySelector(".sub-services_content-wrapper");
const $13fef695322b3b38$var$offset = window.innerHeight - $13fef695322b3b38$var$subContainer.offsetHeight - 256;
$13fef695322b3b38$var$gm.add("(min-width: 991px)", ()=>{
    let subServicesPin = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_sub-services",
            scrub: true,
            pin: ".sub-services_content-wrapper",
            pinSpacing: false,
            end: ()=>`bottom bottom-=${$13fef695322b3b38$var$offset}px`
        }
    });
});


//cloneable template
var $5d6895b32c598a50$var$cloneableTemplateHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_cloneable-header"
    }
});
$5d6895b32c598a50$var$cloneableTemplateHeader.from(".resources-heading", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, 0);
$5d6895b32c598a50$var$cloneableTemplateHeader.from(".cloneable-header_image-wrapper", {
    y: 50,
    opacity: 0,
    ease: "power3.out",
    duration: 1.5
}, "<0.25");
$5d6895b32c598a50$var$cloneableTemplateHeader.from(".cloneable-header_button-wrapper", {
    y: 50,
    opacity: 0,
    duration: 0.875,
    ease: "power4.out"
}, "<0.2");
var $5d6895b32c598a50$var$cloneableTemplateBody = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_cloneable-content",
        start: "top-=400 center"
    }
});
$5d6895b32c598a50$var$cloneableTemplateBody.from(".cloneable-content_content", {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    duration: 1
}, 0.25);
//quote CTA animation
var $5d6895b32c598a50$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$5d6895b32c598a50$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: .875,
    ease: "power4.out"
});
$5d6895b32c598a50$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
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
$5d6895b32c598a50$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$5d6895b32c598a50$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$5d6895b32c598a50$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$5d6895b32c598a50$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: .125,
    ease: "power3.out"
}, "<.125");
$5d6895b32c598a50$var$ctaLoad.from("#ctaScribble", {
    drawSVG: '0% 0%',
    duration: 1,
    ease: "power3.out"
}, "<");
$5d6895b32c598a50$var$ctaLoad.to("#ctaScribble", {
    drawSVG: '100% 100%',
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$5d6895b32c598a50$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//blog section
var $5d6895b32c598a50$var$blogLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_related-blog",
        start: "-=400 center"
    }
});
$5d6895b32c598a50$var$blogLoad.from(".related-blog_heading-wrapper > div", {
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
//footer animation
var $5d6895b32c598a50$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $5d6895b32c598a50$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$5d6895b32c598a50$var$footerLoad.from($5d6895b32c598a50$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$5d6895b32c598a50$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$5d6895b32c598a50$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$5d6895b32c598a50$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$5d6895b32c598a50$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");


//code snippet
var $dc3cccf78924fb41$var$codeSnippetsHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".code-content_heading-wrapper"
    }
});
$dc3cccf78924fb41$var$codeSnippetsHeader.from(".resources-heading", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "<0.25");
$dc3cccf78924fb41$var$codeSnippetsHeader.from(".code-content_heading-wrapper > p", {
    y: 50,
    opacity: 0,
    duration: 0.875,
    ease: "power4.out"
}, "<0.2");
var $dc3cccf78924fb41$var$codeSnippetsTemplateBody = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_code-content",
        start: "top-=400 center"
    }
});
$dc3cccf78924fb41$var$codeSnippetsTemplateBody.from(".text-rich-text, .code-content_content-wrapper", {
    y: 80,
    opacity: 0,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
//quote CTA animation
var $dc3cccf78924fb41$var$ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "-=400 center"
    }
});
//main elements
$dc3cccf78924fb41$var$ctaLoad.from(".quote-cta_component", {
    y: 100,
    scale: 0.9,
    duration: .875,
    ease: "power4.out"
});
$dc3cccf78924fb41$var$ctaLoad.fromTo(".quote-cta_heading-wrapper", {
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
$dc3cccf78924fb41$var$ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<.25");
$dc3cccf78924fb41$var$ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
$dc3cccf78924fb41$var$ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, ">-0.5");
$dc3cccf78924fb41$var$ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: .125,
    ease: "power3.out"
}, "<.125");
$dc3cccf78924fb41$var$ctaLoad.from("#ctaScribble", {
    drawSVG: '0% 0%',
    duration: 1,
    ease: "power3.out"
}, "<");
$dc3cccf78924fb41$var$ctaLoad.to("#ctaScribble", {
    drawSVG: '100% 100%',
    duration: 1,
    ease: "power3.out"
}, ">-0.3");
$dc3cccf78924fb41$var$ctaLoad.to("#ctaScribble", {
    opacity: 0,
    duration: 0
}, ">-0.02");
//footer animation
var $dc3cccf78924fb41$var$footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top-=400 center"
    }
});
var $dc3cccf78924fb41$var$footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
$dc3cccf78924fb41$var$footerLoad.from($dc3cccf78924fb41$var$footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
$dc3cccf78924fb41$var$footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
$dc3cccf78924fb41$var$footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
$dc3cccf78924fb41$var$footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.5
}, "<0.5");
$dc3cccf78924fb41$var$footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
//blog section
var $dc3cccf78924fb41$var$blogLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_related-blog",
        start: "-=400 center"
    }
});
$dc3cccf78924fb41$var$blogLoad.from(".related-blog_heading-wrapper > div", {
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


//about page scroll section
gsap.defaults({
    ease: "power4.out",
    duration: 1
});
let $f4a8d6f07c3954eb$var$am = gsap.matchMedia();
$f4a8d6f07c3954eb$var$am.add("(min-width: 991px)", ()=>{
    var aboutScroll = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_about-header",
            scrub: true,
            start: "top top",
            end: "bottom bottom",
            pin: ".about-header_component"
        }
    });
    aboutScroll.to(".about-header_frame", {
        x: "-300dvw"
    });
});
//about page animations
//about hero load
var $f4a8d6f07c3954eb$var$aboutHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_about-header"
    }
});
var $f4a8d6f07c3954eb$var$aboutSplit = new SplitText(".about-header_heading-wrapper > h1", {
    type: "lines"
});
$f4a8d6f07c3954eb$var$aboutHero.from($f4a8d6f07c3954eb$var$aboutSplit.lines, {
    opacity: 0,
    y: 100,
    stagger: 0.125
}, 0);
$f4a8d6f07c3954eb$var$aboutHero.from(".home-about_card-wrapper.is-about-2", {
    opacity: 0,
    y: 500,
    x: 400,
    rotation: "50"
}, 0.5);
$f4a8d6f07c3954eb$var$aboutHero.from(".home-about_card-wrapper.is-about-1", {
    opacity: 0,
    y: 300,
    x: 300,
    rotation: "40"
}, 0.75);
var $f4a8d6f07c3954eb$var$aboutHeroLast = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-header_trigger"
    }
});
$f4a8d6f07c3954eb$var$aboutHeroLast.from(".about-header_minimal-card.is-first", {
    opacity: 0,
    y: -700,
    x: -150,
    rotation: "50"
}, 0);
$f4a8d6f07c3954eb$var$aboutHeroLast.from(".about-header_minimal-card.is-second", {
    opacity: 0,
    y: -800,
    x: -300,
    rotation: "64"
}, 0.125);
$f4a8d6f07c3954eb$var$aboutHeroLast.from(".about-header_minimal-card.is-last", {
    opacity: 0,
    y: -900,
    x: -50,
    rotation: "80"
}, 0.25);
$f4a8d6f07c3954eb$var$aboutHeroLast.from(".about-header_heading-wrapper > div", {
    y: 100,
    opacity: 0,
    stagger: 0.25
}, 0.25);
$f4a8d6f07c3954eb$var$aboutHeroLast.from(".about-header_card-ghost", {
    y: 100,
    scale: 0.8,
    opacity: 0
}, 0.5);
$f4a8d6f07c3954eb$var$aboutHeroLast.from(".about-header_card-brazzo", {
    y: 80,
    scale: 0.8,
    opacity: 0
}, 0.75);
//team load
var $f4a8d6f07c3954eb$var$teamLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_team"
    }
});
$f4a8d6f07c3954eb$var$teamLoad.from(".team_content-top", {
    y: 75,
    opacity: 0
}, 0);
$f4a8d6f07c3954eb$var$teamLoad.from(".team_item", {
    y: 150,
    opacity: 0,
    stagger: 0.125
}, 0.25); // //testimonials section animation -- need to modularise
 // var testimonialsLoad = gsap.timeline({
 //   scrollTrigger: { trigger: ".section_testimonials", start: "-=400 center" },
 // });
 // var testimonialSplit = new SplitText("#testimonial-heading", { type: "lines" });
 // testimonialsLoad
 //   .from(".testimonials_star-wrapper > div", {
 //     opacity: 0,
 //     y: 75,
 //     duration: 0.75,
 //     ease: "power3.out",
 //   })
 //   .from(
 //     testimonialSplit.lines,
 //     {
 //       opacity: 0,
 //       y: 100,
 //       duration: 1,
 //       scale: 0.8,
 //       stagger: 0.125,
 //       ease: "power4.out",
 //     },
 //     "<0.25"
 //   );
 // //footer animation -- need to modularise
 // var footerLoad = gsap.timeline({
 //   scrollTrigger: { trigger: ".footer_component", start: "-=400 center" },
 // });
 // var footerSplit = new SplitText(".footer_top-wrapper > h2", { type: "lines" });
 // footerLoad.from(
 //   footerSplit.lines,
 //   {
 //     scale: 0.8,
 //     opacity: 0,
 //     y: 100,
 //     stagger: 0.125,
 //     ease: "power3.out",
 //     duration: 1,
 //   },
 //   0
 // );
 // footerLoad.from(
 //   ".footer_top-wrapper > p",
 //   { scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1 },
 //   "<0.25"
 // );
 // footerLoad.from(
 //   ".footer_form_component",
 //   { scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1 },
 //   "<0.125"
 // );
 // footerLoad.from(
 //   ".footer_links-wrapper > a",
 //   { opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.5 },
 //   "<0.5"
 // );
 // footerLoad.from(
 //   ".footer_contact-wrapper > .footer_contact-item",
 //   { y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1 },
 //   "<0.5"
 // );


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


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin, ScrollSmoother, MorphSVGPlugin);
// Testimonial slider initialization
if (document.querySelector("#testimonials-slider")) try {
    new Swiper("#testimonials-slider", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 8,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 2200,
            disableOnInteraction: false
        },
        speed: 600,
        breakpoints: {
            478: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            1366: {
                slidesPerView: 4
            }
        }
    });
    console.log("Swiper initialized");
} catch (error) {
    console.error("Failed to initialize Swiper", error);
}
// Testimonial pagination color change
const $3e2aed16982f049f$var$variantField = document.querySelector(".wf-variant-dropdown");
if ($3e2aed16982f049f$var$variantField?.value === "White") {
    const style = document.createElement("style");
    style.textContent = `.swiper-pagination-bullet { background-color: var(--background-color--background-black) !important; }`;
    document.head.appendChild(style);
}
// Confetti on form submit
const $3e2aed16982f049f$var$confettiEffect = ()=>{
    setTimeout(()=>{
        try {
            confetti({
                particleCount: 150,
                startVelocity: 30,
                spread: 360,
                scalar: 3,
                flat: true,
                origin: {
                    x: 0.5,
                    y: 0
                },
                shapes: [
                    "square"
                ],
                colors: [
                    "#A41212",
                    "#FE0D04",
                    "#C36A66",
                    "#008B47",
                    "#FFFF00",
                    "#0074E3",
                    "#FF9CD2",
                    "#3FDCE3",
                    "#FFC25D",
                    "#CDEAF2"
                ]
            });
            console.log("Confetti triggered");
        } catch (error) {
            console.error("Failed to trigger confetti", error);
        }
    }, 1600);
};
document.querySelectorAll("#email-form, #footer-form").forEach((form)=>{
    form.addEventListener("submit", $3e2aed16982f049f$var$confettiEffect);
});
// Navbar toggle
document.addEventListener("click", (event)=>{
    if (event.target.matches(".navbar_menu-button, .button.is-small.is-navbar.is-open")) document.body.classList.toggle("no-scroll");
});
// Resources animations
const $3e2aed16982f049f$var$resourcesObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: entry.target
                }
            }).from(".resources_top-content > h1, .resources_top-content > p", {
                y: 100,
                stagger: 0.125,
                ease: "power4.out",
                duration: 1,
                opacity: 0
            });
            $3e2aed16982f049f$var$resourcesObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});
const $3e2aed16982f049f$var$resourcesSection = document.querySelector(".section_resources");
if ($3e2aed16982f049f$var$resourcesSection) $3e2aed16982f049f$var$resourcesObserver.observe($3e2aed16982f049f$var$resourcesSection);
// Animations object
window.Animations = {
    animateFooter () {
        const footerLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer_component",
                start: "-=400 center"
            }
        });
        const footerSplit = new SplitText(".footer_top-wrapper > h2", {
            type: "lines"
        });
        footerLoad.from(footerSplit.lines, {
            scale: 0.8,
            opacity: 0,
            y: 100,
            stagger: 0.125,
            ease: "power3.out",
            duration: 1
        }, 0);
        footerLoad.from(".footer_top-wrapper > p", {
            scale: 0.8,
            opacity: 0,
            y: 100,
            ease: "power3.out",
            duration: 1
        }, "<0.25");
        footerLoad.from(".footer_form_component", {
            scale: 0.8,
            opacity: 0,
            y: 100,
            ease: "power3.out",
            duration: 1
        }, "<0.125");
        footerLoad.from(".footer_links-wrapper > a", {
            opacity: 0,
            stagger: 0.125,
            ease: "power4.out",
            duration: 0.5
        }, "<0.5");
        footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
            y: 50,
            opacity: 0,
            stagger: 0.125,
            ease: "power4.out",
            duration: 1
        }, "<0.5");
    },
    animateProjects () {
        const projectsLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_projects",
                start: "-=400 center"
            }
        });
        const projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
            type: "lines"
        });
        projectsLoad.from(projectsSplit.lines, {
            duration: 1,
            opacity: 0,
            y: 150,
            scale: 0.8,
            ease: "power3.out",
            stagger: 0.125
        });
        projectsLoad.from(".projects_content > .projects_item > .projects_card", {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power3.out",
            stagger: 0.125
        }, ">-0.5");
        projectsLoad.from(".projects_component > a", {
            y: 100,
            opacity: 0,
            ease: "power3.out"
        }, "<0.25");
        projectsLoad.from("#projects-highlight", {
            color: "#EB5B30",
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
        projectsLoad.from("#projects-line > svg > path", {
            drawSVG: "0% 0%",
            duration: 0.6,
            ease: "power3.out"
        }, "<");
        projectsLoad.to("#projects-line > svg > path", {
            drawSVG: "100% 100%",
            duration: 0.6,
            ease: "power3.out"
        }, ">-0.3");
        projectsLoad.to("#projects-line > svg > path", {
            opacity: 0,
            duration: 0
        }, ">-0.01");
    },
    animateServices () {
        const servicesLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_services",
                start: "-=400 center"
            }
        });
        servicesLoad.from(".services_heading-wrapper > h2", {
            y: 80,
            opacity: 0
        });
        document.querySelectorAll(".services_list .card.is-services").forEach((card)=>{
            const linkTargetID = card.querySelector(".card_link-target")?.id;
            if (linkTargetID) gsap.fromTo(card, {
                opacity: 0,
                scale: 0.5
            }, {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: `#${linkTargetID}`,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: true
                }
            });
        });
    },
    animateTestimonial () {
        const testimonialsLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_testimonials",
                start: "-=400 center"
            }
        });
        const testimonialSplit = new SplitText("#testimonial-heading", {
            type: "lines"
        });
        testimonialsLoad.from(".testimonials_star-wrapper > div", {
            opacity: 0,
            y: 75
        }).from(testimonialSplit.lines, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            stagger: 0.125
        }, "<0.25");
    },
    animateCTA () {
        const ctaLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_quote-cta",
                start: "-=400 center"
            }
        });
        ctaLoad.from(".quote-cta_component", {
            y: 100,
            scale: 0.9
        });
        ctaLoad.fromTo(".quote-cta_heading-wrapper", {
            opacity: 0,
            scale: 0,
            y: 400
        }, {
            opacity: 1,
            scale: 1,
            y: 0
        }, "<+0.125");
        ctaLoad.from(".quote-cta_subheading", {
            y: 150,
            duration: 0.875,
            opacity: 0
        }, "<.25");
        ctaLoad.from("#ctaButton", {
            y: 200,
            duration: 0.875,
            opacity: 0
        }, "<0.125");
        ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
            scale: 1.1,
            repeat: 1,
            yoyo: true,
            ease: "power2.inOut",
            duration: 0.3
        }, ">-0.5");
        ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
            color: "#fff9f3",
            duration: 0.125
        }, "<.125");
        ctaLoad.from("#ctaScribble", {
            drawSVG: "0% 0%"
        }, "<");
        ctaLoad.to("#ctaScribble", {
            drawSVG: "100% 100%"
        }, ">-0.3");
        ctaLoad.to("#ctaScribble", {
            opacity: 0,
            duration: 0
        }, ">-0.02");
    },
    animateBlogs () {
        const blogLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_related-blog",
                start: "-=400 center"
            }
        });
        blogLoad.from(".related-blog_heading-wrapper > div", {
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
    },
    animateFAQ () {
        const faqLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_faq",
                start: "-=400 center"
            }
        });
        faqLoad.from("#faq-heading", {
            y: 80,
            opacity: 0
        }, 0);
        faqLoad.from(".faq_list > .faq_item", {
            y: 50,
            opacity: 0,
            stagger: 0.125
        }, 0.25);
        faqLoad.from(".faq_lottie", {
            scale: 0,
            opacity: 0,
            stagger: 0.25
        }, "<0.5");
    },
    animateMorph () {
        const paths = [
            ".path2",
            ".path3",
            ".path4",
            ".path5",
            ".path6",
            ".path7",
            ".path2"
        ];
        const morphPath = gsap.timeline({
            repeat: -1,
            yoyo: true,
            defaults: {
                duration: 1,
                ease: "power1.inOut"
            }
        });
        paths.forEach((path)=>{
            morphPath.to(".path1", {
                morphSVG: path
            });
        });
    }
};


