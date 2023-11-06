import {Player} from "./player.js";
import {gameBoard} from "./gameBoard.js";
import { dom } from "./dom.js";

export default function gameLoop() {
  const playerOne = Player("human", 0);
  const playerMachine = Player("machine", 1); 

  const humanBoard = gameBoard();
  const machineBoard = gameBoard();

  const domMethods = dom();

  let turnOfPlayer = playerMachine;

  humanBoard.placeShip([20,21,22,23,24], "carrier");
  humanBoard.placeShip([40,50,60,70], "battleship");
  humanBoard.placeShip([65,66,67], "destroyer");
  humanBoard.placeShip([4,5,6], "submarine");
  humanBoard.placeShip([80,90], "boat");

  machineBoard.placeShip([20,21,22,23,24], "carrier");
  machineBoard.placeShip([40,50,60,70], "battleship");
  machineBoard.placeShip([65,66,67], "destroyer");
  machineBoard.placeShip([4,5,6], "submarine");
  machineBoard.placeShip([80,90], "boat");
  
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

  domMethods.attackShip(".machineBoard", machineBoard, playerOne.name);
  
};
