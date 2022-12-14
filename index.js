import Player from "./classes/Player.js";
import Enemy from "./classes/Enemy.js";
import BulletController from "./classes/BulletController.js";

export const canvas = document.getElementById("game");
export const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 600;

const bulletController = new BulletController(canvas);
const player = new Player(
  canvas.width / 2.2,
  canvas.height / 1.3,
  bulletController
);

const enemies = [
  new Enemy(50, 20, "green", 5),
  new Enemy(150, 20, "red", 5),
  new Enemy(250, 20, "gold", 2),
  new Enemy(350, 20, "green", 2),
  new Enemy(450, 20, "gold", 10),
  new Enemy(50, 100, "green", 5),
  new Enemy(150, 100, "red", 5),
  new Enemy(250, 100, "gold", 2),
  new Enemy(350, 100, "green", 2),
  new Enemy(450, 100, "gold", 20),
];

ctx.fillStyle = "black";
setCommonStyle();
function gameLoop() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bulletController.draw(ctx);
  player.draw(ctx);
  enemies.forEach((enemy) => {
    if (bulletController.collideWith(enemy)) {
      if (enemy.health <= 0) {
        const index = enemies.indexOf(enemy);
        enemies.splice(index, 1);
      }
    } else {
      enemy.draw(ctx);
    }
  });
}

function setCommonStyle() {
  ctx.shadowColor = "#d53";
  ctx.shadowBlur = 20;
  ctx.lineJoin = "bevel";
  ctx.lineWidth = 5;
}

setInterval(gameLoop, 1000 / 60);
