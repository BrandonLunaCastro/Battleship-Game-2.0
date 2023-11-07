function dragShips(){ 
  const ships = document.querySelectorAll(".draggable");
  const board = document.querySelector(".humanBoard");

  ships.forEach((el) => {
    el.addEventListener("dragend", (e) => {
    });
  });


  document.querySelector(".ships").addEventListener("dragstart", (e) => {
    const data = e.dataTransfer.setData("class", e.target.classList);
  });

  board.addEventListener("dragover", e => {
    e.preventDefault();
    e.target.classList.add("hover");
  });

  board.addEventListener("dragleave", (e) => {
    e.target.classList.remove("hover");
  });

  board.addEventListener("drop", (e) => {
    const gridBoard = e.target;
    const classShip = e.dataTransfer.getData("class");
    console.log(classShip);
    
    console.log("drop");

  });

}

export { dragShips };