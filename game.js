window.startGame = function() {
    kaboom({
        canvas: document.getElementById('game-canvas'),
        background: [ 0, 83, 255, ], 
    });

    loadFont("calimate", "https://cdn.prod.website-files.com/67e5fcb6db0c048933236084/67e5fcb6db0c048933236096_Calimate-Black.woff2");


    scene("game", () => {
        // Define game constants
        const PADDLE_WIDTH = 100;
        const PADDLE_HEIGHT = 20;
        const BALL_SIZE = 10;
        const BALL_SPEED = 200;
        const BRICK_ROWS = 5;
        const BRICK_COLS = 10;
        const GAP = 5;
        const MARGIN = 10;
        const brickWidth = (width() - MARGIN * 2 - GAP * (BRICK_COLS - 1)) / BRICK_COLS;
        const brickHeight = 20;

        // Initialize score system
        let score = 0;
        const scoreLabel = add([
            text("Score: 0", 16),
            pos(10, 10),
            fixed(), // stays in the same position
        ]);

        // Pause system variables
        let isPaused = false;
        let pauseText;

      // Listen for both "p" and "escape" keys to toggle pause
        ["p", "escape"].forEach(key => {
            onKeyPress(key, () => {
                if (!isPaused) {
                    isPaused = true;
                    pauseText = add([
                        text("Pausedddd", 32, { font: "calimate" }),
                        pos(width() / 2, height() / 2),
                        anchor("center"),
                        fixed(),
                    ]);
                } else {
                    isPaused = false;
                    destroy(pauseText);
                }
            });
        });


        // Add paddle
        const paddle = add([
            rect(PADDLE_WIDTH, PADDLE_HEIGHT),
            pos(width() / 2, height() - 30),
            anchor("center"),
            area(),
            color(0, 255, 0),
            "paddle",
        ]);

        // Add ball
        const ball = add([
            rect(BALL_SIZE, BALL_SIZE),
            pos(width() / 2, height() - 50),
            anchor("center"),
            area(),
            color(255, 255, 255),
            { vel: vec2(BALL_SPEED, -BALL_SPEED) },
        ]);

        // Create a grid of bricks
        for (let row = 0; row < BRICK_ROWS; row++) {
            for (let col = 0; col < BRICK_COLS; col++) {
                add([
                    rect(brickWidth, brickHeight),
                    pos(MARGIN + col * (brickWidth + GAP), MARGIN + row * (brickHeight + GAP)),
                    area(),
                    color(255, 0, 0),
                    "brick",
                ]);
            }
        }

        // Paddle controls: move left and right (only when not paused)
        onKeyDown("left", () => {
            if (isPaused) return;
            paddle.move(-400, 0);
            if (paddle.pos.x - PADDLE_WIDTH / 2 < 0) {
                paddle.pos.x = PADDLE_WIDTH / 2;
            }
        });
        onKeyDown("right", () => {
            if (isPaused) return;
            paddle.move(400, 0);
            if (paddle.pos.x + PADDLE_WIDTH / 2 > width()) {
                paddle.pos.x = width() - PADDLE_WIDTH / 2;
            }
        });

        // Update ball movement and handle wall collisions (skipped when paused)
        ball.onUpdate(() => {
            if (isPaused) return;
            ball.move(ball.vel);

            // Bounce off left/right walls
            if (ball.pos.x < BALL_SIZE / 2 || ball.pos.x > width() - BALL_SIZE / 2) {
                ball.vel.x = -ball.vel.x;
            }
            // Bounce off top wall
            if (ball.pos.y < BALL_SIZE / 2) {
                ball.vel.y = -ball.vel.y;
            }
            // Lose condition: ball falls below the bottom
            if (ball.pos.y > height()) {
                go("lose", { score: score });
            }
        });

        // Bounce the ball off the paddle and adjust horizontal speed based on impact position
        ball.onCollide("paddle", () => {
            if (isPaused) return;
            ball.vel.y = -Math.abs(ball.vel.y);
            const diff = ball.pos.x - paddle.pos.x;
            ball.vel.x = diff * 5;
        });

        // Bounce the ball off a brick, destroy the brick, and update score
        ball.onCollide("brick", (brick) => {
            if (isPaused) return;
            ball.vel.y = -ball.vel.y;
            destroy(brick);
            score += 100;
            scoreLabel.text = "Score: " + score;
        });

        // Check if all bricks are destroyed (win condition) when not paused
        onUpdate(() => {
            if (isPaused) return;
            if (get("brick").length === 0) {
                go("win", { score: score });
            }
        });
    });

    // Lose Scene
    scene("lose", ({ score }) => {
        add([
            text("Game Over\nScore: " + score, 32),
            pos(width() / 2, height() / 2),
            anchor("center"),
        ]);
        wait(2, () => {
            go("game");
        });
    });

    // Win Scene
    scene("win", ({ score }) => {
        add([
            text("You Win!\nScore: " + score, 32),
            pos(width() / 2, height() / 2),
            anchor("center"),
        ]);
        wait(2, () => {
            go("game");
        });
    });

    // Start the game scene
    go("game");
}