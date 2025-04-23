//Pricing stuff

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

// pricing header load in
var pricingLoad = gsap.timeline({scrollTrigger: {trigger: ".section_pricing"}});

pricingLoad.from(".pricing_content-top > h1", {y: 100, opacity: 0});
pricingLoad.from(".pricing_paragraph-wrapper", {y: 150, opacity: 0}, "<+0.25");
pricingLoad.from(".pricing_content-bottom", {y: 200, opacity: 0}, "<+0.25");

let mm = gsap.matchMedia();

// desktop
mm.add("(min-width: 991px)", () => {
   var servicesPinTrigger = gsap.timeline({scrollTrigger: {trigger: ".section_services", start: "top top", end: "bottom bottom", scrub: true, pin: ".services_content-top-wrapper", pinSpacing: false}});
});