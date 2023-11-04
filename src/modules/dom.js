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

  return {createBoard, drawShips};
}

export { dom };
