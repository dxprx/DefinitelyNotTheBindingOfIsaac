export default class Bullet {
  //   colors = [
  //     "red",
  //     "blue",
  //     "red",
  //     "green",
  //     "yellow",
  //     "orange",
  //     "purple",
  //     "pink",
  //     "brown",
  //     "grey",
  //   ];

  constructor(x, y, speed, damage, direction, playerMove,playerSpeed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;
    this.direction = direction;
    this.playerMove = playerMove;
    this.playerSpeed = playerSpeed;

    this.width = 5;
    this.height = 15;
    this.color = "red";
    // this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    if(this.direction === "up"){
      if(this.playerMove === "a"){
        this.x -= this.playerSpeed;
      }
      if(this.playerMove === "d"){
        this.x += this.playerSpeed;
      }
      this.y -= this.speed;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
    }
    if(this.direction === "down"){
      if(this.playerMove === "a"){
        this.x -= this.playerSpeed;
      }
      if(this.playerMove === "d"){
        this.x += this.playerSpeed;
      }
      this.y -= this.speed;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    if(this.direction === "left"){
      if(this.playerMove === "w"){
        this.y -= this.playerSpeed;
      }
      if(this.playerMove === "s"){
        this.y += this.playerSpeed;
      }
      this.x -= this.speed;
      ctx.fillRect(this.x, this.y, this.height, this.width);
    }
    if(this.direction === "right"){
      if(this.playerMove === "w"){
        this.y -= this.playerSpeed;
      }
      if(this.playerMove === "s"){
        this.y += this.playerSpeed;
      }
      this.x -= this.speed;
      ctx.fillRect(this.x, this.y, this.height, this.width);
    }
  }

  collideWith(sprite) {
    if (
      this.x < sprite.x + sprite.width &&
      this.x + this.width > sprite.x &&
      this.y < sprite.y + sprite.height &&
      this.y + this.height > sprite.y
    ) {
      sprite.takeDamage(this.damage);
      return true;
    }
    return false;
  }
}
