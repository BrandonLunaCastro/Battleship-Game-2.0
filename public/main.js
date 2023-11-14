/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes changeNeon {
  0% {
    box-shadow: inset 1px 1px 14px #2491ec, 1px 1px 14px #2491ec;
    text-shadow: 0 0 5px #2491ec, 0 0 15px #2491ec, 0 0 35px #2491ec, 0 0 55px #2491ec;
  }
  25% {
    box-shadow: inset 1px 1px 14px #006400, 1px 1px 14px #006400;
    text-shadow: 0 0 5px #006400, 0 0 15px #006400, 0 0 35px #006400, 0 0 55px #006400;
  }
  50% {
    box-shadow: inset 1px 1px 14px crimson, 1px 1px 14px crimson;
    text-shadow: 0 0 5px crimson, 0 0 15px crimson, 0 0 35px crimson, 0 0 55px crimson;
  }
  75% {
    box-shadow: inset 1px 1px 14px #ff6600, 1px 1px 14px #ff6600;
    text-shadow: 0 0 5px #ff6600, 0 0 15px #ff6600, 0 0 35px #ff6600, 0 0 55px #ff6600;
  }
  100% {
    box-shadow: inset 1px 1px 14px #ff00ff, 1px 1px 14px #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 15px #ff00ff, 0 0 35px #ff00ff, 0 0 55px #ff00ff;
  }
}
.options {
  padding: 18px;
  height: fit-content;
  width: 800px;
  background: #0c192c;
  transition: all 0.2s ease-in;
  border-radius: 5px;
}
.options__buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
}
.options__buttons #start__game:hover {
  cursor: pointer;
  animation: changeNeon 2.6s infinite alternate ease-in-out;
}
.options__buttons #rotate:hover {
  cursor: pointer;
  animation: changeNeon 2.6s infinite alternate ease-in-out;
}

#start__game,
#rotate {
  width: 130px;
  height: 40px;
  background-color: transparent;
  color: #f4f8ff;
  font-size: 1.2rem;
  border: 2px solid #f4f8ff;
  border-radius: 4px;
  box-shadow: inset 1px 1px 14px #2491ec, 1px 1px 14px #2491ec;
  text-shadow: 0 0 5px #2491ec, 0 0 15px #2491ec, 0 0 35px #2491ec, 0 0 55px #2491ec;
}

.ships {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  gap: 15px;
  width: auto;
}
.ships .carrier,
.ships .battleship,
.ships .destroyer,
.ships .submarine,
.ships .boat {
  display: grid;
}
.ships .carrier.horizontal {
  grid-template-columns: repeat(5, 40px);
  width: fit-content;
}
.ships .battleship.horizontal {
  grid-template-columns: repeat(4, 40px);
  width: fit-content;
}
.ships .destroyer.horizontal {
  grid-template-columns: repeat(3, 40px);
  width: fit-content;
}
.ships .submarine.horizontal {
  grid-template-columns: repeat(3, 40px);
  width: fit-content;
}
.ships .boat.horizontal {
  grid-template-columns: repeat(2, 40px);
  width: fit-content;
}
.ships .carrier.vertical {
  grid-template-rows: repeat(5, 40px);
  width: 40px;
  height: fit-content;
}
.ships .battleship.vertical {
  grid-template-rows: repeat(4, 40px);
  width: 40px;
  height: fit-content;
}
.ships .destroyer.vertical {
  grid-template-rows: repeat(3, 40px);
  width: 40px;
  height: fit-content;
}
.ships .submarine.vertical {
  grid-template-rows: repeat(3, 40px);
  width: 40px;
  height: fit-content;
}
.ships .boat.vertical {
  grid-template-rows: repeat(2, 40px);
  width: 40px;
  height: fit-content;
}

.hover {
  background-color: #9098a9;
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(4);
  }
}
@keyframes change {
  0% {
    background-color: #006400;
    box-shadow: 1px 1px 18px #006400;
  }
  100% {
    background-color: #2491ec;
    color: #f4f8ff;
    box-shadow: 1px 1px 18px #2491ec;
  }
}
.start__window {
  background-color: #0c192c;
  position: absolute;
  display: grid;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 99;
}
.start__window .enter__player {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-self: flex-end;
  width: 100%;
}
.start__window .enter__player .welcome {
  display: block;
  margin: 0 auto;
  font-weight: 500;
  white-space: nowrap;
  border-right: 4px solid;
  width: 29ch;
  font-size: 3rem;
  color: white;
  animation: typing 4s steps(29), blink 0.5s infinite;
  overflow: hidden;
}
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
.start__window .enter__player .user {
  display: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  position: relative;
}
.start__window .enter__player .user__name {
  width: 250px;
  height: 25px;
  outline: none;
  font-size: 1.2rem;
  border: none;
  box-shadow: 0px 0px 8px #f4f8ff;
}
.start__window .enter__player .user .empty__name::after {
  content: "Please enter a valid name";
  position: absolute;
  background-color: red;
  top: 30px;
  left: 40%;
  color: white;
  padding: 0 10px;
}
.start__window .enter__player .user #enter__game {
  width: 200px;
  height: 45px;
  font-size: 1.3rem;
  border-radius: 4px;
  color: #f4f8ff;
  box-shadow: 1px 1px 18px #2491ec;
  border: none;
  outline: none;
  border: 2px solid #9098a9;
  background: #0c192c;
  box-shadow: inset 1px 1px 14px #2491ec, 1px 1px 14px #2491ec;
  text-shadow: 0 0 5px #2491ec, 0 0 15px #2491ec, 0 0 35px #2491ec, 0 0 55px #2491ec;
}
.start__window .enter__player .user #enter__game:hover {
  cursor: pointer;
  animation: changeNeon 2.7s infinite alternate ease-in-out;
}
.start__window .git-hub {
  display: flex;
  align-self: flex-end;
  justify-self: center;
  align-items: center;
  gap: 20px;
  color: #f4f8ff;
}
.start__window .git-hub img {
  width: 3rem;
  max-height: 3rem;
}

@keyframes changeNeon {
  0% {
    box-shadow: inset 1px 1px 14px #2491ec, 1px 1px 14px #2491ec;
    text-shadow: 0 0 5px #2491ec, 0 0 15px #2491ec, 0 0 35px #2491ec, 0 0 55px #2491ec;
  }
  25% {
    box-shadow: inset 1px 1px 14px #006400, 1px 1px 14px #006400;
    text-shadow: 0 0 5px #006400, 0 0 15px #006400, 0 0 35px #006400, 0 0 55px #006400;
  }
  50% {
    box-shadow: inset 1px 1px 14px crimson, 1px 1px 14px crimson;
    text-shadow: 0 0 5px crimson, 0 0 15px crimson, 0 0 35px crimson, 0 0 55px crimson;
  }
  75% {
    box-shadow: inset 1px 1px 14px #ff6600, 1px 1px 14px #ff6600;
    text-shadow: 0 0 5px #ff6600, 0 0 15px #ff6600, 0 0 35px #ff6600, 0 0 55px #ff6600;
  }
  100% {
    box-shadow: inset 1px 1px 14px #ff00ff, 1px 1px 14px #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 15px #ff00ff, 0 0 35px #ff00ff, 0 0 55px #ff00ff;
  }
}
.options {
  padding: 18px;
  height: fit-content;
  width: 800px;
  background: #0c192c;
  transition: all 0.2s ease-in;
  border-radius: 5px;
}
.options__buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
}
.options__buttons #start__game:hover {
  cursor: pointer;
  animation: changeNeon 2.6s infinite alternate ease-in-out;
}
.options__buttons #rotate:hover {
  cursor: pointer;
  animation: changeNeon 2.6s infinite alternate ease-in-out;
}

#start__game,
#rotate {
  width: 130px;
  height: 40px;
  background-color: transparent;
  color: #f4f8ff;
  font-size: 1.2rem;
  border: 2px solid #f4f8ff;
  border-radius: 4px;
  box-shadow: inset 1px 1px 14px #2491ec, 1px 1px 14px #2491ec;
  text-shadow: 0 0 5px #2491ec, 0 0 15px #2491ec, 0 0 35px #2491ec, 0 0 55px #2491ec;
}

.ships {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  gap: 15px;
  width: auto;
}
.ships .carrier,
.ships .battleship,
.ships .destroyer,
.ships .submarine,
.ships .boat {
  display: grid;
}
.ships .carrier.horizontal {
  grid-template-columns: repeat(5, 40px);
  width: fit-content;
}
.ships .battleship.horizontal {
  grid-template-columns: repeat(4, 40px);
  width: fit-content;
}
.ships .destroyer.horizontal {
  grid-template-columns: repeat(3, 40px);
  width: fit-content;
}
.ships .submarine.horizontal {
  grid-template-columns: repeat(3, 40px);
  width: fit-content;
}
.ships .boat.horizontal {
  grid-template-columns: repeat(2, 40px);
  width: fit-content;
}
.ships .carrier.vertical {
  grid-template-rows: repeat(5, 40px);
  width: 40px;
  height: fit-content;
}
.ships .battleship.vertical {
  grid-template-rows: repeat(4, 40px);
  width: 40px;
  height: fit-content;
}
.ships .destroyer.vertical {
  grid-template-rows: repeat(3, 40px);
  width: 40px;
  height: fit-content;
}
.ships .submarine.vertical {
  grid-template-rows: repeat(3, 40px);
  width: 40px;
  height: fit-content;
}
.ships .boat.vertical {
  grid-template-rows: repeat(2, 40px);
  width: 40px;
  height: fit-content;
}

.hover {
  background-color: #9098a9;
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(4);
  }
}
@keyframes change {
  0% {
    background-color: #006400;
    box-shadow: 1px 1px 18px #006400;
  }
  100% {
    background-color: #2491ec;
    color: #f4f8ff;
    box-shadow: 1px 1px 18px #2491ec;
  }
}
*,
::after,
::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Saira Stencil One", sans-serif;
}

