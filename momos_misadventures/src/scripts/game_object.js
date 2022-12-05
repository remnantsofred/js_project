//// logic for parent class objects
//// all objects have shared properties:
//// x & y coordinates, dimensions, if they are moving or not, do they have bounce
//// collision here? or game?
//// static objects: platforms, ground
//// moving objects: momo, ash, (daphne?), fly

// const platform = {
//   canvasWidth: 800,
//   canvasHeight: 600,
//   // ctx: ctx,
//   x: 134,
//   y: 179,
//   width: 150,
//   height: 25,
// }
// const c = document.getElementById("gamescreen").getContext("2d");


export default class GameObject {

  //// generic constructor for all objects (x & y coordinates, dimensions, moving or not, collision T/F, bounce y/n
  constructor(ctx, x, y, width, height, color = "#000000", collision, bounce) {
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
  }


  // //// collide --> moved this to momo class for now
  // collide(obj1, obj2){
  //   if (obj1.x > obj2.x + obj2width ||
  //       obj1.x + obj1.width < obj2.x ||  
  //       obj1.y > obj2.y + obj2.height ||
  //       obj1.y + obj1.height < obj2.y
  //   ) {
  //     // no collision detected
  //     return false;
  //   } else {
  //     //  collision
  //     if(obj1.xVelocity > 0){
  //       obj1.xVelocity = 0;
  //       obj1.
  //     } else if (){

  //     };
  //   }
  
  // }


  //// draw
  drawObject(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  
  //// animate


}