
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText) 
gsap.registerPlugin(DrawSVGPlugin)
gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(MorphSVGPlugin)


//Case studies page

var csHeaderLoad = gsap.timeline({scrollTrigger: {trigger: ".section_case-studies"}});

csHeaderLoad.from(".case-studies_content-top > h1", {y: 150, duration: .75, opacity: 0, ease: "power3.out"});
csHeaderLoad.from(".case-studies_content-top > p", {y: 100, duration: 1, opacity: 0, ease: "power3.out"}, "<0.125");
csHeaderLoad.from(".case-studies_filter-item", {y: 120, duration: 0.75, stagger: 0.125, ease: "power3.out"}, "<0.5");
csHeaderLoad.from(".reset-link", {y: 120, duration: 1, opacity: 0, ease: "power3.out"}, ">-0.25");


const cards = document.querySelectorAll(".case-studies_item");

cards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom",
      end: "top 60%",
      scrub: true,
      markers: false
    },
    scale: 0.8,
    y: 100,
    ease: "power3.out",
    rotateX: 45,
    opacity: 0
  });
});

var solutionsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_solutions", start: "top+=100 center"}});

solutionsLoad.from(".solutions_bespoke-item", {y: 100, opacity: 0, duration: 1, ease: "power4.out"}, 0);
solutionsLoad.from(".solutions_bespoke-item > h2, .solutions_bespoke-item > p", {y: 80, opacity: 0, duration: 0.875, ease: "power3.out", stagger: "0.05"}, "<0.25");
solutionsLoad.from(".solutions_service-item", {y: 100, opacity: 0, duration: 1, ease: "power4.out", stagger: "0.125"}, 0.35);
solutionsLoad.from(".solutions_service-item > .solutions_service-icon-wrapper > .solutions_service-icon", {y: 50, opacity: 0, duration: 1, ease: "power4.out", stagger: "0.125"}, 0.25);

//contact page stuff

var contactLoad = gsap.timeline({scrollTrigger: {trigger: ".section_contact-header"}});

contactLoad.from(".contact-header_heading-wrapper", {y: 80, opacity: 0, duration: 1, ease: "power3.out"}, 0);
contactLoad.from(".container-header_card", {y: 50, opacity: 0, duration: 1, ease: "power4.out"}, 0.125);
contactLoad.from(".contact-header_info-callout", {y: 50, opacity: 0, duration: 1, ease: "power4.out"}, 0.25);
contactLoad.from(".contact-header_info-callout > h2, .contact-header_info-callout > p", {y: 30, opacity: 0, duration: .75, ease: "power3.out", stagger: "0.125"}, 0.35);
contactLoad.from(".contact-header_contact", {y: 30, opacity: 0, duration: .75, ease: "power3.out", stagger: 0.125}, 0.625);
contactLoad.from(".contact-header_form-wrapper", {y: 100, opacity: 0, duration: 1.25, ease: "power4.out"}, 0.75);
contactLoad.from(".contact-header_form > .form_input-wrapper, .contact-header_form > .button", {y: 10, opacity: 0, duration: 0.5, stagger: 0.125}, "<0.125");
contactLoad.to(".button.is-form-submit", {duration: 0.25, scale: 1.05, ease: "power3.inOut", repeat: 1, yoyo: true}, ">")

//FAQ section

var faqLoad = gsap.timeline({scrollTrigger: {trigger: ".section_faq", start: "top+=100 center"}});

faqLoad.from("#faq-heading", {y: 80, opacity: 0, duration: 0.875, ease: "power3.out"}, 0);
faqLoad.from(".faq_list > .faq_item", {y: 50, opacity: 0 , duration: 1, ease: "power4.out", stagger: 0.125}, 0.25);
faqLoad.from(".faq_lottie", {scale: 0, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.25}, "<0.5");
//need to add optional cta bit

//Pricing stuff
var pricingLoad = gsap.timeline({scrollTrigger: {trigger: ".section_pricing"}});

pricingLoad.from(".pricing_content-top > h1, .pricing_content-top > .pricing_paragraph-wrapper", {y: 80, opacity: 0, duration: 0.875, ease: "power3.out", stagger: 0.125}, 0);

pricingLoad.from(".pricing_card.is-left", {y: 200, opacity: 0, scale: 0.9, rotateZ: -15, duration: 1, ease: "power4.out"}, 0.25);
pricingLoad.from(".pricing_card.is-centre", {y: 200, opacity: 0, scale: 0.9, duration: 1, ease: "power4.out"}, 0.375);
pricingLoad.from(".pricing_card.is-right", {y: 200, opacity: 0, scale: 0.9, rotateZ: 15, duration: 1, ease: "power4.out"}, 0.5);