html,
body {
  background: #0c192c;
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.glow {
  content: "";
  position: relative;
  margin: 10px auto;
  background: linear-gradient(45deg, #e6fb04, #ff6600, #00ff66, #00ffff, #ff00ff, #ff0099, #6e0dd0, #ff3300, #099fff);
  background-size: 400%;
  height: fit-content;
  animation: animate 20s linear infinite;
  padding: 2px;
  border-radius: 5px;
}

.turn {
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 1.4rem;
  color: #f4f8ff;
  padding: 10px;
  background: linear-gradient(#0c192c, rgb(44, 44, 85));
  border-radius: 5px;
  backdrop-filter: blur(40px);
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
h1 {
  text-align: center;
  margin: 15px;
  font-size: 4rem;
  font-weight: 500;
  color: #f4f8ff;
  text-shadow: 1px 1px 2px #f4f8ff;
}

.main__window {
  flex-grow: 3;
  flex-shrink: 2;
  flex-basis: 70%;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  max-height: 100%;
}

.boards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
}

.machineBoard,
.humanBoard {
  display: grid;
  grid-template-columns: repeat(10, 40px);
}

.cursor-attack {
  cursor: crosshair;
}

.disabled {
  pointer-events: none;
}

.grid {
  height: 40px;
  box-shadow: inset 1px 1px 3px #2491ec, 1px 1px 3px #2491ec;
}

.ship {
  background-color: transparent;
  box-shadow: inset 1px 1px 4px #9098a9, 1px 1px 4px #9098a9;
}

.bow__vertical {
  border-radius: 20px 20px 0px 0px;
}

.stern__vertical {
  border-radius: 0px 0px 20px 20px;
}

.bow__horizontal {
  border-radius: 20px 0px 0px 20px;
}

.stern__horizontal {
  border-radius: 0px 20px 20px 0px;
}

.hit,
.fail {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hit::after,
.fail::after {
  content: "";
  position: absolute;
  border-radius: 100%;
  height: 2vmin;
  width: 2vmin;
}

.fail::after {
  background-color: white;
}

.hit::after {
  background-color: crimson;
}

.fail::before {
  content: "";
  position: absolute;
  animation: pulse 0.2s ease forwards;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border-style: solid;
  border-color: white;
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 110%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  z-index: 999;
}
.modal__content {
  display: inherit;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  font-size: 2rem;
  width: 80%;
  height: 25vmin;
  background-color: #f0f9ff;
  border-radius: 5px;
  color: #0c192c;
}
.modal__content button {
  height: 50px;
  width: 150px;
  font-size: 1.2rem;
  background-color: #006400;
  box-shadow: 1px 1px 18px #006400;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-out;
}
.modal__content button:hover {
  cursor: pointer;
  animation: change 0.8s infinite alternate ease-in-out;
}

.is-close {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/styles/_options.scss","webpack://./src/styles/style.scss","webpack://./src/styles/_colors.scss","webpack://./src/styles/_startWindow.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"colors\";\n\n@mixin neonElement($color) {\n  box-shadow:\n    inset 1px 1px 14px $color,\n    1px 1px 14px $color;\n  text-shadow:\n    0 0 5px $color,\n    0 0 15px $color,\n    0 0 35px $color,\n    0 0 55px $color;\n}\n\n@keyframes changeNeon {\n  0% {\n    @include neonElement($board);\n  }\n  25% {\n    @include neonElement($military-green);\n  }\n  50% {\n    @include neonElement($crimson);\n  }\n  75% {\n    @include neonElement($orange);\n  }\n  100% {\n    @include neonElement($color-pink);\n  }\n}\n\n.options {\n  padding: 18px;\n  height: fit-content;\n  width: 800px;\n  background: $background;\n  transition: all 0.2s ease-in;\n  border-radius: 5px;\n\n  &__buttons {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-bottom: 20px;\n\n    #start__game {\n      &:hover {\n        cursor: pointer;\n        animation: changeNeon 2.6s infinite alternate ease-in-out;\n      }\n    }\n    #rotate {\n      &:hover {\n        cursor: pointer;\n        animation: changeNeon 2.6s infinite alternate ease-in-out;\n      }\n    }\n  }\n}\n\n#start__game,\n#rotate {\n  width: 130px;\n  height: 40px;\n  background-color: transparent;\n  color: $fail;\n  font-size: 1.2rem;\n  border: 2px solid $fail;\n  border-radius: 4px;\n  @include neonElement($board);\n}\n\n.ships {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 20px;\n  gap: 15px;\n  width: auto;\n\n  .carrier,\n  .battleship,\n  .destroyer,\n  .submarine,\n  .boat {\n    display: grid;\n  }\n\n  @mixin gridColumns($num, $width) {\n    grid-template-columns: repeat($num, $width);\n    width: fit-content;\n  }\n  .carrier.horizontal {\n    @include gridColumns(5, 40px);\n  }\n  .battleship.horizontal {\n    @include gridColumns(4, 40px);\n  }\n  .destroyer.horizontal {\n    @include gridColumns(3, 40px);\n  }\n  .submarine.horizontal {\n    @include gridColumns(3, 40px);\n  }\n  .boat.horizontal {\n    @include gridColumns(2, 40px);\n  }\n\n  @mixin gridRows($num, $width) {\n    grid-template-rows: repeat($num, $width);\n    width: $width;\n    height: fit-content;\n  }\n\n  .carrier.vertical {\n    @include gridRows(5, 40px);\n  }\n  .battleship.vertical {\n    @include gridRows(4, 40px);\n  }\n  .destroyer.vertical {\n    @include gridRows(3, 40px);\n  }\n  .submarine.vertical {\n    @include gridRows(3, 40px);\n  }\n  .boat.vertical {\n    @include gridRows(2, 40px);\n  }\n}\n\n.hover {\n  background-color: $ship;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(4);\n  }\n}\n\n@keyframes change {\n  0% {\n    background-color: $military-green;\n    box-shadow: 1px 1px 18px $military-green;\n  }\n\n  100% {\n    background-color: $board;\n    color: $fail;\n    box-shadow: 1px 1px 18px $board;\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap\");\n@import \"startWindow\";\n@import \"colors\";\n@import \"options\";\n\n*,\n::after,\n::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Saira Stencil One\", sans-serif;\n}\n\nhtml,\nbody {\n  background: $background;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.glow {\n  content: \"\";\n  position: relative;\n  margin: 10px auto;\n  background: linear-gradient(\n    45deg,\n    #e6fb04,\n    #ff6600,\n    #00ff66,\n    #00ffff,\n    #ff00ff,\n    #ff0099,\n    #6e0dd0,\n    #ff3300,\n    #099fff\n  );\n  background-size: 400%;\n  height: fit-content;\n  animation: animate 20s linear infinite;\n  padding: 2px;\n  border-radius: 5px;\n}\n\n.turn {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  font-size: 1.4rem;\n  color: $fail;\n  padding: 10px;\n  background: linear-gradient($background, rgb(44, 44, 85));\n  border-radius: 5px;\n  backdrop-filter: blur(40px);\n}\n\n@keyframes animate {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\nh1 {\n  text-align: center;\n  margin: 15px;\n  font-size: 4rem;\n  font-weight: 500;\n  color: $fail;\n  text-shadow: 1px 1px 2px $fail;\n}\n\n.main__window {\n  flex-grow: 3;\n  flex-shrink: 2;\n  flex-basis: 70%;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  gap: 25px;\n  flex-wrap: wrap;\n  max-height: 100%;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 150px;\n}\n\n.machineBoard,\n.humanBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n}\n\n.cursor-attack {\n  cursor: crosshair;\n}\n\n.disabled {\n  pointer-events: none;\n}\n\n@mixin neonShip($color, $measurements) {\n  box-shadow:\n    inset 1px 1px $measurements $color,\n    1px 1px $measurements $color;\n}\n\n.grid {\n  height: 40px;\n  @include neonShip($board, 3px);\n}\n.ship {\n  background-color: transparent;\n  @include neonShip($ship, 4px);\n}\n\n@mixin bowVertical {\n  border-radius: 20px 20px 0px 0px;\n}\n@mixin sternVertical {\n  border-radius: 0px 0px 20px 20px;\n}\n\n@mixin bowHorizontal {\n  border-radius: 20px 0px 0px 20px;\n}\n@mixin sternHorizontal {\n  border-radius: 0px 20px 20px 0px;\n}\n\n.bow__vertical {\n  @include bowVertical();\n}\n\n.stern__vertical {\n  @include sternVertical();\n}\n\n.bow__horizontal {\n  @include bowHorizontal();\n}\n\n.stern__horizontal {\n  @include sternHorizontal();\n}\n\n.hit,\n.fail {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hit::after,\n.fail::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 100%;\n  height: 2vmin;\n  width: 2vmin;\n}\n\n.fail::after {\n  background-color: white;\n}\n\n.hit::after {\n  background-color: $crimson;\n}\n\n.fail::before {\n  content: \"\";\n  position: absolute;\n  animation: pulse 0.2s ease forwards;\n  width: 15px;\n  height: 15px;\n  border-radius: 100%;\n  border-style: solid;\n  border-color: white;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 110%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 2;\n  z-index: 999;\n\n  &__content {\n    display: inherit;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 15px;\n    font-size: 2rem;\n    width: 80%;\n    height: 25vmin;\n    background-color: #f0f9ff;\n    border-radius: 5px;\n    color: $background;\n\n    button {\n      height: 50px;\n      width: 150px;\n      font-size: 1.2rem;\n      background-color: $military-green;\n      box-shadow: 1px 1px 18px $military-green;\n      border: none;\n      border-radius: 5px;\n      transition: all 0.3s ease-out;\n      &:hover {\n        cursor: pointer;\n        animation: change 0.8s infinite alternate ease-in-out;\n      }\n    }\n  }\n}\n\n.is-close {\n  display: none;\n}\n","$color-pink: #ff00ff;\n$military-green: #006400;\n$slate: #020617;\n$background: #0c192c;\n$ship: #9098a9;\n$board: #2491ec;\n$fail: #f4f8ff;\n$crimson:crimson;\n$orange: #ff6600;","@import \"colors\";\n@import \"options\";\n\n.start__window {\n  background-color: $background;\n  position: absolute;\n  display: grid;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  z-index: 99;\n\n  .enter__player {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    align-self: flex-end;\n    width: 100%;\n\n    .welcome {\n      display: block;\n      margin: 0 auto;\n      font-weight: 500;\n      white-space: nowrap;\n      border-right: 4px solid;\n      width: 29ch;\n      font-size: 3rem;\n      color: white;\n      animation:\n        typing 4s steps(29),\n        blink 0.5s infinite;\n      overflow: hidden;\n    }\n\n    @keyframes typing {\n      from {\n        width: 0;\n      }\n    }\n\n    @keyframes blink {\n      50% {\n        border-color: transparent;\n      }\n    }\n\n    .user {\n      display: inherit;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      gap: 25px;\n      position: relative;\n\n      &__name {\n        width: 250px;\n        height: 25px;\n        outline: none;\n        font-size: 1.2rem;\n        border: none;\n        box-shadow: 0px 0px 8px $fail;\n      }\n\n      .empty__name::after {\n        content: \"Please enter a valid name\";\n        position: absolute;\n        background-color: red;\n        top: 30px;\n        left: 40%;\n        color: white;\n        padding: 0 10px;\n      }\n\n      #enter__game {\n        width: 200px;\n        height: 45px;\n        font-size: 1.3rem;\n        border-radius: 4px;\n        color: $fail;\n        box-shadow: 1px 1px 18px $board;\n        border: none;\n        outline: none;\n        border: 2px solid $ship;\n        background: $background;\n        @include neonElement($board);\n        &:hover {\n          cursor: pointer;\n          animation: changeNeon 2.7s infinite alternate ease-in-out;\n        }\n      }\n    }\n  }\n  .git-hub {\n    display: flex;\n    align-self: flex-end;\n    justify-self: center;\n    align-items: center;\n    gap: 20px;\n    color: $fail;\n    img {\n      width: 3rem;\n      max-height: 3rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dom: () => (/* binding */ dom)
/* harmony export */ });
function dom() {
  const createBoard = (reference, player) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 100; i++) {
      const div = document.createElement("div");
      div.classList.add("grid", player);
      div.setAttribute("data-coordinate", i);
      fragment.appendChild(div);
    }
    reference.appendChild(fragment);
  };

  const showBoard = (board) => {
    const options = document.querySelector(".options");
    options.classList.add("is-close");
    board.classList.remove("is-close");
  };

  const verifyIsSunk = (board, player) => {
    const winner = player === "human" ? sessionStorage.getItem("name") : player;
    if (board.allSunk()) {
      document.querySelector(".modal").classList.remove("is-close");
      document.querySelector(".winner").textContent = `The winner is player ${winner}`;
      document
        .getElementById("restart")
        .addEventListener("click", (event) => location.reload());
    }
  };

  const stateAttack = (target, attack, board, player) => {
    if (attack === "already attacked") {
      return false;
    }
    if (attack) {
      target.classList.add("hit");
      verifyIsSunk(board, player.name);
    } else {
      target.classList.add("fail");
      verifyIsSunk(board, player.name);
    }
  };

  function showTurn(player, repeat = false) {
    const turnOf = document.querySelector(".turn");
    if (repeat === true){
      turnOf.textContent = "Already attacked try again!";
    } else { 
      turnOf.textContent = `Turn of ${player}`;
    }
    
  }

  const getCoordinates = (ship) => {
    const boardPlayer = document.querySelector(".humanBoard").childNodes;
    const nodeShips = Array.from(boardPlayer)
      .filter((node) => node.classList.contains(ship))
      .map((el) => parseInt(el.dataset.coordinate));
    return nodeShips;
  };

  function rotateDirection() {
    const shipsSection = document.querySelector(".ships");
    const btnRotate = document.getElementById("rotate");

    const rotate = (e) => {
      const arrShips = Array.from(shipsSection.children);
      arrShips.forEach((node) => {
        const nodeLength = node.children.length;
        node.classList.toggle("horizontal");
        node.classList.toggle("vertical");

        node.children[0].classList.toggle("bow__vertical");
        node.children[nodeLength-1].classList.toggle("stern__vertical");

        node.children[0].classList.toggle("bow__horizontal");
        node.children[nodeLength-1].classList.toggle("stern__horizontal");
      });
    };

    btnRotate.addEventListener("click", rotate);
  }

  const enableStartBtn = () => {
    const shipsSection = document.querySelector(".ships");
    return shipsSection.children.length === 0;
  };

  return {
    createBoard,
    stateAttack,
    showTurn,
    getCoordinates,
    rotateDirection,
    enableStartBtn,
    showBoard
  };
}




/***/ }),

