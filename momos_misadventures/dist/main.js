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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MomoMisadventure; }\n/* harmony export */ });\n/* harmony import */ var _momo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./momo */ \"./src/momo.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\nclass MomoMisadventure {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.restart();\n  }\n  animate() {\n    console.log(this);\n    this.level.drawBackground(this.ctx);\n    this.momo.animate();\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n  restart() {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.momo = new _momo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions.width, this.dimensions.height, this.ctx);\n    // this.animate();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n  click() {\n    this.momo.jump();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDQztBQUVaLE1BQU1FLGdCQUFnQixDQUFDO0VBQ3BDQyxXQUFXLENBQUNDLE1BQU0sRUFBRTtJQUNsQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsVUFBVSxHQUFHO01BQUVDLEtBQUssRUFBRUosTUFBTSxDQUFDSSxLQUFLO01BQUVDLE1BQU0sRUFBRUwsTUFBTSxDQUFDSztJQUFPLENBQUM7SUFDaEUsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDaEI7RUFFQUMsT0FBTyxHQUFHO0lBQ1JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztJQUVqQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ1YsR0FBRyxDQUFDO0lBQ25DLElBQUksQ0FBQ1csSUFBSSxDQUFDTCxPQUFPLEVBQUU7SUFDbkIsSUFBSSxJQUFJLENBQUNNLE9BQU8sRUFBQztNQUNmQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNQLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hEO0VBQ0Y7RUFFQVQsT0FBTyxHQUFHO0lBQ1IsSUFBSSxDQUFDTyxPQUFPLEdBQUcsS0FBSztJQUNwQixJQUFJLENBQUNILEtBQUssR0FBRyxJQUFJYiw4Q0FBSyxDQUFDLElBQUksQ0FBQ00sVUFBVSxDQUFDO0lBQ3ZDLElBQUksQ0FBQ1MsSUFBSSxHQUFHLElBQUloQiw2Q0FBSSxDQUFDLElBQUksQ0FBQ08sVUFBVSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDRCxVQUFVLENBQUNFLE1BQU0sRUFBRSxJQUFJLENBQUNKLEdBQUcsQ0FBQztJQUM3RTtFQUNGOztFQUVBZSxJQUFJLEdBQUU7SUFDSixJQUFJLENBQUNILE9BQU8sR0FBRyxJQUFJO0lBQ25CLElBQUksQ0FBQ04sT0FBTyxFQUFFO0VBQ2hCO0VBRUFVLEtBQUssR0FBRTtJQUNMLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxJQUFJLEVBQUU7RUFDbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21vbW9zX21pc2FkdmVudHVyZXMvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb21vIGZyb20gJy4vbW9tbyc7XG5pbXBvcnQgTGV2ZWwgZnJvbSAnLi9sZXZlbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9tb01pc2FkdmVudHVyZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBcbiAgICB0aGlzLmxldmVsLmRyYXdCYWNrZ3JvdW5kKHRoaXMuY3R4KTtcbiAgICB0aGlzLm1vbW8uYW5pbWF0ZSgpO1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpe1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICByZXN0YXJ0KCkge1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwodGhpcy5kaW1lbnNpb25zKTtcbiAgICB0aGlzLm1vbW8gPSBuZXcgTW9tbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQsIHRoaXMuY3R4KTtcbiAgICAvLyB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIHBsYXkoKXtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgY2xpY2soKXtcbiAgICB0aGlzLm1vbW8uanVtcCgpO1xuICB9XG59Il0sIm5hbWVzIjpbIk1vbW8iLCJMZXZlbCIsIk1vbW9NaXNhZHZlbnR1cmUiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN0YXJ0IiwiYW5pbWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsZXZlbCIsImRyYXdCYWNrZ3JvdW5kIiwibW9tbyIsInJ1bm5pbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwicGxheSIsImNsaWNrIiwianVtcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\nclass GameView {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZV92aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxNQUFNQSxRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21vc19taXNhZHZlbnR1cmVzLy4vc3JjL2dhbWVfdmlldy5qcz9hNWZjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcblxuXG59Il0sIm5hbWVzIjpbIkdhbWVWaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game_view.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\nconst canvas = document.getElementById(\"gamescreen\");\nconst ctx = canvas.getContext(\"2d\");\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ncanvas.addEventListener(\"mousedown\", game.click.bind(game));\n// game.restart();\ngame.play();\nconsole.log(\"Webpack is working!\");\nDOMContentLoaded;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXNDO0FBQ0g7QUFFbkMsTUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFDcEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFHbkMsSUFBSUMsSUFBSSxHQUFHLElBQUlQLDZDQUFnQixDQUFDRSxNQUFNLENBQUM7QUFDdkNBLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsV0FBVyxFQUFFRCxJQUFJLENBQUNFLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsQ0FBQztBQUMzRDtBQUNBQSxJQUFJLENBQUNJLElBQUksRUFBRTtBQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztBQUdsQ0MsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tb3NfbWlzYWR2ZW50dXJlcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb21vTWlzYWR2ZW50dXJlIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9nYW1lX3ZpZXcnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVzY3JlZW5cIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbmxldCBnYW1lID0gbmV3IE1vbW9NaXNhZHZlbnR1cmUoY2FudmFzKTtcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGdhbWUuY2xpY2suYmluZChnYW1lKSk7XG4vLyBnYW1lLnJlc3RhcnQoKTtcbmdhbWUucGxheSgpO1xuY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpXG5cblxuRE9NQ29udGVudExvYWRlZCJdLCJuYW1lcyI6WyJNb21vTWlzYWR2ZW50dXJlIiwiR2FtZVZpZXciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2siLCJiaW5kIiwicGxheSIsImNvbnNvbGUiLCJsb2ciLCJET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Level; }\n/* harmony export */ });\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    // this.pipes = Array(3).fill().map(() => {\n    //   {x:0, }\n    // });\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"green\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGV2ZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLEtBQUssQ0FBQztFQUN6QkMsV0FBVyxDQUFDQyxVQUFVLEVBQUU7SUFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBLFVBQVU7SUFDNUI7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFDLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2xCQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxPQUFPO0lBQ3ZCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0osVUFBVSxDQUFDSyxLQUFLLEVBQUUsSUFBSSxDQUFDTCxVQUFVLENBQUNNLE1BQU0sQ0FBQztFQUNuRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tb3NfbWlzYWR2ZW50dXJlcy8uL3NyYy9sZXZlbC5qcz82YzlkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgLy8gdGhpcy5waXBlcyA9IEFycmF5KDMpLmZpbGwoKS5tYXAoKCkgPT4ge1xuICAgIC8vICAge3g6MCwgfVxuICAgIC8vIH0pO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJMZXZlbCIsImNvbnN0cnVjdG9yIiwiZGltZW5zaW9ucyIsImRyYXdCYWNrZ3JvdW5kIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/level.js\n");

