//code snippet

gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

var codeSnippetsHeader = gsap.timeline({
  scrollTrigger: { trigger: ".code-content_heading-wrapper" },
});

codeSnippetsHeader.from(
  ".resources-heading",
  { y: 80, opacity: 0},
  0
);
codeSnippetsHeader.from(
  ".code-content_heading-wrapper > p",
  { y: 50, opacity: 0},
  "<0.2"
);

var codeSnippetsTemplateBody = gsap.timeline({
  scrollTrigger: { trigger: ".section_code-content", start: "top-=400 center" },
});

codeSnippetsTemplateBody.from(
  ".text-rich-text, .code-content_content-wrapper",
  { y: 80, opacity: 0, stagger: 0.125},
  0
);