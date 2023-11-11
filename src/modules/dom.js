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

  const drawShips = ([...arrCoordinates], player) => {
    for (const coord of arrCoordinates) {
      const referenceDom = document.querySelector(
        `.${player.name}[data-coordinate="${coord}"]`
      );
      referenceDom.classList.add("ship");
    }
  };

  const showBoard = (board) => {
    const options = document.querySelector(".options");
    options.classList.add("is-close");
    board.classList.remove("is-close");
  };

  const verifyIsSunk = (board, player) => {
    if (board.allSunk()) {
      document.querySelector(".modal").classList.remove("is-close");
      document.querySelector(".winner").textContent = `The winner is player ${player}`;
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

  function showTurn(player) {
    document.querySelector(".turn").textContent = `Turn of player: ${player}`;
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
    drawShips,
    stateAttack,
    showTurn,
    getCoordinates,
    rotateDirection,
    enableStartBtn,
    showBoard
  };
}

export { dom };
