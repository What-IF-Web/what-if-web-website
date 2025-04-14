
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
parcelRegister("9l4fu", function(module, exports) {
module.exports = Promise.resolve(require("./home.532ebe7f.js")).then(()=>parcelRequire('kEdRm'));

});

parcelRegister("3dCPD", function(module, exports) {
module.exports = Promise.resolve(require("./pricing.887d9442.js")).then(()=>parcelRequire('8C97O'));

});

/*uncomment the below when in localhost */ // window.parceled = true;
console.log("localhost");
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin, ScrollSmoother);
// ScrollSmoother.create({
//   content: ".main-wrapper",
//   smooth: 0.8,
//   effects: false,
// });
/*this is where you add imports for localhost */ // import "./home";
const $84a264530b3fb4fb$var$url = window.location.pathname;


if (document.querySelector(".section_home-header") || $84a264530b3fb4fb$var$url === "/") (parcelRequire("9l4fu")).then((module)=>{
    console.log("Home module loaded");
});
else if (path.includes("pricing")) (parcelRequire("3dCPD")).then((module)=>{
    console.log("Pricing module loaded");
});
const $84a264530b3fb4fb$var$scriptsMap = new Map([
    // [
    //   ".section_home-header",
    //   {
    //     src: "https://what-if-web.github.io/what-if-web-website/home.js",
    //     id: "home-script",
    //   },
    // ],
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
    }, 300); // 100–300ms might give DOM enough time
}
// Load scripts based on elements found in DOM
document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        $84a264530b3fb4fb$var$scriptsMap.forEach((scriptInfo, selector)=>{
            if (scriptInfo && scriptInfo.src && scriptInfo.id) {
                if (document.querySelector(selector)) $84a264530b3fb4fb$var$preloadAndExecuteScript(scriptInfo.src, scriptInfo.id);
            }
        });
    }, 300); // Allow time for Webflow to render content
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
document.addEventListener("click", function(event) {
    if (event.target.matches(".button.is-small.is-navbar.is-open")) document.body.classList.toggle("no-scroll");
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
}); //resources animations
 // var resourcesLoad = gsap.timeline({scrollTrigger: {trigger: ".section_resources"}});
 // resourcesLoad.from(".resources_top-content > h1, .resources_top-content > p", {y: 100, stagger: 0.125, ease: "power4.out", duration: 1, opacity: 0});


//# sourceMappingURL=app.js.map
