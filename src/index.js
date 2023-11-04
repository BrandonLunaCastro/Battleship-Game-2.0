import gameLoop from "./modules/game.js";
import "./styles/style.scss";

const initApp = () => {
  gameLoop();
};


window.addEventListener("DOMContentLoaded", initApp);