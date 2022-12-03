import Momo from './momo';
import Level from './level'

export default class MomoMisadventure {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
    this.restart();
  }

  animate() {
    this.level.drawBackground(this.ctx);
    this.momo.animate();
    if (this.running){
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.momo = new Momo(this.dimensions.width, this.dimensions.height, this.ctx);
    // this.animate();
    
  }
  
  play(){
    this.running = true;
    this.momo.draw();
    // this.animate();
    // add event listener here for mouseclick => jump
    this.canvas.addEventListener("click", ()=>{
      this.momo.jump();
    });

  }

  click(){
    this.momo.jump();
  }
}