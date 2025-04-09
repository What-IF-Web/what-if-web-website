window.startGame = function () {
    const k = kaboom({
        canvas: document.getElementById('game-canvas'),
        background: [0, 83, 255],
    });

    // --- Asset Loading ---
    loadSprite("ghost", "https://cdn.prod.website-files.com/67e5fcb6db0c048933236084/67e5fcb6db0c0489332360df_Ghost.svg");
    loadSprite("star_trash", "https://cdn.prod.website-files.com/67e5fcb6db0c048933236084/67e5fcb6db0c04893323617b_Star.webp");

    // --- Start Screen Scene Definition ---
    scene("start", () => {
        add([ rect(width(), height()), color(0, 0, 0), opacity(0.7), fixed(), z(10) ]);
        add([ text("Start Game", { size: 60 }), pos(center().x, center().y - 80), anchor("center"), color(255, 255, 255), z(20) ]);
        const btnW = 240;
        const btnH = 70;
        const startButton = add([
             rect(btnW, btnH, { radius: 8 }),
             pos(center().x, center().y + 40),
             anchor("center"),
             area(), // Still needed for onClick
             outline(3, rgb(200, 200, 200)),
             color(50, 150, 50),
             z(20),
             "startButton"
        ]);
        add([ text("Start", { size: 40 }), pos(startButton.pos), anchor("center"), color(255, 255, 255), z(21) ]);

        // Button Click Action (Hover logic removed)
        onClick("startButton", () => {
            go("battle"); // Transition to the battle scene
        });

        // Optional: Allow starting with Space key as well
         onKeyPress("space", () => {
             go("battle");
         });
         add([ text("(or press SPACE)", { size: 20 }), pos(center().x, center().y + 100), anchor("center"), color(200, 200, 200), z(20) ]);

    }); // End of "start" scene

    // --- Battle Scene Definition ---
    scene("battle", () => {
        k.background = [0, 0, 0]; // Black background for battle

        // --- Constants & Game State ---
        const BULLET_SPEED = 1200;
        const TRASH_SPEED = 120;
        const BOSS_SPEED = 48;
        const PLAYER_SPEED = 480;
        const BOSS_HEALTH = 100;
        const OBJ_HEALTH = 4;
        const PLAYER_HITBOX_W = 32;
        const PLAYER_HITBOX_H = 32;
        const PLAYER_START_SCALE = 0.25;
        const BOSS_HITBOX_W = 96;
        const BOSS_HITBOX_H = 96;

        const TRASH_SPAWN_LIMIT = 100;
        let trashSpawnedCount = 0;
        let trashClearedCount = 0;

        // --- Player Setup ---
        const player = add([
            sprite("ghost"), area({ width: PLAYER_HITBOX_W, height: PLAYER_HITBOX_H }),
            pos(width() / 2, height() - 64), anchor("center"), scale(PLAYER_START_SCALE), "player"
        ]);

        // --- Player Controls ---
        onKeyDown("left", () => { if (player.exists()) { player.move(-PLAYER_SPEED, 0); if (player.pos.x < 0) { player.pos.x = width(); } } });
        onKeyDown("right", () => { if (player.exists()) { player.move(PLAYER_SPEED, 0); if (player.pos.x > width()) { player.pos.x = 0; } } });
        player.onCollide("enemy", (e) => {
            if (player.exists()) { destroy(player); }
            if (e.exists()) { destroy(e); }
            shake(120);
            addExplode(center(), 12, 120, 30);
            wait(1, () => { go("battle"); });
        });

        // --- Effects ---
        function addExplode(p, n, rad, size) {
             for (let i = 0; i < n; i++) {
                wait(rand(n * 0.1), () => {
                    for (let j = 0; j < 2; j++) {
                        add([ pos(p.add(rand(vec2(-rad), vec2(rad)))), rect(4, 4), scale(1 * size, 1 * size), lifespan(0.1), anchor("center"), color(255, 255, 255) ]);
                    }
                });
            }
        }

        // --- Bullets ---
        function spawnBullet(p) {
            add([ rect(12, 48), area(), pos(p), anchor("center"), color(127, 127, 255), move(UP, BULLET_SPEED), offscreen({ destroy: true }), "bullet" ]);
        }
        onKeyPress("space", () => { if (player.exists()) { spawnBullet(player.pos.sub(16, 0)); spawnBullet(player.pos.add(16, 0)); } });

        // --- Enemies ---
        function spawnTrashMob() {
            if (trashSpawnedCount >= TRASH_SPAWN_LIMIT) { return; }
            trashSpawnedCount++;
            try {
                add([ sprite("star_trash"), area(), pos(rand(0, width()), 0), health(OBJ_HEALTH), anchor("bot"), "trash", "enemy", { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) }, ]);
                updateTrashCountUI();
            } catch (e) { console.error(`Failed to add trash sprite 'star_trash'.`, e); }
        }
        const trashSpawner = loop(0.4, () => {
            spawnTrashMob();
            if (trashSpawnedCount >= TRASH_SPAWN_LIMIT) { trashSpawner.cancel(); console.log("Trash spawn limit reached."); }
        });
        const boss = add([ rect(BOSS_HITBOX_W, BOSS_HITBOX_H), color(255, 0, 0), area({ width: BOSS_HITBOX_W, height: BOSS_HITBOX_H }), pos(width() / 2, 40), health(BOSS_HEALTH), scale(3), anchor("top"), "enemy", { dir: 1 }, ]);

        // --- Enemy Events ---
        on("death", "enemy", (e) => {
            if (e.is("trash")) { trashClearedCount++; updateTrashCountUI(); }
            if (e.exists()) { destroy(e); }
            shake(2);
            addKaboom(e.pos);
        });
        on("hurt", "enemy", (e) => { shake(1); });

        // --- UI Elements ---
        const trashCountUI = add([ text(`Trash Cleared: 0 / ${TRASH_SPAWN_LIMIT}`), pos(12, 32), fixed(), { value: 0 } ]);
        function updateTrashCountUI() { trashCountUI.text = `Trash Cleared: ${trashClearedCount} / ${TRASH_SPAWN_LIMIT}`; }
        const healthbar = add([ rect(width(), 24), pos(0, 0), color(107, 201, 108), fixed(), { max: BOSS_HEALTH, set(hp) { const currentHp = Math.max(0, hp); this.width = Math.max(0, width() * currentHp / this.max); this.flash = true; } }, ]);
        healthbar.onUpdate(() => { if (healthbar.flash) { healthbar.color = rgb(255, 255, 255); healthbar.flash = false; } else { healthbar.color = rgb(127, 255, 127); } });
        healthbar.set(boss.hp());

        // --- Collision Logic ---
        onCollide("bullet", "enemy", (b, e) => { if (b.exists() && e.exists()) { destroy(b); e.hurt(1); addExplode(b.pos, 1, 24, 1); } });

        // --- Movement Logic ---
        onUpdate("trash", (t) => { t.move(0, t.speed * 1); if (t.pos.y > height() + t.height) { destroy(t); trashClearedCount++; updateTrashCountUI(); } });
        boss.onUpdate(() => { boss.move(BOSS_SPEED * boss.dir, 0); const bossEdgeOffset = (BOSS_HITBOX_W / 2) * boss.scale.x; if (boss.dir === 1 && boss.pos.x + bossEdgeOffset >= width()) { boss.dir = -1; } if (boss.dir === -1 && boss.pos.x - bossEdgeOffset <= 0) { boss.dir = 1; } });

        // --- Boss Events ---
        boss.onHurt(() => { healthbar.set(boss.hp()); });
        boss.onDeath(() => { go("win", { boss: "placeholder" }); });

        // Initial UI updates
        updateTrashCountUI();

    }); // End of "battle" scene

    // --- Win Scene Definition ---
    scene("win", ({ boss }) => {
        add([ rect(width(), height()), color(0, 0, 0), opacity(0.7), fixed(), z(10) ]);
        if (boss === "placeholder") { add([ text("BOSS DEFEATED!", {size: 60}), anchor("center"), pos(width() / 2, height() / 2 - 30), z(20), color(255,255,255) ]); }
        else { /* Fallback logic */ const displayName = boss || "UNKNOWN"; try { if (k.getData(displayName)) { add([ sprite(displayName), color(255, 0, 0), anchor("center"), scale(8), pos(width() / 2, height() / 2), z(20) ]); } else { throw new Error(`Sprite data for '${displayName}' not found.`); } } catch(e) { console.error("Failed to display boss sprite in win scene:", e); add([ text("YOU WIN!", {size: 60}), anchor("center"), pos(width() / 2, height() / 2 - 30), z(20), color(255,255,255) ]); } }
        add([ text("Press SPACE to play again", { size: 32 }), pos(width() / 2, height() - 60), anchor("center"), z(20), color(255,255,255) ]);
        onKeyPress("space", () => { go("battle"); });
    }); // End of "win" scene

    // --- Start Game ---
    try { go("start"); }
    catch (e) { console.error("Failed to start initial game scene.", e); add([ text("Error loading game. Check console.", { size: 20, width: width() - 40 }), pos(width() / 2, height() / 2), anchor("center"), color(255, 0, 0) ]); }

}; // End of window.startGame