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

  const verifyIsSunk = (board, player) => {
    if (board.allSunk()) {
      document.querySelector(".modal").classList.remove("is-close");
      document.querySelector(".winner").textContent = `the winner is ${player}`;
      document
        .getElementById("restart")
        .addEventListener("click", (event) => location.reload());
    }
  };

  const stateAttack = (target, attack, board, player) => {
    const counter = document.querySelector(".state__attack");
    const playerAttacked = player.name === "machine" ? "human" : "machine";

    if (attack === "already attacked") {
      counter.textContent = "try again, this coordinate already been attacked";  
      return false;
    }
    if (attack) {
      target.classList.add("hit");
      counter.textContent = `${player.name} hit on the ${playerAttacked} ship`;
      verifyIsSunk(board, player.name);
    } else {
      target.classList.add("fail");
      counter.textContent = "fail on this board coordinate";
      verifyIsSunk(board, player.name);
    }
    setTimeout(() => {
      counter.textContent = "";
    }, 900);
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
        node.classList.toggle("horizontal");
        node.classList.toggle("vertical");
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
  };
}

export { dom };
