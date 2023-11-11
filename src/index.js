
import { initGame } from "./modules/initGame.js";
import "./styles/style.scss";

const initApp = () => {
  initGame();
};


window.addEventListener("DOMContentLoaded", initApp);