//// not sure I need this? refactor? 
//// maybe for each game I change the background here
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../index";


export const level1Background = new Image();
level1Background.src = "./src/assets/backgrounds/kitchen_simple.png"
export const level2Background = new Image();
level2Background.src = "./src/assets/backgrounds/livingroom.png"



export default class Level {
  
  //// current version of constructor that game is using. need to update to below
  // constructor(dimensions) {
  //   this.dimensions = dimensions;
  // }
  
  //// constructor - will replace current one
  constructor(title, subtitle, background, maxtime, objects, target) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.maxtime = maxtime;
    this.objects = objects;
    this.target = target; 
  }

  drawBackground(ctx) {
    ctx.fillStyle = "whitesmoke";
    if (this.background === level1Background){
      ctx.drawImage(this.background, 0, 0, 3332, 2499, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT + 75);
    }
  }

  //// 


  //// forbidden furniture logic 

  //// v1 - kitchen_simple (target = fridge)
  // this.ctx.drawImage(background, 0, 0, 3332, 2499, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT + 75);

  // const background = new Image();
  // background.src = "./src/assets/backgrounds/kitchen_simple.png"
  //// platforms (4):
  //// // GameObject constructor(ctx, x, y, width, height, color, collision, bounce)
  ////  const fridge = new GameObject(this.ctx, 56, 110, 143, 1, "#FFffff", true, false)
  ////   const sinkLevel = new GameObject(this.ctx, 209, 346, 538, 1, "#FFffff", true, false)
  ////   const leftShelf = new GameObject(this.ctx, 404, 227, 140, 1, "#FFffff", true, false)
  ////   const rightShelf = new GameObject(this.ctx, 579, 173, 140, 1, "#FFffff", true, false)
  //// 
  //// 
  
  //// v2 - livingroom (target = curtain rod)
  ////  MINI GAME LOGIC
  //// 1. title
  //// 2. load background 
  //// 3. placement of platform 
  //// 4. 
  //// 

  // this.level.background, 0, 0, 3332, 2499, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT + 75
  drawTitle(ctx){
    ctx.font = '24px serif';
    console.log(this.title);
    ctx.fillStyle = "#daa520";
    ctx.fillText(this.title, 306, 80);
    ctx.font = '18px serif';
    ctx.fillText(this.subtitle, 270, 120);
   
  }

  //// constructor(dimensions, id, title, background, subtitle, target)
  // createRandomLevel(){
  //   return new Level({width: CANVAS_WIDTH, height: CANVAS_HEIGHT})
  // }

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