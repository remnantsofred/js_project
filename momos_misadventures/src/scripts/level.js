//// not sure I need this? refactor? 
//// maybe for each game I change the background here

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "whitesmoke";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    console.log(ctx);
  }

  //// 


  //// forbidden furniture logic 

  //// v1 - kitchen_simple
  // this.ctx.drawImage(background, 0, 0, 3332, 2499, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT + 75);

  // const background = new Image();
  // background.src = "./src/assets/backgrounds/kitchen_simple.png"
  //// platforms (4):
  //// // GameObject constructor(ctx, x, y, width, height, color, collision, bounce)
  ////  const fridge = new GameObject(this.ctx, 56, 97, 143, 1, "#FFffff", true, false)
  ////  const sinkLevel = new GameObject(this.ctx, 209, 303, 542, 1, "#FFffff", true, false)
  ////  const leftShelf = new GameObject(this.ctx, 496, 202, 143, 1, "#FFffff", true, false)
  ////  const rightShelf = new GameObject(this.ctx, 579, 154, 142, 1, "#FFffff", true, false)
  //// 
  //// 
  //// 
  //// 
  //// 
  //// 
  //// 
  //// 



  //// if you reach the intended flatform

  //// designate object winning object 

  //// add collision winning platform in the game?



  //// ambush ashy



  //// kill the fly



  //// 


  //// win animation


  //// lose animation


  //// 




}