/* testimonial slider */
$(document).ready(function () {
    var testimonialsSlider = new Swiper('#testimonials-slider', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 8,
        draggable: true,
        grabCursor: true,
        pagination: {
            el: '.swiper_pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2200,
            disableOnInteraction: false,
        },
        speed: 600,
        breakpoints: {
          478: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          1366: {
            slidesPerView: 4
          }
        }
    });
});


//home page and general stuff

//morphing shape for the projects section
var morph1 = gsap.to(".shape-1", { duration: 3, morphSVG:".shape-2", repeat:-1, yoyo:true, repeatDelay:0})
var morph2 = gsap.to(".shape-3", { duration: 3, morphSVG:".shape-4", repeat:-1, yoyo:true, repeatDelay:0})
var morph3 = gsap.to(".shape-5", { duration: 3, morphSVG:".shape-6", repeat:-1, yoyo:true, repeatDelay:0})

//cards scroll through animation for the services section
$(document).ready(function () {
  let cardsArray = [];

  // Select all .card.is-services elements inside .services_list
  $('.services_list .card.is-services').each(function () {
    let card = $(this);
    let linkTargetID = card.find('.card_link-target').attr('id');

    // Push the card element and ID into the array as an object
    cardsArray.push({
      cardElement: card,
      linkTargetID: linkTargetID
    });
  });
  cardsArray.forEach(function (item) {
    // GSAP ScrollTrigger animation for each card
    gsap.fromTo(item.cardElement,
      { opacity: 0, scale: 0.2, y: 0 }, 
      { 
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `#${item.linkTargetID}`, // Trigger based on the ID
          start: "top 90%", // Adjust to trigger when card enters viewport
          end: "top 20%",
          scrub: true, 
          markers: false
        }
      }
    );
  });
});

//splitHeadingIntoLines
var heroSplit = new SplitText(".home-header_heading", {type: "lines"});

//hero section animation
var heroLoad = gsap.timeline({scrollTrigger: {trigger: ".section_home-header"}});

//content
heroLoad.from(heroSplit.lines, {duration: 1, opacity: 0, ease: "power4.out", y: 500, stagger: 0.125}).from(".home-header_heading", {scale: 0.6, duration: 0.625, ease: "back.out(1.7)"}, ">-0.5");
heroLoad.from(".home-header_subheading", {duration: .875, y:300, opacity: 0, ease: "power4.out"}, ">-0.25");
heroLoad.from(".home-header_component > a", {duration: .875, y: 200, opacity: 0, ease: "power3.out"}, ">-0.25");

//critters
heroLoad.from(".home-header_lottie.is-dinkus", {y: 70, x: 180, duration: 0.5, scale: 0, ease: "power4.out"}, ">-0.5");
heroLoad.from(".home-header_lottie.is-brazzo", {y: -200, x: 240, duration: 0.625, scale: 0, ease: "power4.out"}, "<-0.25");
heroLoad.from(".home-header_lottie.is-slice", {y: -100, x: -200, duration: 0.75, scale: 0, ease: "power4.out"}, "<-0.125");

//featured projects animation
var projectsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_projects", start: "top+=100 center"}});

var projectsSplit = new SplitText(".projects_heading-wrapper > h2", {type: "lines"});

projectsLoad.from(projectsSplit.lines, {duration: 1, opacity: 0, y: 150, scale: 0.8, ease: "power3.out", stagger: 0.125}); 
projectsLoad.from(".projects_content > .projects_item > .projects_card", {duration: 1.5, opacity: 0, y:100, ease: "power3.out", stagger: 0.125}, ">-0.5");
projectsLoad.from(".projects_component > a", {y:100, opacity: 0, ease: "power3.out"}, "<0.25");

projectsLoad.from("#projects-highlight", {color: "EB5B30", duration: 0}, "<").to("#projects-highlight", {scale: 1.1, duration: 0.3, ease: "power2.in"}, "<").to("#projects-highlight", {scale: 1, duration: 0.2, ease: "power2.out"}, "<0.4");
projectsLoad.from("#projects-line > svg > path", {drawSVG: 0, duration: 0.6, ease: "power3.out"}, "<");

//solutions/services section animation
var servicesLoad = gsap.timeline({scrollTrigger: {trigger: ".section_services", start: "top+=100 center"}});

