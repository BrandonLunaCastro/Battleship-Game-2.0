import {Player} from "./player.js";
import {gameBoard} from "./gameBoard.js";
import { dom } from "./dom.js";

export default function gameLoop() {
  const playerOne = Player("human");
  const machine = Player("machine"); 

  const humanBoard = gameBoard();
  const machineBoard = gameBoard();

  const domMethods = dom();
  
  humanBoard.placeShip([20,21,22,23,24], "carrier");
  humanBoard.placeShip([40,50,60,70], "battleship");
  humanBoard.placeShip([65,66,67], "destroyer");
  humanBoard.placeShip([4,5,6], "battleship");
  humanBoard.placeShip([80,90], "boat");

  machineBoard.placeShip([20,21,22,23,24], "carrier");
  machineBoard.placeShip([40,50,60,70], "battleship");
  machineBoard.placeShip([65,66,67], "destroyer");
  machineBoard.placeShip([4,5,6], "battleship");
  machineBoard.placeShip([80,90], "boat");
  
  const boardOne = document.querySelector(".humanBoard");
  const boardTwo = document.querySelector(".machineBoard");

  domMethods.createBoard(boardOne, "human");
  domMethods.createBoard(boardTwo, "AI");
  
};