/***/ }),

/***/ "./src/momo.js":
/*!*********************!*\
  !*** ./src/momo.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Momo; }\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 0,\n  JUMP_SPEED: -8,\n  TERMINAL_VEL: 12,\n  MOMO_WIDTH: 40,\n  MOMO_HEIGHT: 30\n};\nconst momo = new Image();\nmomo.src = './assets/cats/momo_walk?reversed.png';\nclass Momo {\n  constructor(canvasWidth, canvasHeight, ctx) {\n    this.velocity = 0;\n    this.canvasWidth = canvasWidth;\n    this.canvasHeight = canvasHeight;\n    this.ctx = ctx;\n    this.x = canvasWidth / 3;\n    this.y = canvasHeight / 2;\n  }\n  drawMomo(ctx) {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(this.x, this.y, CONSTANTS.MOMO_WIDTH, CONSTANTS.MOMO_HEIGHT);\n    ctx.drawImage(momo);\n  }\n  animate() {\n    this.move();\n    this.drawMomo(this.ctx);\n  }\n  move() {\n    this.y += this.velocity;\n    if (this.velocity < CONSTANTS.TERMINAL_VEL) {\n      this.velocity += CONSTANTS.GRAVITY;\n    }\n  }\n  jump() {\n    this.velocity = -8;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9tby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHO0VBQ2hCQyxPQUFPLEVBQUUsQ0FBQztFQUNWQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0VBQ2RDLFlBQVksRUFBRyxFQUFFO0VBQ2pCQyxVQUFVLEVBQUcsRUFBRTtFQUNmQyxXQUFXLEVBQUc7QUFDaEIsQ0FBQztBQUVELE1BQU1DLElBQUksR0FBRyxJQUFJQyxLQUFLLEVBQUU7QUFDeEJELElBQUksQ0FBQ0UsR0FBRyxHQUFHLHNDQUFzQztBQUlsQyxNQUFNQyxJQUFJLENBQUM7RUFHeEJDLFdBQVcsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO0lBQ2pCLElBQUksQ0FBQ0gsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZO0lBQ2hDLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDRSxDQUFDLEdBQUdKLFdBQVcsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0ssQ0FBQyxHQUFHSixZQUFZLEdBQUcsQ0FBQztFQUM3QjtFQUdBSyxRQUFRLENBQUNKLEdBQUcsRUFBQztJQUNUQSxHQUFHLENBQUNLLFNBQVMsR0FBRyxPQUFPO0lBQ3ZCTCxHQUFHLENBQUNNLFFBQVEsQ0FBQyxJQUFJLENBQUNKLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRWhCLFNBQVMsQ0FBQ0ksVUFBVSxFQUFFSixTQUFTLENBQUNLLFdBQVcsQ0FBQztJQUN6RVEsR0FBRyxDQUFDTyxTQUFTLENBQUNkLElBQUksQ0FBRztFQUN6QjtFQUVBZSxPQUFPLEdBQUU7SUFDTCxJQUFJLENBQUNDLElBQUksRUFBRTtJQUNYLElBQUksQ0FBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQ0osR0FBRyxDQUFDO0VBQzNCO0VBRUFTLElBQUksR0FBRTtJQUNGLElBQUksQ0FBQ04sQ0FBQyxJQUFJLElBQUksQ0FBQ0YsUUFBUTtJQUN2QixJQUFHLElBQUksQ0FBQ0EsUUFBUSxHQUFHZCxTQUFTLENBQUNHLFlBQVksRUFBRTtNQUN2QyxJQUFJLENBQUNXLFFBQVEsSUFBSWQsU0FBUyxDQUFDQyxPQUFPO0lBQ3RDO0VBQ0o7RUFFQXNCLElBQUksR0FBRTtJQUNGLElBQUksQ0FBQ1QsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUN0QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tb3NfbWlzYWR2ZW50dXJlcy8uL3NyYy9tb21vLmpzPzI5NTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09OU1RBTlRTID0ge1xuICBHUkFWSVRZOiAwLFxuICBKVU1QX1NQRUVEOiAtOCxcbiAgVEVSTUlOQUxfVkVMOiAgMTIsXG4gIE1PTU9fV0lEVEg6ICA0MCxcbiAgTU9NT19IRUlHSFQ6ICAzMFxufTtcblxuY29uc3QgbW9tbyA9IG5ldyBJbWFnZSgpO1xubW9tby5zcmMgPSAnLi9hc3NldHMvY2F0cy9tb21vX3dhbGs/cmV2ZXJzZWQucG5nJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9tbyB7XG4gIFxuICBcbiAgY29uc3RydWN0b3IoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY3R4KSB7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICB0aGlzLnggPSBjYW52YXNXaWR0aCAvIDM7XG4gICAgICB0aGlzLnkgPSBjYW52YXNIZWlnaHQgLyAyO1xuICB9XG5cblxuICBkcmF3TW9tbyhjdHgpe1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgQ09OU1RBTlRTLk1PTU9fV0lEVEgsIENPTlNUQU5UUy5NT01PX0hFSUdIVCk7XG4gICAgICBjdHguZHJhd0ltYWdlKG1vbW8sIClcbiAgfVxuXG4gIGFuaW1hdGUoKXtcbiAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgdGhpcy5kcmF3TW9tbyh0aGlzLmN0eCk7XG4gIH1cblxuICBtb3ZlKCl7XG4gICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eTtcbiAgICAgIGlmKHRoaXMudmVsb2NpdHkgPCBDT05TVEFOVFMuVEVSTUlOQUxfVkVMICl7XG4gICAgICAgICAgdGhpcy52ZWxvY2l0eSArPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgIH1cbiAgfVxuXG4gIGp1bXAoKXtcbiAgICAgIHRoaXMudmVsb2NpdHkgPSAtODtcbiAgfVxufSJdLCJuYW1lcyI6WyJDT05TVEFOVFMiLCJHUkFWSVRZIiwiSlVNUF9TUEVFRCIsIlRFUk1JTkFMX1ZFTCIsIk1PTU9fV0lEVEgiLCJNT01PX0hFSUdIVCIsIm1vbW8iLCJJbWFnZSIsInNyYyIsIk1vbW8iLCJjb25zdHJ1Y3RvciIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY3R4IiwidmVsb2NpdHkiLCJ4IiwieSIsImRyYXdNb21vIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJhbmltYXRlIiwibW92ZSIsImp1bXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/momo.js\n");

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