servicesLoad.from(".services_heading-wrapper > h2", {y: 200, scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"});
servicesLoad.from(".services_service-list > .services_service-item", {y: 100, opacity: 0, duration: .5, stagger: 0.25, ease: "power.4out"}, "<0.5");

//CTA FORM ANIMATION
var ctaFormTrigger = gsap.timeline({scrollTrigger: {trigger: ".cta_form", start: "top+=100 center"}});

//CTA FORM ELEMENTS POP IN
ctaFormTrigger.to("#cta-star-1", {duration: 0.4, scale: 1.6, ease: "power3.inOut", repeat: 1, yoyo: true}, 0);
ctaFormTrigger.to("#cta-star-2", {duration: 0.3, scale: 1.4, ease: "power3.inOut", repeat: 1, yoyo: true}, 0.25);
ctaFormTrigger.from(".cta_lottie", {duration: 0.75, scale: 0.8, y: 200, ease: "power3.out"}, "<");
ctaFormTrigger.from(".cta_burst-lines > svg > path", {drawSVG: 0, opacity: 0, scale: 0.9, duration: .25, ease: "power2.in"}, "<.25");
ctaFormTrigger.from("#cta-form-orange", {color: "#0f2756", duration: .125, ease: "power3.out"}, "<.5");
ctaFormTrigger.to("#cta-form-orange", {scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3}, "<");
ctaFormTrigger.from(".cta_scribble > svg > path", {drawSVG: 0, duration: 0.75, ease: "power4.in"}, "<0.125");

//process section animation
var processLoad = gsap.timeline({scrollTrigger: {trigger: ".process_component", scrub: true, start: "top bottom", end: "bottom bottom", markers: false}});

//testimonials section animation
var testimonialsLoad = gsap.timeline({scrollTrigger: {trigger: ".section_testimonials", start: "top+=100 center"}});

var testimonialSplit = new SplitText("#testimonial-heading", {type: "lines"});

testimonialsLoad.from(".testimonials_star-wrapper > div", {opacity: 0, y: 75, duration: 0.75, ease: "power3.out"}).from(testimonialSplit.lines, {opacity: 0, y: 100, duration: 1, scale: 0.8, stagger: 0.125, ease: "power4.out"}, "<0.25");

//About Section Animation
var aboutLoad = gsap.timeline({scrollTrigger: {trigger: ".section_home-about", start: "top center"}});

var aboutSplit = new SplitText(".home-about_content-left > h2", {type: "lines"});

//text
aboutLoad.from(aboutSplit.lines, {y: 100, scale: 0.8, opacity: 0, stagger: 0.125, ease: "power3.out"}, 0);
aboutLoad.from(".home-about_content-left > p, .home-about_content-left > a", {duration: 1, ease:"power3.out", opacity: 0, stagger: 0.125}, "<0.5");

//images
aboutLoad.from(".home-about_background-shape", {scale: 0}, -.25);
aboutLoad.from(".home-about_card-wrapper.is-first", {x: 2500, rotation: 100, duration: 1.25, ease: "power4.out"}, "<0.5");
aboutLoad.from(".home-about_card-wrapper.is-second", {x: 2500, rotation: 60, duration: 1.25, ease: "power4.out"}, 0.25);
aboutLoad.from(".home-about_card-wrapper.is-third", {x: 2000, rotation: 130, duration: 1.5, ease: "power4.out"}, 0.125);

aboutLoad.from(".home-about_lottie", {scale: 0, duration: 1, ease: "back.out(1.7)"}, ">0.125").from(".home-about_lottie-2", {scale: 0, duration: 1, ease: "back.out(1.7)"}, "<0.25");

//quote CTA animation
var ctaLoad = gsap.timeline({scrollTrigger: {trigger: ".section_quote-cta", start: "top+=100 center"}});

//main elements
ctaLoad.from(".quote-cta_component", {scale: 0.7, y: 400, duration: 1.75, ease:"power4.out"}).fromTo(".quote-cta_heading-wrapper", {opacity: 0, scale: 0, y: 300}, {opacity: 1, scale: 1, y: 100, duration: 1, ease: "power4.out"}, "<0.5");

//text span
// ctaLoad.from(".quote-cta_heading > .text-color-alternate", {color: "#fff9f3", duration: 0.5, ease: "power3.out"}, 0.75).to(".text-color-alternate", {scale: 1.2, duration: 0.25, ease: "power4.out"}).to(".text-color-alternate", {scale: 1, duration: 0.25,})
// .from("#ctaScribble", {drawSVG: 0, duration: 1, ease: "power4.in"}, "<-0.25");

ctaLoad.to(".quote-cta_heading > .text-color-alternate", {scale: 1.1, repeat: 1, yoyo: true, ease: "power2.inOut", duration: 0.3}, 1);
ctaLoad.from(".quote-cta_heading > .text-color-alternate", {color: "#fff9f3", duration: .125, ease: "power3.out"}, "<.125");
ctaLoad.from("#ctaScribble", {drawSVG: 0, duration: 1, ease: "power4.in"}, "<");

//content
ctaLoad.fromTo(".quote-cta_heading-wrapper", {y:100}, {y: 0, duration: 1, ease: "power2.out"}, "<.25");
ctaLoad.from(".quote-cta_subheading", {y:150, duration: 0.875, ease: "power2.out", opacity: 0}, "<0.5");
ctaLoad.from("#ctaButton", {y: 200, duration: 0.875, ease: "power2.out", opacity: 0,}, "<0.125");

//blog section
var blogLoad = gsap.timeline({scrollTrigger: {trigger: ".section_related-blog", start: "top+=100 center"}});

blogLoad.from(".related-blog_heading-wrapper > div", {y: 100, scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"}).from(".related-blog_list > .related-blog_item", {y:180, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.125}, "<0.5");

//footer animation
var footerLoad = gsap.timeline({scrollTrigger: {trigger: ".footer_component", start: "top+=100 center"}});

var footerSplit = new SplitText(".footer_top-wrapper > h2", {type: "lines"});

footerLoad.from(footerSplit.lines, {scale: 0.8, opacity: 0, y: 100, stagger: 0.125, ease: "power3.out", duration: 1}, 0);
footerLoad.from(".footer_top-wrapper > p", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.25");
footerLoad.from(".footer_form_component", {scale: 0.8, opacity: 0, y: 100, ease: "power3.out", duration: 1}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {opacity: 0, stagger: 0.125, ease: "power4.out", duration: 0.25}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {y: 50, opacity: 0, stagger: 0.125, ease: "power4.out", duration: 1}, "<0.5");

let mm = gsap.matchMedia();

// desktop
mm.add("(min-width: 991px)", () => {

  processLoad.fromTo("#process-heading", {lineHeight: "2"}, {lineHeight: "0.79"}, 0);
  processLoad.to("#process-heading", {y: -700, opacity: 0, ease: "power3.out"}, .5);
  processLoad.fromTo("#process-heading", {lineHeight: "0.79"}, {lineHeight: "1.5"}, "<");
  processLoad.to(".process_critter", {width: "100dvw", height: "50dvw", ease: "power4.out"}, ">-0.5");
  gsap.set(".process_card-wrapper > .card", {xPercent: -50, yPercent: -50, transformOrigin: "50%, 50%"});
  processLoad.to(".process_card-wrapper > .card", {stagger: 0.1, ease: "none", motionPath: {path: "#process-path", align: "#process-path", autoRotate: 180}}, ">");

  var ctaFormLoad = gsap.timeline({scrollTrigger: {trigger: ".cta_form-block", scrub: true, start: "top bottom", end: "bottom bottom", markers: false}});
  
  ctaFormLoad.from(".cta_graphic", {scale: 0.5, ease: "power3.out"}, 0);
  ctaFormLoad.from(".cta_form", { gap: 300, ease: "power3.out"}, 0.25);
  ctaFormLoad.to(".cta_form", {gap: 80, ease: "power3.out"}, ">");
  ctaFormLoad.to(".cta_form", {y: -300, ease: "power3.out"}, "<");
  ctaFormLoad.from("#cta-form-bottom", { opacity: "0", y: 700, ease: "power4.out"}, "<-0.125");
  ctaFormLoad.to(".cta_graphic", {y: -600, opacity: "0", ease: "power4.out"}, "<");

});
//mobile
mm.add("(max-width: 991px)", () => {

  processLoad.to("#process-heading", {y: -300, opacity: 0, ease: "power3.out"}, 1.15);
  processLoad.to(".process_critter", {y: -200, opacity: 0, ease: "power3.out"}, 1.2);
  processLoad.to(".process_card-container", {x: "-300rem", ease: "none", duration: 2}, ">-0.3");

});

// Pong Test
const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 800;
canvas.height = 400;

// Ball properties
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 40,
    speedX: 2, // Slowed down
    speedY: 2, // Slowed down
};

// Paddle properties
const paddleWidth = 10;
const paddleHeight = 100;
const paddleSpeed = 5;

// Left paddle
const leftPaddle = {
    x: 10,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: "white",
    dy: 0
};

// Right paddle (AI-controlled)
const rightPaddle = {
    x: canvas.width - 10 - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: "white"
};

// Scores
const scores = {
    left: 0,
    right: 0
};

// SVG image options for ball
const ballImages = {
    Tom: "https://cdn.prod.website-files.com/6719702b25f42f173940b521/6785fd3c9e6bc42063feb1f4_Placeholder%20Image%206%20(1).png", // Replace with actual SVG URLs
    Isaac: "https://cdn.prod.website-files.com/6719702b25f42f173940b521/6785fd147e8db7ea1405cd84_image%20(3).png" // Replace with actual SVG URLs
};

// Load the selected SVG image
const ballImage = new Image();
ballImage.onload = function() {
    ball.image = ballImage;
};

// Handle ball selection
document.getElementById("ballSelector").addEventListener("change", (e) => {
    const selected = e.target.value;
    if (ballImages[selected]) {
        ballImage.src = ballImages[selected];
    } else {
        ball.image = null; // Default to circle
    }
});

// Draw objects
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

// Draw the net
function drawNet() {
    ctx.setLineDash([10, 15]);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}

// Draw the scoreboard
function drawScores() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(scores.left, canvas.width / 4, 30);
    ctx.fillText(scores.right, (canvas.width * 3) / 4, 30);
}

// Reset ball position after a score
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX *= -1; // Switch direction after each score
}

// Draw the ball
function drawBall() {
    if (ball.image && ball.image.complete) {
        // Draw the selected SVG image
        ctx.drawImage(
            ball.image,
            ball.x - ball.radius,
            ball.y - ball.radius,
            ball.radius * 2,
            ball.radius * 2
        );
    } else {
        // Draw the default circle
        drawCircle(ball.x, ball.y, ball.radius, ball.color);
    }
}

// Update positions
function update() {
    // Move the ball
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Ball collision with top and bottom walls
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.speedY *= -1;
    }

    // Ball collision with paddles (with buffer)
    if (
        ball.x - ball.radius < leftPaddle.x + leftPaddle.width &&
        ball.y > leftPaddle.y - 10 && // Added buffer
        ball.y < leftPaddle.y + leftPaddle.height + 10
    ) {
        ball.speedX *= -1;
        ball.x = leftPaddle.x + leftPaddle.width + ball.radius; // Avoid ball getting stuck
    }

    if (
        ball.x + ball.radius > rightPaddle.x &&
        ball.y > rightPaddle.y - 10 && // Added buffer
        ball.y < rightPaddle.y + rightPaddle.height + 10
    ) {
        ball.speedX *= -1;
        ball.x = rightPaddle.x - ball.radius; // Avoid ball getting stuck
    }

    // Ball out of bounds (scoring)
    if (ball.x - ball.radius < 0) {
        scores.right++;
        resetBall();
    }
    if (ball.x + ball.radius > canvas.width) {
        scores.left++;
        resetBall();
    }

    // AI paddle movement
    let lastAIMoveTime = 0; // Track the last time the AI moved
const aiReactionDelay = 10; // Delay in frames before AI reacts
const maxAIMove = 2; // Limit how much the AI can move per frame
const randomnessFactor = 0.5; // Randomness to make AI miss
const missChance = 0.3; // Chance for AI to not react

// AI paddle movement with multiple adjustments
const paddleCenter = rightPaddle.y + rightPaddle.height / 2;
const randomAdjustment = (Math.random() - 0.5) * randomnessFactor * rightPaddle.height;

if (Math.abs(ball.y - paddleCenter) > 20 && Date.now() - lastAIMoveTime > aiReactionDelay && Math.random() > missChance) {
    if (ball.y < paddleCenter + randomAdjustment) {
        rightPaddle.y -= Math.min(maxAIMove, paddleCenter - ball.y); // Limited and random movement
    } else if (ball.y > paddleCenter + randomAdjustment) {
        rightPaddle.y += Math.min(maxAIMove, ball.y - paddleCenter); // Limited and random movement
    }
    lastAIMoveTime = Date.now(); // Update the time of last move
}


    // Player paddle movement
    leftPaddle.y += leftPaddle.dy;

    // Prevent paddles from going out of bounds
    leftPaddle.y = Math.max(0, Math.min(canvas.height - leftPaddle.height, leftPaddle.y));
    rightPaddle.y = Math.max(0, Math.min(canvas.height - rightPaddle.height, rightPaddle.y));
}

// Render everything
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw net
    drawNet();

    // Draw paddles
    drawRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height, leftPaddle.color);
    drawRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height, rightPaddle.color);

    // Draw ball
    drawBall();

    // Draw scores
    drawScores();
}

// Game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Key events
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") leftPaddle.dy = -paddleSpeed;
    if (e.key === "ArrowDown") leftPaddle.dy = paddleSpeed;
});

window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") leftPaddle.dy = 0;
});

// Initialize with the default ball
ballImage.src = ballImages.Tom;

// Start the game
gameLoop();