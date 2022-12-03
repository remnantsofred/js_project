/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_momo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/momo */ \"./src/scripts/momo.js\");\n\n\n\nconst canvas = document.getElementById(\"gamescreen\");\nconst ctx = canvas.getContext(\"2d\");\nconst CANVAS_WIDTH = canvas.width = 600;\nconst CANVAS_HEIGHT = canvas.height = 600;\n\n//this part of the code is me learning. will remove later\nconst playerImage = new Image();\nplayerImage.src = './src/assets/cats/shadow_dog.png';\nconst pspriteWidth = 575;\nconst pspriteHeight = 523;\nconst momo = new Image();\nmomo.src = \"./src/assets/cats/momo_walk_reverse_updated.png\";\nconst spriteWidth = 120;\nconst spriteHeight = 120;\nlet frameX = 1;\nlet frameY = 0;\n//set a maxFrame variable per row\nlet gameFrame = 0;\nconst staggerFrames = 15;\nfunction animate() {\n  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n  // ctx.fillRect(100,50,100,100);\n  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)\n  ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);\n  // ctx.drawImage(playerImage, frameX * pspriteWidth, 0, pspriteWidth, pspriteHeight, 0, 0, pspriteWidth, pspriteHeight);\n  if (gameFrame % staggerFrames == 0) {\n    if (frameX < 3) frameX++;else frameX = 1;\n  }\n  gameFrame++;\n  requestAnimationFrame(animate);\n}\n// animate();\n\n///\n\nlet game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ncanvas.addEventListener(\"mousedown\", game.click.bind(game));\n// game.restart();\n// game.play();\nconsole.log(\"Webpack is working!\");\nlet newMomo = new _scripts_momo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](CANVAS_WIDTH, CANVAS_HEIGHT, ctx);\n// newMomo.animate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QztBQUNIO0FBQ1Q7QUFJbEMsTUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFDcEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHbkMsTUFBTUMsWUFBWSxHQUFHTCxNQUFNLENBQUNNLEtBQUssR0FBRyxHQUFHO0FBQ3ZDLE1BQU1DLGFBQWEsR0FBR1AsTUFBTSxDQUFDUSxNQUFNLEdBQUcsR0FBRzs7QUFFekM7QUFDQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQy9CRCxXQUFXLENBQUNFLEdBQUcsR0FBRyxrQ0FBa0M7QUFDcEQsTUFBTUMsWUFBWSxHQUFHLEdBQUc7QUFDeEIsTUFBTUMsYUFBYSxHQUFHLEdBQUc7QUFFekIsTUFBTUMsSUFBSSxHQUFHLElBQUlKLEtBQUssRUFBRTtBQUN4QkksSUFBSSxDQUFDSCxHQUFHLEdBQUcsaURBQWlEO0FBQzVELE1BQU1JLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLE1BQU1DLFlBQVksR0FBRyxHQUFHO0FBQ3hCLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2QsSUFBSUMsTUFBTSxHQUFHLENBQUM7QUFDZDtBQUNBLElBQUlDLFNBQVMsR0FBRyxDQUFDO0FBQ2pCLE1BQU1DLGFBQWEsR0FBRyxFQUFFO0FBRXhCLFNBQVNDLE9BQU8sR0FBRTtFQUNoQmxCLEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDakIsWUFBWSxFQUFFRSxhQUFhLENBQUM7RUFDOUM7RUFDQTtFQUNBSixHQUFHLENBQUNvQixTQUFTLENBQUNULElBQUksRUFBRUcsTUFBTSxHQUFHRixXQUFXLEVBQUUsQ0FBQyxFQUFFQSxXQUFXLEVBQUVDLFlBQVksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFRCxXQUFXLEVBQUVDLFlBQVksQ0FBQztFQUMzRztFQUNBLElBQUlHLFNBQVMsR0FBR0MsYUFBYSxJQUFJLENBQUMsRUFBQztJQUNqQyxJQUFJSCxNQUFNLEdBQUcsQ0FBQyxFQUFFQSxNQUFNLEVBQUcsQ0FBQyxLQUNyQkEsTUFBTSxHQUFHLENBQUM7RUFDakI7RUFFQUUsU0FBUyxFQUFFO0VBQ1hLLHFCQUFxQixDQUFDSCxPQUFPLENBQUM7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQSxJQUFJSSxJQUFJLEdBQUcsSUFBSTVCLHFEQUFnQixDQUFDRyxNQUFNLENBQUM7QUFDdkNBLE1BQU0sQ0FBQzBCLGdCQUFnQixDQUFDLFdBQVcsRUFBRUQsSUFBSSxDQUFDRSxLQUFLLENBQUNDLElBQUksQ0FBQ0gsSUFBSSxDQUFDLENBQUM7QUFDM0Q7QUFDQTtBQUNBSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztBQUVsQyxJQUFJQyxPQUFPLEdBQUcsSUFBSWhDLHFEQUFJLENBQUNNLFlBQVksRUFBQ0UsYUFBYSxFQUFFSixHQUFHLENBQUM7QUFDdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21vc19taXNhZHZlbnR1cmVzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbW9NaXNhZHZlbnR1cmUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuaW1wb3J0IE1vbW8gZnJvbSAnLi9zY3JpcHRzL21vbW8nO1xuXG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lc2NyZWVuXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG5jb25zdCBDQU5WQVNfV0lEVEggPSBjYW52YXMud2lkdGggPSA2MDA7XG5jb25zdCBDQU5WQVNfSEVJR0hUID0gY2FudmFzLmhlaWdodCA9IDYwMDtcblxuLy90aGlzIHBhcnQgb2YgdGhlIGNvZGUgaXMgbWUgbGVhcm5pbmcuIHdpbGwgcmVtb3ZlIGxhdGVyXG5jb25zdCBwbGF5ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xucGxheWVySW1hZ2Uuc3JjID0gJy4vc3JjL2Fzc2V0cy9jYXRzL3NoYWRvd19kb2cucG5nJztcbmNvbnN0IHBzcHJpdGVXaWR0aCA9IDU3NTtcbmNvbnN0IHBzcHJpdGVIZWlnaHQgPSA1MjM7XG5cbmNvbnN0IG1vbW8gPSBuZXcgSW1hZ2UoKTtcbm1vbW8uc3JjID0gXCIuL3NyYy9hc3NldHMvY2F0cy9tb21vX3dhbGtfcmV2ZXJzZV91cGRhdGVkLnBuZ1wiXG5jb25zdCBzcHJpdGVXaWR0aCA9IDEyMDtcbmNvbnN0IHNwcml0ZUhlaWdodCA9IDEyMDtcbmxldCBmcmFtZVggPSAxO1xubGV0IGZyYW1lWSA9IDA7XG4vL3NldCBhIG1heEZyYW1lIHZhcmlhYmxlIHBlciByb3dcbmxldCBnYW1lRnJhbWUgPSAwO1xuY29uc3Qgc3RhZ2dlckZyYW1lcyA9IDE1O1xuXG5mdW5jdGlvbiBhbmltYXRlKCl7XG4gIGN0eC5jbGVhclJlY3QoMCwwLENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG4gIC8vIGN0eC5maWxsUmVjdCgxMDAsNTAsMTAwLDEwMCk7XG4gIC8vIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc3csIHNoLCBkeCwgZHksIGR3LCBkaClcbiAgY3R4LmRyYXdJbWFnZShtb21vLCBmcmFtZVggKiBzcHJpdGVXaWR0aCwgMCwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWdodCwgNTAsIDQ1MCwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWdodCk7XG4gIC8vIGN0eC5kcmF3SW1hZ2UocGxheWVySW1hZ2UsIGZyYW1lWCAqIHBzcHJpdGVXaWR0aCwgMCwgcHNwcml0ZVdpZHRoLCBwc3ByaXRlSGVpZ2h0LCAwLCAwLCBwc3ByaXRlV2lkdGgsIHBzcHJpdGVIZWlnaHQpO1xuICBpZiAoZ2FtZUZyYW1lICUgc3RhZ2dlckZyYW1lcyA9PSAwKXtcbiAgICBpZiAoZnJhbWVYIDwgMykgZnJhbWVYICsrO1xuICAgIGVsc2UgZnJhbWVYID0gMTtcbiAgfVxuXG4gIGdhbWVGcmFtZSsrO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG4vLyBhbmltYXRlKCk7XG5cbi8vL1xuXG5sZXQgZ2FtZSA9IG5ldyBNb21vTWlzYWR2ZW50dXJlKGNhbnZhcyk7XG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBnYW1lLmNsaWNrLmJpbmQoZ2FtZSkpO1xuLy8gZ2FtZS5yZXN0YXJ0KCk7XG4vLyBnYW1lLnBsYXkoKTtcbmNvbnNvbGUubG9nKFwiV2VicGFjayBpcyB3b3JraW5nIVwiKVxuXG5sZXQgbmV3TW9tbyA9IG5ldyBNb21vKENBTlZBU19XSURUSCxDQU5WQVNfSEVJR0hULCBjdHgpO1xuLy8gbmV3TW9tby5hbmltYXRlKCk7XG4iXSwibmFtZXMiOlsiTW9tb01pc2FkdmVudHVyZSIsIkdhbWVWaWV3IiwiTW9tbyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiQ0FOVkFTX1dJRFRIIiwid2lkdGgiLCJDQU5WQVNfSEVJR0hUIiwiaGVpZ2h0IiwicGxheWVySW1hZ2UiLCJJbWFnZSIsInNyYyIsInBzcHJpdGVXaWR0aCIsInBzcHJpdGVIZWlnaHQiLCJtb21vIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJmcmFtZVgiLCJmcmFtZVkiLCJnYW1lRnJhbWUiLCJzdGFnZ2VyRnJhbWVzIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2siLCJiaW5kIiwiY29uc29sZSIsImxvZyIsIm5ld01vbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MomoMisadventure; }\n/* harmony export */ });\n/* harmony import */ var _momo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./momo */ \"./src/scripts/momo.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/scripts/level.js\");\n\n\nclass MomoMisadventure {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.restart();\n  }\n  animate() {\n    console.log(this);\n    this.level.drawBackground(this.ctx);\n    this.momo.animate();\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n  restart() {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.momo = new _momo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions.width, this.dimensions.height, this.ctx);\n    // this.animate();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n  click() {\n    this.momo.jump();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUNDO0FBRVosTUFBTUUsZ0JBQWdCLENBQUM7RUFDcENDLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFBRUMsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQUs7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLO0lBQU8sQ0FBQztJQUNoRSxJQUFJLENBQUNDLE9BQU8sRUFBRTtFQUNoQjtFQUVBQyxPQUFPLEdBQUc7SUFDUkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRWpCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDVixHQUFHLENBQUM7SUFDbkMsSUFBSSxDQUFDVyxJQUFJLENBQUNMLE9BQU8sRUFBRTtJQUNuQixJQUFJLElBQUksQ0FBQ00sT0FBTyxFQUFDO01BQ2ZDLHFCQUFxQixDQUFDLElBQUksQ0FBQ1AsT0FBTyxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQ7RUFDRjtFQUVBVCxPQUFPLEdBQUc7SUFDUixJQUFJLENBQUNPLE9BQU8sR0FBRyxLQUFLO0lBQ3BCLElBQUksQ0FBQ0gsS0FBSyxHQUFHLElBQUliLDhDQUFLLENBQUMsSUFBSSxDQUFDTSxVQUFVLENBQUM7SUFDdkMsSUFBSSxDQUFDUyxJQUFJLEdBQUcsSUFBSWhCLDZDQUFJLENBQUMsSUFBSSxDQUFDTyxVQUFVLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNELFVBQVUsQ0FBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQ0osR0FBRyxDQUFDO0lBQzdFO0VBQ0Y7O0VBRUFlLElBQUksR0FBRTtJQUNKLElBQUksQ0FBQ0gsT0FBTyxHQUFHLElBQUk7SUFDbkIsSUFBSSxDQUFDTixPQUFPLEVBQUU7RUFDaEI7RUFFQVUsS0FBSyxHQUFFO0lBQ0wsSUFBSSxDQUFDTCxJQUFJLENBQUNNLElBQUksRUFBRTtFQUNsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tb3NfbWlzYWR2ZW50dXJlcy8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9tbyBmcm9tICcuL21vbW8nO1xuaW1wb3J0IExldmVsIGZyb20gJy4vbGV2ZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbW9NaXNhZHZlbnR1cmUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgXG4gICAgdGhpcy5sZXZlbC5kcmF3QmFja2dyb3VuZCh0aGlzLmN0eCk7XG4gICAgdGhpcy5tb21vLmFuaW1hdGUoKTtcbiAgICBpZiAodGhpcy5ydW5uaW5nKXtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgdGhpcy5tb21vID0gbmV3IE1vbW8odGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LCB0aGlzLmN0eCk7XG4gICAgLy8gdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBwbGF5KCl7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGNsaWNrKCl7XG4gICAgdGhpcy5tb21vLmp1bXAoKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJNb21vIiwiTGV2ZWwiLCJNb21vTWlzYWR2ZW50dXJlIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwicmVzdGFydCIsImFuaW1hdGUiLCJjb25zb2xlIiwibG9nIiwibGV2ZWwiLCJkcmF3QmFja2dyb3VuZCIsIm1vbW8iLCJydW5uaW5nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInBsYXkiLCJjbGljayIsImp1bXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\nclass GameView {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdlLE1BQU1BLFFBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbW9zX21pc2FkdmVudHVyZXMvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG5cblxufSJdLCJuYW1lcyI6WyJHYW1lVmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/level.js":
/*!******************************!*\
  !*** ./src/scripts/level.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Level; }\n/* harmony export */ });\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    // this.pipes = Array(3).fill().map(() => {\n    //   {x:0, }\n    // });\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"green\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsS0FBSyxDQUFDO0VBQ3pCQyxXQUFXLENBQUNDLFVBQVUsRUFBRTtJQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0EsVUFBVTtJQUM1QjtJQUNBO0lBQ0E7RUFDRjs7RUFFQUMsY0FBYyxDQUFDQyxHQUFHLEVBQUU7SUFDbEJBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87SUFDdkJELEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDSixVQUFVLENBQUNLLEtBQUssRUFBRSxJQUFJLENBQUNMLFVBQVUsQ0FBQ00sTUFBTSxDQUFDO0VBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21vc19taXNhZHZlbnR1cmVzLy4vc3JjL3NjcmlwdHMvbGV2ZWwuanM/MDFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgIC8vIHRoaXMucGlwZXMgPSBBcnJheSgzKS5maWxsKCkubWFwKCgpID0+IHtcbiAgICAvLyAgIHt4OjAsIH1cbiAgICAvLyB9KTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTGV2ZWwiLCJjb25zdHJ1Y3RvciIsImRpbWVuc2lvbnMiLCJkcmF3QmFja2dyb3VuZCIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/level.js\n");