/***/ "./src/modules/drag.js":
/*!*****************************!*\
  !*** ./src/modules/drag.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dragShips: () => (/* binding */ dragShips)
/* harmony export */ });
function dragShips() {
  const board = document.querySelector(".humanBoard");
  document.querySelector(".ships").addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("class", e.target.className);
  });
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.target.classList.add("hover");
  });
  board.addEventListener("dragleave", (e) => {
    e.target.classList.remove("hover");
  });
  board.addEventListener("drop", (e) => {
    const gridBoard = e.target;
    const classShip = e.dataTransfer.getData("class");
    const ship = document.querySelector(`.${classShip.split(" ")[0]}`);
    const childNodes = ship.childNodes;
    const amountNodes = ship.childNodes.length;
    let coordinate = gridBoard.dataset.coordinate;
    e.target.classList.remove("hover");
    // if ships contains horizontal class 
    if (
      classShip.includes("horizontal") &&
      position(classShip, amountNodes, coordinate) &&
      verifySpace(amountNodes, gridBoard, 1)
    ) {
      const arrNodes = [];
      for (let i = 0; i < amountNodes; i++) {
        childNodes[i].setAttribute("data-coordinate", coordinate);
        const node = document.querySelector(
          `.grid.human[data-coordinate="${coordinate}"]`
        );
        arrNodes.push(node);
        coordinate++;
      }
      Array.from(childNodes).map((node, i) => arrNodes[i].replaceWith(node));
      ship.remove();
    }
    // if ship contains vertical class
    if (
      classShip.includes("vertical") &&
      position(classShip, amountNodes, coordinate) &&
      verifySpace(amountNodes, gridBoard, 10)
    ) {
      const boardNodes = [];
      let parseCoord = parseInt(coordinate);
      for (let i = 0; i < amountNodes; i++) {
        const node = document.querySelector(
          `.grid.human[data-coordinate="${parseCoord}"]`
        );
        childNodes[i].setAttribute("data-coordinate", parseCoord);
        boardNodes.push(node);
        parseCoord += 10;
      }
      Array.from(childNodes).map((node, i) => boardNodes[i].replaceWith(node));
      ship.remove();
    }
  });
}

// The factor depends is horizontal or vertical orientation
function verifySpace(childLength, gridBoard, factor) {
  const lastCoordinate = gridBoard.dataset.coordinate.slice(1);
  let initCoordinate = parseInt(gridBoard.dataset.coordinate);
  const arrNodes = [];
  if (lastCoordinate > 0) {
    const prevNode = document.querySelector(
      `.human[data-coordinate="${initCoordinate - factor}"]`
    );
    arrNodes.push(prevNode);
  }
  for (let j = 0; j <= childLength; j++) {
    const node = document.querySelector(
      `.human[data-coordinate="${initCoordinate}"]`
    );
    if (initCoordinate >= 99) break;
    if (arrNodes.includes(null)) arrNodes.shift();
    if (!node) return false;
    arrNodes.push(node);
    initCoordinate += factor;
  }
  return arrNodes.every((node) => !node.className.includes("ship"));
}

function position(classShip, amountNodes, coordinate) {
  const factor = classShip.includes("horizontal") ? 1 : 10;
  const lastNumber = coordinate.slice(1);
  let numberCoordinate = parseInt(coordinate);
  const arrCoords = [];
  for (let i = 0; i < amountNodes; i++) {
    if (lastNumber === "9" && factor === 10) {
      arrCoords.push(numberCoordinate);
      numberCoordinate += factor;
    } else if (numberCoordinate <= 99 && amountNodes <= 10 - lastNumber) {
      arrCoords.push(numberCoordinate);
      numberCoordinate += factor;
    } else {
      return false;
    }
  }
  return arrCoords.length === amountNodes;
}



/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/modules/player.js");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ "./src/modules/gameBoard.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag.js */ "./src/modules/drag.js");





function gameLoop() {
  const playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)("human", 0);
  const playerMachine = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)("machine", 1);
  const name = sessionStorage.getItem("name");
  const domMethods = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom)();
  
  const humanBoard = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
  const machineBoard = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
  
  const boardOne = document.querySelector(".humanBoard");
  const boardTwo = document.querySelector(".machineBoard");

  // create both boards
  domMethods.createBoard(boardOne, playerOne.name);
  domMethods.createBoard(boardTwo, playerMachine.name);

  // draw and place correctly ships on the game board machine
  playerMachine.verifyCoordinate(machineBoard, 5, "carrier");
  playerMachine.verifyCoordinate(machineBoard, 4, "battleship");
  playerMachine.verifyCoordinate(machineBoard, 3, "destroyer");
  playerMachine.verifyCoordinate(machineBoard, 3, "submarine");
  playerMachine.verifyCoordinate(machineBoard, 2, "boat");

  function playGame() {
    const attackAI = () => {
      const randomCoordinate = playerMachine.attackAI();
      const grid = document.querySelector(
        `.human[data-coordinate="${randomCoordinate}"]`
      );
      const attackHuman = humanBoard.receiveAttack(randomCoordinate);
      domMethods.stateAttack(grid, attackHuman, humanBoard, playerMachine);
      domMethods.showTurn(name);
    };

    boardTwo.addEventListener("click", (e) => {
      if (!e.target.matches(".grid")) return false;
      const coordinate = parseInt(e.target.dataset.coordinate);
      const attack = machineBoard.receiveAttack(coordinate);
      
      const state = domMethods.stateAttack(e.target, attack, machineBoard, playerOne);
      
      const currentTarget = e.currentTarget;
      if (!state){
        domMethods.showTurn(name, true);
      }
      if (state !== false){
        domMethods.showTurn(playerMachine.name);
        currentTarget.classList.add("disabled");
        setTimeout(() => {
          attackAI();
          currentTarget.classList.remove("disabled");
        }, 1200);
      }
    });
  }

  (0,_drag_js__WEBPACK_IMPORTED_MODULE_3__.dragShips)();
  domMethods.rotateDirection();

  (() => {
    document.getElementById("start__game").addEventListener("click", (e) => {
      const carrier = domMethods.getCoordinates("carrier");
      const battlefield = domMethods.getCoordinates("battleship");
      const destroyer = domMethods.getCoordinates("destroyer");
      const submarine = domMethods.getCoordinates("submarine");
      const boat = domMethods.getCoordinates("boat");
    
      humanBoard.placeShip(carrier, "carrier");
      humanBoard.placeShip(battlefield, "battleship");
      humanBoard.placeShip(destroyer, "destroyer");
      humanBoard.placeShip(submarine, "submarine");
      humanBoard.placeShip(boat, "boat");

      if (domMethods.enableStartBtn() === true) {
        playGame();
        document.querySelector(".glow").classList.remove("is-close");
        document.querySelector(".options__glows").style.display = "none";
        domMethods.showTurn(name);
        boardTwo.classList.add("cursor-attack");
        domMethods.showBoard(boardTwo);
      }
    });
  })();
}


/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoard: () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/modules/ship.js");


function gameBoard() {
  const board = [];
  const allShips = [];
  const attackSended = [];
  const coordinateShips = [];
  // create gameBoard on the memory
  for (let i = 0; i < 100; i++) {
    board.push(null);
  }

  const verifySpace = (coords) =>
    coords.every(
      (c) =>
        typeof board[c - 1] !== "string" &&
        typeof board[c] !== "string" &&
        typeof board[c + 1] !== "string"
    );

  const placeShip = (coordinates, name) => {
    const newShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(coordinates.length, name);
    if (verifySpace(coordinates)) {
      allShips.push(newShip);
      for (const coord of coordinates) {
        board[coord] = newShip.name;
        coordinateShips.push(coord);
      }
      return board;
    } else {
      return "already place here";
    }
  };

  const verifyShip = (name) => allShips.filter((ship) => ship.name === name);

  const verifyAttack = (coord) => attackSended.includes(parseInt(coord));

  const receiveAttack = (attackCoordinates) => {
    if (board[attackCoordinates] !== null && !verifyAttack(attackCoordinates)) {
      const nameShip = board[attackCoordinates];
      const shipAttacked = verifyShip(nameShip);
      attackSended.push(attackCoordinates);
      shipAttacked[0].hit();
      board[attackCoordinates] = "sunk";
      return true;
    }

    if (board[attackCoordinates] === null) {
      board[attackCoordinates] = "fail";
      attackSended.push(attackCoordinates);
      return false;
    }
    return "already attacked";
  };

  const allSunk = () => {
    return allShips.every((ship) => ship.isSunk());
  };

  return {
    board,
    coordinateShips,
    placeShip,
    verifySpace,
    receiveAttack,
    allSunk,
  };
}




/***/ }),

/***/ "./src/modules/initGame.js":
/*!*********************************!*\
  !*** ./src/modules/initGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGame: () => (/* binding */ initGame)
/* harmony export */ });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/modules/game.js");

