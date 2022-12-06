//// not sure I need this? refactor? 
//// maybe for each game I change the background here
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../index";


export const level1Background = new Image();
level1Background.src = "./src/assets/backgrounds/kitchen_simple.png"
export const level2Background = new Image();
level2Background.src = "./src/assets/backgrounds/livingroom.png"


  ////  MINI GAME LOGIC (LEVEL)
  //// 1. title (and subtitle if applicable)
  //// 2. load background 
  //// 3. win condition

export default class Level {
  
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
    } else if (this.background === level2Background){
      //// need to customize the settings for level2Background here
      ctx.drawImage(this.background, 0, 0, 3332, 2499, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT + 75);
    } 
  }

  //// forbidden furniture logic 

  //// v1 - kitchen_simple (target = fridge)
  
  //// v2 - livingroom (target = curtain rod)



  drawTitle(ctx){
    ctx.font = '24px serif';
    ctx.fillStyle = "#daa520";
    ctx.fillText(this.title, 306, 80);
    ctx.font = '18px serif';
    ctx.fillText(this.subtitle, 270, 120);
  }


  //// if you reach the intended flatform

  //// designate object winning object 

  //// add collision winning platform in the game?


  //// ambush ashy


  //// kill the fly


  //// win animation


  //// lose animation






}