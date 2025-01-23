gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MorphSVGPlugin);
const $84a264530b3fb4fb$var$url = window.location.pathname;
const $84a264530b3fb4fb$var$homeHeader = document.querySelector(".section_home-header");
const $84a264530b3fb4fb$var$caseStudy = document.querySelector(".section_case-study-header");
const $84a264530b3fb4fb$var$caseStudies = document.querySelector(".section_case-studies");
const $84a264530b3fb4fb$var$notFound = document.querySelector(".section_not-found-header");
const $84a264530b3fb4fb$var$homeScriptURL = new URL("https://what-if-web.github.io/what-if-web-website/home.js");
const $84a264530b3fb4fb$var$caseStudiesScriptURL = new URL("https://what-if-web.github.io/what-if-web-website/case-studies.js");
const $84a264530b3fb4fb$var$caseStudiesTempScriptURL = new URL("https://what-if-web.github.io/what-if-web-website/case-studies-template.js");
const $84a264530b3fb4fb$var$contactScriptURL = new URL("https://what-if-web.github.io/what-if-web-website/contact.js");
const $84a264530b3fb4fb$var$notFoundScriptURL = new URL("https://what-if-web.github.io/what-if-web-website/not-found.js");
const $84a264530b3fb4fb$var$pricingScriptURL = new URL("https://what-if-web.github.io/what-if-web-website/pricing.js");
switch(true){
    case $84a264530b3fb4fb$var$homeHeader !== null:
        import($84a264530b3fb4fb$var$homeScriptURL.href);
        break;
    case $84a264530b3fb4fb$var$caseStudy !== null:
        import($84a264530b3fb4fb$var$caseStudiesTempScriptURL.href);
        break;
    case $84a264530b3fb4fb$var$caseStudies !== null:
        import($84a264530b3fb4fb$var$caseStudiesScriptURL.href);
        break;
    case $84a264530b3fb4fb$var$notFound !== null:
        import($84a264530b3fb4fb$var$notFoundScriptURL.href);
        break;
    case $84a264530b3fb4fb$var$url.includes("pricing"):
        import($84a264530b3fb4fb$var$pricingScriptURL.href);
        break;
    case $84a264530b3fb4fb$var$url.includes("contact"):
        import($84a264530b3fb4fb$var$contactScriptURL.href);
}
/* testimonial slider */ $(document).ready(function() {
    var testimonialsSlider = new Swiper("#testimonials-slider", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 8,
        draggable: true,
        grabCursor: true,
        pagination: {
            el: ".swiper_pagination",
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
});


//# sourceMappingURL=app.js.map
