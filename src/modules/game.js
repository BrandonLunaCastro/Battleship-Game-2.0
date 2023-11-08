import { Player } from "./player.js";
import { gameBoard } from "./gameBoard.js";
import { dom } from "./dom.js";
import { dragShips } from "./drag.js";

export default function gameLoop() {
  const playerOne = Player("human", 0);
  const playerMachine = Player("machine", 1);

  const humanBoard = gameBoard();
  const machineBoard = gameBoard();

  const domMethods = dom();

/*   humanBoard.placeShip([20, 21, 22, 23, 24], "carrier");
  humanBoard.placeShip([40, 50, 60, 70], "battleship");
  humanBoard.placeShip([65, 66, 67], "destroyer");
  humanBoard.placeShip([4, 5, 6], "submarine");
  humanBoard.placeShip([85, 95], "boat"); */

  machineBoard.placeShip([20, 21, 22, 23, 24], "carrier");
  machineBoard.placeShip([40, 50, 60, 70], "battleship");
  machineBoard.placeShip([65, 66, 67], "destroyer");
  machineBoard.placeShip([4, 5, 6], "submarine");
  machineBoard.placeShip([80, 90], "boat");

  const boardOne = document.querySelector(".humanBoard");
  const boardTwo = document.querySelector(".machineBoard");
  // create both boards
  domMethods.createBoard(boardOne, playerOne.name);
  domMethods.createBoard(boardTwo, playerMachine.name);

  const coordinateShipsHuman = humanBoard.coordinateShips;
  const coordinateShipsMachine = machineBoard.coordinateShips;
  // draw correctly ships on the game board
  domMethods.drawShips(coordinateShipsHuman, playerOne);
  domMethods.drawShips(coordinateShipsMachine, playerMachine);
  domMethods.showTurn(playerOne.name);

  dragShips();


  function playGame() {
    const attackAI = () => {
      const randomCoordinate = playerMachine.attackAI();
      const grid = document.querySelector(
        `.human[data-coordinate="${randomCoordinate}"]`
      );
      const attackHuman = humanBoard.receiveAttack(randomCoordinate);
      domMethods.stateAttack(grid, attackHuman, humanBoard, playerMachine);
      domMethods.showTurn(playerOne.name);
    };

    boardTwo.addEventListener("click", (e) => {
      if (!e.target.matches(".grid")) return false;
      const coordinate = parseInt(e.target.dataset.coordinate);
      const attack = machineBoard.receiveAttack(coordinate);

      domMethods.stateAttack(e.target, attack, machineBoard, playerOne);
      domMethods.showTurn(playerMachine.name);

      const currentTarget = e.currentTarget;
      currentTarget.classList.add("disabled");
      setTimeout(() => {
        attackAI();
        currentTarget.classList.remove("disabled");
      }, 1000);
    });
  }
}
