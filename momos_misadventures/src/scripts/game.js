import Momo, { CONSTANTS } from './momo';
import Level from './level'
import GameObject from './game_object';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../index.js';



//// starting a new game should entail:
//// import /load game_view (or does new game go into game_view?) --> ask someone 
//// creating a canvas, saving ctx
//// loop over all opjects, draw all
//// logic to start a minigame and continue to next one if win (and update score)
//// go back to main screen on loss 


export default class Game {
  constructor(canvas, level) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
    // this momo is the real momo, okay. 
    this.momo = new Momo(this.dimensions.width, this.dimensions.height);
    this.level = new Level(this.dimensions);
    this.score = 0;
    //need to refactor this.objects based on levels in the future
    //this is proof of concept
    const ground = new GameObject(this.ctx, 0, CONSTANTS.GROUND, CANVAS_WIDTH, 61, "#449903", false, false);  //// this is the ground
    this.objects = [
      ground,
      new GameObject(this.ctx, 400, 250, 100, 10, "#000000", true, false), 
      new GameObject(this.ctx, 250, 400, 100, 10, "#000000", true, false),
      new GameObject(this.ctx, 550, 400, 100, 10, "#000000", true, false)
    ];
    // GameObject constructor(ctx, x, y, width, height, color, collision, bounce) {
      this.play();
    }
    
    
  
  play(){
    // this.running = true;
    this.draw();
    this.addEventListeners();
    
    // TO ADD: cycle thru all objects & draw each
  }
  
  //// old code was click to jump. leaving here for a second
  // click(){
  //   this.momo.jump();
  // }
  
  addEventListeners(){
    window.addEventListener("keydown", this.keydownEvents.bind(this))
    //// if adding event listeners to canvas, need to pass in bound callback
    // this.canvas.addEventListener("mousedown", this.click.bind(this));
  }
  
  /// maybe change momo to run regardless because jumping is better
  keydownEvents(e){
    if (e.key === "ArrowLeft") {
      if (e.repeat){
        this.momo.moveLeft("run");
      } else if (!e.repeat){
        this.momo.moveLeft("walk");
      }
    } else if (e.key === "ArrowUp") {
      this.momo.jump();

      // fall through platform if not on ground
    } else if (e.key === "ArrowDown") {
      this.momo.moveDown();
      
    } else if (e.key === "ArrowRight"){
      // this.momo.calcXPos(5);
      if (e.repeat){
        this.momo.moveRight("run");
      } else if (!e.repeat){
        this.momo.moveRight("walk");
      }
    } // else if (e.key === )
    // else if (e.key === ' ' || e.key === "Spacebar"){
    // };
    /// ^ to do later: add action key for spacebar
    ;
  };


  //// draw

  draw(){
    this.ctx.clearRect(0,0,800,800);
    this.objects.forEach((obj)=>{
      obj.drawObject(this.ctx);
      this.momo.collide(obj);
    });
    this.momo.drawMomo(this.ctx);
    
    requestAnimationFrame(this.draw.bind(this));
  }


  //// score -> update this.score when you beat a mini-game




  //// resetScore

  //// pause

  //// win?

  //// lose?

  //// next game

  //// handle Collisions
  handleCollisions(){
    // for()
  }
  


}