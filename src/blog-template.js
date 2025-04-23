//blog template

//call modular animations
document.addEventListener('DOMContentLoaded', () => {
  if (window.Animations) {
    Animations.animateBlogs();
    Animations.animateFooter();
    Animations.animateCTA();
  }
});


var resourceTemplateHeader = gsap.timeline({scrollTrigger: {trigger: ".section_blog-header"}});

resourceTemplateHeader.from(".resources-heading", {y: 80, opacity: 0, duration: 1, ease: "power4.out"}, 0);
resourceTemplateHeader.from(".blog-header_subheading", {y: 50, opacity: 0, duration: 0.875, ease: "power4.out"}, "<0.2");

var resourceTemplateBody = gsap.timeline({scrollTrigger: {trigger: ".section_blog-content",  start: "top-=400 center"}})

resourceTemplateBody.from(".author-card, .table-of-contents", {y: 80, opacity: 0, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
resourceTemplateBody.from(".blog_content-wrapper", {y: 100, opacity: 0, ease: "power3.out", duration: 1}, 0.25);

let mm = gsap.matchMedia();

// desktop
mm.add("(min-width: 991px)", () => {
  // case studies table of contents pin
  var contentsPin = gsap.timeline({scrollTrigger: {trigger: ".blog-content_component", start: "top-=150 top", end: "bottom center+=200", scrub: true, pin: ".blog-content_content-left", pinSpacing: false}});
});