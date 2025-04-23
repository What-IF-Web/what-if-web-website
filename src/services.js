//services animations

//call modular animations
document.addEventListener('DOMContentLoaded', () => {
    if (window.Animations) {
      Animations.animateCTA();
      Animations.animateSolutions();
      Animations.animateFooter();
      Animations.animateTestimonial();
      Animations.animateBlogs();
    }
  });

//services hero load
var servicesHero = gsap.timeline({scrollTrigger: {trigger: ".section_services-header"}});

var servicesSplit = new SplitText(".services-header_text-wrapper > h1", {type: "lines"});

servicesHero.from(servicesSplit.lines, {opacity: 0, y: 180, ease: "power4.out", duration: 1, stagger: 0.125}, "0");
servicesHero.from(".services-header_text-wrapper > p", {opacity: 0, y: 80, ease: "power4.out", duration: 1}, "0.25");
servicesHero.from(".services-header_image-wrapper", {opacity: 0, y: 100, ease: "power3.out", duration: 1}, "0.5")

var servicesCaseStudies = gsap.timeline({scrollTrigger: {trigger: ".services-case-studies_content-top"}});

var serviceCsSplit = new SplitText(".services-case-studies_heading-wrapper > .projects-rich-text > h2", {type: "lines"});

servicesCaseStudies.from(".services-case-studies_image-wrapper", {y: 80, opacity: 0, ease: "power4.out", duration: 0.875}, 0);
servicesCaseStudies.from(".services-case-studies_image-background", {y: 50, duration: 0.875, ease: "power4.out"}, 0.125);
servicesCaseStudies.from(".services-case-studies_eyes", {y: 150, duration: 0.75, ease: "power4.out"}, 0.25);
servicesCaseStudies.from(serviceCsSplit.lines, {y: 80, opacity: 0, ease: "power4.out", duration: 1, stagger: 0.125}, 0.25);
servicesCaseStudies.from(".services-case-studies_heading-wrapper > p", {y: 80, opacity: 0, ease: "power4.out", duration: 1}, 0.5);
servicesCaseStudies.from(".services-case-studies_content-middle", {y: 100, opacity: 0, ease: "power3.out", duration: 1}, "<+0.5");
servicesCaseStudies.from(".services-case-studies_content-bottom", {y: 100, opacity: 0, ease: "power3.out", duration: 1}, "<+0.25");

var csTechStack = gsap.timeline({scrollTrigger: {trigger: ".section_tech-stack", start: "top-=400 center"}}); 

csTechStack.from("#tech-stack-wrapper > h2", {y: 80, opacity: 0, ease: "power4.out", duration: 0.875}, 0);
csTechStack.from(".tech-stack_subheading-wrapper > p", {y: 50, opacity: 0, ease: "power4.out", duration: 0.75}, 0.25);
csTechStack.from(".tech-stack_item", {y: 100, duration: 1, opacity: 0, stagger: 0.125, ease: "power.4out"}, 0.5);
csTechStack.from(".tech-stack_image", {y: 30, duration: 0.75, opacity: 0, stagger: 0.125, ease: "power.4out"}, "<");
csTechStack.from(".tech-stack_item-front > h3", {y: 50, duration: 0.75, opacity: 0, stagger: 0.125, ease: "power.4out"}, "<0.125");

//sub services section
var subServices = gsap.timeline({scrollTrigger: {trigger: ".section_sub-services"}});

subServices.from(".sub-services_tag", {y: 80, opacity: 0, ease: "power4.out", duration: 0.875}, 0);
subServices.from(".sub-services_content-wrapper > .services-rich-text > h2", {y: 80, opacity: 0, ease: "power4.out", duration: 0.875, stagger: 0.125}, "<+0.25");
subServices.from(".sub-services_content-wrapper > p", {y: 100, opacity: 0, ease: "power4.out", duration: 1}, "<+0.25");

let gm = gsap.matchMedia();

let subContainer = document.querySelector(".sub-services_content-wrapper");

const offset = window.innerHeight - subContainer.offsetHeight - 256;

gm.add("(min-width: 991px)", () => {
    let subServicesPin = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_sub-services",
            scrub: true,
            pin: ".sub-services_content-wrapper",
            pinSpacing: false,
            end: () => `bottom bottom-=${offset}px`
        }
    });
});