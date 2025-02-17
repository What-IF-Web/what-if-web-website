//case studies card testing
console.log("test-active");

//case studies cards animation
// const cards = document.querySelectorAll(".case-studies_item");

// var cardsTl = gsap.timeline();

// cards.forEach((card, index) => {
//   cardsTl.from(card, {
//     scrollTrigger: {
//       trigger: card,
//       start: "top bottom",
//       end: "top 50%",
//       scrub: true,
//       markers: false
//     },
//     scale: 0.8,
//     y: 100,
//     ease: "power3.out",
//     rotateX: 5,
//     opacity: 0
//   });
// });

// $(".case-studies_checkbox-button").click(cardsTl.ScrollTrigger.refresh());

gsap.registerPlugin(MorphSVGPlugin);

var morphPath = gsap.timeline({repeat: -1});

morphPath.to(".path1", { duration: 1, morphSVG:{shape: ".path2", type: "rotational"}, duration: 2})
// morphPath.to(".path1", { duration: 1, morphSVG:{shape: ".path3", type: "rotational"}, duration: 2})
// morphPath.to(".path1", { duration: 1, morphSVG:{shape: ".path4", type: "rotational"}, duration: 2})
// morphPath.to(".path1", { duration: 1, morphSVG:{shape: ".path5", type: "rotational"}, duration: 2})
// morphPath.to(".path1", { duration: 1, morphSVG:{shape: ".path6", type: "rotational"}, duration: 2})
// morphPath.to(".path1", { duration: 1, morphSVG:{shape: ".path7", type: "rotational"}, duration: 2})
// morphPath.to(".path1", { duration: 1, morphSVG:{shape: ".path1", type: "rotational"}, duration: 2})
