console.log("✅ app.js loaded. Checking for home.js...");

gsap.registerPlugin(
  ScrollTrigger,
  SplitText,
  DrawSVGPlugin,
  MotionPathPlugin,
  ScrollSmoother
);

ScrollSmoother.create({
  content: ".main-wrapper",
  smooth: 0.8,
  effects: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const url = window.location.pathname;

  const scriptsMap = new Map([
    [
      ".section_home-header",
      {
        src: "https://what-if-web.github.io/what-if-web-website/home.js",
        id: "home-script",
      },
    ],
    [
      ".section_case-study-header",
      {
        src: "https://what-if-web.github.io/what-if-web-website/case-studies-template.js",
        id: "case-study-script",
      },
    ],
    [
      ".section_case-studies",
      {
        src: "https://what-if-web.github.io/what-if-web-website/case-studies.js",
        id: "case-studies-script",
      },
    ],
    [
      ".section_not-found-header",
      {
        src: "https://what-if-web.github.io/what-if-web-website/not-found.js",
        id: "not-found-script",
      },
    ],
  ]);

  const urlScriptsMap = new Map([
    [
      "pricing",
      {
        src: "https://what-if-web.github.io/what-if-web-website/pricing.js",
        id: "pricing-script",
      },
    ],
    [
      "contact",
      {
        src: "https://what-if-web.github.io/what-if-web-website/contact.js",
        id: "contact-script",
      },
    ],
    [
      "roast",
      {
        src: "https://what-if-web.github.io/what-if-web-website/roast.js",
        id: "roast-script",
      },
    ],
  ]);

  function preloadAndExecuteScript(src, id) {
    if (!document.getElementById(id)) {
      console.log(`📡 Attempting to load: ${src}`);
      const script = document.createElement("script");
      script.src = src + "?v=" + Date.now(); // Prevents caching issues
      script.id = id;
      script.defer = true;
      script.onload = () => console.log(`✅ Successfully loaded: ${src}`);
      script.onerror = () => console.error(`❌ Failed to load: ${src}`);
      document.head.appendChild(script);
    } else {
      console.log(`🔹 Script ${id} already loaded.`);
    }
  }

  // Load scripts based on elements found in DOM
  scriptsMap.forEach(({ src, id }, selector) => {
    if (document.querySelector(selector)) {
      preloadAndExecuteScript(src, id);
    }
  });

  // Load scripts based on URL matching
  urlScriptsMap.forEach(({ src, id }, key) => {
    if (url.includes(key)) {
      preloadAndExecuteScript(src, id);
    }
  });

  // Observer to catch dynamically added elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          scriptsMap.forEach(({ src, id }, selector) => {
            if (node.matches(selector) && !document.getElementById(id)) {
              preloadAndExecuteScript(src, id);
              observer.disconnect(); // Stop observing after loading script
            }
          });
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Testimonial slider initialization
  new Swiper("#testimonials-slider", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 8,
    grabCursor: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 2200, disableOnInteraction: false },
    speed: 600,
    breakpoints: {
      478: { slidesPerView: 2 },
      991: { slidesPerView: 3, spaceBetween: 16 },
      1366: { slidesPerView: 4 },
    },
  });

  // Testimonial pagination color change based on variant
  const variantField = document.querySelector(".wf-variant-dropdown");
  if (variantField?.value === "White") {
    const style = document.createElement("style");
    style.textContent = `.swiper-pagination-bullet { background-color: var(--background-color--background-black) !important; }`;
    document.head.appendChild(style);
  }

  // Confetti on form submit
  const confettiEffect = () => {
    setTimeout(() => {
      confetti({
        particleCount: 150,
        startVelocity: 30,
        spread: 360,
        scalar: 3,
        flat: true,
        origin: { x: 0.5, y: 0 },
        shapes: ["square", "diamonds"],
        colors: [
          "#A41212",
          "#FE0D04",
          "#C36A66",
          "#008B47",
          "#FFFF00",
          "#0074E3",
          "#FF9CD2",
          "#3FDCE3",
          "#FFC25D",
          "#CDEAF2",
        ],
      });
    }, 1600);
  };

  document.querySelectorAll("#email-form, #footer-form").forEach((form) => {
    form.addEventListener("submit", confettiEffect);
  });

  // Navbar toggle
  document.addEventListener("click", (event) => {
    if (
      event.target.matches(
        ".navbar_menu-button, .button.is-small.is-navbar.is-open"
      )
    ) {
      document.body.classList.toggle("no-scroll");
    }
  });
});
