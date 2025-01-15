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