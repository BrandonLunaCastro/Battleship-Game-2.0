const Ship = require("./ship");

function gameBoard() {
  const board = [];
  const allShips = [];
  const attackFailed = [];

  // create gameBoard on the memory
  for (let i = 0; i < 100; i++) {
    board.push(null);
  }

  const verifySpace = (coords) => coords.every((c) => board[c] === null);

  const placeShip = (coordinates, name) => {
    const newShip = Ship(coordinates.length, name);
    if (verifySpace(coordinates)) {
      allShips.push(newShip);
      for (const coord of coordinates) {
        board[coord] = newShip.name;
      }
      return board;
    } else {
      return "already ship here";
    }
  };

  const verifyShip = (name) => allShips.filter((ship) => ship.name === name);

  const receiveAttack = (attackCoordinates) => {
    if (board[attackCoordinates] !== null) {
      const nameShip = board[attackCoordinates];
      const shipAttacked = verifyShip(nameShip);
      shipAttacked[0].hit();
      return true;
    }

    if (board[attackCoordinates] === null) {
      board[attackCoordinates] = "fail";
      attackFailed.push(attackCoordinates);
      return false;
    }
  };

  const allSunk = () => {
    return allShips.every((ship) => ship.isSunk());        
  }; 

  return { board, placeShip, verifySpace, receiveAttack, allSunk };
}

module.exports = gameBoard;
