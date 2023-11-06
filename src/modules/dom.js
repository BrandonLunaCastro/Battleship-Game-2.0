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
    for(const coord of arrCoordinates){
      const referenceDom = document.querySelector(`.${player.name}[data-coordinate="${coord}"]`);
      referenceDom.classList.add("ship");
    }
  };

  const verifyIsSunk = (board, player) => {
    if (board.allSunk()) {
      console.log(`the winner is ${player}`);
    };
  };

  const attackAI = (e) => {

  }

  const stateOfAttack = () => {
    
  }

  const attackShip = (reference, board, player) => {
    document.querySelector(reference).addEventListener("click", e => {
      if (!e.target.matches(".grid"))return false;
      
      console.log( e.target.dataset.coordinate);
      const coordinate = parseInt(e.target.dataset.coordinate);
      const stateAttack = board.receiveAttack(coordinate);

      if (stateAttack === "already attacked") console.log("try again, this coordinate already been attacked");
      if (stateAttack) {
        e.target.classList.add("hit");
        verifyIsSunk(board, player);
      } else {
        e.target.classList.add("fail");
        verifyIsSunk(board, player);
      };

    });
  };

  const turnOf = (player) => {
    const turnOfPlayer = player.id === 1 ? "human" : "machine";
    document.querySelector(".turn").textContent =`Turn of : ${turnOfPlayer}`;
    if (turnOfPlayer === "human")
  };

  return {createBoard, drawShips, attackShip, turnOf};

}

export { dom };
