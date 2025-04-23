//services animations

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

//services hero load
var servicesHero = gsap.timeline({
  scrollTrigger: { trigger: ".section_services-header" },
});

var servicesSplit = new SplitText(".services-header_text-wrapper > h1", {
  type: "lines",
});

servicesHero.from(
  servicesSplit.lines,
  { opacity: 0, y: 180, stagger: 0.125 },
  0
);
servicesHero.from(
  ".services-header_text-wrapper > p",
  { opacity: 0, y: 80},
  0.25
);
servicesHero.from(
  ".services-header_image-wrapper",
  { opacity: 0, y: 100},
  0.5
);

var servicesCaseStudies = gsap.timeline({
  scrollTrigger: { trigger: ".services-case-studies_content-top" },
});

var serviceCsSplit = new SplitText(
  ".services-case-studies_heading-wrapper > .projects-rich-text > h2",
  { type: "lines" }
);

servicesCaseStudies.from(
  ".services-case-studies_image-wrapper",
  { y: 80, opacity: 0},
  0
);
servicesCaseStudies.from(
  ".services-case-studies_image-background",
  { y: 50},
  0.125
);
servicesCaseStudies.from(
  ".services-case-studies_eyes",
  { y: 150},
  0.25
);
servicesCaseStudies.from(
  serviceCsSplit.lines,
  { y: 80, opacity: 0, stagger: 0.125 },
  0.25
);
servicesCaseStudies.from(
  ".services-case-studies_heading-wrapper > p",
  { y: 80, opacity: 0},
  0.5
);
servicesCaseStudies.from(
  ".services-case-studies_content-middle",
  { y: 100, opacity: 0},
  "<0.5"
);
servicesCaseStudies.from(
  ".services-case-studies_content-bottom",
  { y: 100, opacity: 0},
  "<0.25"
);

//sub services section
var subServices = gsap.timeline({
  scrollTrigger: { trigger: ".sub-services_component", start: "top center" },
});

subServices.from(
  ".sub-services_tag",
  { y: 80, opacity: 0},
  0
);
subServices.from(
  ".sub-services_content-wrapper > .services-rich-text > h2",
  { y: 80, opacity: 0, stagger: 0.125 },
  "<+0.25"
);
subServices.from(
  ".sub-services_content-wrapper > p",
  { y: 100, opacity: 0},
  "<+0.25"
);

let mm = gsap.matchMedia();

mm.add("(min-width: 991px)", () => {
  let subContainer = document.querySelector(".sub-services_content-wrapper");
  const offset = window.innerHeight - subContainer.offsetHeight - 256;
  let subServicesPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_sub-services",
      scrub: true,
      pin: ".sub-services_content-wrapper",
      pinSpacing: false,
      end: () => `bottom bottom-=${offset}px`,
    },
  });
});
