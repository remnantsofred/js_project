import Momo from './momo';
import Level from './level'

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
    this.momo = new Momo(this.dimensions.width, this.dimensions.height, this.ctx);
    this.level = new Level(this.dimensions);
    this.play();
    this.score = 0;
  }
  

  
  play(){
    // this.running = true;
    this.momo.drawMomo();
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
  
  keydownEvents(e){
    if (e.key === "ArrowLeft") {
      this.momo.direction = "left";
      if (e.repeat){
        this.momo.moveLeft("run");
      } else if (!e.repeat){
        this.momo.moveLeft("walk");
      }
    } else if (e.key === "ArrowUp") {
      this.momo.direction = "up";
      this.momo.jump();

      // fall through platform if not on ground
    } else if (e.key === "ArrowDown") {
      this.momo.direction = "down";
      this.momo.moveDown();
      
    } else if (e.key === "ArrowRight"){
      // this.momo.calcXPos(5);
      this.momo.direction = "right";
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


  //// score -> update this.score when you beat a mini-game


  //// resetScore

  //// pause

  //// win?

  //// lose?

  //// next game

  


}