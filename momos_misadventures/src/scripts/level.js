//// not sure I need this? refactor? 
//// maybe for each game I change the background here

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    console.log(ctx);
  }
}