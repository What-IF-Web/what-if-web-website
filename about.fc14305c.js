
      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire41e5"];
var parcelRegister = parcelRequire.register;
parcelRegister("l0jEi", function(module, exports) {
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

});


