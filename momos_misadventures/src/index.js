import MomoMisadventure from './scripts/game';
import GameView from './scripts/game_view';
import Momo from './scripts/momo';


const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

/////////////////////////////////////////////////////////////
//// this part of the code is me learning. will remove later

// const playerImage = new Image();
// playerImage.src = './src/assets/cats/shadow_dog.png';
// const pspriteWidth = 575;
// const pspriteHeight = 523;

////////////////////////////////////////////////////////////

//// start game here

let game = new MomoMisadventure(canvas);
canvas.addEventListener("mousedown", game.click.bind(game));
game.restart();
game.play();
console.log("Webpack is working!")


