//// not sure I need this? refactor? 
//// maybe for each game I change the background here
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../index";


export const level1Background = new Image();
level1Background.src = "./src/assets/backgrounds/kitchen_simplev3.png"
export const level2Background = new Image();
level2Background.src = "./src/assets/backgrounds/ambushlivingroom.png"
export const level4Background = new Image();
level4Background.src = "./src/assets/backgrounds/livingroom_updatedv4novase.png"


  ////  MINI GAME LOGIC (LEVEL)
  //// 1. title (and subtitle if applicable)
  //// 2. load background 
  //// 3. win condition

  //// if you reach the intended flatform - done
  //// designate object winning object - done
  //// add collision winning platform in the game - done

export default class Level {
  
  constructor(id, title, subtitle, background, maxtime, objects, gravityModifier, target) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.maxtime = maxtime;
    this.objects = objects;
    this.target = target; 
    this.gravityModifier = gravityModifier;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "whitesmoke";
    if (this.background === level1Background){
      ctx.drawImage(this.background, 0, 0, 3332, 2499, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else if (this.background === level2Background){
      //// need to customize the settings for level2Background here
      ctx.drawImage(this.background, 0, 0, 1388, 1041, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else if (this.background === level4Background){
      //// need to customize the settings for level2Background here
      ctx.drawImage(this.background, 0, 0, 1180, 885, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } 

  }

  drawTitle(ctx){
    ctx.font = '60px sans-serif';
    ctx.fillStyle = "#daa520";
    ctx.fillText(this.title, 306, 80);
    ctx.font = '18px serif';
    ctx.fillText(this.subtitle, 270, 120);
  }
  
  drawWinStatement(ctx){
    ctx.font = '24px sans-serif';
    ctx.fillStyle = "#daa520";
    ctx.fillText("You win!", 106, 80);
  }
  
  drawLoseStatement(ctx){
    ctx.font = '24px sans-serif';
    ctx.fillStyle = "#daa520";
    ctx.fillText("You Lose! :(", 106, 80);
  }
  //// forbidden furniture logic 

  //// v1 - kitchen_simple (target = fridge)
  //// v2 - livingroom (target = curtain rod)

  //// ambush ashy


  //// kill the fly


  //// win animation


  //// lose animation



}