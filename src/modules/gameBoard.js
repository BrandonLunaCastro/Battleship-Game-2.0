import { Ship } from "./ship.js";

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
    const newShip = Ship(coordinates.length, name);
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

export { gameBoard };
