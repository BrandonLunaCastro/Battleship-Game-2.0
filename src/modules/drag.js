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
    let coordinate = gridBoard.dataset.coordinate;
    e.target.classList.remove("hover");

    if ( classShip.includes("horizontal") && position(amountNodes, coordinate, 1) && verifySpace(amountNodes, gridBoard, 1) ) {
      console.log("entra aqui h");
      const arrNodes = [];
      for (let i = 0; i < amountNodes; i++) {
        childNodes[i].setAttribute("data-coordinate", coordinate);
        const node = document.querySelector(`.grid.human[data-coordinate="${coordinate}"]`);
        arrNodes.push(node);
        coordinate++;
      }
      Array.from(childNodes).map((node, i) => arrNodes[i].replaceWith(node));
    }

    console.log(classShip.includes("vertical"));
    console.log(position(amountNodes, coordinate, 10));
    console.log(verifySpace(amountNodes, gridBoard, 10));

    if (classShip.includes("vertical") && position(amountNodes, coordinate, 10) && verifySpace(amountNodes, gridBoard, 10)) {
      console.log("entra aqui v");
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

// The factor depends is horizontal or vertical orientation  
function verifySpace (childLength, gridBoard, factor) {
  console.log(factor);
  let initCoordinate = parseInt(gridBoard.dataset.coordinate);
  const arrNodes = [];
  const prevNode = document.querySelector(`.human[data-coordinate="${initCoordinate - factor}"]`);
  arrNodes.push(prevNode);
  for (let j = 0; j <= childLength; j++) { 
    const node = document.querySelector(`.human[data-coordinate="${initCoordinate}"]`);
    if(initCoordinate === 99) break;
    if(!node)return false;
    arrNodes.push(node);
    initCoordinate += factor;
  } 
  console.log(arrNodes);
  return arrNodes.every((node) => !node.className.includes("ship"));
}

function position( amountNodes, coordinate, factorSum){
  const lastNumber = coordinate.slice(1);
  coordinate = parseInt(coordinate);
  const arrCoords = [];
  for (let i = 0; i < amountNodes; i++){
    console.log(coordinate);
    if (coordinate <= 99 && amountNodes <= (10 - lastNumber)) {
      arrCoords.push(coordinate);
      coordinate += factorSum; 
      console.log(arrCoords);
    } else {
      return false;
    }
  }
  return arrCoords.length === amountNodes;
}

/* function vertical(classShip, amountNodes, coordinate) {
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
} */

export { dragShips };
