import { dom } from "./dom.js";

function dragShips() {
  const board = document.querySelector(".humanBoard");
  
  document.querySelector(".ships").addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("class", e.target.className);
  });

  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.target.classList.add("hover");
  });

  board.addEventListener("dragleave", (e) => {
    e.target.classList.remove("hover");
  });

  board.addEventListener("drop", (e) => {
    const gridBoard = e.target;
    const classShip = e.dataTransfer.getData("class");
    const ship = document.querySelector(`.${classShip.split(" ")[0]}`);
    const childNodes = ship.childNodes;
    const amountNodes = ship.childNodes.length;
    let coordinate = parseInt(gridBoard.dataset.coordinate);
    e.target.classList.remove("hover");

    console.log(horizontal(classShip, amountNodes, coordinate));
    if (horizontal(classShip, amountNodes, coordinate)) {
      const arrNodes = [];
      for (let i = 0; i < amountNodes; i++) {
        childNodes[i].setAttribute("data-coordinate", coordinate);
        const node = document.querySelector(`.grid.human[data-coordinate="${coordinate}"]`);
        arrNodes.push(node);
        coordinate++;
      }
      Array.from(childNodes).map((node, i) => arrNodes[i].replaceWith(node));
    }

    if (vertical(classShip, amountNodes, coordinate)) {
      const boardNodes = [];
      for(let i = 0; i < amountNodes; i++){
        childNodes[i].setAttribute("data-coordinate", coordinate);
        const node = document.querySelector(`.grid.human[data-coordinate="${coordinate}"]`);
        boardNodes.push(node);
        coordinate += 10;
      }
      Array.from(childNodes).map((node, i) => boardNodes[i].replaceWith(node));
    };
    
    const domMethods = dom();
    domMethods.renderBoard();
  });
}

function horizontal(classShip, amountNodes, coordinate){
  if (!classShip.includes("horizontal")) return false;
  const arrCoords = [];
  for (let i = 0; i < amountNodes; i++){
    if (coordinate <= 99) {
      arrCoords.push(coordinate);
      coordinate++; 
    }
  }
  return arrCoords.length === amountNodes;
}

function vertical(classShip, amountNodes, coordinate) {
  const arrCoords = [];
  if (classShip.includes("vertical")) {
    for (let i = 0; i < amountNodes; i++) {
      if (coordinate <= 99) {
        arrCoords.push(coordinate);
        coordinate += 10;
      } else {
        break;
      }
    }
    return arrCoords.length === amountNodes;
  }
  return false;
}

export { dragShips };
