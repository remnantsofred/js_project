// Momo jackhammer Game - she bounces up and down when you land on a platform with this logic
// (as of Dec 5 11:48 pm) - this lives in the momo.js file


// collide(obj){
//   // collision
//   //// if the object is "collidable" from their object attribute "obj.collision" (boolean)
//   if (obj.collision === true) {
//     //// this is down collision
//     if (!this.grounded &&
//         //// if momo's left corner is to the left of the object length AND
//         this.x < obj.x + obj.width &&
//         //// momo's right corner overlaps/goes beyond object left corner
//         this.x + this.width > obj.x &&  
//         //// momo is higher than object 
//         this.y < obj.y + obj.height &&
//         //// momo's feet is lower than object left corner
//         this.y + this.height > obj.y){
//           console.log("yvel", this.yVelocity);
        
//         //// stop momo when she hits the platform from above  
//         if (this.yVelocity >= 0){
//           this.yVelocity = 0;
//           console.log("top collided");
//           this.grounded = true;
//           this.jumped = false;
//           this.y = obj.y - momoImage.height;
//         } else if (this.yVelocity < 0 && this.yVelocity !== CONSTANTS.JUMP_SPEED) {
//           console.log("bottom collide")
//           this.yVelocity = 2;
//           this.grounded = false;
//           this.jumped = false;
//           this.y = obj.y + obj.height + 1;
//         }
        
//       //// once momo collides, ground her.
      
//       //// to enable jump from platform, we must have the below if condition (registering a jump keypress)
//       //// otherwise game will draw again, including running this collide method which would set momo jumped to false before 
//       //// the jump can register
      
//       return true;
//     // } else if (!this.grounded &&
//     //   //// if momo's left corner is to the left of the object length AND
//     //   this.x < obj.x + obj.width &&
//     //   //// momo's right corner overlaps/goes beyond object left corner
//     //   this.x + this.width > obj.x &&  
//     //   //// momo head is higher than bottom of object 
//     //   this.y < obj.y + obj.height  &&
//     //   //// momo's butt is higher than object left corner
//     //   this.y + this.height > obj.y + obj.height){
//     //     console.log("bottom collided")
//     //   if (this.yVelocity < 0){
//     //       this.yVelocity = 2;
//     //   }  

//     } else {
//       this.grounded = false;
//       return false;
//     }
//   // } else {
//   //   // no collision
//   // }
//   }
// }



//// find the old code for the old platform collision logic where she gets sucked into the bottom of the platform
/// game idea: momo goes to the hairdresser. jump into the correct hair bowl to get the right result
/// show funny momo hair styles (need new sprites OR LOL COPY PASTE HAIR ONTO HER and make them yourself)


