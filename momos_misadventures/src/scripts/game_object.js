//// logic for parent class objects
//// all objects have shared properties:
//// x & y coordinates, dimensions, if they are moving or not, do they have bounce
//// collision here? or game?
//// static objects: platforms, ground
//// moving objects: momo, ash, (daphne?), fly


export default class GameObject {

  //// generic constructor for all objects (x & y coordinates, dimensions, moving or not, collision T/F, bounce y/n
  //// target means winning platform to hit
  constructor(ctx, x, y, width, height, color = "#000000", collision, bounce, target) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width; 
    this.height = height;
    //// leave below blank for static objects
    this.yVelocity = 0;
    this.xVelocity = 3;
    this.color = color;
    this.collision = collision;
    // this.calcXPos.bind(this);  
    // this.calcYPos.bind(this);
    this.bounce = false;
    this.target = target;
  }



  //// draw
  drawObject(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  drawPlatform(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  
  //// animate


}