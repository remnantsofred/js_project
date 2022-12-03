import Momo from './momo';
import Level from './level'

export default class MomoMisadventure {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
    this.restart();
  }

  // animate() {
  //   this.level.drawBackground(this.ctx);
  //   this.momo.animate();
  //   if (this.running){
  //     requestAnimationFrame(this.animate.bind(this));
  //   }
  // }

  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.momo = new Momo(this.dimensions.width, this.dimensions.height, this.ctx);
    // this.animate();
    
  }
  
  play(){
    this.running = true;
    // this.momo.draw();
    this.momo.draw();
    // add event listener here for mouseclick => jump
    // this.canvas.addEventListener("click", ()=>{
    //   this.momo.jump();
    // });
    this.canvas.addEventListener("keydown", (e)=>{
      //left key === 37
      if (e.keyCode == '37') {
        
        //up key === 38
      } else if (e.keyCode == '38') {
        this.momo.jump();
        //down key === 40
      } else if (e.keyCode == '40') {
        
        //right key ==- 39
      } else if (e.keyCode == '39'){
        this.momo.calcXPos();
      };
    });

  }

  click(){
    this.momo.jump();
  }

  //add event listeners here
  // 1. key right === move right (set velocity + friction)
  // this.

  // 2. key left === move left 
  // 3. key up === jump
  // 2. spacebar === action


}