//// logic for parent class objects
//// all objects have shared properties:
//// x & y coordinates, dimensions, if they are moving or not, do they have bounce
//// collision here? or game?
//// static objects: platforms, ground
//// moving objects: momo, ash, (daphne?), fly

export default class Object {

  //// generic constructor for all objects (x & y coordinates, dimensions, moving or not, bounce y/n
  constructor(canvasWidth, canvasHeight, ctx, x, y, width, height, bounce) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.ctx = ctx;
    this.x = canvasWidth / 6;
    this.y = CONSTANTS.GROUND;
    this.width = 0; 
    this.height = 0;
    //// leave below blank for static objects
    this.yVelocity = 0;
    this.xVelocity = 3;
    this.calcXPos.bind(this);
    this.calcYPos.bind(this);
    this.bounce = false;
}


  //// collide
  collide(obj1, obj2){
    if (obj1.x > obj2.x + obj2width ||
        obj1.x + obj1.width < obj2.x ||  
        obj1.y > obj2.y + obj2.height ||
        obj1.y + obj1.height < obj2.y
    ) {
      // no collision detected
      return false;
    } else {
      //  collision
      return true;
    }
  
  }


  //// draw


  //// animate



}