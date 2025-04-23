//cloneable template

//call modular animations
document.addEventListener('DOMContentLoaded', () => {
    if (window.Animations) {
      Animations.animateCTA();
      Animations.animateBlogs();
      Animations.animateFooter();
    }
  });

var cloneableTemplateHeader = gsap.timeline({scrollTrigger: {trigger: ".section_cloneable-header"}});

cloneableTemplateHeader.from(".resources-heading", {y: 80, opacity: 0, duration: 1, ease: "power4.out"}, 0);
cloneableTemplateHeader.from(".cloneable-header_image-wrapper", {y: 50, opacity: 0, ease: "power3.out", duration: 1.5}, "<0.25");
cloneableTemplateHeader.from(".cloneable-header_button-wrapper", {y: 50, opacity: 0, duration: 0.875, ease: "power4.out"}, "<0.2");

var cloneableTemplateBody = gsap.timeline({scrollTrigger: {trigger: ".section_cloneable-content",  start: "top-=400 center"}})

cloneableTemplateBody.from(".cloneable-content_content", {y: 100, opacity: 0, ease: "power3.out", duration: 1}, 0.25);