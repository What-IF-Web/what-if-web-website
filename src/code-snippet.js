//code snippet

//call modular animations
document.addEventListener('DOMContentLoaded', () => {
    if (window.Animations) {
      Animations.animateCTA();
      Animations.animateBlogs();
      Animations.animateFooter();
    }
  });

var codeSnippetsHeader = gsap.timeline({scrollTrigger: {trigger: ".code-content_heading-wrapper"}});

codeSnippetsHeader.from(".resources-heading", {y: 80, opacity: 0, duration: 1, ease: "power4.out"}, "<0.25");
codeSnippetsHeader.from(".code-content_heading-wrapper > p", {y: 50, opacity: 0, duration: 0.875, ease: "power4.out"}, "<0.2");

var codeSnippetsTemplateBody = gsap.timeline({scrollTrigger: {trigger: ".section_code-content",  start: "top-=400 center"}})

codeSnippetsTemplateBody.from(".text-rich-text, .code-content_content-wrapper", {y: 80, opacity: 0, stagger: 0.125, ease: "power3.out", duration: 1}, 0);