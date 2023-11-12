import { Player } from "./player.js";
import { gameBoard } from "./gameBoard.js";
import { dom } from "./dom.js";
import { dragShips } from "./drag.js";

export default function gameLoop() {
  const playerOne = Player("human", 0);
  const playerMachine = Player("machine", 1);
  const name = sessionStorage.getItem("name");
  const domMethods = dom();
  
  const humanBoard = gameBoard();
  const machineBoard = gameBoard();
  
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
      domMethods.showTurn(playerMachine.name);
    
      const currentTarget = e.currentTarget;
      console.log(humanBoard.board);
      if (state !== false){
        currentTarget.classList.add("disabled");
        setTimeout(() => {
          attackAI();
          currentTarget.classList.remove("disabled");
        }, 1200);
      }
    });
  }

  dragShips();
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
        domMethods.showTurn(name);
        boardTwo.classList.add("cursor-attack");
        domMethods.showBoard(boardTwo);
      }
    });
  })();
}
