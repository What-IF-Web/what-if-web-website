window.startGame = function () {
    kaboom({
      canvas: document.getElementById('game-canvas'),
      background: [0, 83, 255], // Initial background, though scene might override
    });
  
    // --- Asset Loading ---
  
    // Ghost player sprite
    loadSprite("ghost", "https://cdn.prod.website-files.com/67e5fcb6db0c048933236084/67e5fcb6db0c0489332360df_Ghost.svg");
    // Placeholder boss sprite (due to issues with original SVG) - Not loaded as it's a rect now
    // loadSprite("wallbreaker", "...");
    // Trash mob sprite
    loadSprite("star_trash", "https://cdn.prod.website-files.com/67e5fcb6db0c048933236084/67e5fcb6db0c04893323617b_Star.webp");
  
    // --- Battle Scene Definition ---
    scene("battle", () => {
      // --- Constants ---
      const BULLET_SPEED = 1200;
      const TRASH_SPEED = 120;
      const BOSS_SPEED = 48;
      const PLAYER_SPEED = 480;
      const BOSS_HEALTH = 100;
      const OBJ_HEALTH = 4; // Health for trash mobs
      const PLAYER_HITBOX_W = 32; // Player hitbox width
      const PLAYER_HITBOX_H = 32; // Player hitbox height
      const PLAYER_START_SCALE = 0.25; // Player visual scale
      const BOSS_HITBOX_W = 96; // Boss placeholder hitbox width
      const BOSS_HITBOX_H = 96; // Boss placeholder hitbox height
  
      // --- Custom Components (Currently Unused) ---
      function grow(rate) {
          return { id: "grow", update() { const n = rate * dt(); this.scale.x += n; this.scale.y += n; } };
      }
      function late(t) {
          let timer = 0;
          return { id: "late", add() { this.hidden = true; }, update() { timer += dt(); if (timer >= t) { this.hidden = false; } } };
      }
  
      // --- Scene Setup ---
      const sky = add([ rect(width(), height()), color(0, 0, 0), opacity(0), fixed() ]);
  
      // --- Player Setup ---
      const player = add([
          sprite("ghost"),
          area({ width: PLAYER_HITBOX_W, height: PLAYER_HITBOX_H }), // Explicit hitbox
          pos(width() / 2, height() - 64),
          anchor("center"),
          scale(PLAYER_START_SCALE),
          // outline(4, rgb(0, 255, 0)), // Keep outline commented out unless needed for debugging
          "player"
      ]);
  
      // --- Player Controls ---
      onKeyDown("left", () => {
          if (player.exists()) {
              player.move(-PLAYER_SPEED, 0);
              if (player.pos.x < 0) { player.pos.x = width(); }
          }
      });
      onKeyDown("right", () => {
          if (player.exists()) {
              player.move(PLAYER_SPEED, 0);
              if (player.pos.x > width()) { player.pos.x = 0; }
          }
      });
  
      // Player collision with any enemy
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
                  for (let i = 0; i < 2; i++) {
                      add([
                          pos(p.add(rand(vec2(-rad), vec2(rad)))), rect(4, 4),
                          scale(1 * size, 1 * size), lifespan(0.1),
                          anchor("center"),
                      ]);
                  }
              });
          }
       }
  
      // --- Bullets ---
      function spawnBullet(p) {
          add([
              rect(12, 48), area(), pos(p), anchor("center"), color(127, 127, 255),
              // outline(4), // Keep outline commented out unless needed
              move(UP, BULLET_SPEED), offscreen({ destroy: true }), "bullet",
          ]);
       }
      onKeyPress("space", () => {
          if (player.exists()) {
              spawnBullet(player.pos.sub(16, 0));
              spawnBullet(player.pos.add(16, 0));
          }
      });
  
      // --- Enemies ---
      function spawnTrash() {
        try {
            add([
              sprite("star_trash"),
              area(),
              pos(rand(0, width()), 0),
              health(OBJ_HEALTH),
              anchor("bot"),
              // outline(4, rgb(255, 0, 0)), // Keep outline commented out unless needed
              "trash",
              "enemy",
              { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
            ]);
        } catch (e) {
            // Keep error log in case trash sprite fails later
            console.error(`Failed to add trash sprite 'star_trash'. Is it loaded correctly?`, e);
        }
        // Schedule next spawn
        wait(0.3, spawnTrash);
      }
  
      // Use a PLACEHOLDER RECTANGLE for the boss
      const boss = add([
        rect(BOSS_HITBOX_W, BOSS_HITBOX_H), // Draw placeholder rectangle
        color(255, 0, 0), // Make it red
        area({ width: BOSS_HITBOX_W, height: BOSS_HITBOX_H }), // Use explicit area
        pos(width() / 2, 40),
        health(BOSS_HEALTH),
        scale(3), // Scale the rectangle visually
        // outline(4, rgb(255, 100, 100)), // Keep outline commented out unless needed
        anchor("top"),
        "enemy",
        { dir: 1 },
      ]);
  
      // --- Enemy Events ---
      on("death", "enemy", (e) => {
          if (e.exists()) { destroy(e); }
          shake(2);
          addKaboom(e.pos);
       });
      on("hurt", "enemy", (e) => {
          shake(1);
       });
  
      // --- UI Elements ---
      const timer = add([ text("0.00"), pos(12, 32), fixed(), { time: 0 } ]);
      timer.onUpdate(() => { timer.time += dt(); timer.text = timer.time.toFixed(2); });
      const healthbar = add([
          rect(width(), 24), pos(0, 0), color(107, 201, 108), fixed(),
          {
              max: BOSS_HEALTH,
              set(hp) {
                  const currentHp = Math.max(0, hp);
                  this.width = Math.max(0, width() * currentHp / this.max);
                  this.flash = true;
              },
          },
      ]);
      healthbar.onUpdate(() => {
          if (healthbar.flash) {
              healthbar.color = rgb(255, 255, 255); healthbar.flash = false;
          } else {
              healthbar.color = rgb(127, 255, 127);
          }
       });
  
      // --- Collision Logic ---
      onCollide("bullet", "enemy", (b, e) => {
          if (b.exists() && e.exists()) {
              destroy(b);
              e.hurt(1);
              addExplode(b.pos, 1, 24, 1);
          }
      });
  
      // --- Movement Logic ---
      onUpdate("trash", (t) => {
          t.move(0, t.speed * 1);
          if (t.pos.y - t.height > height()) { destroy(t); }
       });
      boss.onUpdate(() => {
          boss.move(BOSS_SPEED * boss.dir * 1, 0);
          // Boundary check using hitbox width and visual scale
          const bossEdgeOffset = (BOSS_HITBOX_W / 2) * boss.scale.x;
          if (boss.dir === 1 && boss.pos.x + bossEdgeOffset >= width()) {
               boss.dir = -1;
          }
          if (boss.dir === -1 && boss.pos.x - bossEdgeOffset <= 0) {
               boss.dir = 1;
          }
      });
  
      // --- Boss Events ---
      boss.onHurt(() => {
          healthbar.set(boss.hp());
      });
      boss.onDeath(() => {
          go("win", { time: timer.time, boss: "placeholder" });
      });
  
      // --- Start Spawning ---
      wait(0.1, () => {
          spawnTrash();
      });
  
  
    }); // End of "battle" scene
  
    // --- Win Scene Definition ---
    scene("win", ({ time, boss }) => {
       // Handle the placeholder case
       if (boss === "placeholder") {
          add([ text("BOSS DEFEATED!", {size: 60}), anchor("center"), pos(width() / 2, height() / 2) ]);
       } else {
           // Original logic in case a valid boss name is passed later
           const displayName = boss || "UNKNOWN";
           try {
               if (getData(displayName)) {
                  add([ sprite(displayName), color(255, 0, 0), anchor("center"), scale(8), pos(width() / 2, height() / 2) ]);
               } else { throw new Error(`Sprite data for '${displayName}' not found.`); }
           } catch(e) {
               console.error("Failed to display boss sprite in win scene:", e);
               add([ text("YOU WIN!", {size: 60}), anchor("center"), pos(width() / 2, height() / 2) ]);
           }
       }
  
       add([ text(time.toFixed(2), { size: 24 }), anchor("center"), pos(width() / 2, height() / 2 + 100) ]);
       add([ text("Press SPACE to play again", { size: 32 }), pos(width() / 2, height() - 40), anchor("center") ]);
  
       onKeyPress("space", () => { go("battle"); });
    }); // End of "win" scene
  
    // --- Start Game ---
    try {
        go("battle");
    } catch (e) {
        // Keep error log for critical failures
        console.error("Failed to start game scene 'battle'. Are assets loaded correctly?", e);
        add([ text("Error loading game assets. Check console.", { size: 20, width: width() - 40 }), pos(width() / 2, height() / 2), anchor("center"), color(255, 0, 0) ]);
    }
  
  }; // End of window.startGame
  