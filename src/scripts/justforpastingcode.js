// ////
// const momoAmbush = new Image();
// momoAmbush.src = "./src/assets/cats/momo_ambush_fall.png"
// const ambushspriteWidth = 104;
// const ambushspriteHeight = 119;


/// old automateMovement

// automateMovement(){


//   this.xVelocity = CONSTANTS.WALK_SPEED; 
//   this.direction = "right";
//   if (this.x >= (CONSTANTS.RIGHTWALL - (walkspriteWidth* sizeModifier))){
//     this.x = (CONSTANTS.RIGHTWALL - (walkspriteWidth* sizeModifier));
//     this.direction = "left";
//     this.xVelocity = -CONSTANTS.WALK_SPEED;
//   }
//   if (this.x <= 0){
//     this.x = 0;
//     this.xVelocity = CONSTANTS.WALK_SPEED;
//     this.direction = "right";
//   }

// }



// setWonMiniGame(){
//   this.wonMiniGame = true;
// }

// animate(){
//   if (this.running){
//     this.ctx.clearRect(0,0,800,800);         /// clear the canvas
//     this.level.drawBackground(this.ctx);     /// draw the level's background
//     this.level.drawTitle(this.ctx);          /// draw the level's title (and subtitle, if applicable)
//     this.wonMiniGame = false;
//     for(const obj of this.level.objects){    //// iterate through this level's obejcts and check collision
//       if (this.momo.collide(obj)){
//         if (obj.target === true) {          //// if she collides with winning object, win game
//           this.winCounter += 1;
//           if (this.winCounter > 11){
//             setTimeout(()=>{
//               this.setWonMiniGame();

//       this.winMiniGame();
//             }, 1000)
//           }
//         }       
//         break;
//       };
//     };
    
//     for(const obj of this.level.objects){         //// iterate through this level's obejcts and draw them
//       obj.draw(this.ctx);
//     };


//     this.momo.draw(this.ctx);

//     if (this.level.title === "AMBUSH"){
//       this.Ashy.draw(this.ctx);
//       this.Ashy.automateMovement();
//       if (this.momo.collide(this.Ashy, true)){
//        
//         setTimeout(()=>{
//           this.wonMiniGame = true;

//       this.winMiniGame();
//         }, 1000)
//       }
//     } 


//     this.ctx.font = '22px  Itim, cursive';
//     this.ctx.fillStyle = "#daa520";
//     this.ctx.fillText('Score:', 657, 75);
//     this.ctx.fillText(this.score.toString(), 735, 75);          //// draw score
//     this.ctx.fillText('Time left:', 626, 100);                //// draw timer countdown
//     this.ctx.fillText(this.timeremaining.toString(), 735, 100);          //// draw score
//     ///// draw time left here
//     let id = requestAnimationFrame(this.animate.bind(this));


//     this.timeremaining -= 0.02;
//     if (this.timeremaining <= 0){                 //// this is something wrong with this. 
//       this.lostGame = true;                       //// can't read this.level.maxtime;
//       cancelAnimationFrame(id);
//       this.loseGame();
//     }
//     if (this.wonMiniGame){
//       cancelAnimationFrame(id);
//     };
//   } else {
    
//     this.ctx.fillStyle = "#000000CC";
//     this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     this.ctx.font = '50px  Itim, cursive';
//     this.ctx.fillStyle = "#daa520";
//     this.ctx.fillText(' *** PAUSED ***', CANVAS_WIDTH/3.75, CANVAS_HEIGHT/2);
//   }
// }

// //// pause
// pauseGame(){
//   if (!this.running){
//     this.running = true;
//     this.animate();
//   } else {
//     this.running = false;
//   }
// }
