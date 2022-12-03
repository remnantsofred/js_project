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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_momo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/momo */ \"./src/scripts/momo.js\");\n\n\n\nconst canvas = document.getElementById(\"gamescreen\");\nconst ctx = canvas.getContext(\"2d\");\nconst CANVAS_WIDTH = canvas.width = 600;\nconst CANVAS_HEIGHT = canvas.height = 600;\n\n//this part of the code is me learning. will remove later\nconst playerImage = new Image();\nplayerImage.src = './src/assets/cats/shadow_dog.png';\nconst pspriteWidth = 575;\nconst pspriteHeight = 523;\nconst momo = new Image();\nmomo.src = \"./src/assets/cats/momo_walk_reverse_updated.png\";\nconst spriteWidth = 120;\nconst spriteHeight = 120;\nlet frameX = 1;\nlet frameY = 0;\n//set a maxFrame variable per row\nlet gameFrame = 0;\nconst staggerFrames = 15;\nlet newMomo = new _scripts_momo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](CANVAS_WIDTH, CANVAS_HEIGHT, ctx);\nlet game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ncanvas.addEventListener(\"mousedown\", game.click.bind(game));\ngame.restart();\ngame.play();\nconsole.log(\"Webpack is working!\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QztBQUNIO0FBQ1Q7QUFJbEMsTUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFDcEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHbkMsTUFBTUMsWUFBWSxHQUFHTCxNQUFNLENBQUNNLEtBQUssR0FBRyxHQUFHO0FBQ3ZDLE1BQU1DLGFBQWEsR0FBR1AsTUFBTSxDQUFDUSxNQUFNLEdBQUcsR0FBRzs7QUFFekM7QUFDQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQy9CRCxXQUFXLENBQUNFLEdBQUcsR0FBRyxrQ0FBa0M7QUFDcEQsTUFBTUMsWUFBWSxHQUFHLEdBQUc7QUFDeEIsTUFBTUMsYUFBYSxHQUFHLEdBQUc7QUFFekIsTUFBTUMsSUFBSSxHQUFHLElBQUlKLEtBQUssRUFBRTtBQUN4QkksSUFBSSxDQUFDSCxHQUFHLEdBQUcsaURBQWlEO0FBQzVELE1BQU1JLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLE1BQU1DLFlBQVksR0FBRyxHQUFHO0FBQ3hCLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2QsSUFBSUMsTUFBTSxHQUFHLENBQUM7QUFDZDtBQUNBLElBQUlDLFNBQVMsR0FBRyxDQUFDO0FBQ2pCLE1BQU1DLGFBQWEsR0FBRyxFQUFFO0FBSXhCLElBQUlDLE9BQU8sR0FBRyxJQUFJdEIscURBQUksQ0FBQ00sWUFBWSxFQUFFRSxhQUFhLEVBQUVKLEdBQUcsQ0FBQztBQUd4RCxJQUFJbUIsSUFBSSxHQUFHLElBQUl6QixxREFBZ0IsQ0FBQ0csTUFBTSxDQUFDO0FBQ3ZDQSxNQUFNLENBQUN1QixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVELElBQUksQ0FBQ0UsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQyxDQUFDO0FBQzNEQSxJQUFJLENBQUNJLE9BQU8sRUFBRTtBQUNkSixJQUFJLENBQUNLLElBQUksRUFBRTtBQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbW9zX21pc2FkdmVudHVyZXMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9tb01pc2FkdmVudHVyZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5pbXBvcnQgTW9tbyBmcm9tICcuL3NjcmlwdHMvbW9tbyc7XG5cblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVzY3JlZW5cIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbmNvbnN0IENBTlZBU19XSURUSCA9IGNhbnZhcy53aWR0aCA9IDYwMDtcbmNvbnN0IENBTlZBU19IRUlHSFQgPSBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4vL3RoaXMgcGFydCBvZiB0aGUgY29kZSBpcyBtZSBsZWFybmluZy4gd2lsbCByZW1vdmUgbGF0ZXJcbmNvbnN0IHBsYXllckltYWdlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJJbWFnZS5zcmMgPSAnLi9zcmMvYXNzZXRzL2NhdHMvc2hhZG93X2RvZy5wbmcnO1xuY29uc3QgcHNwcml0ZVdpZHRoID0gNTc1O1xuY29uc3QgcHNwcml0ZUhlaWdodCA9IDUyMztcblxuY29uc3QgbW9tbyA9IG5ldyBJbWFnZSgpO1xubW9tby5zcmMgPSBcIi4vc3JjL2Fzc2V0cy9jYXRzL21vbW9fd2Fsa19yZXZlcnNlX3VwZGF0ZWQucG5nXCJcbmNvbnN0IHNwcml0ZVdpZHRoID0gMTIwO1xuY29uc3Qgc3ByaXRlSGVpZ2h0ID0gMTIwO1xubGV0IGZyYW1lWCA9IDE7XG5sZXQgZnJhbWVZID0gMDtcbi8vc2V0IGEgbWF4RnJhbWUgdmFyaWFibGUgcGVyIHJvd1xubGV0IGdhbWVGcmFtZSA9IDA7XG5jb25zdCBzdGFnZ2VyRnJhbWVzID0gMTU7XG5cblxuXG5sZXQgbmV3TW9tbyA9IG5ldyBNb21vKENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCwgY3R4KTtcblxuXG5sZXQgZ2FtZSA9IG5ldyBNb21vTWlzYWR2ZW50dXJlKGNhbnZhcyk7XG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBnYW1lLmNsaWNrLmJpbmQoZ2FtZSkpO1xuZ2FtZS5yZXN0YXJ0KCk7XG5nYW1lLnBsYXkoKTtcbmNvbnNvbGUubG9nKFwiV2VicGFjayBpcyB3b3JraW5nIVwiKVxuXG5cbiJdLCJuYW1lcyI6WyJNb21vTWlzYWR2ZW50dXJlIiwiR2FtZVZpZXciLCJNb21vIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJDQU5WQVNfV0lEVEgiLCJ3aWR0aCIsIkNBTlZBU19IRUlHSFQiLCJoZWlnaHQiLCJwbGF5ZXJJbWFnZSIsIkltYWdlIiwic3JjIiwicHNwcml0ZVdpZHRoIiwicHNwcml0ZUhlaWdodCIsIm1vbW8iLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsImZyYW1lWCIsImZyYW1lWSIsImdhbWVGcmFtZSIsInN0YWdnZXJGcmFtZXMiLCJuZXdNb21vIiwiZ2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGljayIsImJpbmQiLCJyZXN0YXJ0IiwicGxheSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MomoMisadventure; }\n/* harmony export */ });\n/* harmony import */ var _momo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./momo */ \"./src/scripts/momo.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/scripts/level.js\");\n\n\nclass MomoMisadventure {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.canvas = canvas;\n    this.restart();\n  }\n  animate() {\n    this.level.drawBackground(this.ctx);\n    this.momo.animate();\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n  restart() {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.momo = new _momo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions.width, this.dimensions.height, this.ctx);\n    // this.animate();\n  }\n\n  play() {\n    this.running = true;\n    this.momo.draw();\n    // this.animate();\n    // add event listener here for mouseclick => jump\n    this.canvas.addEventListener(\"click\", () => {\n      this.momo.jump();\n    });\n  }\n  click() {\n    this.momo.jump();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUNDO0FBRVosTUFBTUUsZ0JBQWdCLENBQUM7RUFDcENDLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFBRUMsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQUs7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLO0lBQU8sQ0FBQztJQUNoRSxJQUFJLENBQUNMLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNNLE9BQU8sRUFBRTtFQUNoQjtFQUVBQyxPQUFPLEdBQUc7SUFDUixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ1IsR0FBRyxDQUFDO0lBQ25DLElBQUksQ0FBQ1MsSUFBSSxDQUFDSCxPQUFPLEVBQUU7SUFDbkIsSUFBSSxJQUFJLENBQUNJLE9BQU8sRUFBQztNQUNmQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hEO0VBQ0Y7RUFFQVAsT0FBTyxHQUFHO0lBQ1IsSUFBSSxDQUFDSyxPQUFPLEdBQUcsS0FBSztJQUNwQixJQUFJLENBQUNILEtBQUssR0FBRyxJQUFJWCw4Q0FBSyxDQUFDLElBQUksQ0FBQ00sVUFBVSxDQUFDO0lBQ3ZDLElBQUksQ0FBQ08sSUFBSSxHQUFHLElBQUlkLDZDQUFJLENBQUMsSUFBSSxDQUFDTyxVQUFVLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNELFVBQVUsQ0FBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQ0osR0FBRyxDQUFDO0lBQzdFO0VBRUY7O0VBRUFhLElBQUksR0FBRTtJQUNKLElBQUksQ0FBQ0gsT0FBTyxHQUFHLElBQUk7SUFDbkIsSUFBSSxDQUFDRCxJQUFJLENBQUNLLElBQUksRUFBRTtJQUNoQjtJQUNBO0lBQ0EsSUFBSSxDQUFDZixNQUFNLENBQUNnQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSTtNQUN4QyxJQUFJLENBQUNOLElBQUksQ0FBQ08sSUFBSSxFQUFFO0lBQ2xCLENBQUMsQ0FBQztFQUVKO0VBRUFDLEtBQUssR0FBRTtJQUNMLElBQUksQ0FBQ1IsSUFBSSxDQUFDTyxJQUFJLEVBQUU7RUFDbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21vbW9zX21pc2FkdmVudHVyZXMvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbW8gZnJvbSAnLi9tb21vJztcbmltcG9ydCBMZXZlbCBmcm9tICcuL2xldmVsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb21vTWlzYWR2ZW50dXJlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMubGV2ZWwuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xuICAgIHRoaXMubW9tby5hbmltYXRlKCk7XG4gICAgaWYgKHRoaXMucnVubmluZyl7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgIHRoaXMubW9tbyA9IG5ldyBNb21vKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCwgdGhpcy5jdHgpO1xuICAgIC8vIHRoaXMuYW5pbWF0ZSgpO1xuICAgIFxuICB9XG4gIFxuICBwbGF5KCl7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLm1vbW8uZHJhdygpO1xuICAgIC8vIHRoaXMuYW5pbWF0ZSgpO1xuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciBoZXJlIGZvciBtb3VzZWNsaWNrID0+IGp1bXBcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgIHRoaXMubW9tby5qdW1wKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNsaWNrKCl7XG4gICAgdGhpcy5tb21vLmp1bXAoKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJNb21vIiwiTGV2ZWwiLCJNb21vTWlzYWR2ZW50dXJlIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwicmVzdGFydCIsImFuaW1hdGUiLCJsZXZlbCIsImRyYXdCYWNrZ3JvdW5kIiwibW9tbyIsInJ1bm5pbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwicGxheSIsImRyYXciLCJhZGRFdmVudExpc3RlbmVyIiwianVtcCIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Momo; }\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 0.5,\n  JUMP_SPEED: -8,\n  GROUND: 400,\n  TERMINAL_VEL: 12\n  // MOMO_WIDTH:  120,\n  // MOMO_HEIGHT:  120\n};\n\nconst momo = new Image();\nmomo.src = \"./src/assets/cats/momo_walk_reverse_updated.png\";\nconst spriteWidth = 120;\nconst spriteHeight = 120;\nlet frameX = 1;\nlet frameY = 0;\n//set a maxFrame variable per row\nlet gameFrame = 0;\nconst staggerFrames = 15;\nclass Momo {\n  constructor(canvasWidth, canvasHeight, ctx) {\n    this.velocity = 0;\n    this.canvasWidth = canvasWidth;\n    this.canvasHeight = canvasHeight;\n    this.ctx = ctx;\n    this.x = canvasWidth / 3;\n    this.y = canvasHeight / 2;\n    this.move.bind(this);\n    this.jump.bind(this);\n  }\n  draw() {\n    this.ctx.clearRect(0, 0, 600, 600);\n    this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);\n    this.move();\n    requestAnimationFrame(this.draw.bind(this));\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, 600, 600);\n    this.move();\n    this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);\n    if (gameFrame % staggerFrames == 0) {\n      if (frameX < 3) frameX++;else frameX = 1;\n    }\n    gameFrame++;\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  move() {\n    if (this.y <= CONSTANTS.GROUND) {\n      this.y += this.velocity;\n    }\n    ;\n    console.log('velocity', this.velocity);\n    console.log('y', this.y);\n    if (this.velocity < CONSTANTS.TERMINAL_VEL) {\n      this.velocity += CONSTANTS.GRAVITY;\n    }\n  }\n  jump() {\n    this.velocity = -8;\n    console.log(\"jump\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb21vLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7RUFDaEJDLE9BQU8sRUFBRSxHQUFHO0VBQ1pDLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFDZEMsTUFBTSxFQUFFLEdBQUc7RUFDWEMsWUFBWSxFQUFHO0VBQ2Y7RUFDQTtBQUNGLENBQUM7O0FBRUQsTUFBTUMsSUFBSSxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUN4QkQsSUFBSSxDQUFDRSxHQUFHLEdBQUcsaURBQWlEO0FBQzVELE1BQU1DLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLE1BQU1DLFlBQVksR0FBRyxHQUFHO0FBQ3hCLElBQUlDLE1BQU0sR0FBRyxDQUFDO0FBQ2QsSUFBSUMsTUFBTSxHQUFHLENBQUM7QUFDZDtBQUNBLElBQUlDLFNBQVMsR0FBRyxDQUFDO0FBQ2pCLE1BQU1DLGFBQWEsR0FBRyxFQUFFO0FBRVQsTUFBTUMsSUFBSSxDQUFDO0VBRXhCQyxXQUFXLENBQUNDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUNqQixJQUFJLENBQUNILFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWTtJQUNoQyxJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0UsQ0FBQyxHQUFHSixXQUFXLEdBQUcsQ0FBQztJQUN4QixJQUFJLENBQUNLLENBQUMsR0FBR0osWUFBWSxHQUFHLENBQUM7SUFDekIsSUFBSSxDQUFDSyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEIsSUFBSSxDQUFDQyxJQUFJLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7RUFDeEI7RUFFQUUsSUFBSSxHQUFFO0lBQ0osSUFBSSxDQUFDUCxHQUFHLENBQUNRLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDaEMsSUFBSSxDQUFDUixHQUFHLENBQUNTLFNBQVMsQ0FBQ3RCLElBQUksRUFBRUssTUFBTSxHQUFHRixXQUFXLEVBQUUsQ0FBQyxFQUFFQSxXQUFXLEVBQUVDLFlBQVksRUFBRSxJQUFJLENBQUNXLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRWIsV0FBVyxFQUFFQyxZQUFZLENBQUM7SUFDdkgsSUFBSSxDQUFDYSxJQUFJLEVBQUU7SUFDWE0scUJBQXFCLENBQUMsSUFBSSxDQUFDSCxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM3QztFQUdBTSxPQUFPLEdBQUU7SUFDUCxJQUFJLENBQUNYLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNoQyxJQUFJLENBQUNKLElBQUksRUFBRTtJQUNYLElBQUksQ0FBQ0osR0FBRyxDQUFDUyxTQUFTLENBQUN0QixJQUFJLEVBQUVLLE1BQU0sR0FBR0YsV0FBVyxFQUFFLENBQUMsRUFBRUEsV0FBVyxFQUFFQyxZQUFZLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRUQsV0FBVyxFQUFFQyxZQUFZLENBQUM7SUFDOUcsSUFBSUcsU0FBUyxHQUFHQyxhQUFhLElBQUksQ0FBQyxFQUFDO01BQ2pDLElBQUlILE1BQU0sR0FBRyxDQUFDLEVBQUVBLE1BQU0sRUFBRyxDQUFDLEtBQ3JCQSxNQUFNLEdBQUcsQ0FBQztJQUNqQjtJQUVGRSxTQUFTLEVBQUU7SUFDWGdCLHFCQUFxQixDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDaEQ7RUFFQUQsSUFBSSxHQUFFO0lBQ0YsSUFBSSxJQUFJLENBQUNELENBQUMsSUFBSXJCLFNBQVMsQ0FBQ0csTUFBTSxFQUFFO01BQzlCLElBQUksQ0FBQ2tCLENBQUMsSUFBSSxJQUFJLENBQUNGLFFBQVE7SUFDekI7SUFBQztJQUNEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDWixRQUFRLENBQUM7SUFDckNXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUNWLENBQUMsQ0FBQztJQUN2QixJQUFHLElBQUksQ0FBQ0YsUUFBUSxHQUFHbkIsU0FBUyxDQUFDSSxZQUFZLEVBQUU7TUFDdkMsSUFBSSxDQUFDZSxRQUFRLElBQUluQixTQUFTLENBQUNDLE9BQU87SUFDdEM7RUFDSjtFQUVBdUIsSUFBSSxHQUFFO0lBQ0YsSUFBSSxDQUFDTCxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDdkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21vbW9zX21pc2FkdmVudHVyZXMvLi9zcmMvc2NyaXB0cy9tb21vLmpzP2Y5MTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09OU1RBTlRTID0ge1xuICBHUkFWSVRZOiAwLjUsXG4gIEpVTVBfU1BFRUQ6IC04LFxuICBHUk9VTkQ6IDQwMCxcbiAgVEVSTUlOQUxfVkVMOiAgMTIsXG4gIC8vIE1PTU9fV0lEVEg6ICAxMjAsXG4gIC8vIE1PTU9fSEVJR0hUOiAgMTIwXG59O1xuXG5jb25zdCBtb21vID0gbmV3IEltYWdlKCk7XG5tb21vLnNyYyA9IFwiLi9zcmMvYXNzZXRzL2NhdHMvbW9tb193YWxrX3JldmVyc2VfdXBkYXRlZC5wbmdcIlxuY29uc3Qgc3ByaXRlV2lkdGggPSAxMjA7XG5jb25zdCBzcHJpdGVIZWlnaHQgPSAxMjA7XG5sZXQgZnJhbWVYID0gMTtcbmxldCBmcmFtZVkgPSAwO1xuLy9zZXQgYSBtYXhGcmFtZSB2YXJpYWJsZSBwZXIgcm93XG5sZXQgZ2FtZUZyYW1lID0gMDtcbmNvbnN0IHN0YWdnZXJGcmFtZXMgPSAxNTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9tbyB7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY3R4KSB7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICB0aGlzLnggPSBjYW52YXNXaWR0aCAvIDM7XG4gICAgICB0aGlzLnkgPSBjYW52YXNIZWlnaHQgLyAyO1xuICAgICAgdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmp1bXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwwLDYwMCwgNjAwKTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobW9tbywgZnJhbWVYICogc3ByaXRlV2lkdGgsIDAsIHNwcml0ZVdpZHRoLCBzcHJpdGVIZWlnaHQsIHRoaXMueCwgdGhpcy55LCBzcHJpdGVXaWR0aCwgc3ByaXRlSGVpZ2h0KTtcbiAgICB0aGlzLm1vdmUoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3LmJpbmQodGhpcykpO1xuICB9XG5cblxuICBhbmltYXRlKCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCw2MDAsIDYwMCk7XG4gICAgdGhpcy5tb3ZlKCk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKG1vbW8sIGZyYW1lWCAqIHNwcml0ZVdpZHRoLCAwLCBzcHJpdGVXaWR0aCwgc3ByaXRlSGVpZ2h0LCA1MCwgNDUwLCBzcHJpdGVXaWR0aCwgc3ByaXRlSGVpZ2h0KTtcbiAgICAgIGlmIChnYW1lRnJhbWUgJSBzdGFnZ2VyRnJhbWVzID09IDApe1xuICAgICAgICBpZiAoZnJhbWVYIDwgMykgZnJhbWVYICsrO1xuICAgICAgICBlbHNlIGZyYW1lWCA9IDE7XG4gICAgICB9XG4gICAgXG4gICAgZ2FtZUZyYW1lKys7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICAgIGlmICh0aGlzLnkgPD0gQ09OU1RBTlRTLkdST1VORCkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eVxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKCd2ZWxvY2l0eScsdGhpcy52ZWxvY2l0eSlcbiAgICAgIGNvbnNvbGUubG9nKCd5Jyx0aGlzLnkpXG4gICAgICBpZih0aGlzLnZlbG9jaXR5IDwgQ09OU1RBTlRTLlRFUk1JTkFMX1ZFTCApe1xuICAgICAgICAgIHRoaXMudmVsb2NpdHkgKz0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICB9IFxuICB9XG5cbiAganVtcCgpe1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IC04O1xuICAgICAgY29uc29sZS5sb2coXCJqdW1wXCIpO1xuICB9XG59Il0sIm5hbWVzIjpbIkNPTlNUQU5UUyIsIkdSQVZJVFkiLCJKVU1QX1NQRUVEIiwiR1JPVU5EIiwiVEVSTUlOQUxfVkVMIiwibW9tbyIsIkltYWdlIiwic3JjIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJmcmFtZVgiLCJmcmFtZVkiLCJnYW1lRnJhbWUiLCJzdGFnZ2VyRnJhbWVzIiwiTW9tbyIsImNvbnN0cnVjdG9yIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjdHgiLCJ2ZWxvY2l0eSIsIngiLCJ5IiwibW92ZSIsImJpbmQiLCJqdW1wIiwiZHJhdyIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/momo.js\n");

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