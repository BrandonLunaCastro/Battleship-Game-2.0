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
  height: auto;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/_options.scss","webpack://./src/styles/style.scss","webpack://./src/styles/_colors.scss","webpack://./src/styles/_startWindow.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"colors\";\n\n@mixin neonElement($color){\n  box-shadow: inset 1px 1px 14px $color, 1px 1px 14px $color;\n  text-shadow: 0 0 5px $color, 0 0 15px $color, 0 0 35px $color,  0 0 55px $color ;\n}\n\n  @keyframes changeNeon{\n  0%{\n    @include neonElement($board);\n  }\n  25%{\n    @include neonElement($military-green);\n  }\n  50%{\n    @include neonElement($crimson);\n  }\n  75%{\n    @include neonElement($orange);\n  }\n  100%{\n    @include neonElement($color-pink);\n  }\n}\n\n.options {\n  padding: 18px;\n  height: fit-content;\n  width: 800px;\n  background: $background;\n  transition: all 0.2s ease-in;\n  border-radius:5px;\n\n  &__buttons {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-bottom: 20px;\n\n    #start__game {\n      &:hover {\n        cursor: pointer;\n        animation: changeNeon 2.6s infinite alternate ease-in-out;\n      }\n    }\n    #rotate {\n      &:hover {\n        cursor: pointer;\n        animation: changeNeon 2.6s infinite alternate ease-in-out;\n      }\n    }\n  }\n}\n\n#start__game,\n#rotate {\n  width: 130px;\n  height: 40px;\n  background-color: transparent;\n  color: $fail;\n  font-size: 1.2rem;\n  border: 2px solid $fail;\n  border-radius: 4px;\n  @include neonElement($board)\n}\n\n.ships {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 20px;\n  gap: 15px;\n  width: auto;\n\n  .carrier,\n  .battleship,\n  .destroyer,\n  .submarine,\n  .boat {\n    display: grid;\n  }\n\n  @mixin gridColumns($num, $width) {\n    grid-template-columns: repeat($num, $width);\n    width: fit-content;\n  }\n  .carrier.horizontal {\n    @include gridColumns(5, 40px);\n  }\n  .battleship.horizontal {\n    @include gridColumns(4, 40px);\n  }\n  .destroyer.horizontal {\n    @include gridColumns(3, 40px);\n  }\n  .submarine.horizontal {\n    @include gridColumns(3, 40px);\n  }\n  .boat.horizontal {\n    @include gridColumns(2, 40px);\n  }\n\n  @mixin gridRows($num, $width) {\n    grid-template-rows: repeat($num, $width);\n    width: $width;\n    height: fit-content;\n  }\n\n  .carrier.vertical {\n    @include gridRows(5, 40px);\n  }\n  .battleship.vertical {\n    @include gridRows(4, 40px);\n  }\n  .destroyer.vertical {\n    @include gridRows(3, 40px);\n  }\n  .submarine.vertical {\n    @include gridRows(3, 40px);\n  }\n  .boat.vertical {\n    @include gridRows(2, 40px);\n  }\n}\n\n.hover {\n  background-color: $ship;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(4);\n  }\n}\n\n@keyframes change {\n  0% {\n    background-color: $military-green;\n    box-shadow: 1px 1px 18px $military-green;\n  }\n\n  100% {\n    background-color: $board;\n    color: $fail;\n    box-shadow: 1px 1px 18px $board;\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap\");\n@import \"startWindow\";\n@import \"colors\";\n@import \"options\";\n\n*,\n::after,\n::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Saira Stencil One\", sans-serif;\n}\n\nhtml,\nbody {\n  background: $background;\n}\n\nmain{\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.glow {\n  content: \"\";\n  position: relative;\n  margin: 10px auto;\n  background: linear-gradient(45deg,#e6fb04,#ff6600,#00ff66,#00ffff,\n  #ff00ff, #ff0099, #6e0dd0, #ff3300, #099fff);\n  background-size: 400%;\n  height: auto;\n  animation: animate 20s linear infinite;\n  padding: 2px;\n  border-radius: 5px;\n}\n\n.turn {   \n  display: flex;\n  justify-content: center;\n  align-self: center;\n  font-size: 1.4rem;\n  color: $fail;\n  padding: 10px;\n  background: linear-gradient($background, rgb(44, 44, 85));  \n  border-radius: 5px;\n  backdrop-filter: blur(40px);\n}\n\n@keyframes animate {\n  0% {\n    background-position: 0 0 ;\n  }\n  50% {\n    background-position: 400% 0 ;\n  }\n  100%{\n    background-position:  0 0 ;\n  }\n}\n\nh1 {\n  text-align: center;\n  margin: 15px;\n  font-size: 4rem;\n  font-weight: 500;\n  color: $fail;\n  text-shadow: 1px 1px 2px $fail;\n}\n\n.main__window {\n  flex-grow: 3;\n  flex-shrink: 2;\n  flex-basis: 70%;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  gap: 25px;\n  flex-wrap: wrap;\n  max-height: 100%;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 150px;\n}\n\n.machineBoard,\n.humanBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n\n}\n\n.cursor-attack {\n  cursor: crosshair;\n}\n\n.disabled {\n  pointer-events: none;\n}\n\n@mixin neonShip($color,$measurements){\n  box-shadow: inset 1px 1px $measurements $color, 1px 1px $measurements $color;\n}\n\n.grid {\n  height: 40px;\n  @include neonShip($board, 3px);\n}\n.ship {\n  background-color: transparent;\n  @include neonShip($ship, 4px);\n}\n\n@mixin bowVertical {\n  border-radius: 20px 20px 0px 0px;\n}\n@mixin sternVertical {\n  border-radius: 0px 0px 20px 20px;\n}\n\n@mixin bowHorizontal {\n  border-radius: 20px 0px 0px 20px;\n}\n@mixin sternHorizontal {\n  border-radius: 0px 20px 20px 0px;\n}\n\n.bow__vertical {\n  @include bowVertical();\n}\n\n.stern__vertical {\n  @include sternVertical();\n}\n\n.bow__horizontal {\n  @include bowHorizontal();\n}\n\n.stern__horizontal {\n  @include sternHorizontal();\n}\n\n.hit,\n.fail {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hit::after,\n.fail::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 100%;\n  height: 2vmin;\n  width: 2vmin;\n}\n\n.fail::after {\n  background-color: white;\n}\n\n.hit::after {\n  background-color: $crimson;\n}\n\n.fail::before {\n  content: \"\";\n  position: absolute;\n  animation: pulse 0.2s ease forwards;\n  width: 15px;\n  height: 15px;\n  border-radius: 100%;\n  border-style: solid;\n  border-color: white;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 110%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 2;\n  z-index: 999;\n\n  &__content {\n    display: inherit;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 15px;\n    font-size: 2rem;\n    width: 80%;\n    height: 25vmin;\n    background-color: #f0f9ff;\n    border-radius: 5px;\n    color: $background;\n\n    button {\n      height: 50px;\n      width: 150px;\n      font-size: 1.2rem;\n      background-color: $military-green;\n      box-shadow: 1px 1px 18px $military-green;\n      border: none;\n      border-radius: 5px;\n      transition: all 0.3s ease-out;\n      &:hover {\n        cursor: pointer;\n        animation: change 0.8s infinite alternate ease-in-out;\n      }\n    }\n  }\n}\n\n.is-close {\n  display: none;\n}\n\n","$color-pink: #ff00ff;\n$military-green: #006400;\n$slate: #020617;\n$background: #0c192c;\n$ship: #9098a9;\n$board: #2491ec;\n$fail: #f4f8ff;\n$crimson:crimson;\n$orange: #ff6600;","@import \"colors\";\n@import \"options\";\n\n.start__window {\n  background-color: $background;\n  position: absolute;\n  display: grid;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  z-index: 99;\n\n  .enter__player {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    align-self: flex-end;\n    width: 100%;\n\n    .welcome {\n      display: block;\n      margin: 0 auto;\n      font-weight: 500;\n      white-space: nowrap;\n      border-right: 4px solid;\n      width: 29ch;\n      font-size: 3rem;\n      color: white;\n      animation:\n        typing 4s steps(29),\n        blink 0.5s infinite;\n      overflow: hidden;\n    }\n\n    @keyframes typing {\n      from {\n        width: 0;\n      }\n    }\n\n    @keyframes blink {\n      50% {\n        border-color: transparent;\n      }\n    }\n\n    .user {\n      display: inherit;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      gap: 25px;\n      position: relative;\n\n      &__name {\n        width: 250px;\n        height: 25px;\n        outline: none;\n        font-size: 1.2rem;\n        border: none;\n        box-shadow: 0px 0px 8px $fail;\n      }\n\n      .empty__name::after {\n        content: \"Please enter a valid name\";\n        position: absolute;\n        background-color: red;\n        top: 30px;\n        left: 40%;\n        color: white;\n        padding: 0 10px;\n      }\n\n      #enter__game {\n        width: 200px;\n        height: 45px;\n        font-size: 1.3rem;\n        border-radius: 4px;\n        color: $fail;\n        box-shadow: 1px 1px 18px $board;\n        border: none;\n        outline: none;\n        border: 2px solid $ship;\n        background: $background;\n        @include neonElement($board);\n        &:hover {\n          cursor: pointer;\n          animation: changeNeon 2.7s infinite alternate ease-in-out;\n        }\n      }\n    }\n  }\n  .git-hub {\n    display: flex;\n    align-self: flex-end;\n    justify-self: center;\n    align-items: center;\n    gap: 20px;\n    color: $fail;\n    img {\n      width: 3rem;\n      max-height: 3rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtIQUErSDtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdOQUFnTixLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssU0FBUyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsWUFBWSxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksS0FBSyxLQUFLLFlBQVksWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssS0FBSyxZQUFZLFlBQVksWUFBWSxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksTUFBTSxLQUFLLFFBQVEsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFB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Q0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sb0RBQVE7QUFDZDtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7O0FDOUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVztBQUNYOztBQUVBOzs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0NpRDtBQUNwQjs7QUFFN0I7QUFDQSxFQUFFLDhEQUFRO0FBQ1Y7OztBQUdBLHFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL3NyYy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vc3JjL21vZHVsZXMvZHJhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vc3JjL21vZHVsZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9zcmMvbW9kdWxlcy9pbml0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUtMi4wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLTIuMC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS0yLjAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYWlyYStTdGVuY2lsK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBrZXlmcmFtZXMgY2hhbmdlTmVvbiB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggIzI0OTFlYywgMXB4IDFweCAxNHB4ICMyNDkxZWM7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzI0OTFlYywgMCAwIDE1cHggIzI0OTFlYywgMCAwIDM1cHggIzI0OTFlYywgMCAwIDU1cHggIzI0OTFlYztcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjMDA2NDAwLCAxcHggMXB4IDE0cHggIzAwNjQwMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMDA2NDAwLCAwIDAgMTVweCAjMDA2NDAwLCAwIDAgMzVweCAjMDA2NDAwLCAwIDAgNTVweCAjMDA2NDAwO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxNHB4IGNyaW1zb24sIDFweCAxcHggMTRweCBjcmltc29uO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGNyaW1zb24sIDAgMCAxNXB4IGNyaW1zb24sIDAgMCAzNXB4IGNyaW1zb24sIDAgMCA1NXB4IGNyaW1zb247XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggI2ZmNjYwMCwgMXB4IDFweCAxNHB4ICNmZjY2MDA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmNjYwMCwgMCAwIDE1cHggI2ZmNjYwMCwgMCAwIDM1cHggI2ZmNjYwMCwgMCAwIDU1cHggI2ZmNjYwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggI2ZmMDBmZiwgMXB4IDFweCAxNHB4ICNmZjAwZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmMDBmZiwgMCAwIDE1cHggI2ZmMDBmZiwgMCAwIDM1cHggI2ZmMDBmZiwgMCAwIDU1cHggI2ZmMDBmZjtcbiAgfVxufVxuLm9wdGlvbnMge1xuICBwYWRkaW5nOiAxOHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogODAwcHg7XG4gIGJhY2tncm91bmQ6ICMwYzE5MmM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5vcHRpb25zX19idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5vcHRpb25zX19idXR0b25zICNzdGFydF9fZ2FtZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBjaGFuZ2VOZW9uIDIuNnMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xufVxuLm9wdGlvbnNfX2J1dHRvbnMgI3JvdGF0ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBjaGFuZ2VOZW9uIDIuNnMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xufVxuXG4jc3RhcnRfX2dhbWUsXG4jcm90YXRlIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2Y0ZjhmZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNGY4ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxNHB4ICMyNDkxZWMsIDFweCAxcHggMTRweCAjMjQ5MWVjO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMjQ5MWVjLCAwIDAgMTVweCAjMjQ5MWVjLCAwIDAgMzVweCAjMjQ5MWVjLCAwIDAgNTVweCAjMjQ5MWVjO1xufVxuXG4uc2hpcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBnYXA6IDE1cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnNoaXBzIC5jYXJyaWVyLFxuLnNoaXBzIC5iYXR0bGVzaGlwLFxuLnNoaXBzIC5kZXN0cm95ZXIsXG4uc2hpcHMgLnN1Ym1hcmluZSxcbi5zaGlwcyAuYm9hdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uc2hpcHMgLmNhcnJpZXIuaG9yaXpvbnRhbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDQwcHgpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDQwcHgpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNDBweCk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuc3VibWFyaW5lLmhvcml6b250YWwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA0MHB4KTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5ib2F0Lmhvcml6b250YWwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0MHB4KTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5jYXJyaWVyLnZlcnRpY2FsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNDBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5iYXR0bGVzaGlwLnZlcnRpY2FsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgNDBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5kZXN0cm95ZXIudmVydGljYWwge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA0MHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuYm9hdC52ZXJ0aWNhbCB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDQwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwOThhOTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNoYW5nZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDAwO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMThweCAjMDA2NDAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDkxZWM7XG4gICAgY29sb3I6ICNmNGY4ZmY7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4ICMyNDkxZWM7XG4gIH1cbn1cbi5zdGFydF9fd2luZG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTkyYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xufVxuLnN0YXJ0X193aW5kb3cgLmVudGVyX19wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGFydF9fd2luZG93IC5lbnRlcl9fcGxheWVyIC53ZWxjb21lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZDtcbiAgd2lkdGg6IDI5Y2g7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBhbmltYXRpb246IHR5cGluZyA0cyBzdGVwcygyOSksIGJsaW5rIDAuNXMgaW5maW5pdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5Aa2V5ZnJhbWVzIHR5cGluZyB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG4uc3RhcnRfX3dpbmRvdyAuZW50ZXJfX3BsYXllciAudXNlciB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdGFydF9fd2luZG93IC5lbnRlcl9fcGxheWVyIC51c2VyX19uYW1lIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICNmNGY4ZmY7XG59XG4uc3RhcnRfX3dpbmRvdyAuZW50ZXJfX3BsYXllciAudXNlciAuZW1wdHlfX25hbWU6OmFmdGVyIHtcbiAgY29udGVudDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDQwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uc3RhcnRfX3dpbmRvdyAuZW50ZXJfX3BsYXllciAudXNlciAjZW50ZXJfX2dhbWUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmNGY4ZmY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMThweCAjMjQ5MWVjO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MDk4YTk7XG4gIGJhY2tncm91bmQ6ICMwYzE5MmM7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjMjQ5MWVjLCAxcHggMXB4IDE0cHggIzI0OTFlYztcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzI0OTFlYywgMCAwIDE1cHggIzI0OTFlYywgMCAwIDM1cHggIzI0OTFlYywgMCAwIDU1cHggIzI0OTFlYztcbn1cbi5zdGFydF9fd2luZG93IC5lbnRlcl9fcGxheWVyIC51c2VyICNlbnRlcl9fZ2FtZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBjaGFuZ2VOZW9uIDIuN3MgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xufVxuLnN0YXJ0X193aW5kb3cgLmdpdC1odWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgY29sb3I6ICNmNGY4ZmY7XG59XG4uc3RhcnRfX3dpbmRvdyAuZ2l0LWh1YiBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgbWF4LWhlaWdodDogM3JlbTtcbn1cblxuQGtleWZyYW1lcyBjaGFuZ2VOZW9uIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjMjQ5MWVjLCAxcHggMXB4IDE0cHggIzI0OTFlYztcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMjQ5MWVjLCAwIDAgMTVweCAjMjQ5MWVjLCAwIDAgMzVweCAjMjQ5MWVjLCAwIDAgNTVweCAjMjQ5MWVjO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxNHB4ICMwMDY0MDAsIDFweCAxcHggMTRweCAjMDA2NDAwO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwMDY0MDAsIDAgMCAxNXB4ICMwMDY0MDAsIDAgMCAzNXB4ICMwMDY0MDAsIDAgMCA1NXB4ICMwMDY0MDA7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggY3JpbXNvbiwgMXB4IDFweCAxNHB4IGNyaW1zb247XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggY3JpbXNvbiwgMCAwIDE1cHggY3JpbXNvbiwgMCAwIDM1cHggY3JpbXNvbiwgMCAwIDU1cHggY3JpbXNvbjtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjZmY2NjAwLCAxcHggMXB4IDE0cHggI2ZmNjYwMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmY2NjAwLCAwIDAgMTVweCAjZmY2NjAwLCAwIDAgMzVweCAjZmY2NjAwLCAwIDAgNTVweCAjZmY2NjAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMTRweCAjZmYwMGZmLCAxcHggMXB4IDE0cHggI2ZmMDBmZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmYwMGZmLCAwIDAgMTVweCAjZmYwMGZmLCAwIDAgMzVweCAjZmYwMGZmLCAwIDAgNTVweCAjZmYwMGZmO1xuICB9XG59XG4ub3B0aW9ucyB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiA4MDBweDtcbiAgYmFja2dyb3VuZDogIzBjMTkyYztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm9wdGlvbnNfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm9wdGlvbnNfX2J1dHRvbnMgI3N0YXJ0X19nYW1lOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGNoYW5nZU5lb24gMi42cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG4ub3B0aW9uc19fYnV0dG9ucyAjcm90YXRlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGNoYW5nZU5lb24gMi42cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG5cbiNzdGFydF9fZ2FtZSxcbiNyb3RhdGUge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZjRmOGZmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjhmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggIzI0OTFlYywgMXB4IDFweCAxNHB4ICMyNDkxZWM7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMyNDkxZWMsIDAgMCAxNXB4ICMyNDkxZWMsIDAgMCAzNXB4ICMyNDkxZWMsIDAgMCA1NXB4ICMyNDkxZWM7XG59XG5cbi5zaGlwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGdhcDogMTVweDtcbiAgd2lkdGg6IGF1dG87XG59XG4uc2hpcHMgLmNhcnJpZXIsXG4uc2hpcHMgLmJhdHRsZXNoaXAsXG4uc2hpcHMgLmRlc3Ryb3llcixcbi5zaGlwcyAuc3VibWFyaW5lLFxuLnNoaXBzIC5ib2F0IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5zaGlwcyAuY2Fycmllci5ob3Jpem9udGFsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgNDBweCk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuYmF0dGxlc2hpcC5ob3Jpem9udGFsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgNDBweCk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuZGVzdHJveWVyLmhvcml6b250YWwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA0MHB4KTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5zdWJtYXJpbmUuaG9yaXpvbnRhbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDQwcHgpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmJvYXQuaG9yaXpvbnRhbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQwcHgpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmNhcnJpZXIudmVydGljYWwge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA0MHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmJhdHRsZXNoaXAudmVydGljYWwge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCA0MHB4KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uc2hpcHMgLmRlc3Ryb3llci52ZXJ0aWNhbCB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwcHgpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5zaGlwcyAuc3VibWFyaW5lLnZlcnRpY2FsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNDBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLnNoaXBzIC5ib2F0LnZlcnRpY2FsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDBweCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5OGE5O1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoNCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2hhbmdlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY0MDA7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4ICMwMDY0MDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTFlYztcbiAgICBjb2xvcjogI2Y0ZjhmZjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE4cHggIzI0OTFlYztcbiAgfVxufVxuKixcbjo6YWZ0ZXIsXG46OmJlZm9yZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiU2FpcmEgU3RlbmNpbCBPbmVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMGMxOTJjO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2xvdyB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2U2ZmIwNCwgI2ZmNjYwMCwgIzAwZmY2NiwgIzAwZmZmZiwgI2ZmMDBmZiwgI2ZmMDA5OSwgIzZlMGRkMCwgI2ZmMzMwMCwgIzA5OWZmZik7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhbmltYXRpb246IGFuaW1hdGUgMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50dXJuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjZjRmOGZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzBjMTkyYywgcmdiKDQ0LCA0NCwgODUpKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCk7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICB9XG59XG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZjRmOGZmO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggI2Y0ZjhmZjtcbn1cblxuLm1haW5fX3dpbmRvdyB7XG4gIGZsZXgtZ3JvdzogMztcbiAgZmxleC1zaHJpbms6IDI7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm9hcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTUwcHg7XG59XG5cbi5tYWNoaW5lQm9hcmQsXG4uaHVtYW5Cb2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTtcbn1cblxuLmN1cnNvci1hdHRhY2sge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ncmlkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDNweCAjMjQ5MWVjLCAxcHggMXB4IDNweCAjMjQ5MWVjO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDRweCAjOTA5OGE5LCAxcHggMXB4IDRweCAjOTA5OGE5O1xufVxuXG4uYm93X192ZXJ0aWNhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xufVxuXG4uc3Rlcm5fX3ZlcnRpY2FsIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG59XG5cbi5ib3dfX2hvcml6b250YWwge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcbn1cblxuLnN0ZXJuX19ob3Jpem9udGFsIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XG59XG5cbi5oaXQsXG4uZmFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGl0OjphZnRlcixcbi5mYWlsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAydm1pbjtcbiAgd2lkdGg6IDJ2bWluO1xufVxuXG4uZmFpbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpdDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4uZmFpbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IHB1bHNlIDAuMnMgZWFzZSBmb3J3YXJkcztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMjtcbiAgei1pbmRleDogOTk5O1xufVxuLm1vZGFsX19jb250ZW50IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNXZtaW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwYzE5MmM7XG59XG4ubW9kYWxfX2NvbnRlbnQgYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDE4cHggIzAwNjQwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuLm1vZGFsX19jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBjaGFuZ2UgMC44cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5pcy1jbG9zZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19vcHRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3N0YXJ0V2luZG93LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0U7RUFDQTtJQUxB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O0FBMFdGO0FBeFdFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDN01TO0FEdWpCYjtBQXhXSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNyTlc7RURzTlgsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQTBXTjtBQXpXTTtFQUNFLGVBQUE7RUFDQSxxREFBQTtBQTJXUjs7QUFyV0E7RUFDRSxhQUFBO0FBd1dGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcImNvbG9yc1xcXCI7XFxuXFxuQG1peGluIG5lb25FbGVtZW50KCRjb2xvcil7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDE0cHggJGNvbG9yLCAxcHggMXB4IDE0cHggJGNvbG9yO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggJGNvbG9yLCAwIDAgMTVweCAkY29sb3IsIDAgMCAzNXB4ICRjb2xvciwgIDAgMCA1NXB4ICRjb2xvciA7XFxufVxcblxcbiAgQGtleWZyYW1lcyBjaGFuZ2VOZW9ue1xcbiAgMCV7XFxuICAgIEBpbmNsdWRlIG5lb25FbGVtZW50KCRib2FyZCk7XFxuICB9XFxuICAyNSV7XFxuICAgIEBpbmNsdWRlIG5lb25FbGVtZW50KCRtaWxpdGFyeS1ncmVlbik7XFxuICB9XFxuICA1MCV7XFxuICAgIEBpbmNsdWRlIG5lb25FbGVtZW50KCRjcmltc29uKTtcXG4gIH1cXG4gIDc1JXtcXG4gICAgQGluY2x1ZGUgbmVvbkVsZW1lbnQoJG9yYW5nZSk7XFxuICB9XFxuICAxMDAle1xcbiAgICBAaW5jbHVkZSBuZW9uRWxlbWVudCgkY29sb3ItcGluayk7XFxuICB9XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIHBhZGRpbmc6IDE4cHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbiAgYm9yZGVyLXJhZGl1czo1cHg7XFxuXFxuICAmX19idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXG4gICAgI3N0YXJ0X19nYW1lIHtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGFuaW1hdGlvbjogY2hhbmdlTmVvbiAyLjZzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgI3JvdGF0ZSB7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBhbmltYXRpb246IGNoYW5nZU5lb24gMi42cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbiNzdGFydF9fZ2FtZSxcXG4jcm90YXRlIHtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICRmYWlsO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAkZmFpbDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIEBpbmNsdWRlIG5lb25FbGVtZW50KCRib2FyZClcXG59XFxuXFxuLnNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDE1cHg7XFxuICB3aWR0aDogYXV0bztcXG5cXG4gIC5jYXJyaWVyLFxcbiAgLmJhdHRsZXNoaXAsXFxuICAuZGVzdHJveWVyLFxcbiAgLnN1Ym1hcmluZSxcXG4gIC5ib2F0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG5cXG4gIEBtaXhpbiBncmlkQ29sdW1ucygkbnVtLCAkd2lkdGgpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJG51bSwgJHdpZHRoKTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcbiAgLmNhcnJpZXIuaG9yaXpvbnRhbCB7XFxuICAgIEBpbmNsdWRlIGdyaWRDb2x1bW5zKDUsIDQwcHgpO1xcbiAgfVxcbiAgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCB7XFxuICAgIEBpbmNsdWRlIGdyaWRDb2x1bW5zKDQsIDQwcHgpO1xcbiAgfVxcbiAgLmRlc3Ryb3llci5ob3Jpem9udGFsIHtcXG4gICAgQGluY2x1ZGUgZ3JpZENvbHVtbnMoMywgNDBweCk7XFxuICB9XFxuICAuc3VibWFyaW5lLmhvcml6b250YWwge1xcbiAgICBAaW5jbHVkZSBncmlkQ29sdW1ucygzLCA0MHB4KTtcXG4gIH1cXG4gIC5ib2F0Lmhvcml6b250YWwge1xcbiAgICBAaW5jbHVkZSBncmlkQ29sdW1ucygyLCA0MHB4KTtcXG4gIH1cXG5cXG4gIEBtaXhpbiBncmlkUm93cygkbnVtLCAkd2lkdGgpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJG51bSwgJHdpZHRoKTtcXG4gICAgd2lkdGg6ICR3aWR0aDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gIC5jYXJyaWVyLnZlcnRpY2FsIHtcXG4gICAgQGluY2x1ZGUgZ3JpZFJvd3MoNSwgNDBweCk7XFxuICB9XFxuICAuYmF0dGxlc2hpcC52ZXJ0aWNhbCB7XFxuICAgIEBpbmNsdWRlIGdyaWRSb3dzKDQsIDQwcHgpO1xcbiAgfVxcbiAgLmRlc3Ryb3llci52ZXJ0aWNhbCB7XFxuICAgIEBpbmNsdWRlIGdyaWRSb3dzKDMsIDQwcHgpO1xcbiAgfVxcbiAgLnN1Ym1hcmluZS52ZXJ0aWNhbCB7XFxuICAgIEBpbmNsdWRlIGdyaWRSb3dzKDMsIDQwcHgpO1xcbiAgfVxcbiAgLmJvYXQudmVydGljYWwge1xcbiAgICBAaW5jbHVkZSBncmlkUm93cygyLCA0MHB4KTtcXG4gIH1cXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGlwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZSB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtaWxpdGFyeS1ncmVlbjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4ICRtaWxpdGFyeS1ncmVlbjtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9hcmQ7XFxuICAgIGNvbG9yOiAkZmFpbDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4ICRib2FyZDtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYWlyYStTdGVuY2lsK09uZSZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IFxcXCJzdGFydFdpbmRvd1xcXCI7XFxuQGltcG9ydCBcXFwiY29sb3JzXFxcIjtcXG5AaW1wb3J0IFxcXCJvcHRpb25zXFxcIjtcXG5cXG4qLFxcbjo6YWZ0ZXIsXFxuOjpiZWZvcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlNhaXJhIFN0ZW5jaWwgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xcbn1cXG5cXG5tYWlue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nbG93IHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2U2ZmIwNCwjZmY2NjAwLCMwMGZmNjYsIzAwZmZmZixcXG4gICNmZjAwZmYsICNmZjAwOTksICM2ZTBkZDAsICNmZjMzMDAsICMwOTlmZmYpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDIwcyBsaW5lYXIgaW5maW5pdGU7XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50dXJuIHsgICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6ICRmYWlsO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYmFja2dyb3VuZCwgcmdiKDQ0LCA0NCwgODUpKTsgIFxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAgO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDAwJSAwIDtcXG4gIH1cXG4gIDEwMCV7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICAwIDAgO1xcbiAgfVxcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICRmYWlsO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICRmYWlsO1xcbn1cXG5cXG4ubWFpbl9fd2luZG93IHtcXG4gIGZsZXgtZ3JvdzogMztcXG4gIGZsZXgtc2hyaW5rOiAyO1xcbiAgZmxleC1iYXNpczogNzAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTUwcHg7XFxufVxcblxcbi5tYWNoaW5lQm9hcmQsXFxuLmh1bWFuQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTtcXG5cXG59XFxuXFxuLmN1cnNvci1hdHRhY2sge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuQG1peGluIG5lb25TaGlwKCRjb2xvciwkbWVhc3VyZW1lbnRzKXtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggJG1lYXN1cmVtZW50cyAkY29sb3IsIDFweCAxcHggJG1lYXN1cmVtZW50cyAkY29sb3I7XFxufVxcblxcbi5ncmlkIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIEBpbmNsdWRlIG5lb25TaGlwKCRib2FyZCwgM3B4KTtcXG59XFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBAaW5jbHVkZSBuZW9uU2hpcCgkc2hpcCwgNHB4KTtcXG59XFxuXFxuQG1peGluIGJvd1ZlcnRpY2FsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xcbn1cXG5AbWl4aW4gc3Rlcm5WZXJ0aWNhbCB7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcXG59XFxuXFxuQG1peGluIGJvd0hvcml6b250YWwge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxufVxcbkBtaXhpbiBzdGVybkhvcml6b250YWwge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XFxufVxcblxcbi5ib3dfX3ZlcnRpY2FsIHtcXG4gIEBpbmNsdWRlIGJvd1ZlcnRpY2FsKCk7XFxufVxcblxcbi5zdGVybl9fdmVydGljYWwge1xcbiAgQGluY2x1ZGUgc3Rlcm5WZXJ0aWNhbCgpO1xcbn1cXG5cXG4uYm93X19ob3Jpem9udGFsIHtcXG4gIEBpbmNsdWRlIGJvd0hvcml6b250YWwoKTtcXG59XFxuXFxuLnN0ZXJuX19ob3Jpem9udGFsIHtcXG4gIEBpbmNsdWRlIHN0ZXJuSG9yaXpvbnRhbCgpO1xcbn1cXG5cXG4uaGl0LFxcbi5mYWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oaXQ6OmFmdGVyLFxcbi5mYWlsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IDJ2bWluO1xcbiAgd2lkdGg6IDJ2bWluO1xcbn1cXG5cXG4uZmFpbDo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjcmltc29uO1xcbn1cXG5cXG4uZmFpbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAwLjJzIGVhc2UgZm9yd2FyZHM7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIHotaW5kZXg6IDk5OTtcXG5cXG4gICZfX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDI1dm1pbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjlmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogJGJhY2tncm91bmQ7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWlsaXRhcnktZ3JlZW47XFxuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxOHB4ICRtaWxpdGFyeS1ncmVlbjtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYW5pbWF0aW9uOiBjaGFuZ2UgMC44cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5pcy1jbG9zZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIixcIiRjb2xvci1waW5rOiAjZmYwMGZmO1xcbiRtaWxpdGFyeS1ncmVlbjogIzAwNjQwMDtcXG4kc2xhdGU6ICMwMjA2MTc7XFxuJGJhY2tncm91bmQ6ICMwYzE5MmM7XFxuJHNoaXA6ICM5MDk4YTk7XFxuJGJvYXJkOiAjMjQ5MWVjO1xcbiRmYWlsOiAjZjRmOGZmO1xcbiRjcmltc29uOmNyaW1zb247XFxuJG9yYW5nZTogI2ZmNjYwMDtcIixcIkBpbXBvcnQgXFxcImNvbG9yc1xcXCI7XFxuQGltcG9ydCBcXFwib3B0aW9uc1xcXCI7XFxuXFxuLnN0YXJ0X193aW5kb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogOTk7XFxuXFxuICAuZW50ZXJfX3BsYXllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAud2VsY29tZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkO1xcbiAgICAgIHdpZHRoOiAyOWNoO1xcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgYW5pbWF0aW9uOlxcbiAgICAgICAgdHlwaW5nIDRzIHN0ZXBzKDI5KSxcXG4gICAgICAgIGJsaW5rIDAuNXMgaW5maW5pdGU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHR5cGluZyB7XFxuICAgICAgZnJvbSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBibGluayB7XFxuICAgICAgNTAlIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC51c2VyIHtcXG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDI1cHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICZfX25hbWUge1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggJGZhaWw7XFxuICAgICAgfVxcblxcbiAgICAgIC5lbXB0eV9fbmFtZTo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG5hbWVcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgdG9wOiAzMHB4O1xcbiAgICAgICAgbGVmdDogNDAlO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAjZW50ZXJfX2dhbWUge1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBjb2xvcjogJGZhaWw7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDE4cHggJGJvYXJkO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzaGlwO1xcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XFxuICAgICAgICBAaW5jbHVkZSBuZW9uRWxlbWVudCgkYm9hcmQpO1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjaGFuZ2VOZW9uIDIuN3MgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLmdpdC1odWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6ICRmYWlsO1xcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgIG1heC1oZWlnaHQ6IDNyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBkb20oKSB7XG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHJlZmVyZW5jZSwgcGxheWVyKSA9PiB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBwbGF5ZXIpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZVwiLCBpKTtcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICAgIHJlZmVyZW5jZS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0JvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc1wiKTtcbiAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJpcy1jbG9zZVwiKTtcbiAgICBib2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtY2xvc2VcIik7XG4gIH07XG5cbiAgY29uc3QgdmVyaWZ5SXNTdW5rID0gKGJvYXJkLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCB3aW5uZXIgPSBwbGF5ZXIgPT09IFwiaHVtYW5cIiA/IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpIDogcGxheWVyO1xuICAgIGlmIChib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLWNsb3NlXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIikudGV4dENvbnRlbnQgPSBgVGhlIHdpbm5lciBpcyBwbGF5ZXIgJHt3aW5uZXJ9YDtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhdGVBdHRhY2sgPSAodGFyZ2V0LCBhdHRhY2ssIGJvYXJkLCBwbGF5ZXIpID0+IHtcbiAgICBpZiAoYXR0YWNrID09PSBcImFscmVhZHkgYXR0YWNrZWRcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYXR0YWNrKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIHZlcmlmeUlzU3Vuayhib2FyZCwgcGxheWVyLm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImZhaWxcIik7XG4gICAgICB2ZXJpZnlJc1N1bmsoYm9hcmQsIHBsYXllci5uYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2hvd1R1cm4ocGxheWVyLCByZXBlYXQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHR1cm5PZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVyblwiKTtcbiAgICBpZiAocmVwZWF0ID09PSB0cnVlKXtcbiAgICAgIHR1cm5PZi50ZXh0Q29udGVudCA9IFwiQWxyZWFkeSBhdHRhY2tlZCB0cnkgYWdhaW4hXCI7XG4gICAgfSBlbHNlIHsgXG4gICAgICB0dXJuT2YudGV4dENvbnRlbnQgPSBgVHVybiBvZiAke3BsYXllcn1gO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGNvbnN0IGdldENvb3JkaW5hdGVzID0gKHNoaXApID0+IHtcbiAgICBjb25zdCBib2FyZFBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtYW5Cb2FyZFwiKS5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IG5vZGVTaGlwcyA9IEFycmF5LmZyb20oYm9hcmRQbGF5ZXIpXG4gICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhzaGlwKSlcbiAgICAgIC5tYXAoKGVsKSA9PiBwYXJzZUludChlbC5kYXRhc2V0LmNvb3JkaW5hdGUpKTtcbiAgICByZXR1cm4gbm9kZVNoaXBzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJvdGF0ZURpcmVjdGlvbigpIHtcbiAgICBjb25zdCBzaGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzXCIpO1xuICAgIGNvbnN0IGJ0blJvdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRlXCIpO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGFyclNoaXBzID0gQXJyYXkuZnJvbShzaGlwc1NlY3Rpb24uY2hpbGRyZW4pO1xuICAgICAgYXJyU2hpcHMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBub2RlTGVuZ3RoID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhvcml6b250YWxcIik7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpO1xuXG4gICAgICAgIG5vZGUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZShcImJvd19fdmVydGljYWxcIik7XG4gICAgICAgIG5vZGUuY2hpbGRyZW5bbm9kZUxlbmd0aC0xXS5jbGFzc0xpc3QudG9nZ2xlKFwic3Rlcm5fX3ZlcnRpY2FsXCIpO1xuXG4gICAgICAgIG5vZGUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZShcImJvd19faG9yaXpvbnRhbFwiKTtcbiAgICAgICAgbm9kZS5jaGlsZHJlbltub2RlTGVuZ3RoLTFdLmNsYXNzTGlzdC50b2dnbGUoXCJzdGVybl9faG9yaXpvbnRhbFwiKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBidG5Sb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZSk7XG4gIH1cblxuICBjb25zdCBlbmFibGVTdGFydEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzXCIpO1xuICAgIHJldHVybiBzaGlwc1NlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlQm9hcmQsXG4gICAgc3RhdGVBdHRhY2ssXG4gICAgc2hvd1R1cm4sXG4gICAgZ2V0Q29vcmRpbmF0ZXMsXG4gICAgcm90YXRlRGlyZWN0aW9uLFxuICAgIGVuYWJsZVN0YXJ0QnRuLFxuICAgIHNob3dCb2FyZFxuICB9O1xufVxuXG5leHBvcnQgeyBkb20gfTtcbiIsImZ1bmN0aW9uIGRyYWdTaGlwcygpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWFuQm9hcmRcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJjbGFzc1wiLCBlLnRhcmdldC5jbGFzc05hbWUpO1xuICB9KTtcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcbiAgfSk7XG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XG4gIH0pO1xuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGdyaWRCb2FyZCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGNsYXNzU2hpcCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJjbGFzc1wiKTtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NTaGlwLnNwbGl0KFwiIFwiKVswXX1gKTtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gc2hpcC5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IGFtb3VudE5vZGVzID0gc2hpcC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBsZXQgY29vcmRpbmF0ZSA9IGdyaWRCb2FyZC5kYXRhc2V0LmNvb3JkaW5hdGU7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xuICAgIC8vIGlmIHNoaXBzIGNvbnRhaW5zIGhvcml6b250YWwgY2xhc3MgXG4gICAgaWYgKFxuICAgICAgY2xhc3NTaGlwLmluY2x1ZGVzKFwiaG9yaXpvbnRhbFwiKSAmJlxuICAgICAgcG9zaXRpb24oY2xhc3NTaGlwLCBhbW91bnROb2RlcywgY29vcmRpbmF0ZSkgJiZcbiAgICAgIHZlcmlmeVNwYWNlKGFtb3VudE5vZGVzLCBncmlkQm9hcmQsIDEpXG4gICAgKSB7XG4gICAgICBjb25zdCBhcnJOb2RlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnROb2RlczsgaSsrKSB7XG4gICAgICAgIGNoaWxkTm9kZXNbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlXCIsIGNvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmdyaWQuaHVtYW5bZGF0YS1jb29yZGluYXRlPVwiJHtjb29yZGluYXRlfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgYXJyTm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgY29vcmRpbmF0ZSsrO1xuICAgICAgfVxuICAgICAgQXJyYXkuZnJvbShjaGlsZE5vZGVzKS5tYXAoKG5vZGUsIGkpID0+IGFyck5vZGVzW2ldLnJlcGxhY2VXaXRoKG5vZGUpKTtcbiAgICAgIHNoaXAucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vIGlmIHNoaXAgY29udGFpbnMgdmVydGljYWwgY2xhc3NcbiAgICBpZiAoXG4gICAgICBjbGFzc1NoaXAuaW5jbHVkZXMoXCJ2ZXJ0aWNhbFwiKSAmJlxuICAgICAgcG9zaXRpb24oY2xhc3NTaGlwLCBhbW91bnROb2RlcywgY29vcmRpbmF0ZSkgJiZcbiAgICAgIHZlcmlmeVNwYWNlKGFtb3VudE5vZGVzLCBncmlkQm9hcmQsIDEwKVxuICAgICkge1xuICAgICAgY29uc3QgYm9hcmROb2RlcyA9IFtdO1xuICAgICAgbGV0IHBhcnNlQ29vcmQgPSBwYXJzZUludChjb29yZGluYXRlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50Tm9kZXM7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmdyaWQuaHVtYW5bZGF0YS1jb29yZGluYXRlPVwiJHtwYXJzZUNvb3JkfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgY2hpbGROb2Rlc1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVcIiwgcGFyc2VDb29yZCk7XG4gICAgICAgIGJvYXJkTm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgcGFyc2VDb29yZCArPSAxMDtcbiAgICAgIH1cbiAgICAgIEFycmF5LmZyb20oY2hpbGROb2RlcykubWFwKChub2RlLCBpKSA9PiBib2FyZE5vZGVzW2ldLnJlcGxhY2VXaXRoKG5vZGUpKTtcbiAgICAgIHNoaXAucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gVGhlIGZhY3RvciBkZXBlbmRzIGlzIGhvcml6b250YWwgb3IgdmVydGljYWwgb3JpZW50YXRpb25cbmZ1bmN0aW9uIHZlcmlmeVNwYWNlKGNoaWxkTGVuZ3RoLCBncmlkQm9hcmQsIGZhY3Rvcikge1xuICBjb25zdCBsYXN0Q29vcmRpbmF0ZSA9IGdyaWRCb2FyZC5kYXRhc2V0LmNvb3JkaW5hdGUuc2xpY2UoMSk7XG4gIGxldCBpbml0Q29vcmRpbmF0ZSA9IHBhcnNlSW50KGdyaWRCb2FyZC5kYXRhc2V0LmNvb3JkaW5hdGUpO1xuICBjb25zdCBhcnJOb2RlcyA9IFtdO1xuICBpZiAobGFzdENvb3JkaW5hdGUgPiAwKSB7XG4gICAgY29uc3QgcHJldk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5odW1hbltkYXRhLWNvb3JkaW5hdGU9XCIke2luaXRDb29yZGluYXRlIC0gZmFjdG9yfVwiXWBcbiAgICApO1xuICAgIGFyck5vZGVzLnB1c2gocHJldk5vZGUpO1xuICB9XG4gIGZvciAobGV0IGogPSAwOyBqIDw9IGNoaWxkTGVuZ3RoOyBqKyspIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuaHVtYW5bZGF0YS1jb29yZGluYXRlPVwiJHtpbml0Q29vcmRpbmF0ZX1cIl1gXG4gICAgKTtcbiAgICBpZiAoaW5pdENvb3JkaW5hdGUgPj0gOTkpIGJyZWFrO1xuICAgIGlmIChhcnJOb2Rlcy5pbmNsdWRlcyhudWxsKSkgYXJyTm9kZXMuc2hpZnQoKTtcbiAgICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcbiAgICBhcnJOb2Rlcy5wdXNoKG5vZGUpO1xuICAgIGluaXRDb29yZGluYXRlICs9IGZhY3RvcjtcbiAgfVxuICByZXR1cm4gYXJyTm9kZXMuZXZlcnkoKG5vZGUpID0+ICFub2RlLmNsYXNzTmFtZS5pbmNsdWRlcyhcInNoaXBcIikpO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbihjbGFzc1NoaXAsIGFtb3VudE5vZGVzLCBjb29yZGluYXRlKSB7XG4gIGNvbnN0IGZhY3RvciA9IGNsYXNzU2hpcC5pbmNsdWRlcyhcImhvcml6b250YWxcIikgPyAxIDogMTA7XG4gIGNvbnN0IGxhc3ROdW1iZXIgPSBjb29yZGluYXRlLnNsaWNlKDEpO1xuICBsZXQgbnVtYmVyQ29vcmRpbmF0ZSA9IHBhcnNlSW50KGNvb3JkaW5hdGUpO1xuICBjb25zdCBhcnJDb29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnROb2RlczsgaSsrKSB7XG4gICAgaWYgKGxhc3ROdW1iZXIgPT09IFwiOVwiICYmIGZhY3RvciA9PT0gMTApIHtcbiAgICAgIGFyckNvb3Jkcy5wdXNoKG51bWJlckNvb3JkaW5hdGUpO1xuICAgICAgbnVtYmVyQ29vcmRpbmF0ZSArPSBmYWN0b3I7XG4gICAgfSBlbHNlIGlmIChudW1iZXJDb29yZGluYXRlIDw9IDk5ICYmIGFtb3VudE5vZGVzIDw9IDEwIC0gbGFzdE51bWJlcikge1xuICAgICAgYXJyQ29vcmRzLnB1c2gobnVtYmVyQ29vcmRpbmF0ZSk7XG4gICAgICBudW1iZXJDb29yZGluYXRlICs9IGZhY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyQ29vcmRzLmxlbmd0aCA9PT0gYW1vdW50Tm9kZXM7XG59XG5leHBvcnQgeyBkcmFnU2hpcHMgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkLmpzXCI7XG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IGRyYWdTaGlwcyB9IGZyb20gXCIuL2RyYWcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihcImh1bWFuXCIsIDApO1xuICBjb25zdCBwbGF5ZXJNYWNoaW5lID0gUGxheWVyKFwibWFjaGluZVwiLCAxKTtcbiAgY29uc3QgbmFtZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpO1xuICBjb25zdCBkb21NZXRob2RzID0gZG9tKCk7XG4gIFxuICBjb25zdCBodW1hbkJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIGNvbnN0IG1hY2hpbmVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuICBcbiAgY29uc3QgYm9hcmRPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWFuQm9hcmRcIik7XG4gIGNvbnN0IGJvYXJkVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWNoaW5lQm9hcmRcIik7XG5cbiAgLy8gY3JlYXRlIGJvdGggYm9hcmRzXG4gIGRvbU1ldGhvZHMuY3JlYXRlQm9hcmQoYm9hcmRPbmUsIHBsYXllck9uZS5uYW1lKTtcbiAgZG9tTWV0aG9kcy5jcmVhdGVCb2FyZChib2FyZFR3bywgcGxheWVyTWFjaGluZS5uYW1lKTtcblxuICAvLyBkcmF3IGFuZCBwbGFjZSBjb3JyZWN0bHkgc2hpcHMgb24gdGhlIGdhbWUgYm9hcmQgbWFjaGluZVxuICBwbGF5ZXJNYWNoaW5lLnZlcmlmeUNvb3JkaW5hdGUobWFjaGluZUJvYXJkLCA1LCBcImNhcnJpZXJcIik7XG4gIHBsYXllck1hY2hpbmUudmVyaWZ5Q29vcmRpbmF0ZShtYWNoaW5lQm9hcmQsIDQsIFwiYmF0dGxlc2hpcFwiKTtcbiAgcGxheWVyTWFjaGluZS52ZXJpZnlDb29yZGluYXRlKG1hY2hpbmVCb2FyZCwgMywgXCJkZXN0cm95ZXJcIik7XG4gIHBsYXllck1hY2hpbmUudmVyaWZ5Q29vcmRpbmF0ZShtYWNoaW5lQm9hcmQsIDMsIFwic3VibWFyaW5lXCIpO1xuICBwbGF5ZXJNYWNoaW5lLnZlcmlmeUNvb3JkaW5hdGUobWFjaGluZUJvYXJkLCAyLCBcImJvYXRcIik7XG5cbiAgZnVuY3Rpb24gcGxheUdhbWUoKSB7XG4gICAgY29uc3QgYXR0YWNrQUkgPSAoKSA9PiB7XG4gICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gcGxheWVyTWFjaGluZS5hdHRhY2tBSSgpO1xuICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuaHVtYW5bZGF0YS1jb29yZGluYXRlPVwiJHtyYW5kb21Db29yZGluYXRlfVwiXWBcbiAgICAgICk7XG4gICAgICBjb25zdCBhdHRhY2tIdW1hbiA9IGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21Db29yZGluYXRlKTtcbiAgICAgIGRvbU1ldGhvZHMuc3RhdGVBdHRhY2soZ3JpZCwgYXR0YWNrSHVtYW4sIGh1bWFuQm9hcmQsIHBsYXllck1hY2hpbmUpO1xuICAgICAgZG9tTWV0aG9kcy5zaG93VHVybihuYW1lKTtcbiAgICB9O1xuXG4gICAgYm9hcmRUd28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoXCIuZ3JpZFwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29vcmRpbmF0ZSk7XG4gICAgICBjb25zdCBhdHRhY2sgPSBtYWNoaW5lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICAgIFxuICAgICAgY29uc3Qgc3RhdGUgPSBkb21NZXRob2RzLnN0YXRlQXR0YWNrKGUudGFyZ2V0LCBhdHRhY2ssIG1hY2hpbmVCb2FyZCwgcGxheWVyT25lKTtcbiAgICAgIFxuICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGlmICghc3RhdGUpe1xuICAgICAgICBkb21NZXRob2RzLnNob3dUdXJuKG5hbWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlICE9PSBmYWxzZSl7XG4gICAgICAgIGRvbU1ldGhvZHMuc2hvd1R1cm4ocGxheWVyTWFjaGluZS5uYW1lKTtcbiAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGF0dGFja0FJKCk7XG4gICAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0sIDEyMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZHJhZ1NoaXBzKCk7XG4gIGRvbU1ldGhvZHMucm90YXRlRGlyZWN0aW9uKCk7XG5cbiAgKCgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0X19nYW1lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FycmllciA9IGRvbU1ldGhvZHMuZ2V0Q29vcmRpbmF0ZXMoXCJjYXJyaWVyXCIpO1xuICAgICAgY29uc3QgYmF0dGxlZmllbGQgPSBkb21NZXRob2RzLmdldENvb3JkaW5hdGVzKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgIGNvbnN0IGRlc3Ryb3llciA9IGRvbU1ldGhvZHMuZ2V0Q29vcmRpbmF0ZXMoXCJkZXN0cm95ZXJcIik7XG4gICAgICBjb25zdCBzdWJtYXJpbmUgPSBkb21NZXRob2RzLmdldENvb3JkaW5hdGVzKFwic3VibWFyaW5lXCIpO1xuICAgICAgY29uc3QgYm9hdCA9IGRvbU1ldGhvZHMuZ2V0Q29vcmRpbmF0ZXMoXCJib2F0XCIpO1xuICAgIFxuICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY2FycmllciwgXCJjYXJyaWVyXCIpO1xuICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoYmF0dGxlZmllbGQsIFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgIGh1bWFuQm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgXCJkZXN0cm95ZXJcIik7XG4gICAgICBodW1hbkJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIFwic3VibWFyaW5lXCIpO1xuICAgICAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoYm9hdCwgXCJib2F0XCIpO1xuXG4gICAgICBpZiAoZG9tTWV0aG9kcy5lbmFibGVTdGFydEJ0bigpID09PSB0cnVlKSB7XG4gICAgICAgIHBsYXlHYW1lKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2xvd1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtY2xvc2VcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc19fZ2xvd3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb21NZXRob2RzLnNob3dUdXJuKG5hbWUpO1xuICAgICAgICBib2FyZFR3by5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWF0dGFja1wiKTtcbiAgICAgICAgZG9tTWV0aG9kcy5zaG93Qm9hcmQoYm9hcmRUd28pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcblxuZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBhbGxTaGlwcyA9IFtdO1xuICBjb25zdCBhdHRhY2tTZW5kZWQgPSBbXTtcbiAgY29uc3QgY29vcmRpbmF0ZVNoaXBzID0gW107XG4gIC8vIGNyZWF0ZSBnYW1lQm9hcmQgb24gdGhlIG1lbW9yeVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgYm9hcmQucHVzaChudWxsKTtcbiAgfVxuXG4gIGNvbnN0IHZlcmlmeVNwYWNlID0gKGNvb3JkcykgPT5cbiAgICBjb29yZHMuZXZlcnkoXG4gICAgICAoYykgPT5cbiAgICAgICAgdHlwZW9mIGJvYXJkW2MgLSAxXSAhPT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICB0eXBlb2YgYm9hcmRbY10gIT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgdHlwZW9mIGJvYXJkW2MgKyAxXSAhPT0gXCJzdHJpbmdcIlxuICAgICk7XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoY29vcmRpbmF0ZXMubGVuZ3RoLCBuYW1lKTtcbiAgICBpZiAodmVyaWZ5U3BhY2UoY29vcmRpbmF0ZXMpKSB7XG4gICAgICBhbGxTaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgZm9yIChjb25zdCBjb29yZCBvZiBjb29yZGluYXRlcykge1xuICAgICAgICBib2FyZFtjb29yZF0gPSBuZXdTaGlwLm5hbWU7XG4gICAgICAgIGNvb3JkaW5hdGVTaGlwcy5wdXNoKGNvb3JkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiYWxyZWFkeSBwbGFjZSBoZXJlXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZlcmlmeVNoaXAgPSAobmFtZSkgPT4gYWxsU2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IG5hbWUpO1xuXG4gIGNvbnN0IHZlcmlmeUF0dGFjayA9IChjb29yZCkgPT4gYXR0YWNrU2VuZGVkLmluY2x1ZGVzKHBhcnNlSW50KGNvb3JkKSk7XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2tDb29yZGluYXRlcykgPT4ge1xuICAgIGlmIChib2FyZFthdHRhY2tDb29yZGluYXRlc10gIT09IG51bGwgJiYgIXZlcmlmeUF0dGFjayhhdHRhY2tDb29yZGluYXRlcykpIHtcbiAgICAgIGNvbnN0IG5hbWVTaGlwID0gYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZXNdO1xuICAgICAgY29uc3Qgc2hpcEF0dGFja2VkID0gdmVyaWZ5U2hpcChuYW1lU2hpcCk7XG4gICAgICBhdHRhY2tTZW5kZWQucHVzaChhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgICBzaGlwQXR0YWNrZWRbMF0uaGl0KCk7XG4gICAgICBib2FyZFthdHRhY2tDb29yZGluYXRlc10gPSBcInN1bmtcIjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChib2FyZFthdHRhY2tDb29yZGluYXRlc10gPT09IG51bGwpIHtcbiAgICAgIGJvYXJkW2F0dGFja0Nvb3JkaW5hdGVzXSA9IFwiZmFpbFwiO1xuICAgICAgYXR0YWNrU2VuZGVkLnB1c2goYXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gXCJhbHJlYWR5IGF0dGFja2VkXCI7XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gYWxsU2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgY29vcmRpbmF0ZVNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICB2ZXJpZnlTcGFjZSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gIH07XG59XG5cbmV4cG9ydCB7IGdhbWVCb2FyZCB9O1xuIiwiaW1wb3J0IGdhbWVMb29wIGZyb20gXCIuL2dhbWUuanNcIjtcbmNvbnN0IGluaXRHYW1lID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudGVyX19nYW1lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgKGUpID0+IHtcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfX25hbWVcIik7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgIGlmICghaW5wdXROYW1lLnZhbHVlKXsgIFxuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZW1wdHlfX25hbWVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImVtcHR5X19uYW1lXCIpLCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydF9fd2luZG93XCIpLmNsYXNzTGlzdC5hZGQoXCJpcy1jbG9zZVwiKTtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIGlucHV0TmFtZS52YWx1ZSk7XG4gICAgICBnYW1lTG9vcCgpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZXhwb3J0IHtpbml0R2FtZX07IiwiZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgY29uc3QgcmFuZG9tTnVtYmVyID0gKG1heCwgbWluKSA9PlxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gIFxuICBjb25zdCBhdHRhY2tTZW5kZWQgPSBbXTtcblxuICBjb25zdCBhdHRhY2tBSSA9ICgpID0+IHtcbiAgICBsZXQgYXR0ZW1wdCA9IHRydWU7XG4gICAgd2hpbGUgKGF0dGVtcHQpIHtcbiAgICAgIGNvbnN0IGF0dGFjayA9IHJhbmRvbU51bWJlcig5OSwgMCk7XG4gICAgICBpZiAoIWF0dGFja1NlbmRlZC5pbmNsdWRlcyhhdHRhY2spKSB7XG4gICAgICAgIGF0dGFja1NlbmRlZC5wdXNoKGF0dGFjayk7XG4gICAgICAgIGF0dGVtcHQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGF0dGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZXMgPSAoc2hpcExlbmd0aCkgPT4ge1xuICAgIGNvbnN0IGF4aXMgPSByYW5kb21OdW1iZXIoMSwgMCkgPT09IDEgPyBcInhcIiA6IFwieVwiO1xuICAgIGNvbnN0IGFyckNvcmRzID0gW107XG5cbiAgICBsZXQgaW5pdGlhbENvb3JkID0gcmFuZG9tTnVtYmVyKDk5LCAwKTtcbiAgICBsZXQgZmFjdG9yO1xuXG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICBmYWN0b3IgPSAxO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGFzdE51bWJlciA9XG4gICAgICAgICAgaW5pdGlhbENvb3JkID49IDEwXG4gICAgICAgICAgICA/IGluaXRpYWxDb29yZC50b1N0cmluZygpLnNsaWNlKDEpXG4gICAgICAgICAgICA6IGluaXRpYWxDb29yZC50b1N0cmluZygpLnNsaWNlKDAsIDEpO1xuXG4gICAgICAgIGlmIChsYXN0TnVtYmVyID09PSBcIjBcIiAmJiBpID09PSAwKSB7XG4gICAgICAgICAgYXJyQ29yZHMucHVzaChpbml0aWFsQ29vcmQpO1xuICAgICAgICAgIGluaXRpYWxDb29yZCArPSBmYWN0b3I7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIDkgLSBsYXN0TnVtYmVyIDw9IDkgJiZcbiAgICAgICAgICBpbml0aWFsQ29vcmQgLSAxICE9PSA5ICYmXG4gICAgICAgICAgKGluaXRpYWxDb29yZCAtIDEpLnRvU3RyaW5nKCkuc2xpY2UoMSkgIT09IFwiOVwiXG4gICAgICAgICkge1xuICAgICAgICAgIGFyckNvcmRzLnB1c2goaW5pdGlhbENvb3JkKTtcbiAgICAgICAgICBpbml0aWFsQ29vcmQgKz0gZmFjdG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgIGZhY3RvciA9IDEwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGluaXRpYWxDb29yZCA8PSA5OSkge1xuICAgICAgICAgIGFyckNvcmRzLnB1c2goaW5pdGlhbENvb3JkKTtcbiAgICAgICAgICBpbml0aWFsQ29vcmQgKz0gZmFjdG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnJDb3JkcztcbiAgfTtcblxuICBjb25zdCB2ZXJpZnlDb29yZGluYXRlID0gKGJvYXJkLCBsZW5ndGgsIG5hbWUpID0+IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgcmFuZG9tQXJyYXkgPSByYW5kb21Db29yZGluYXRlcyhsZW5ndGgpO1xuICAgICAgaWYgKHJhbmRvbUFycmF5ID09PSBmYWxzZSkgY29udGludWU7XG4gICAgICBpZiAoYm9hcmQucGxhY2VTaGlwKHJhbmRvbUFycmF5LCBuYW1lKSAhPT0gXCJhbHJlYWR5IHBsYWNlIGhlcmVcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgYXR0YWNrQUksIHZlcmlmeUNvb3JkaW5hdGUgfTtcbn1cblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJmdW5jdGlvbiBTaGlwIChsZW5ndGgsIG5hbWUpIHtcbiAgbGV0IGhpdHMgPSAwO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA+IGhpdHMpIHtcbiAgICAgIHJldHVybiArK2hpdHM7XG4gICAgfSBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07IFxuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb3VudE9mSGl0cyA9ICgpID0+IGhpdHM7XG5cbiAgcmV0dXJuIHsgbmFtZSwgbGVuZ3RoLCBoaXQgLCBpc1N1bmssIGNvdW50T2ZIaXRzIH07XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gU2hpcDsgXG5leHBvcnQgeyBTaGlwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL21vZHVsZXMvaW5pdEdhbWUuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcbiAgaW5pdEdhbWUoKTtcbn07XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRBcHApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==