const initGame = () => {
  document.getElementById("enter__game").addEventListener("click" , (e) => {
    const inputName = document.getElementById("user__name");
    const span = document.querySelector("span");
    if (!inputName.value){  
      span.classList.add("empty__name");
      setTimeout(() => span.classList.remove("empty__name"), 1000);
    } else {
      document.querySelector(".start__window").classList.add("is-close");
      sessionStorage.setItem("name", inputName.value);
      (0,_game_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
  });
};



/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
function Player(name) {
  const randomNumber = (max, min) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  
  const attackSended = [];

  const attackAI = () => {
    let attempt = true;
    while (attempt) {
      const attack = randomNumber(99, 0);
      if (!attackSended.includes(attack)) {
        attackSended.push(attack);
        attempt = false;
        return attack;
      }
    }
  };

  const randomCoordinates = (shipLength) => {
    const axis = randomNumber(1, 0) === 1 ? "x" : "y";
    const arrCords = [];

    let initialCoord = randomNumber(99, 0);
    let factor;

    if (axis === "x") {
      factor = 1;
      for (let i = 0; i < shipLength; i++) {
        const lastNumber =
          initialCoord >= 10
            ? initialCoord.toString().slice(1)
            : initialCoord.toString().slice(0, 1);

        if (lastNumber === "0" && i === 0) {
          arrCords.push(initialCoord);
          initialCoord += factor;
          continue;
        }
        if (
          9 - lastNumber <= 9 &&
          initialCoord - 1 !== 9 &&
          (initialCoord - 1).toString().slice(1) !== "9"
        ) {
          arrCords.push(initialCoord);
          initialCoord += factor;
        } else {
          return false;
        }
      }
    }
    if (axis === "y") {
      factor = 10;
      for (let j = 0; j < shipLength; j++) {
        if (initialCoord <= 99) {
          arrCords.push(initialCoord);
          initialCoord += factor;
        } else {
          return false;
        }
      }
    }

    return arrCords;
  };

  const verifyCoordinate = (board, length, name) => {
    while (true) {
      const randomArray = randomCoordinates(length);
      if (randomArray === false) continue;
      if (board.placeShip(randomArray, name) !== "already place here") {
        break;
      }
    }
  };

  return { name, attackAI, verifyCoordinate };
}




/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function Ship (length, name) {
  let hits = 0;
  const hit = () => {
    if (length > hits) {
      return ++hits;
    } 
    return false;
  }; 

  const isSunk = () => {
    if (hits === length) {
      return true;
    } else {
      return false;
    }
  };

  const countOfHits = () => hits;

  return { name, length, hit , isSunk, countOfHits };
}

// module.exports = Ship; 


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_initGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initGame.js */ "./src/modules/initGame.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");




const initApp = () => {
  (0,_modules_initGame_js__WEBPACK_IMPORTED_MODULE_0__.initGame)();
};


window.addEventListener("DOMContentLoaded", initApp);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtIQUErSDtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdOQUFnTixLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssU0FBUyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFlBQVksS0FBSyxNQUFNLFdBQVcsV0FBVyxZQUFZLEtBQUssTUFBTSxXQUFXLFdBQVcsWUFBWSxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksS0FBSyxLQUFLLFlBQVksWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssS0FBSyxZQUFZLFlBQVksWUFBWSxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksTUFBTSxLQUFLLFFBQVEsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSxvREFBUTtBQUNkO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7QUM5RWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQ2lEO0FBQ3BCOztBQUU3QjtBQUNBLEVBQUUsOERBQVE7QUFDVjs7O0FBR0EscUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9zcmMvbW9kdWxlcy9kcmFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL3NyYy9tb2R1bGVzL2luaXRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNhaXJhK1N0ZW5jaWwrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGtleWZyYW1lcyBjaGFuZ2VOZW9uIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjMjQ5MWVjLCAxcHggMXB4IDE0cHggIzI0OTFlYztcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMjQ5MWVjLCAwIDAgMTVweCAjMjQ5MWVjLCAwIDAgMzVweCAjMjQ5MWVjLCAwIDAgNTVweCAjMjQ5MWVjO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxNHB4ICMwMDY0MDAsIDFweCAxcHggMTRweCAjMDA2NDAwO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwMDY0MDAsIDAgMCAxNXB4ICMwMDY0MDAsIDAgMCAzNXB4ICMwMDY0MDAsIDAgMCA1NXB4ICMwMDY0MDA7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggY3JpbXNvbiwgMXB4IDFweCAxNHB4IGNyaW1zb247XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggY3JpbXNvbiwgMCAwIDE1cHggY3JpbXNvbiwgMCAwIDM1cHggY3JpbXNvbiwgMCAwIDU1cHggY3JpbXNvbjtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjZmY2NjAwLCAxcHggMXB4IDE0cHggI2ZmNjYwMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmY2NjAwLCAwIDAgMTVweCAjZmY2NjAwLCAwIDAgMzVweCAjZmY2NjAwLCAwIDAgNTVweCAjZmY2NjAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjZmYwMGZmLCAxcHggMXB4IDE0cHggI2ZmMDBmZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmYwMGZmLCAwIDAgMTVweCAjZmYwMGZmLCAwIDAgMzVweCAjZmYwMGZmLCAwIDAgNTVweCAjZmYwMGZmO1xuICB9XG59XG4ub3B0aW9ucyB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiA4MDBweDtcbiAgYmFja2dyb3VuZDogIzBjMTkyYztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm9wdGlvbnNfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm9wdGlvbnNfX2J1dHRvbnMgI3N0YXJ0X19nYW1lOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGNoYW5nZU5lb24gMi42cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG4ub3B0aW9uc19fYnV0dG9ucyAjcm90YXRlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGNoYW5nZU5lb24gMi42cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG5cbiNzdGFydF9fZ2FtZSxcbiNyb3RhdGUge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZjRmOGZmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjhmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggIzI0OTFlYywgMXB4IDFweCAxNHB4ICMyNDkxZWM7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMyNDkxZWMsIDAgMCAxNXB4ICMyNDkxZWMsIDAgMCAzNXB4ICMyNDkxZWMsIDAgMCA1NXB4ICMyNDkxZWM7XG59XG5cbi5zaGlwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGdhcDogMTVweDtcbiAgd2lkdGg6IGF1dG87XG59XG4uc2hpcHMgLmNhcnJpZXIsXG4uc2hpcHMgLmJhdHRsZXNoaXAsXG4uc2hpcHMgLmRlc3Ryb3llcixcbi5zaGlwcyAuc3VibWFyaW5lLFxuLnNoaXBzIC5ib2F0IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5zaGlwcyAuY2Fycmllci5ob3Jpem9udGFsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgNDBweCk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgNDBweCk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuZGVzdHJveWVyLmhvcml6b250YWwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA0MHB4KTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDQwcHgpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmJvYXQuaG9yaXpvbnRhbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQwcHgpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmNhcnJpZXIudmVydGljYWwge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA0MHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmJhdHRsZXNoaXAudmVydGljYWwge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCA0MHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmRlc3Ryb3llci52ZXJ0aWNhbCB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuc3VibWFyaW5lLnZlcnRpY2FsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNDBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5ib2F0LnZlcnRpY2FsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5OGE5O1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoNCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2hhbmdlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY0MDA7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4ICMwMDY0MDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTFlYztcbiAgICBjb2xvcjogI2Y0ZjhmZjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE4cHggIzI0OTFlYztcbiAgfVxufVxuLnN0YXJ0X193aW5kb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxOTJjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk7XG59XG4uc3RhcnRfX3dpbmRvdyAuZW50ZXJfX3BsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YXJ0X193aW5kb3cgLmVudGVyX19wbGF5ZXIgLndlbGNvbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkO1xuICB3aWR0aDogMjljaDtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGFuaW1hdGlvbjogdHlwaW5nIDRzIHN0ZXBzKDI5KSwgYmxpbmsgMC41cyBpbmZpbml0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbi5zdGFydF9fd2luZG93IC5lbnRlcl9fcGxheWVyIC51c2VyIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN0YXJ0X193aW5kb3cgLmVudGVyX19wbGF5ZXIgLnVzZXJfX25hbWUge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggI2Y0ZjhmZjtcbn1cbi5zdGFydF9fd2luZG93IC5lbnRlcl9fcGxheWVyIC51c2VyIC5lbXB0eV9fbmFtZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG5hbWVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogNDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5zdGFydF9fd2luZG93IC5lbnRlcl9fcGxheWVyIC51c2VyICNlbnRlcl9fZ2FtZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2Y0ZjhmZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4ICMyNDkxZWM7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzkwOThhOTtcbiAgYmFja2dyb3VuZDogIzBjMTkyYztcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxNHB4ICMyNDkxZWMsIDFweCAxcHggMTRweCAjMjQ5MWVjO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMjQ5MWVjLCAwIDAgMTVweCAjMjQ5MWVjLCAwIDAgMzVweCAjMjQ5MWVjLCAwIDAgNTVweCAjMjQ5MWVjO1xufVxuLnN0YXJ0X193aW5kb3cgLmVudGVyX19wbGF5ZXIgLnVzZXIgI2VudGVyX19nYW1lOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGNoYW5nZU5lb24gMi43cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG4uc3RhcnRfX3dpbmRvdyAuZ2l0LWh1YiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBjb2xvcjogI2Y0ZjhmZjtcbn1cbi5zdGFydF9fd2luZG93IC5naXQtaHViIGltZyB7XG4gIHdpZHRoOiAzcmVtO1xuICBtYXgtaGVpZ2h0OiAzcmVtO1xufVxuXG5Aa2V5ZnJhbWVzIGNoYW5nZU5lb24ge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxNHB4ICMyNDkxZWMsIDFweCAxcHggMTRweCAjMjQ5MWVjO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICMyNDkxZWMsIDAgMCAxNXB4ICMyNDkxZWMsIDAgMCAzNXB4ICMyNDkxZWMsIDAgMCA1NXB4ICMyNDkxZWM7XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggIzAwNjQwMCwgMXB4IDFweCAxNHB4ICMwMDY0MDA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzAwNjQwMCwgMCAwIDE1cHggIzAwNjQwMCwgMCAwIDM1cHggIzAwNjQwMCwgMCAwIDU1cHggIzAwNjQwMDtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCBjcmltc29uLCAxcHggMXB4IDE0cHggY3JpbXNvbjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBjcmltc29uLCAwIDAgMTVweCBjcmltc29uLCAwIDAgMzVweCBjcmltc29uLCAwIDAgNTVweCBjcmltc29uO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxNHB4ICNmZjY2MDAsIDFweCAxcHggMTRweCAjZmY2NjAwO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZjY2MDAsIDAgMCAxNXB4ICNmZjY2MDAsIDAgMCAzNXB4ICNmZjY2MDAsIDAgMCA1NXB4ICNmZjY2MDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxNHB4ICNmZjAwZmYsIDFweCAxcHggMTRweCAjZmYwMGZmO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZjAwZmYsIDAgMCAxNXB4ICNmZjAwZmYsIDAgMCAzNXB4ICNmZjAwZmYsIDAgMCA1NXB4ICNmZjAwZmY7XG4gIH1cbn1cbi5vcHRpb25zIHtcbiAgcGFkZGluZzogMThweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDgwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMGMxOTJjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ub3B0aW9uc19fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ub3B0aW9uc19fYnV0dG9ucyAjc3RhcnRfX2dhbWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbjogY2hhbmdlTmVvbiAyLjZzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcbn1cbi5vcHRpb25zX19idXR0b25zICNyb3RhdGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbjogY2hhbmdlTmVvbiAyLjZzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcbn1cblxuI3N0YXJ0X19nYW1lLFxuI3JvdGF0ZSB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmNGY4ZmY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjRmOGZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjMjQ5MWVjLCAxcHggMXB4IDE0cHggIzI0OTFlYztcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzI0OTFlYywgMCAwIDE1cHggIzI0OTFlYywgMCAwIDM1cHggIzI0OTFlYywgMCAwIDU1cHggIzI0OTFlYztcbn1cblxuLnNoaXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMjBweDtcbiAgZ2FwOiAxNXB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5zaGlwcyAuY2Fycmllcixcbi5zaGlwcyAuYmF0dGxlc2hpcCxcbi5zaGlwcyAuZGVzdHJveWVyLFxuLnNoaXBzIC5zdWJtYXJpbmUsXG4uc2hpcHMgLmJvYXQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLnNoaXBzIC5jYXJyaWVyLmhvcml6b250YWwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCA0MHB4KTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5iYXR0bGVzaGlwLmhvcml6b250YWwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCA0MHB4KTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5kZXN0cm95ZXIuaG9yaXpvbnRhbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDQwcHgpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLnN1Ym1hcmluZS5ob3Jpem9udGFsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNDBweCk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuYm9hdC5ob3Jpem9udGFsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDBweCk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuY2Fycmllci52ZXJ0aWNhbCB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDQwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuYmF0dGxlc2hpcC52ZXJ0aWNhbCB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDQwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuZGVzdHJveWVyLnZlcnRpY2FsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNDBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5zdWJtYXJpbmUudmVydGljYWwge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA0MHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmJvYXQudmVydGljYWwge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0MHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDk4YTk7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcbiAgfVxufVxuQGtleWZyYW1lcyBjaGFuZ2Uge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQwMDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE4cHggIzAwNjQwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ5MWVjO1xuICAgIGNvbG9yOiAjZjRmOGZmO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMThweCAjMjQ5MWVjO1xuICB9XG59XG4qLFxuOjphZnRlcixcbjo6YmVmb3JlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJTYWlyYSBTdGVuY2lsIE9uZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMwYzE5MmM7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nbG93IHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTZmYjA0LCAjZmY2NjAwLCAjMDBmZjY2LCAjMDBmZmZmLCAjZmYwMGZmLCAjZmYwMDk5LCAjNmUwZGQwLCAjZmYzMzAwLCAjMDk5ZmZmKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBhbmltYXRpb246IGFuaW1hdGUgMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50dXJuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjZjRmOGZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzBjMTkyYywgcmdiKDQ0LCA0NCwgODUpKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCk7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICB9XG59XG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZjRmOGZmO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggI2Y0ZjhmZjtcbn1cblxuLm1haW5fX3dpbmRvdyB7XG4gIGZsZXgtZ3JvdzogMztcbiAgZmxleC1zaHJpbms6IDI7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm9hcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTUwcHg7XG59XG5cbi5tYWNoaW5lQm9hcmQsXG4uaHVtYW5Cb2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTtcbn1cblxuLmN1cnNvci1hdHRhY2sge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ncmlkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDNweCAjMjQ5MWVjLCAxcHggMXB4IDNweCAjMjQ5MWVjO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDRweCAjOTA5OGE5LCAxcHggMXB4IDRweCAjOTA5OGE5O1xufVxuXG4uYm93X192ZXJ0aWNhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xufVxuXG4uc3Rlcm5fX3ZlcnRpY2FsIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG59XG5cbi5ib3dfX2hvcml6b250YWwge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcbn1cblxuLnN0ZXJuX19ob3Jpem9udGFsIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XG59XG5cbi5oaXQsXG4uZmFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGl0OjphZnRlcixcbi5mYWlsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAydm1pbjtcbiAgd2lkdGg6IDJ2bWluO1xufVxuXG4uZmFpbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpdDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4uZmFpbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IHB1bHNlIDAuMnMgZWFzZSBmb3J3YXJkcztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMjtcbiAgei1pbmRleDogOTk5O1xufVxuLm1vZGFsX19jb250ZW50IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNXZtaW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwYzE5MmM7XG59XG4ubW9kYWxfX2NvbnRlbnQgYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDE4cHggIzAwNjQwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuLm1vZGFsX19jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBjaGFuZ2UgMC44cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5pcy1jbG9zZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19vcHRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3N0YXJ0V2luZG93LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBYUE7RUFDRTtJQVhBLDREQUNFO0lBRUYsa0ZBQ0U7RUNGRjtFRFlBO0lBZEEsNERBQ0U7SUFFRixrRkFDRTtFQ0VGO0VEV0E7SUFqQkEsNERBQ0U7SUFFRixrRkFDRTtFQ01GO0VEVUE7SUFwQkEsNERBQ0U7SUFFRixrRkFDRTtFQ1VGO0VEU0E7SUF2QkEsNERBQ0U7SUFFRixrRkFDRTtFQ2NGO0FBQ0Y7QURTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkVoQ1c7RUZpQ1gsNEJBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEU0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNQSjtBRFVNO0VBQ0UsZUFBQTtFQUNBLHlEQUFBO0FDUlI7QURZTTtFQUNFLGVBQUE7RUFDQSx5REFBQTtBQ1ZSOztBRGdCQTs7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0UzREs7RUY0REwsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBakVBLDREQUNFO0VBRUYsa0ZBQ0U7QUNrREo7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDWkY7QURjRTs7Ozs7RUFLRSxhQUFBO0FDWko7QURtQkU7RUFIRSxzQ0FBQTtFQUNBLGtCQUFBO0FDYko7QURrQkU7RUFORSxzQ0FBQTtFQUNBLGtCQUFBO0FDVEo7QURpQkU7RUFURSxzQ0FBQTtFQUNBLGtCQUFBO0FDTEo7QURnQkU7RUFaRSxzQ0FBQTtFQUNBLGtCQUFBO0FDREo7QURlRTtFQWZFLHNDQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRHFCRTtFQUxFLG1DQUFBO0VBQ0EsV0FLcUI7RUFKckIsbUJBQUE7QUNiSjtBRG1CRTtFQVJFLG1DQUFBO0VBQ0EsV0FRcUI7RUFQckIsbUJBQUE7QUNSSjtBRGlCRTtFQVhFLG1DQUFBO0VBQ0EsV0FXcUI7RUFWckIsbUJBQUE7QUNISjtBRGVFO0VBZEUsbUNBQUE7RUFDQSxXQWNxQjtFQWJyQixtQkFBQTtBQ0VKO0FEYUU7RUFqQkUsbUNBQUE7RUFDQSxXQWlCcUI7RUFoQnJCLG1CQUFBO0FDT0o7O0FEYUE7RUFDRSx5QkVoSUs7QURzSFA7O0FEYUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ1ZGO0VEWUE7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNWRjtBQUNGO0FEYUE7RUFDRTtJQUNFLHlCRW5KYTtJRm9KYixnQ0FBQTtFQ1hGO0VEY0E7SUFDRSx5QkVwSkk7SUZxSkosY0VwSkc7SUZxSkgsZ0NBQUE7RUNaRjtBQUNGO0FFN0lBO0VBQ0UseUJERFc7RUNFWCxrQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRitJRjtBRTdJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUYrSUo7QUU3SUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUNFO0VBRUYsZ0JBQUE7QUY2SU47QUUxSUk7RUFDRTtJQUNFLFFBQUE7RUY0SU47QUFDRjtBRXpJSTtFQUNFO0lBQ0UseUJBQUE7RUYySU47QUFDRjtBRXhJSTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FGMElOO0FFeElNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUYwSVI7QUV2SU07RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FGeUlSO0FFdElNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0QxRUQ7RUMyRUMsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJEbEZLO0VGQVgsNERBQ0U7RUFFRixrRkFDRTtBQ3dOSjtBRXhJUTtFQUNFLGVBQUE7RUFDQSx5REFBQTtBRjBJVjtBRXJJRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0Q5Rkc7QURxT1A7QUV0SUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUZ3SU47O0FEbE9BO0VBQ0U7SUFYQSw0REFDRTtJQUVGLGtGQUNFO0VDOE9GO0VEcE9BO0lBZEEsNERBQ0U7SUFFRixrRkFDRTtFQ2tQRjtFRHJPQTtJQWpCQSw0REFDRTtJQUVGLGtGQUNFO0VDc1BGO0VEdE9BO0lBcEJBLDREQUNFO0lBRUYsa0ZBQ0U7RUMwUEY7RUR2T0E7SUF2QkEsNERBQ0U7SUFFRixrRkFDRTtFQzhQRjtBQUNGO0FEdk9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRWhDVztFRmlDWCw0QkFBQTtFQUNBLGtCQUFBO0FDeU9GO0FEdk9FO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDeU9KO0FEdE9NO0VBQ0UsZUFBQTtFQUNBLHlEQUFBO0FDd09SO0FEcE9NO0VBQ0UsZUFBQTtFQUNBLHlEQUFBO0FDc09SOztBRGhPQTs7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0UzREs7RUY0REwsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBakVBLDREQUNFO0VBRUYsa0ZBQ0U7QUNrU0o7O0FEak9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ29PRjtBRGxPRTs7Ozs7RUFLRSxhQUFBO0FDb09KO0FEN05FO0VBSEUsc0NBQUE7RUFDQSxrQkFBQTtBQ21PSjtBRDlORTtFQU5FLHNDQUFBO0VBQ0Esa0JBQUE7QUN1T0o7QUQvTkU7RUFURSxzQ0FBQTtFQUNBLGtCQUFBO0FDMk9KO0FEaE9FO0VBWkUsc0NBQUE7RUFDQSxrQkFBQTtBQytPSjtBRGpPRTtFQWZFLHNDQUFBO0VBQ0Esa0JBQUE7QUNtUEo7QUQzTkU7RUFMRSxtQ0FBQTtFQUNBLFdBS3FCO0VBSnJCLG1CQUFBO0FDbU9KO0FEN05FO0VBUkUsbUNBQUE7RUFDQSxXQVFxQjtFQVByQixtQkFBQTtBQ3dPSjtBRC9ORTtFQVhFLG1DQUFBO0VBQ0EsV0FXcUI7RUFWckIsbUJBQUE7QUM2T0o7QURqT0U7RUFkRSxtQ0FBQTtFQUNBLFdBY3FCO0VBYnJCLG1CQUFBO0FDa1BKO0FEbk9FO0VBakJFLG1DQUFBO0VBQ0EsV0FpQnFCO0VBaEJyQixtQkFBQTtBQ3VQSjs7QURuT0E7RUFDRSx5QkVoSUs7QURzV1A7O0FEbk9BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNzT0Y7RURwT0E7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNzT0Y7QUFDRjtBRG5PQTtFQUNFO0lBQ0UseUJFbkphO0lGb0piLGdDQUFBO0VDcU9GO0VEbE9BO0lBQ0UseUJFcEpJO0lGcUpKLGNFcEpHO0lGcUpILGdDQUFBO0VDb09GO0FBQ0Y7QUEzWEE7OztFQUdFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtBQTZYRjs7QUExWEE7O0VBRUUsbUJDYlc7QUQwWWI7O0FBMVhBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQTZYRjs7QUExWEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1IQUFBO0VBWUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBa1hGOztBQS9XQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQy9DSztFRGdETCxhQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBa1hGOztBQS9XQTtFQUNFO0lBQ0Usd0JBQUE7RUFrWEY7RUFoWEE7SUFDRSwyQkFBQTtFQWtYRjtFQWhYQTtJQUNFLHdCQUFBO0VBa1hGO0FBQ0Y7QUEvV0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3ZFSztFRHdFTCxnQ0FBQTtBQWlYRjs7QUE5V0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWlYRjs7QUE5V0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFpWEY7O0FBOVdBOztFQUVFLGFBQUE7RUFDQSx1Q0FBQTtBQWlYRjs7QUE5V0E7RUFDRSxpQkFBQTtBQWlYRjs7QUE5V0E7RUFDRSxvQkFBQTtBQWlYRjs7QUF4V0E7RUFDRSxZQUFBO0VBTkEsMERBQ0U7QUFpWEo7O0FBeldBO0VBQ0UsNkJBQUE7RUFWQSwwREFDRTtBQXNYSjs7QUEzVkE7RUFiRSxnQ0FBQTtBQTRXRjs7QUEzVkE7RUFkRSxnQ0FBQTtBQTZXRjs7QUEzVkE7RUFkRSxnQ0FBQTtBQTZXRjs7QUEzVkE7RUFmRSxnQ0FBQTtBQThXRjs7QUEzVkE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE4VkY7O0FBNVZBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUErVkY7O0FBNVZBO0VBQ0UsdUJBQUE7QUErVkY7O0FBNVZBO0VBQ0UseUJDNUtPO0FEMmdCVDs7QUE1VkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBK1ZGOztBQTVWQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBK1ZGO0FBN1ZFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDeE5TO0FEdWpCYjtBQTdWSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNoT1c7RURpT1gsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQStWTjtBQTlWTTtFQUNFLGVBQUE7RUFDQSxxREFBQTtBQWdXUjs7QUExVkE7RUFDRSxhQUFBO0FBNlZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcImNvbG9yc1xcXCI7XFxuXFxuQG1peGluIG5lb25FbGVtZW50KCRjb2xvcikge1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgMXB4IDFweCAxNHB4ICRjb2xvcixcXG4gICAgMXB4IDFweCAxNHB4ICRjb2xvcjtcXG4gIHRleHQtc2hhZG93OlxcbiAgICAwIDAgNXB4ICRjb2xvcixcXG4gICAgMCAwIDE1cHggJGNvbG9yLFxcbiAgICAwIDAgMzVweCAkY29sb3IsXFxuICAgIDAgMCA1NXB4ICRjb2xvcjtcXG59XFxuXFxuQGtleWZyYW1lcyBjaGFuZ2VOZW9uIHtcXG4gIDAlIHtcXG4gICAgQGluY2x1ZGUgbmVvbkVsZW1lbnQoJGJvYXJkKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIEBpbmNsdWRlIG5lb25FbGVtZW50KCRtaWxpdGFyeS1ncmVlbik7XFxuICB9XFxuICA1MCUge1xcbiAgICBAaW5jbHVkZSBuZW9uRWxlbWVudCgkY3JpbXNvbik7XFxuICB9XFxuICA3NSUge1xcbiAgICBAaW5jbHVkZSBuZW9uRWxlbWVudCgkb3JhbmdlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBAaW5jbHVkZSBuZW9uRWxlbWVudCgkY29sb3ItcGluayk7XFxuICB9XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIHBhZGRpbmc6IDE4cHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgJl9fYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFxuICAgICNzdGFydF9fZ2FtZSB7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBhbmltYXRpb246IGNoYW5nZU5lb24gMi42cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgfVxcbiAgICB9XFxuICAgICNyb3RhdGUge1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYW5pbWF0aW9uOiBjaGFuZ2VOZW9uIDIuNnMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jc3RhcnRfX2dhbWUsXFxuI3JvdGF0ZSB7XFxuICB3aWR0aDogMTMwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAkZmFpbDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgJGZhaWw7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBAaW5jbHVkZSBuZW9uRWxlbWVudCgkYm9hcmQpO1xcbn1cXG5cXG4uc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMTVweDtcXG4gIHdpZHRoOiBhdXRvO1xcblxcbiAgLmNhcnJpZXIsXFxuICAuYmF0dGxlc2hpcCxcXG4gIC5kZXN0cm95ZXIsXFxuICAuc3VibWFyaW5lLFxcbiAgLmJvYXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcblxcbiAgQG1peGluIGdyaWRDb2x1bW5zKCRudW0sICR3aWR0aCkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbnVtLCAkd2lkdGgpO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICAuY2Fycmllci5ob3Jpem9udGFsIHtcXG4gICAgQGluY2x1ZGUgZ3JpZENvbHVtbnMoNSwgNDBweCk7XFxuICB9XFxuICAuYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcXG4gICAgQGluY2x1ZGUgZ3JpZENvbHVtbnMoNCwgNDBweCk7XFxuICB9XFxuICAuZGVzdHJveWVyLmhvcml6b250YWwge1xcbiAgICBAaW5jbHVkZSBncmlkQ29sdW1ucygzLCA0MHB4KTtcXG4gIH1cXG4gIC5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XFxuICAgIEBpbmNsdWRlIGdyaWRDb2x1bW5zKDMsIDQwcHgpO1xcbiAgfVxcbiAgLmJvYXQuaG9yaXpvbnRhbCB7XFxuICAgIEBpbmNsdWRlIGdyaWRDb2x1bW5zKDIsIDQwcHgpO1xcbiAgfVxcblxcbiAgQG1peGluIGdyaWRSb3dzKCRudW0sICR3aWR0aCkge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgkbnVtLCAkd2lkdGgpO1xcbiAgICB3aWR0aDogJHdpZHRoO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgLmNhcnJpZXIudmVydGljYWwge1xcbiAgICBAaW5jbHVkZSBncmlkUm93cyg1LCA0MHB4KTtcXG4gIH1cXG4gIC5iYXR0bGVzaGlwLnZlcnRpY2FsIHtcXG4gICAgQGluY2x1ZGUgZ3JpZFJvd3MoNCwgNDBweCk7XFxuICB9XFxuICAuZGVzdHJveWVyLnZlcnRpY2FsIHtcXG4gICAgQGluY2x1ZGUgZ3JpZFJvd3MoMywgNDBweCk7XFxuICB9XFxuICAuc3VibWFyaW5lLnZlcnRpY2FsIHtcXG4gICAgQGluY2x1ZGUgZ3JpZFJvd3MoMywgNDBweCk7XFxuICB9XFxuICAuYm9hdC52ZXJ0aWNhbCB7XFxuICAgIEBpbmNsdWRlIGdyaWRSb3dzKDIsIDQwcHgpO1xcbiAgfVxcbn1cXG5cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoaXA7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoNCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1pbGl0YXJ5LWdyZWVuO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE4cHggJG1pbGl0YXJ5LWdyZWVuO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2FyZDtcXG4gICAgY29sb3I6ICRmYWlsO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE4cHggJGJvYXJkO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNhaXJhK1N0ZW5jaWwrT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgXFxcInN0YXJ0V2luZG93XFxcIjtcXG5AaW1wb3J0IFxcXCJjb2xvcnNcXFwiO1xcbkBpbXBvcnQgXFxcIm9wdGlvbnNcXFwiO1xcblxcbiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FpcmEgU3RlbmNpbCBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nbG93IHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDQ1ZGVnLFxcbiAgICAjZTZmYjA0LFxcbiAgICAjZmY2NjAwLFxcbiAgICAjMDBmZjY2LFxcbiAgICAjMDBmZmZmLFxcbiAgICAjZmYwMGZmLFxcbiAgICAjZmYwMDk5LFxcbiAgICAjNmUwZGQwLFxcbiAgICAjZmYzMzAwLFxcbiAgICAjMDk5ZmZmXFxuICApO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAyMHMgbGluZWFyIGluZmluaXRlO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udHVybiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiAkZmFpbDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGJhY2tncm91bmQsIHJnYig0NCwgNDQsIDg1KSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCk7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQwMCUgMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogJGZhaWw7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggJGZhaWw7XFxufVxcblxcbi5tYWluX193aW5kb3cge1xcbiAgZmxleC1ncm93OiAzO1xcbiAgZmxleC1zaHJpbms6IDI7XFxuICBmbGV4LWJhc2lzOiA3MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNXB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNTBweDtcXG59XFxuXFxuLm1hY2hpbmVCb2FyZCxcXG4uaHVtYW5Cb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpO1xcbn1cXG5cXG4uY3Vyc29yLWF0dGFjayB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5AbWl4aW4gbmVvblNoaXAoJGNvbG9yLCAkbWVhc3VyZW1lbnRzKSB7XFxuICBib3gtc2hhZG93OlxcbiAgICBpbnNldCAxcHggMXB4ICRtZWFzdXJlbWVudHMgJGNvbG9yLFxcbiAgICAxcHggMXB4ICRtZWFzdXJlbWVudHMgJGNvbG9yO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBAaW5jbHVkZSBuZW9uU2hpcCgkYm9hcmQsIDNweCk7XFxufVxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgQGluY2x1ZGUgbmVvblNoaXAoJHNoaXAsIDRweCk7XFxufVxcblxcbkBtaXhpbiBib3dWZXJ0aWNhbCB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcXG59XFxuQG1peGluIHN0ZXJuVmVydGljYWwge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XFxufVxcblxcbkBtaXhpbiBib3dIb3Jpem9udGFsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbn1cXG5AbWl4aW4gc3Rlcm5Ib3Jpem9udGFsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4uYm93X192ZXJ0aWNhbCB7XFxuICBAaW5jbHVkZSBib3dWZXJ0aWNhbCgpO1xcbn1cXG5cXG4uc3Rlcm5fX3ZlcnRpY2FsIHtcXG4gIEBpbmNsdWRlIHN0ZXJuVmVydGljYWwoKTtcXG59XFxuXFxuLmJvd19faG9yaXpvbnRhbCB7XFxuICBAaW5jbHVkZSBib3dIb3Jpem9udGFsKCk7XFxufVxcblxcbi5zdGVybl9faG9yaXpvbnRhbCB7XFxuICBAaW5jbHVkZSBzdGVybkhvcml6b250YWwoKTtcXG59XFxuXFxuLmhpdCxcXG4uZmFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGl0OjphZnRlcixcXG4uZmFpbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiAydm1pbjtcXG4gIHdpZHRoOiAydm1pbjtcXG59XFxuXFxuLmZhaWw6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JpbXNvbjtcXG59XFxuXFxuLmZhaWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMC4ycyBlYXNlIGZvcndhcmRzO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDExMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDI7XFxuICB6LWluZGV4OiA5OTk7XFxuXFxuICAmX19jb250ZW50IHtcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyNXZtaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kO1xcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1pbGl0YXJ5LWdyZWVuO1xcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMThweCAkbWlsaXRhcnktZ3JlZW47XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGFuaW1hdGlvbjogY2hhbmdlIDAuOHMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaXMtY2xvc2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCIkY29sb3ItcGluazogI2ZmMDBmZjtcXG4kbWlsaXRhcnktZ3JlZW46ICMwMDY0MDA7XFxuJHNsYXRlOiAjMDIwNjE3O1xcbiRiYWNrZ3JvdW5kOiAjMGMxOTJjO1xcbiRzaGlwOiAjOTA5OGE5O1xcbiRib2FyZDogIzI0OTFlYztcXG4kZmFpbDogI2Y0ZjhmZjtcXG4kY3JpbXNvbjpjcmltc29uO1xcbiRvcmFuZ2U6ICNmZjY2MDA7XCIsXCJAaW1wb3J0IFxcXCJjb2xvcnNcXFwiO1xcbkBpbXBvcnQgXFxcIm9wdGlvbnNcXFwiO1xcblxcbi5zdGFydF9fd2luZG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDk5O1xcblxcbiAgLmVudGVyX19wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgLndlbGNvbWUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZDtcXG4gICAgICB3aWR0aDogMjljaDtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGFuaW1hdGlvbjpcXG4gICAgICAgIHR5cGluZyA0cyBzdGVwcygyOSksXFxuICAgICAgICBibGluayAwLjVzIGluZmluaXRlO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyB0eXBpbmcge1xcbiAgICAgIGZyb20ge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICAgIDUwJSB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudXNlciB7XFxuICAgICAgZGlzcGxheTogaW5oZXJpdDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAyNXB4O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAmX19uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRmYWlsO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZW1wdHlfX25hbWU6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIHRvcDogMzBweDtcXG4gICAgICAgIGxlZnQ6IDQwJTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgICB9XFxuXFxuICAgICAgI2VudGVyX19nYW1lIHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGhlaWdodDogNDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgY29sb3I6ICRmYWlsO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4ICRib2FyZDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2hpcDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xcbiAgICAgICAgQGluY2x1ZGUgbmVvbkVsZW1lbnQoJGJvYXJkKTtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogY2hhbmdlTmVvbiAyLjdzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIC5naXQtaHViIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbG9yOiAkZmFpbDtcXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogM3JlbTtcXG4gICAgICBtYXgtaGVpZ2h0OiAzcmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZG9tKCkge1xuICBjb25zdCBjcmVhdGVCb2FyZCA9IChyZWZlcmVuY2UsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImdyaWRcIiwgcGxheWVyKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVcIiwgaSk7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgICByZWZlcmVuY2UuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG4gICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiaXMtY2xvc2VcIik7XG4gICAgYm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWNsb3NlXCIpO1xuICB9O1xuXG4gIGNvbnN0IHZlcmlmeUlzU3VuayA9IChib2FyZCwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgd2lubmVyID0gcGxheWVyID09PSBcImh1bWFuXCIgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSA6IHBsYXllcjtcbiAgICBpZiAoYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1jbG9zZVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgcGxheWVyICR7d2lubmVyfWA7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0XCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXRlQXR0YWNrID0gKHRhcmdldCwgYXR0YWNrLCBib2FyZCwgcGxheWVyKSA9PiB7XG4gICAgaWYgKGF0dGFjayA9PT0gXCJhbHJlYWR5IGF0dGFja2VkXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGF0dGFjaykge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICB2ZXJpZnlJc1N1bmsoYm9hcmQsIHBsYXllci5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJmYWlsXCIpO1xuICAgICAgdmVyaWZ5SXNTdW5rKGJvYXJkLCBwbGF5ZXIubmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHNob3dUdXJuKHBsYXllciwgcmVwZWF0ID0gZmFsc2UpIHtcbiAgICBjb25zdCB0dXJuT2YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1cm5cIik7XG4gICAgaWYgKHJlcGVhdCA9PT0gdHJ1ZSl7XG4gICAgICB0dXJuT2YudGV4dENvbnRlbnQgPSBcIkFscmVhZHkgYXR0YWNrZWQgdHJ5IGFnYWluIVwiO1xuICAgIH0gZWxzZSB7IFxuICAgICAgdHVybk9mLnRleHRDb250ZW50ID0gYFR1cm4gb2YgJHtwbGF5ZXJ9YDtcbiAgICB9XG4gICAgXG4gIH1cblxuICBjb25zdCBnZXRDb29yZGluYXRlcyA9IChzaGlwKSA9PiB7XG4gICAgY29uc3QgYm9hcmRQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWFuQm9hcmRcIikuY2hpbGROb2RlcztcbiAgICBjb25zdCBub2RlU2hpcHMgPSBBcnJheS5mcm9tKGJvYXJkUGxheWVyKVxuICAgICAgLmZpbHRlcigobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoc2hpcCkpXG4gICAgICAubWFwKChlbCkgPT4gcGFyc2VJbnQoZWwuZGF0YXNldC5jb29yZGluYXRlKSk7XG4gICAgcmV0dXJuIG5vZGVTaGlwcztcbiAgfTtcblxuICBmdW5jdGlvbiByb3RhdGVEaXJlY3Rpb24oKSB7XG4gICAgY29uc3Qgc2hpcHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwc1wiKTtcbiAgICBjb25zdCBidG5Sb3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0ZVwiKTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9IChlKSA9PiB7XG4gICAgICBjb25zdCBhcnJTaGlwcyA9IEFycmF5LmZyb20oc2hpcHNTZWN0aW9uLmNoaWxkcmVuKTtcbiAgICAgIGFyclNoaXBzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUxlbmd0aCA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC50b2dnbGUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcblxuICAgICAgICBub2RlLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoXCJib3dfX3ZlcnRpY2FsXCIpO1xuICAgICAgICBub2RlLmNoaWxkcmVuW25vZGVMZW5ndGgtMV0uY2xhc3NMaXN0LnRvZ2dsZShcInN0ZXJuX192ZXJ0aWNhbFwiKTtcblxuICAgICAgICBub2RlLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoXCJib3dfX2hvcml6b250YWxcIik7XG4gICAgICAgIG5vZGUuY2hpbGRyZW5bbm9kZUxlbmd0aC0xXS5jbGFzc0xpc3QudG9nZ2xlKFwic3Rlcm5fX2hvcml6b250YWxcIik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgYnRuUm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGUpO1xuICB9XG5cbiAgY29uc3QgZW5hYmxlU3RhcnRCdG4gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwc1wiKTtcbiAgICByZXR1cm4gc2hpcHNTZWN0aW9uLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUJvYXJkLFxuICAgIHN0YXRlQXR0YWNrLFxuICAgIHNob3dUdXJuLFxuICAgIGdldENvb3JkaW5hdGVzLFxuICAgIHJvdGF0ZURpcmVjdGlvbixcbiAgICBlbmFibGVTdGFydEJ0bixcbiAgICBzaG93Qm9hcmRcbiAgfTtcbn1cblxuZXhwb3J0IHsgZG9tIH07XG4iLCJmdW5jdGlvbiBkcmFnU2hpcHMoKSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbkJvYXJkXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiY2xhc3NcIiwgZS50YXJnZXQuY2xhc3NOYW1lKTtcbiAgfSk7XG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4gIH0pO1xuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xuICB9KTtcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICBjb25zdCBncmlkQm9hcmQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBjbGFzc1NoaXAgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiY2xhc3NcIik7XG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzU2hpcC5zcGxpdChcIiBcIilbMF19YCk7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHNoaXAuY2hpbGROb2RlcztcbiAgICBjb25zdCBhbW91bnROb2RlcyA9IHNoaXAuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgbGV0IGNvb3JkaW5hdGUgPSBncmlkQm9hcmQuZGF0YXNldC5jb29yZGluYXRlO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcbiAgICAvLyBpZiBzaGlwcyBjb250YWlucyBob3Jpem9udGFsIGNsYXNzIFxuICAgIGlmIChcbiAgICAgIGNsYXNzU2hpcC5pbmNsdWRlcyhcImhvcml6b250YWxcIikgJiZcbiAgICAgIHBvc2l0aW9uKGNsYXNzU2hpcCwgYW1vdW50Tm9kZXMsIGNvb3JkaW5hdGUpICYmXG4gICAgICB2ZXJpZnlTcGFjZShhbW91bnROb2RlcywgZ3JpZEJvYXJkLCAxKVxuICAgICkge1xuICAgICAgY29uc3QgYXJyTm9kZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50Tm9kZXM7IGkrKykge1xuICAgICAgICBjaGlsZE5vZGVzW2ldLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZVwiLCBjb29yZGluYXRlKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5ncmlkLmh1bWFuW2RhdGEtY29vcmRpbmF0ZT1cIiR7Y29vcmRpbmF0ZX1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGFyck5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIGNvb3JkaW5hdGUrKztcbiAgICAgIH1cbiAgICAgIEFycmF5LmZyb20oY2hpbGROb2RlcykubWFwKChub2RlLCBpKSA9PiBhcnJOb2Rlc1tpXS5yZXBsYWNlV2l0aChub2RlKSk7XG4gICAgICBzaGlwLnJlbW92ZSgpO1xuICAgIH1cbiAgICAvLyBpZiBzaGlwIGNvbnRhaW5zIHZlcnRpY2FsIGNsYXNzXG4gICAgaWYgKFxuICAgICAgY2xhc3NTaGlwLmluY2x1ZGVzKFwidmVydGljYWxcIikgJiZcbiAgICAgIHBvc2l0aW9uKGNsYXNzU2hpcCwgYW1vdW50Tm9kZXMsIGNvb3JkaW5hdGUpICYmXG4gICAgICB2ZXJpZnlTcGFjZShhbW91bnROb2RlcywgZ3JpZEJvYXJkLCAxMClcbiAgICApIHtcbiAgICAgIGNvbnN0IGJvYXJkTm9kZXMgPSBbXTtcbiAgICAgIGxldCBwYXJzZUNvb3JkID0gcGFyc2VJbnQoY29vcmRpbmF0ZSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudE5vZGVzOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5ncmlkLmh1bWFuW2RhdGEtY29vcmRpbmF0ZT1cIiR7cGFyc2VDb29yZH1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGNoaWxkTm9kZXNbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlXCIsIHBhcnNlQ29vcmQpO1xuICAgICAgICBib2FyZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIHBhcnNlQ29vcmQgKz0gMTA7XG4gICAgICB9XG4gICAgICBBcnJheS5mcm9tKGNoaWxkTm9kZXMpLm1hcCgobm9kZSwgaSkgPT4gYm9hcmROb2Rlc1tpXS5yZXBsYWNlV2l0aChub2RlKSk7XG4gICAgICBzaGlwLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIFRoZSBmYWN0b3IgZGVwZW5kcyBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsIG9yaWVudGF0aW9uXG5mdW5jdGlvbiB2ZXJpZnlTcGFjZShjaGlsZExlbmd0aCwgZ3JpZEJvYXJkLCBmYWN0b3IpIHtcbiAgY29uc3QgbGFzdENvb3JkaW5hdGUgPSBncmlkQm9hcmQuZGF0YXNldC5jb29yZGluYXRlLnNsaWNlKDEpO1xuICBsZXQgaW5pdENvb3JkaW5hdGUgPSBwYXJzZUludChncmlkQm9hcmQuZGF0YXNldC5jb29yZGluYXRlKTtcbiAgY29uc3QgYXJyTm9kZXMgPSBbXTtcbiAgaWYgKGxhc3RDb29yZGluYXRlID4gMCkge1xuICAgIGNvbnN0IHByZXZOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuaHVtYW5bZGF0YS1jb29yZGluYXRlPVwiJHtpbml0Q29vcmRpbmF0ZSAtIGZhY3Rvcn1cIl1gXG4gICAgKTtcbiAgICBhcnJOb2Rlcy5wdXNoKHByZXZOb2RlKTtcbiAgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8PSBjaGlsZExlbmd0aDsgaisrKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmh1bWFuW2RhdGEtY29vcmRpbmF0ZT1cIiR7aW5pdENvb3JkaW5hdGV9XCJdYFxuICAgICk7XG4gICAgaWYgKGluaXRDb29yZGluYXRlID49IDk5KSBicmVhaztcbiAgICBpZiAoYXJyTm9kZXMuaW5jbHVkZXMobnVsbCkpIGFyck5vZGVzLnNoaWZ0KCk7XG4gICAgaWYgKCFub2RlKSByZXR1cm4gZmFsc2U7XG4gICAgYXJyTm9kZXMucHVzaChub2RlKTtcbiAgICBpbml0Q29vcmRpbmF0ZSArPSBmYWN0b3I7XG4gIH1cbiAgcmV0dXJuIGFyck5vZGVzLmV2ZXJ5KChub2RlKSA9PiAhbm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJzaGlwXCIpKTtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb24oY2xhc3NTaGlwLCBhbW91bnROb2RlcywgY29vcmRpbmF0ZSkge1xuICBjb25zdCBmYWN0b3IgPSBjbGFzc1NoaXAuaW5jbHVkZXMoXCJob3Jpem9udGFsXCIpID8gMSA6IDEwO1xuICBjb25zdCBsYXN0TnVtYmVyID0gY29vcmRpbmF0ZS5zbGljZSgxKTtcbiAgbGV0IG51bWJlckNvb3JkaW5hdGUgPSBwYXJzZUludChjb29yZGluYXRlKTtcbiAgY29uc3QgYXJyQ29vcmRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50Tm9kZXM7IGkrKykge1xuICAgIGlmIChsYXN0TnVtYmVyID09PSBcIjlcIiAmJiBmYWN0b3IgPT09IDEwKSB7XG4gICAgICBhcnJDb29yZHMucHVzaChudW1iZXJDb29yZGluYXRlKTtcbiAgICAgIG51bWJlckNvb3JkaW5hdGUgKz0gZmFjdG9yO1xuICAgIH0gZWxzZSBpZiAobnVtYmVyQ29vcmRpbmF0ZSA8PSA5OSAmJiBhbW91bnROb2RlcyA8PSAxMCAtIGxhc3ROdW1iZXIpIHtcbiAgICAgIGFyckNvb3Jkcy5wdXNoKG51bWJlckNvb3JkaW5hdGUpO1xuICAgICAgbnVtYmVyQ29vcmRpbmF0ZSArPSBmYWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyckNvb3Jkcy5sZW5ndGggPT09IGFtb3VudE5vZGVzO1xufVxuZXhwb3J0IHsgZHJhZ1NoaXBzIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBkcmFnU2hpcHMgfSBmcm9tIFwiLi9kcmFnLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoXCJodW1hblwiLCAwKTtcbiAgY29uc3QgcGxheWVyTWFjaGluZSA9IFBsYXllcihcIm1hY2hpbmVcIiwgMSk7XG4gIGNvbnN0IG5hbWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKTtcbiAgY29uc3QgZG9tTWV0aG9kcyA9IGRvbSgpO1xuICBcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGdhbWVCb2FyZCgpO1xuICBjb25zdCBtYWNoaW5lQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgXG4gIGNvbnN0IGJvYXJkT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbkJvYXJkXCIpO1xuICBjb25zdCBib2FyZFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFjaGluZUJvYXJkXCIpO1xuXG4gIC8vIGNyZWF0ZSBib3RoIGJvYXJkc1xuICBkb21NZXRob2RzLmNyZWF0ZUJvYXJkKGJvYXJkT25lLCBwbGF5ZXJPbmUubmFtZSk7XG4gIGRvbU1ldGhvZHMuY3JlYXRlQm9hcmQoYm9hcmRUd28sIHBsYXllck1hY2hpbmUubmFtZSk7XG5cbiAgLy8gZHJhdyBhbmQgcGxhY2UgY29ycmVjdGx5IHNoaXBzIG9uIHRoZSBnYW1lIGJvYXJkIG1hY2hpbmVcbiAgcGxheWVyTWFjaGluZS52ZXJpZnlDb29yZGluYXRlKG1hY2hpbmVCb2FyZCwgNSwgXCJjYXJyaWVyXCIpO1xuICBwbGF5ZXJNYWNoaW5lLnZlcmlmeUNvb3JkaW5hdGUobWFjaGluZUJvYXJkLCA0LCBcImJhdHRsZXNoaXBcIik7XG4gIHBsYXllck1hY2hpbmUudmVyaWZ5Q29vcmRpbmF0ZShtYWNoaW5lQm9hcmQsIDMsIFwiZGVzdHJveWVyXCIpO1xuICBwbGF5ZXJNYWNoaW5lLnZlcmlmeUNvb3JkaW5hdGUobWFjaGluZUJvYXJkLCAzLCBcInN1Ym1hcmluZVwiKTtcbiAgcGxheWVyTWFjaGluZS52ZXJpZnlDb29yZGluYXRlKG1hY2hpbmVCb2FyZCwgMiwgXCJib2F0XCIpO1xuXG4gIGZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuICAgIGNvbnN0IGF0dGFja0FJID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IHBsYXllck1hY2hpbmUuYXR0YWNrQUkoKTtcbiAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmh1bWFuW2RhdGEtY29vcmRpbmF0ZT1cIiR7cmFuZG9tQ29vcmRpbmF0ZX1cIl1gXG4gICAgICApO1xuICAgICAgY29uc3QgYXR0YWNrSHVtYW4gPSBodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgICBkb21NZXRob2RzLnN0YXRlQXR0YWNrKGdyaWQsIGF0dGFja0h1bWFuLCBodW1hbkJvYXJkLCBwbGF5ZXJNYWNoaW5lKTtcbiAgICAgIGRvbU1ldGhvZHMuc2hvd1R1cm4obmFtZSk7XG4gICAgfTtcblxuICAgIGJvYXJkVHdvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKFwiLmdyaWRcIikpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvb3JkaW5hdGUpO1xuICAgICAgY29uc3QgYXR0YWNrID0gbWFjaGluZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHN0YXRlID0gZG9tTWV0aG9kcy5zdGF0ZUF0dGFjayhlLnRhcmdldCwgYXR0YWNrLCBtYWNoaW5lQm9hcmQsIHBsYXllck9uZSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBpZiAoIXN0YXRlKXtcbiAgICAgICAgZG9tTWV0aG9kcy5zaG93VHVybihuYW1lLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZSAhPT0gZmFsc2Upe1xuICAgICAgICBkb21NZXRob2RzLnNob3dUdXJuKHBsYXllck1hY2hpbmUubmFtZSk7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhdHRhY2tBSSgpO1xuICAgICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9LCAxMjAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRyYWdTaGlwcygpO1xuICBkb21NZXRob2RzLnJvdGF0ZURpcmVjdGlvbigpO1xuXG4gICgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydF9fZ2FtZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNhcnJpZXIgPSBkb21NZXRob2RzLmdldENvb3JkaW5hdGVzKFwiY2FycmllclwiKTtcbiAgICAgIGNvbnN0IGJhdHRsZWZpZWxkID0gZG9tTWV0aG9kcy5nZXRDb29yZGluYXRlcyhcImJhdHRsZXNoaXBcIik7XG4gICAgICBjb25zdCBkZXN0cm95ZXIgPSBkb21NZXRob2RzLmdldENvb3JkaW5hdGVzKFwiZGVzdHJveWVyXCIpO1xuICAgICAgY29uc3Qgc3VibWFyaW5lID0gZG9tTWV0aG9kcy5nZXRDb29yZGluYXRlcyhcInN1Ym1hcmluZVwiKTtcbiAgICAgIGNvbnN0IGJvYXQgPSBkb21NZXRob2RzLmdldENvb3JkaW5hdGVzKFwiYm9hdFwiKTtcbiAgICBcbiAgICAgIGh1bWFuQm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIFwiY2FycmllclwiKTtcbiAgICAgIGh1bWFuQm9hcmQucGxhY2VTaGlwKGJhdHRsZWZpZWxkLCBcImJhdHRsZXNoaXBcIik7XG4gICAgICBodW1hbkJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIFwiZGVzdHJveWVyXCIpO1xuICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCBcInN1Ym1hcmluZVwiKTtcbiAgICAgIGh1bWFuQm9hcmQucGxhY2VTaGlwKGJvYXQsIFwiYm9hdFwiKTtcblxuICAgICAgaWYgKGRvbU1ldGhvZHMuZW5hYmxlU3RhcnRCdG4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICBwbGF5R2FtZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdsb3dcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLWNsb3NlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNfX2dsb3dzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9tTWV0aG9kcy5zaG93VHVybihuYW1lKTtcbiAgICAgICAgYm9hcmRUd28uY2xhc3NMaXN0LmFkZChcImN1cnNvci1hdHRhY2tcIik7XG4gICAgICAgIGRvbU1ldGhvZHMuc2hvd0JvYXJkKGJvYXJkVHdvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgYWxsU2hpcHMgPSBbXTtcbiAgY29uc3QgYXR0YWNrU2VuZGVkID0gW107XG4gIGNvbnN0IGNvb3JkaW5hdGVTaGlwcyA9IFtdO1xuICAvLyBjcmVhdGUgZ2FtZUJvYXJkIG9uIHRoZSBtZW1vcnlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGJvYXJkLnB1c2gobnVsbCk7XG4gIH1cblxuICBjb25zdCB2ZXJpZnlTcGFjZSA9IChjb29yZHMpID0+XG4gICAgY29vcmRzLmV2ZXJ5KFxuICAgICAgKGMpID0+XG4gICAgICAgIHR5cGVvZiBib2FyZFtjIC0gMV0gIT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgdHlwZW9mIGJvYXJkW2NdICE9PSBcInN0cmluZ1wiICYmXG4gICAgICAgIHR5cGVvZiBib2FyZFtjICsgMV0gIT09IFwic3RyaW5nXCJcbiAgICApO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcywgbmFtZSkgPT4ge1xuICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGNvb3JkaW5hdGVzLmxlbmd0aCwgbmFtZSk7XG4gICAgaWYgKHZlcmlmeVNwYWNlKGNvb3JkaW5hdGVzKSkge1xuICAgICAgYWxsU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgIGZvciAoY29uc3QgY29vcmQgb2YgY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgYm9hcmRbY29vcmRdID0gbmV3U2hpcC5uYW1lO1xuICAgICAgICBjb29yZGluYXRlU2hpcHMucHVzaChjb29yZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImFscmVhZHkgcGxhY2UgaGVyZVwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2ZXJpZnlTaGlwID0gKG5hbWUpID0+IGFsbFNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBuYW1lKTtcblxuICBjb25zdCB2ZXJpZnlBdHRhY2sgPSAoY29vcmQpID0+IGF0dGFja1NlbmRlZC5pbmNsdWRlcyhwYXJzZUludChjb29yZCkpO1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoYXR0YWNrQ29vcmRpbmF0ZXMpID0+IHtcbiAgICBpZiAoYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZXNdICE9PSBudWxsICYmICF2ZXJpZnlBdHRhY2soYXR0YWNrQ29vcmRpbmF0ZXMpKSB7XG4gICAgICBjb25zdCBuYW1lU2hpcCA9IGJvYXJkW2F0dGFja0Nvb3JkaW5hdGVzXTtcbiAgICAgIGNvbnN0IHNoaXBBdHRhY2tlZCA9IHZlcmlmeVNoaXAobmFtZVNoaXApO1xuICAgICAgYXR0YWNrU2VuZGVkLnB1c2goYXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgICAgc2hpcEF0dGFja2VkWzBdLmhpdCgpO1xuICAgICAgYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZXNdID0gXCJzdW5rXCI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZXNdID09PSBudWxsKSB7XG4gICAgICBib2FyZFthdHRhY2tDb29yZGluYXRlc10gPSBcImZhaWxcIjtcbiAgICAgIGF0dGFja1NlbmRlZC5wdXNoKGF0dGFja0Nvb3JkaW5hdGVzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIFwiYWxyZWFkeSBhdHRhY2tlZFwiO1xuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFsbFNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGNvb3JkaW5hdGVTaGlwcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgdmVyaWZ5U3BhY2UsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xufVxuXG5leHBvcnQgeyBnYW1lQm9hcmQgfTtcbiIsImltcG9ydCBnYW1lTG9vcCBmcm9tIFwiLi9nYW1lLmpzXCI7XG5jb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRlcl9fZ2FtZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsIChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX19uYW1lXCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBpZiAoIWlucHV0TmFtZS52YWx1ZSl7ICBcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImVtcHR5X19uYW1lXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJlbXB0eV9fbmFtZVwiKSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRfX3dpbmRvd1wiKS5jbGFzc0xpc3QuYWRkKFwiaXMtY2xvc2VcIik7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBpbnB1dE5hbWUudmFsdWUpO1xuICAgICAgZ2FtZUxvb3AoKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydCB7aW5pdEdhbWV9OyIsImZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gIGNvbnN0IHJhbmRvbU51bWJlciA9IChtYXgsIG1pbikgPT5cbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICBcbiAgY29uc3QgYXR0YWNrU2VuZGVkID0gW107XG5cbiAgY29uc3QgYXR0YWNrQUkgPSAoKSA9PiB7XG4gICAgbGV0IGF0dGVtcHQgPSB0cnVlO1xuICAgIHdoaWxlIChhdHRlbXB0KSB7XG4gICAgICBjb25zdCBhdHRhY2sgPSByYW5kb21OdW1iZXIoOTksIDApO1xuICAgICAgaWYgKCFhdHRhY2tTZW5kZWQuaW5jbHVkZXMoYXR0YWNrKSkge1xuICAgICAgICBhdHRhY2tTZW5kZWQucHVzaChhdHRhY2spO1xuICAgICAgICBhdHRlbXB0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBhdHRhY2s7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGVzID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgICBjb25zdCBheGlzID0gcmFuZG9tTnVtYmVyKDEsIDApID09PSAxID8gXCJ4XCIgOiBcInlcIjtcbiAgICBjb25zdCBhcnJDb3JkcyA9IFtdO1xuXG4gICAgbGV0IGluaXRpYWxDb29yZCA9IHJhbmRvbU51bWJlcig5OSwgMCk7XG4gICAgbGV0IGZhY3RvcjtcblxuICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgZmFjdG9yID0gMTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxhc3ROdW1iZXIgPVxuICAgICAgICAgIGluaXRpYWxDb29yZCA+PSAxMFxuICAgICAgICAgICAgPyBpbml0aWFsQ29vcmQudG9TdHJpbmcoKS5zbGljZSgxKVxuICAgICAgICAgICAgOiBpbml0aWFsQ29vcmQudG9TdHJpbmcoKS5zbGljZSgwLCAxKTtcblxuICAgICAgICBpZiAobGFzdE51bWJlciA9PT0gXCIwXCIgJiYgaSA9PT0gMCkge1xuICAgICAgICAgIGFyckNvcmRzLnB1c2goaW5pdGlhbENvb3JkKTtcbiAgICAgICAgICBpbml0aWFsQ29vcmQgKz0gZmFjdG9yO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICA5IC0gbGFzdE51bWJlciA8PSA5ICYmXG4gICAgICAgICAgaW5pdGlhbENvb3JkIC0gMSAhPT0gOSAmJlxuICAgICAgICAgIChpbml0aWFsQ29vcmQgLSAxKS50b1N0cmluZygpLnNsaWNlKDEpICE9PSBcIjlcIlxuICAgICAgICApIHtcbiAgICAgICAgICBhcnJDb3Jkcy5wdXNoKGluaXRpYWxDb29yZCk7XG4gICAgICAgICAgaW5pdGlhbENvb3JkICs9IGZhY3RvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICBmYWN0b3IgPSAxMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChpbml0aWFsQ29vcmQgPD0gOTkpIHtcbiAgICAgICAgICBhcnJDb3Jkcy5wdXNoKGluaXRpYWxDb29yZCk7XG4gICAgICAgICAgaW5pdGlhbENvb3JkICs9IGZhY3RvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyQ29yZHM7XG4gIH07XG5cbiAgY29uc3QgdmVyaWZ5Q29vcmRpbmF0ZSA9IChib2FyZCwgbGVuZ3RoLCBuYW1lKSA9PiB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHJhbmRvbUFycmF5ID0gcmFuZG9tQ29vcmRpbmF0ZXMobGVuZ3RoKTtcbiAgICAgIGlmIChyYW5kb21BcnJheSA9PT0gZmFsc2UpIGNvbnRpbnVlO1xuICAgICAgaWYgKGJvYXJkLnBsYWNlU2hpcChyYW5kb21BcnJheSwgbmFtZSkgIT09IFwiYWxyZWFkeSBwbGFjZSBoZXJlXCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IG5hbWUsIGF0dGFja0FJLCB2ZXJpZnlDb29yZGluYXRlIH07XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiZnVuY3Rpb24gU2hpcCAobGVuZ3RoLCBuYW1lKSB7XG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmIChsZW5ndGggPiBoaXRzKSB7XG4gICAgICByZXR1cm4gKytoaXRzO1xuICAgIH0gXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9OyBcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY291bnRPZkhpdHMgPSAoKSA9PiBoaXRzO1xuXG4gIHJldHVybiB7IG5hbWUsIGxlbmd0aCwgaGl0ICwgaXNTdW5rLCBjb3VudE9mSGl0cyB9O1xufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFNoaXA7IFxuZXhwb3J0IHsgU2hpcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0IHsgaW5pdEdhbWUgfSBmcm9tIFwiLi9tb2R1bGVzL2luaXRHYW1lLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IGluaXRBcHAgPSAoKSA9PiB7XG4gIGluaXRHYW1lKCk7XG59O1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0QXBwKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=