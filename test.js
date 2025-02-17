//case studies card testing
console.log("test-active");

//Morph SVG
gsap.registerPlugin(MorphSVGPlugin);

var morphPath = gsap.timeline({ repeat: -1 });

morphPath
  .to(".path1", { duration: 2, morphSVG: { shape: ".path2", type: "rotational" } })
  .to(".path1", { duration: 2, morphSVG: { shape: ".path3", type: "rotational" } })
  .to(".path1", { duration: 2, morphSVG: { shape: ".path4", type: "rotational" } })
  .to(".path1", { duration: 2, morphSVG: { shape: ".path5", type: "rotational" } })
  .to(".path1", { duration: 2, morphSVG: { shape: ".path6", type: "rotational" } })
  .to(".path1", { duration: 2, morphSVG: { shape: ".path7", type: "rotational" } })
  .to(".path1", { duration: 2, morphSVG: { shape: ".path1", type: "rotational" } });

  console.log("after-morph");