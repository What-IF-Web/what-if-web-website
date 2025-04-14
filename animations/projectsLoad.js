import "./../app";

export function animateProjectsSection() {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: ".section_projects", start: "top 75%" },
  });

  const projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
    type: "lines",
  });

  tl.from(projectsSplit.lines, {
    opacity: 0,
    y: 150,
    scale: 0.8,
    stagger: 0.125,
  })
    .fromTo(
      ".projects_video-wrapper",
      { duration: 0.875, opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      ">-0.5"
    )
    .from(
      ".projects_content > .projects_item > .projects_card",
      { duration: 0.5, opacity: 0, y: 60, stagger: 0.1 },
      ">-0.75"
    )
    .from(".projects_component > a", { y: 100, opacity: 0 }, "<0.25")
    .from("#projects-highlight", { color: "#EB5B30", duration: 0 }, "<")
    .to(
      "#projects-highlight",
      { scale: 1.1, duration: 0.3, ease: "power2.in" },
      "<"
    )
    .to("#projects-highlight", { scale: 1, duration: 0.2 }, "<0.4")
    .from(
      "#projects-line > svg > path",
      { drawSVG: "0% 0%", duration: 0.6 },
      "<"
    )
    .to(
      "#projects-line > svg > path",
      { drawSVG: "100% 100%", duration: 0.6 },
      ">-0.3"
    )
    .to("#projects-line > svg > path", { opacity: 0, duration: 0.3 }, ">-0.1");

  return tl;
}
