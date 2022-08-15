import { canvas } from "../index.js";

export default class Player {
  constructor(x, y, bulletController) {
    this.x = x;
    this.y = y;
    this.bulletController = bulletController;
    this.width = 50;
    this.height = 50;
    this.velX = 0;
    this.velY = 0;
    this.speed = 5;
    this.friction = 0.89,
      this.isMoving = {
        w: false,
        a: false,
        s: false,
        d: false,
      };

    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }

  draw(ctx) {
    this.move();
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.shoot();

  }

  shoot() {
    const delay = 10;
    const damage = 1;
    let speed = 5;
    const playerSpeed = this.speed;
    //DISPARO ARRIBA
    if (this.shootPressedUp) {
      let playerMove = "";
      const direction = "up";
      if (this.isMoving.w) {
        speed += this.speed / 2;
      }
      if (this.isMoving.a) {
        playerMove = "a";
      }
      if (this.isMoving.d) {
        playerMove = "d";
      }
      const bulletX = this.x + this.width / 2;
      const bulletY = this.y;
      this.bulletController.shoot(bulletX, bulletY, speed, damage, delay, direction, playerMove, playerSpeed);
      console.log("bullet speed: " + speed);

    }
    //DISPARO ABAJO
    if (this.shootPressedDown) {
      let playerMove = "";
      const direction = "down";
      
      if (this.isMoving.s) {
        speed += this.speed / 2;
      }
      if (this.isMoving.a) {
        playerMove = "a";
      }
      if (this.isMoving.d) {
        playerMove = "d";
      }
      const bulletX = this.x + this.width / 2;
      const bulletY = this.y;
      this.bulletController.shoot(bulletX, bulletY, -speed, damage, delay, direction, playerMove, playerSpeed);
    }
    // DISPARO IZQUIERDA
    if (this.shootPressedLeft) {
      let playerMove = "";
      const direction = "left";
      if (this.isMoving.a) {
        speed += this.speed / 2;
      }
      if (this.isMoving.w) {
        playerMove = "w";
      }
      if (this.isMoving.s) {
        playerMove = "s";
      }
      const bulletX = this.x;
      const bulletY = this.y + this.height / 2;
      this.bulletController.shoot(bulletX, bulletY, speed, damage, delay, direction, playerMove, playerSpeed);
    }
    // DISPARO DERECHA
    if (this.shootPressedRight) {
      let playerMove = "";
      const direction = "right";

      if (this.isMoving.d) {
        speed += this.speed / 2;
      }
      if (this.isMoving.w) {
        playerMove = "w";
      }
      if (this.isMoving.s) {
        playerMove = "s";
      }
      const bulletX = this.x;
      const bulletY = this.y + this.height / 2;
      this.bulletController.shoot(bulletX, bulletY, -speed, damage, delay, direction, playerMove, playerSpeed);
    }


  }

  move() {

    //  W MOVE
    if (this.upPressed) {
      if (this.y >= 0) {
        if (this.velY > -this.speed) {
          this.velY--;
          // this.y -= this.speed;
        }
      }
    }
    // S MOVE
    if (this.downPressed) {
      if (this.y <= canvas.height - this.height) {
        if (this.velY < this.speed) {
          this.velY++;
        }
        // this.y += this.speed;
      }
    }
    //  A MOVE
    if (this.leftPressed) {
      if (this.x >= 0 +30) {
        if(this.velX > -this.speed){
          this.velX--;
        }
        // this.x -= this.speed;
      }
    }
    // D MOVE
    if (this.rightPressed) {
      if (this.x <= canvas.width - this.width) {
        if(this.velX < this.speed){
          this.velX++;
        }
        // this.x += this.speed;
      }
    }
    this.velY *= this.friction;
    this.y += this.velY;
    this.velX *= this.friction;
    this.x += this.velX;
  }


  keydown = (e) => {
    if (e.code === "KeyW") {
      this.upPressed = true;
      this.isMoving.w = true;
    }
    if (e.code === "KeyS") {
      this.downPressed = true;
      this.isMoving.s = true;
    }
    if (e.code === "KeyA") {
      this.leftPressed = true;
      this.isMoving.a = true;
    }
    if (e.code === "KeyD") {
      this.rightPressed = true;
      this.isMoving.d = true;
    }

    if (e.code === "ArrowUp") {
      this.shootPressedUp = true;
    }
    if (e.code === "ArrowDown") {
      this.shootPressedDown = true;
    }
    if (e.code === "ArrowLeft") {
      this.shootPressedLeft = true;
    }
    if (e.code === "ArrowRight") {
      this.shootPressedRight = true;
    }
    console.log(this.velX,this.velY,this.speed);
  };

  keyup = (e) => {
    if (e.code === "KeyW") {
      this.upPressed = false;
      this.isMoving.w = false;
    }
    if (e.code === "KeyS") {
      this.downPressed = false;
      this.isMoving.s = false;
    }
    if (e.code === "KeyA") {
      this.leftPressed = false;
      this.isMoving.a = false;
    }
    if (e.code === "KeyD") {
      this.rightPressed = false;
      this.isMoving.d = false;
    }
    if (e.code === "ArrowUp") {
      this.shootPressedUp = false;
    }
    if (e.code === "ArrowDown") {
      this.shootPressedDown = false;
    }
    if (e.code === "ArrowLeft") {
      this.shootPressedLeft = false;
    }
    if (e.code === "ArrowRight") {
      this.shootPressedRight = false;
    }
  };

}

