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

export { Player };
