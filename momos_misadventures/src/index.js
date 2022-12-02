import MomoMisadventure from './game';
import GameView from './game_view';

const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");


let game = new MomoMisadventure(canvas);
canvas.addEventListener("mousedown", game.click.bind(game));
// game.restart();
game.play();
console.log("Webpack is working!")


DOMContentLoaded