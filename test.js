//case studies card testing
console.log("test-active");

//Morph SVG
gsap.registerPlugin(MorphSVGPlugin);

var morphPath = gsap.timeline({ repeat: -1 });

morphPath
//   .to(".path1", { duration: 2, morphSVG: { shape: ".path2", type: "rotational" } })
//   .to(".path1", { duration: 2, morphSVG: { shape: ".path3", type: "rotational" } })
//   .to(".path1", { duration: 2, morphSVG: { shape: ".path4", type: "rotational" } })
//   .to(".path1", { duration: 2, morphSVG: { shape: ".path5", type: "rotational" } })
//   .to(".path1", { duration: 2, morphSVG: { shape: ".path6", type: "rotational" } })
//   .to(".path1", { duration: 2, morphSVG: { shape: ".path7", type: "rotational" } })
//   .to(".path1", { duration: 2, morphSVG: { shape: ".path1", type: "rotational" } });

  .to(".path1", {duration: 2, morphSVG: { shape: ".path2", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path3", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path4", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path5", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path6", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path7", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path2", shapeIndex: "auto" } })
  .to(".path1", {duration: 2, morphSVG: { shape: ".path1", shapeIndex: "auto" } });

//   const paths = [".path1", ".path2", ".path3", ".path4", ".path5", ".path6", ".path7"];
//   const target = document.querySelector(".path1");

//   gsap.to(target, {
//     duration: 2, // Adjust duration for smoothness
//     morphSVG: paths,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut" // Smooth easing
//   });


//   console.log("after-morph");