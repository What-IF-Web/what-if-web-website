//blog template

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

var resourceTemplateHeader = gsap.timeline({
  scrollTrigger: { trigger: ".section_blog-header" },
});

resourceTemplateHeader.from(
  ".resources-heading",
  { y: 80, opacity: 0},
  0
);
resourceTemplateHeader.from(
  ".blog-header_subheading",
  { y: 50, opacity: 0},
  "<0.2"
);

var resourceTemplateBody = gsap.timeline({
  scrollTrigger: { trigger: ".section_blog-content", start: "top-=400 center" },
});

resourceTemplateBody.from(
  ".author-card, .table-of-contents",
  { y: 80, opacity: 0, stagger: 0.125},
  0
);
resourceTemplateBody.from(
  ".blog_content-wrapper",
  { y: 100, opacity: 0},
  0.25
);

let mm = gsap.matchMedia();

// desktop
mm.add("(min-width: 991px)", () => {
  var contentsPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".blog-content_component",
      start: "top-=150 top",
      end: "bottom center+=200",
      scrub: true,
      pin: ".blog-content_content-left",
      pinSpacing: false,
    },
  });
});