/***/ }),

/***/ "./src/scripts/momo.js":
/*!*****************************!*\
  !*** ./src/scripts/momo.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Momo; }\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 0,\n  JUMP_SPEED: -8,\n  TERMINAL_VEL: 12,\n  MOMO_WIDTH: 120,\n  MOMO_HEIGHT: 120\n};\nconst momo = new Image();\nmomo.src = \"./src/assets/cats/momo_walk_reverse_updated.png\";\nconst spriteWidth = 120;\nconst spriteHeight = 120;\nlet frameX = 1;\nlet frameY = 0;\n//set a maxFrame variable per row\nlet gameFrame = 0;\nconst staggerFrames = 15;\nclass Momo {\n  constructor(canvasWidth, canvasHeight, ctx) {\n    this.velocity = 0;\n    this.canvasWidth = canvasWidth;\n    this.canvasHeight = canvasHeight;\n    this.ctx = ctx;\n    this.x = canvasWidth / 3;\n    this.y = canvasHeight / 2;\n  }\n\n  //   drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n  // animate(){\n  //   ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);\n  //   this.ctx.fillStyle = \"#2B65EC\";\n  //   this.ctx.fillRect(0,0,600,600);\n  //   this.ctx.drawImage(momo, 100,100);\n  //   this.drawMomo();\n  //     // this.animate();\n  //     if (gameFrame % staggerFrames == 0){\n  //       if (frameX < 3) frameX ++;\n  //       else frameX = 1;\n  //     }\n\n  //   gameFrame++;\n  //   requestAnimationFrame(animate);\n  // }\n\n  drawMomo() {\n    // ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight)\n    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);\n  }\n  animate() {\n    this.move();\n    this.drawMomo(this.ctx);\n    if (gameFrame % staggerFrames == 0) {\n      if (frameX < 3) frameX++;else frameX = 1;\n    }\n    gameFrame++;\n    requestAnimationFrame(animate);\n  }\n  move() {\n    this.y += this.velocity;\n    if (this.velocity < CONSTANTS.TERMINAL_VEL) {\n      this.velocity += CONSTANTS.GRAVITY;\n    }\n  }\n  jump() {\n    this.velocity = -8;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb21vLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7RUFDaEJDLE9BQU8sRUFBRSxDQUFDO0VBQ1ZDLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFDZEMsWUFBWSxFQUFHLEVBQUU7RUFDakJDLFVBQVUsRUFBRyxHQUFHO0VBQ2hCQyxXQUFXLEVBQUc7QUFDaEIsQ0FBQztBQUVELE1BQU1DLElBQUksR0FBRyxJQUFJQyxLQUFLLEVBQUU7QUFDeEJELElBQUksQ0FBQ0UsR0FBRyxHQUFHLGlEQUFpRDtBQUM1RCxNQUFNQyxXQUFXLEdBQUcsR0FBRztBQUN2QixNQUFNQyxZQUFZLEdBQUcsR0FBRztBQUN4QixJQUFJQyxNQUFNLEdBQUcsQ0FBQztBQUNkLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2Q7QUFDQSxJQUFJQyxTQUFTLEdBQUcsQ0FBQztBQUNqQixNQUFNQyxhQUFhLEdBQUcsRUFBRTtBQUVULE1BQU1DLElBQUksQ0FBQztFQUV4QkMsV0FBVyxDQUFDQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLElBQUksQ0FBQ0MsUUFBUSxHQUFHLENBQUM7SUFDakIsSUFBSSxDQUFDSCxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLFlBQVk7SUFDaEMsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNFLENBQUMsR0FBR0osV0FBVyxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDSyxDQUFDLEdBQUdKLFlBQVksR0FBRyxDQUFDO0VBQzdCOztFQUVGO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBR0ZLLFFBQVEsR0FBRTtJQUNSO0lBQ0UsSUFBSSxDQUFDSixHQUFHLENBQUNLLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDQyxZQUFZLEVBQUVDLGFBQWEsQ0FBQztJQUNuRCxJQUFJLENBQUNQLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDckIsSUFBSSxFQUFFSyxNQUFNLEdBQUdGLFdBQVcsRUFBRSxDQUFDLEVBQUVBLFdBQVcsRUFBRUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUVELFdBQVcsRUFBRUMsWUFBWSxDQUFDO0VBQ3BIO0VBRUFrQixPQUFPLEdBQUU7SUFDTCxJQUFJLENBQUNDLElBQUksRUFBRTtJQUNYLElBQUksQ0FBQ04sUUFBUSxDQUFDLElBQUksQ0FBQ0osR0FBRyxDQUFDO0lBQ3ZCLElBQUlOLFNBQVMsR0FBR0MsYUFBYSxJQUFJLENBQUMsRUFBQztNQUNqQyxJQUFJSCxNQUFNLEdBQUcsQ0FBQyxFQUFFQSxNQUFNLEVBQUcsQ0FBQyxLQUNyQkEsTUFBTSxHQUFHLENBQUM7SUFDakI7SUFFRkUsU0FBUyxFQUFFO0lBQ1hpQixxQkFBcUIsQ0FBQ0YsT0FBTyxDQUFDO0VBRWhDO0VBRUFDLElBQUksR0FBRTtJQUNGLElBQUksQ0FBQ1AsQ0FBQyxJQUFJLElBQUksQ0FBQ0YsUUFBUTtJQUN2QixJQUFHLElBQUksQ0FBQ0EsUUFBUSxHQUFHcEIsU0FBUyxDQUFDRyxZQUFZLEVBQUU7TUFDdkMsSUFBSSxDQUFDaUIsUUFBUSxJQUFJcEIsU0FBUyxDQUFDQyxPQUFPO0lBQ3RDO0VBQ0o7RUFFQThCLElBQUksR0FBRTtJQUNGLElBQUksQ0FBQ1gsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUN0QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tb3NfbWlzYWR2ZW50dXJlcy8uL3NyYy9zY3JpcHRzL21vbW8uanM/ZjkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVEFOVFMgPSB7XG4gIEdSQVZJVFk6IDAsXG4gIEpVTVBfU1BFRUQ6IC04LFxuICBURVJNSU5BTF9WRUw6ICAxMixcbiAgTU9NT19XSURUSDogIDEyMCxcbiAgTU9NT19IRUlHSFQ6ICAxMjBcbn07XG5cbmNvbnN0IG1vbW8gPSBuZXcgSW1hZ2UoKTtcbm1vbW8uc3JjID0gXCIuL3NyYy9hc3NldHMvY2F0cy9tb21vX3dhbGtfcmV2ZXJzZV91cGRhdGVkLnBuZ1wiXG5jb25zdCBzcHJpdGVXaWR0aCA9IDEyMDtcbmNvbnN0IHNwcml0ZUhlaWdodCA9IDEyMDtcbmxldCBmcmFtZVggPSAxO1xubGV0IGZyYW1lWSA9IDA7XG4vL3NldCBhIG1heEZyYW1lIHZhcmlhYmxlIHBlciByb3dcbmxldCBnYW1lRnJhbWUgPSAwO1xuY29uc3Qgc3RhZ2dlckZyYW1lcyA9IDE1O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb21vIHtcblxuICBjb25zdHJ1Y3RvcihjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjdHgpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgIHRoaXMueCA9IGNhbnZhc1dpZHRoIC8gMztcbiAgICAgIHRoaXMueSA9IGNhbnZhc0hlaWdodCAvIDI7XG4gIH1cblxuLy8gICBkcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodClcbiAgICAvLyBhbmltYXRlKCl7XG4gICAgLy8gICBjdHguY2xlYXJSZWN0KDAsMCxDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMkI2NUVDXCI7XG4gICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCgwLDAsNjAwLDYwMCk7XG4gICAgLy8gICB0aGlzLmN0eC5kcmF3SW1hZ2UobW9tbywgMTAwLDEwMCk7XG4gICAgLy8gICB0aGlzLmRyYXdNb21vKCk7XG4gICAgLy8gICAgIC8vIHRoaXMuYW5pbWF0ZSgpO1xuICAgIC8vICAgICBpZiAoZ2FtZUZyYW1lICUgc3RhZ2dlckZyYW1lcyA9PSAwKXtcbiAgICAvLyAgICAgICBpZiAoZnJhbWVYIDwgMykgZnJhbWVYICsrO1xuICAgIC8vICAgICAgIGVsc2UgZnJhbWVYID0gMTtcbiAgICAvLyAgICAgfVxuICAgICAgXG4gICAgLy8gICBnYW1lRnJhbWUrKztcbiAgICAvLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAvLyB9XG5cblxuICBkcmF3TW9tbygpe1xuICAgIC8vIGN0eC5jbGVhclJlY3QoMCwwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodClcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShtb21vLCBmcmFtZVggKiBzcHJpdGVXaWR0aCwgMCwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWdodCwgNTAsIDQ1MCwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWdodCk7XG4gIH1cblxuICBhbmltYXRlKCl7XG4gICAgICB0aGlzLm1vdmUoKTtcbiAgICAgIHRoaXMuZHJhd01vbW8odGhpcy5jdHgpO1xuICAgICAgaWYgKGdhbWVGcmFtZSAlIHN0YWdnZXJGcmFtZXMgPT0gMCl7XG4gICAgICAgIGlmIChmcmFtZVggPCAzKSBmcmFtZVggKys7XG4gICAgICAgIGVsc2UgZnJhbWVYID0gMTtcbiAgICAgIH1cbiAgICBcbiAgICBnYW1lRnJhbWUrKztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgfVxuXG4gIG1vdmUoKXtcbiAgICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5O1xuICAgICAgaWYodGhpcy52ZWxvY2l0eSA8IENPTlNUQU5UUy5URVJNSU5BTF9WRUwgKXtcbiAgICAgICAgICB0aGlzLnZlbG9jaXR5ICs9IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgfVxuICB9XG5cbiAganVtcCgpe1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IC04O1xuICB9XG59Il0sIm5hbWVzIjpbIkNPTlNUQU5UUyIsIkdSQVZJVFkiLCJKVU1QX1NQRUVEIiwiVEVSTUlOQUxfVkVMIiwiTU9NT19XSURUSCIsIk1PTU9fSEVJR0hUIiwibW9tbyIsIkltYWdlIiwic3JjIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJmcmFtZVgiLCJmcmFtZVkiLCJnYW1lRnJhbWUiLCJzdGFnZ2VyRnJhbWVzIiwiTW9tbyIsImNvbnN0cnVjdG9yIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjdHgiLCJ2ZWxvY2l0eSIsIngiLCJ5IiwiZHJhd01vbW8iLCJjbGVhclJlY3QiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiZHJhd0ltYWdlIiwiYW5pbWF0ZSIsIm1vdmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJqdW1wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/momo.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21vc19taXNhZHZlbnR1cmVzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;