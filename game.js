// game.js (Modified)
console.log("game.js loaded");

function startGame() {
    console.log("start game started");
    // --- Game Constants ---
    // (Keep these as they are)
    const PADDLE_SPEED = 400;
    const BALL_START_SPEED = 300;
    // ... (other constants) ...
    const POWERUP_SPEED = 100;

    // --- Game Dimensions (MATCH YOUR MODAL/CANVAS SIZE) ---
    // !! IMPORTANT: Adjust these to the pixel dimensions you want the game canvas to have inside the modal !!
    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 600;

    // Check if Kaboom is already initialized on this canvas to prevent errors on rapid open/close
    const canvas = document.getElementById("game-canvas");
    if (!canvas || canvas.dataset.kaboomInitialized === "true") {
        if (canvas) console.log("Kaboom already initialized on this canvas.");
        // Optionally refocus if re-opening without full re-init
         // if (canvas) canvas.focus();
        return; // Exit if no canvas or already initialized
    }
     if (window.kaboomInstance) {
        // A simple way to try and reset if needed - might not be perfect
        // Ideally, Kaboom would offer a destroy() method.
        // For now, we rely on the MutationObserver setting the flag below.
        console.log("Attempting to reuse Kaboom context (may have issues).")
     }


    // Initialize Kaboom on the specific canvas
    const k = kaboom({
        // global: true, // Keep global for simplicity unless you need fine-grained control/cleanup
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
        canvas: canvas, // Target the specific canvas element
        background: [0, 0, 0], // Black background
        debug: false, // Turn off debug for production
        // scale: 1, // Default scale is 1
    });

    // Mark the canvas as having Kaboom initialized
    canvas.dataset.kaboomInitialized = "true";
    window.kaboomInstance = k; // Store instance globally if needed (e.g., for manual stop attempts)


    // --- Asset Loading (Placeholders) ---
    // (Keep these as they are or add your actual assets)
    // k.loadSprite(...)
    // k.loadSound(...)

    // --- Game Scene ---
    k.scene("game", ({ level, score, lives }) => {
        // --- Setup Layers ---
        k.layers(['bg', 'obj', 'ui'], 'obj');

        // --- UI Elements ---
        // Use k.width() and k.height() which now refer to GAME_WIDTH/GAME_HEIGHT
        const scoreLabel = k.add([
            k.text(`Score: ${score}`),
            k.pos(10, 10),
            k.layer('ui'),
            { value: score },
            k.scale(2)
        ]);

        const levelLabel = k.add([
            k.text(`Level: ${level}`),
            k.pos(k.width() * 0.5, 10),
            k.origin('center'),
            k.layer('ui'),
            { value: level },
            k.scale(2)
        ]);

        const livesLabel = k.add([
            k.text(`Lives: ${lives}`),
            k.pos(k.width() - 10, 10),
            k.origin('topright'),
            k.layer('ui'),
            { value: lives },
            k.scale(2)
        ]);

        // --- Add Paddle ---
        const paddle = k.add([
            k.rect(PADDLE_WIDTH, PADDLE_HEIGHT),
            k.pos(k.width() / 2, k.height() - 40),
            k.origin('center'),
            k.area(),
            k.color(255, 255, 255),
            "paddle",
        ]);

        // --- Paddle Movement ---
        k.onKeyDown('left', () => {
            paddle.move(-PADDLE_SPEED, 0);
            if (paddle.pos.x < PADDLE_WIDTH / 2) {
                paddle.pos.x = PADDLE_WIDTH / 2;
            }
        });
        k.onKeyDown('right', () => {
            paddle.move(PADDLE_SPEED, 0);
            if (paddle.pos.x > k.width() - PADDLE_WIDTH / 2) {
                paddle.pos.x = k.width() - PADDLE_WIDTH / 2;
            }
        });

        // --- Function to Create a Ball ---
        function spawnBall(startPos) {
            const currentBallSpeed = BALL_START_SPEED + (level - 1) * 25;
            const ball = k.add([
                k.pos(startPos),
                k.circle(BALL_RADIUS),
                k.color(255, 255, 0),
                k.area({ width: BALL_RADIUS * 2, height: BALL_RADIUS * 2 }),
                k.origin('center'),
                {
                    dir: k.vec2(Math.random() < 0.5 ? 1 : -1, -1).normalize(),
                    speed: currentBallSpeed,
                },
                "ball",
            ]);

            ball.onUpdate(() => {
                ball.move(ball.dir.scale(ball.speed));
                // Bounce off left/right walls
                if (ball.pos.x < BALL_RADIUS || ball.pos.x > k.width() - BALL_RADIUS) {
                    ball.dir.x = -ball.dir.x;
                    // k.play("bounce", { volume: 0.3 });
                }
                // Bounce off top wall
                if (ball.pos.y < BALL_RADIUS) {
                    ball.dir.y = -ball.dir.y;
                    // k.play("bounce", { volume: 0.3 });
                }
                // Ball fell off bottom
                if (ball.pos.y > k.height()) {
                    k.destroy(ball);
                    // k.play("loseLife", { volume: 0.5 });

                    if (k.get("ball").length === 0) {
                        livesLabel.value--;
                        livesLabel.text = `Lives: ${livesLabel.value}`;
                        if (livesLabel.value <= 0) {
                             // Stop music maybe? music?.stop();
                            k.go("gameOver", { score: scoreLabel.value });
                        } else {
                            paddle.pos = k.vec2(k.width() / 2, k.height() - 40);
                            spawnBall(paddle.pos.sub(0, PADDLE_HEIGHT / 2 + BALL_RADIUS + 5));
                        }
                    }
                }
            });
        }

        // Spawn initial ball
        spawnBall(paddle.pos.sub(0, PADDLE_HEIGHT / 2 + BALL_RADIUS + 5));


        // --- Brick Building ---
        const brickLayout = [ "33333333", "22222222", "11111111"]; // Example
        const totalBrickWidth = brickLayout[0].length * (BRICK_WIDTH + BRICK_PADDING) - BRICK_PADDING;
        const startX = (k.width() - totalBrickWidth) / 2;
        const startY = 60;
        let brickCount = 0;

        const levelConf = {
            width: BRICK_WIDTH + BRICK_PADDING,
            height: BRICK_HEIGHT + BRICK_PADDING,
            pos: k.vec2(startX, startY),
             "1": () => [ k.rect(BRICK_WIDTH, BRICK_HEIGHT), k.color(0, 255, 0), k.area(), k.origin('topleft'), { strength: 1 }, "brick", "brick-1" ],
             "2": () => [ k.rect(BRICK_WIDTH, BRICK_HEIGHT), k.color(255, 165, 0), k.area(), k.origin('topleft'), { strength: 2 }, "brick", "brick-2" ],
             "3": () => [ k.rect(BRICK_WIDTH, BRICK_HEIGHT), k.color(255, 0, 0), k.area(), k.origin('topleft'), { strength: 3 }, "brick", "brick-3" ],
        };
        k.addLevel(brickLayout, levelConf);
        brickCount = k.get("brick").length;


        // --- Collision Logic ---
        k.onCollide("ball", "paddle", (ball, paddle) => {
            ball.dir.y = -Math.abs(ball.dir.y);
            let hitPos = (ball.pos.x - paddle.pos.x) / (PADDLE_WIDTH / 2);
            ball.dir.x = k.clamp(hitPos * 1.5, -1.5, 1.5); // Clamp extreme angles
            ball.dir = ball.dir.normalize();
             // k.play("bounce", { volume: 0.3 });
        });

        k.onCollide("ball", "brick", (ball, brick) => {
            ball.dir.y = -ball.dir.y;
            brick.strength--;
            // k.play("bounce", { volume: 0.2 });

            // Update color visual feedback (example)
            if (brick.is("brick-3")) brick.color = brick.strength === 2 ? k.rgb(255, 165, 0) : k.rgb(0, 255, 0);
            else if (brick.is("brick-2")) brick.color = k.rgb(0, 255, 0);


            if (brick.strength <= 0) {
                k.destroy(brick);
                k.shake(3);
                // k.play("break", { volume: 0.5 });
                scoreLabel.value += 10 * level;
                scoreLabel.text = `Score: ${scoreLabel.value}`;
                brickCount--;

                if (k.rand() < 0.2) { // 20% chance for powerup
                     spawnPowerUp(brick.pos.add(BRICK_WIDTH / 2, BRICK_HEIGHT / 2)); // Pass center pos
                }

                if (brickCount <= 0) {
                    // music?.stop();
                    k.go("game", { level: level + 1, score: scoreLabel.value, lives: livesLabel.value });
                }
            }
        });


        // --- Power-up Logic ---
        function spawnPowerUp(spawnPos) {
             const powerUpType = k.choose(["extraLife", "extraBall"]);
             let puColor = k.rgb(0, 150, 255);
             let puTag = "powerup";
             if (powerUpType === "extraLife") { puColor = k.rgb(0, 255, 150); puTag = "powerup-life"; }
             else if (powerUpType === "extraBall") { puColor = k.rgb(255, 255, 100); puTag = "powerup-ball"; }

             const powerup = k.add([
                 k.rect(15, 15),
                 k.pos(spawnPos), // Use passed position
                 k.origin('center'),
                 k.color(puColor),
                 k.area(),
                 k.move(k.DOWN, POWERUP_SPEED),
                 k.cleanup(), // Remove when it goes off-screen
                 puTag,
                 powerUpType,
             ]);
        }

         k.onCollide("paddle", "powerup-life", (paddle, powerup) => {
             k.destroy(powerup);
             livesLabel.value++;
             livesLabel.text = `Lives: ${livesLabel.value}`;
             // k.play("powerup", { volume: 0.6 });
         });

         k.onCollide("paddle", "powerup-ball", (paddle, powerup) => {
             k.destroy(powerup);
             spawnBall(paddle.pos.sub(0, PADDLE_HEIGHT / 2 + BALL_RADIUS + 5));
             // k.play("powerup", { volume: 0.6 });
         });

        // --- Start Music (if loaded) ---
        // const music = k.play("music", { loop: true, volume: 0.4 });

         // Focus the canvas when the game scene starts to capture keys
         canvas.focus();

    }); // End of "game" scene definition

    // --- Game Over Scene ---
    k.scene("gameOver", ({ score }) => {
        k.add([
            k.text(`Game Over!\nScore: ${score}\n\nPress SPACE to Restart`, { size: Math.min(30, k.width() / 15) }), // Responsive text size
            k.pos(k.width() / 2, k.height() / 2),
            k.origin('center'),
            k.color(255, 255, 255),
        ]);

        k.onKeyPress("space", () => {
            // NOTE: This restarts the game scene but doesn't fully re-run startGame() unless the modal was closed/opened.
            k.go("game", { level: 1, score: 0, lives: 3 });
        });

        // Optional: Attempt to unfocus canvas on game over
        // canvas.blur();
    });

    // --- Start the Game ---
    k.go("game", { level: 1, score: 0, lives: 3 });

} // End of startGame() function