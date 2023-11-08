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
    if ( classShip.includes("horizontal") && position(classShip, amountNodes, coordinate) && verifySpace(amountNodes, gridBoard, 1) ) {
      const arrNodes = [];
      for (let i = 0; i < amountNodes; i++) {
        childNodes[i].setAttribute("data-coordinate", coordinate);
        const node = document.querySelector(`.grid.human[data-coordinate="${coordinate}"]`);
        arrNodes.push(node);
        coordinate++;
      }
      Array.from(childNodes).map((node, i) => arrNodes[i].replaceWith(node));
    } 
    if (classShip.includes("vertical") && position( classShip, amountNodes, coordinate) && verifySpace(amountNodes, gridBoard, 10)) {
      const boardNodes = [];
      let parseCoord = parseInt(coordinate);
      for(let i = 0; i < amountNodes; i++){
        const node = document.querySelector(`.grid.human[data-coordinate="${parseCoord}"]`);
        childNodes[i].setAttribute("data-coordinate", parseCoord);
        boardNodes.push(node);
        console.log(boardNodes);
        parseCoord += 10;
      }
      console.log(boardNodes);
      Array.from(childNodes).map((node, i) => boardNodes[i].replaceWith(node));
    };
    
    const domMethods = dom();
    domMethods.renderBoard();
  });
}

// The factor depends is horizontal or vertical orientation  
function verifySpace (childLength, gridBoard, factor) {
  const lastCoordinate = gridBoard.dataset.coordinate.slice(1);
  let initCoordinate = parseInt(gridBoard.dataset.coordinate);
  const arrNodes = [];
  if (lastCoordinate > 0 ) {
    const prevNode = document.querySelector(`.human[data-coordinate="${initCoordinate - factor}"]`);
    arrNodes.push(prevNode);
  }
  for (let j = 0; j <= childLength; j++) { 
    const node = document.querySelector(`.human[data-coordinate="${initCoordinate}"]`);
    if(initCoordinate >= 99) break;
    if(arrNodes.includes(null))arrNodes.shift();
    if(!node)return false;
    arrNodes.push(node);
    initCoordinate += factor;
  } 
  return arrNodes.every((node) => !node.className.includes("ship"));
}

function position( classShip, amountNodes, coordinate) {
  const factor = classShip.includes("horizontal") ? 1 : 10;
  const lastNumber = coordinate.slice(1);
  let numberCoordinate = parseInt(coordinate);
  const arrCoords = [];
  for (let i = 0; i < amountNodes; i++) {
    if (lastNumber === "9" && factor === 10 ) {
      arrCoords.push(numberCoordinate);
      numberCoordinate += factor; 
    } else if (numberCoordinate <= 99 && amountNodes <= (10 - lastNumber)) {
      arrCoords.push(numberCoordinate);
      numberCoordinate += factor; 
    } else {
      return false;
    }
  }
  return arrCoords.length === amountNodes;
}

export { dragShips };
