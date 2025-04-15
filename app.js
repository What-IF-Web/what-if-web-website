
      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("bo0Av", function(module, exports) {
/*uncomment the below when in localhost */ // window.parceled = true;
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin, ScrollSmoother);

// ScrollSmoother.create({
//   content: ".main-wrapper",
//   smooth: 0.8,
//   effects: false,
// });
/*this is where you add imports for localhost */ // import "./about";
if (window.location.pathname === "/") (parcelRequire("9l4fu")).then(()=>{
// Code for when the about script is loaded
}).catch((err)=>{
    console.error("Error loading the about script", err);
});
const $84a264530b3fb4fb$var$url = window.location.pathname;
const $84a264530b3fb4fb$var$scriptsMap = new Map([
    [
        ".section_home-header",
        {
            src: "https://what-if-web.github.io/what-if-web-website/home.js",
            id: "home-script"
        }
    ],
    [
        ".section_case-study-header",
        {
            src: "https://what-if-web.github.io/what-if-web-website/case-studies-template.js",
            id: "case-study-script"
        }
    ],
    [
        ".section_case-studies",
        {
            src: "https://what-if-web.github.io/what-if-web-website/case-studies.js",
            id: "case-studies-script"
        }
    ],
    [
        ".section_not-found-header",
        {
            src: "https://what-if-web.github.io/what-if-web-website/not-found.js",
            id: "not-found-script"
        }
    ]
]);
const $84a264530b3fb4fb$var$urlScriptsMap = new Map([
    [
        "pricing",
        {
            src: "https://what-if-web.github.io/what-if-web-website/pricing.js",
            id: "pricing-script"
        }
    ],
    [
        "contact",
        {
            src: "https://what-if-web.github.io/what-if-web-website/contact.js",
            id: "contact-script"
        }
    ],
    [
        "blog",
        {
            src: "https://what-if-web.github.io/what-if-web-website/blog-template.js",
            id: "blog-template-script"
        }
    ],
    [
        "services",
        {
            src: "https://what-if-web.github.io/what-if-web-website/services.js",
            id: "services-script"
        }
    ],
    [
        "cloneables",
        {
            src: "https://what-if-web.github.io/what-if-web-website/cloneables.js",
            id: "cloneables-script"
        }
    ],
    [
        "code-snippet",
        {
            src: "https://what-if-web.github.io/what-if-web-website/code-snippet.js",
            id: "code-snippet-script"
        }
    ],
    [
        "about",
        {
            src: "https://what-if-web.github.io/what-if-web-website/about.js",
            id: "about-script"
        }
    ],
    [
        "resources",
        {
            src: "https://what-if-web.github.io/what-if-web-website/resources.js",
            id: "resources-script"
        }
    ]
]);
function $84a264530b3fb4fb$var$preloadAndExecuteScript(src, id) {
    if (!document.getElementById(id)) setTimeout(()=>{
        const script = document.createElement("script");
        script.src = src;
        script.id = id;
        script.defer = true;
        document.head.appendChild(script);
    }, 400);
}
function $84a264530b3fb4fb$var$preloadAndExecuteScript(src, id) {
    if (!document.getElementById(id)) requestIdleCallback(()=>{
        const script = document.createElement("script");
        script.src = src;
        script.id = id;
        script.defer = true;
        document.head.appendChild(script);
    });
}
// Load scripts based on elements found in DOM
$84a264530b3fb4fb$var$scriptsMap.forEach((scriptInfo, selector)=>{
    if (scriptInfo && scriptInfo.src && scriptInfo.id) {
        if (document.querySelector(selector)) $84a264530b3fb4fb$var$preloadAndExecuteScript(scriptInfo.src, scriptInfo.id);
    }
});
// Load scripts based on URL matching
$84a264530b3fb4fb$var$urlScriptsMap.forEach(({ src: src, id: id }, key)=>{
    if ($84a264530b3fb4fb$var$url.includes(key)) $84a264530b3fb4fb$var$preloadAndExecuteScript(src, id);
});
// Testimonial slider initialization
if (document.querySelector("#testimonials-slider")) new Swiper("#testimonials-slider", {
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
// Testimonial pagination color change based on variant
const $84a264530b3fb4fb$var$variantField = document.querySelector(".wf-variant-dropdown");
if ($84a264530b3fb4fb$var$variantField?.value === "White") {
    const style = document.createElement("style");
    style.textContent = `.swiper-pagination-bullet { background-color: var(--background-color--background-black) !important; }`;
    document.head.appendChild(style);
}
// Confetti on form submit
const $84a264530b3fb4fb$var$confettiEffect = ()=>{
    setTimeout(()=>{
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
                "square",
                "diamonds"
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
    }, 1600);
};
document.querySelectorAll("#email-form, #footer-form").forEach((form)=>{
    form.addEventListener("submit", $84a264530b3fb4fb$var$confettiEffect);
});
// Navbar toggle
document.addEventListener("click", (event)=>{
    if (event.target.matches(".navbar_menu-button, .button.is-small.is-navbar.is-open")) document.body.classList.toggle("no-scroll");
});
// Resources animations (only if the section is in view)
const $84a264530b3fb4fb$var$resourcesObserver = new IntersectionObserver((entries)=>{
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
            $84a264530b3fb4fb$var$resourcesObserver.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
}, {
    threshold: 0.5
});
const $84a264530b3fb4fb$var$resourcesSection = document.querySelector(".section_resources");
if ($84a264530b3fb4fb$var$resourcesSection) $84a264530b3fb4fb$var$resourcesObserver.observe($84a264530b3fb4fb$var$resourcesSection);
document.addEventListener("click", function(event) {
    if (event.target.matches(".button.is-small.is-navbar.is-open")) document.body.classList.toggle("no-scroll");
});
$(".navbar_logo-link").click(function(e) {
    e.preventDefault();
    const linkUrl = $(this).attr("href");
    setTimeout(()=>window.location = linkUrl, 750);
});
//resources animations
// var resourcesLoad = gsap.timeline({scrollTrigger: {trigger: ".section_resources"}});
// resourcesLoad.from(".resources_top-content > h1, .resources_top-content > p", {y: 100, stagger: 0.125, ease: "power4.out", duration: 1, opacity: 0});
//test footer modular animation
window.Animations = {
    animateFooter () {
        var footerLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer_component",
                start: "-=400 center"
            }
        });
        var footerSplit = new SplitText(".footer_top-wrapper > h2", {
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
        //featured projects animation -- make modular
        var projectsLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_projects",
                start: "-=400 center"
            }
        });
        var projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
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
        //Services section animation
        var servicesLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_services",
                start: "-=400 center"
            }
        });
        servicesLoad.from(".services_heading-wrapper > h2", {
            y: 80,
            opacity: 0
        });
        //Services section cards scroll animation
        $(document).ready(function() {
            $(".services_list .card.is-services").each(function() {
                let card = $(this);
                let linkTargetID = card.find(".card_link-target").attr("id");
                gsap.fromTo(card, {
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
        });
    },
    animateTestimonial () {
        //testimonials section animation
        var testimonialsLoad = gsap.timeline({
            scrollTrigger: {
                trigger: ".section_testimonials",
                start: "-=400 center"
            }
        });
        var testimonialSplit = new SplitText("#testimonial-heading", {
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
        //quote CTA animation
        var ctaLoad = gsap.timeline({
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
        //blog section
        var blogLoad = gsap.timeline({
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
        //FAQ section
        var faqLoad = gsap.timeline({
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
        //Path morph animation
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

});
parcelRegister("9l4fu", function(module, exports) {
module.exports = Promise.resolve(require("./home.41b3f1d6.js")).then(()=>parcelRequire('kEdRm'));

});



parcelRequire("bo0Av");

//# sourceMappingURL=app.js.map
