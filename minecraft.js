const gameBoard = document.querySelector(".game-board");
const axeButton = document.querySelector(".axeButton");
const pickaxeButton = document.querySelector(".pickaxeButton");
const shovelButton = document.querySelector(".shovelButton");
const chosecElement = document.querySelector(".chosecElement");

const gameBoardMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

const materialObj = {
  tree: { className: "tree", id: 1 },
  leaves: { className: "leaves", id: 2 },
  rock: { className: "rock", id: 3 },
  ground: { className: "ground", id: 4 },
  grass: { className: "grass", id: 5 },
  cloud: { className: "cloud", id: 6 },
  sky: { className: "sky", id: 0 },
};

//create tiles.
gameBoardMatrix.forEach((row, yIndex) => {
  row.forEach((column, xIndex) => {
    const currentPositionId = gameBoardMatrix[yIndex][xIndex];
    const tile = document.createElement("div");
    switch (currentPositionId) {
      case 0:
        tile.classList.add(materialObj.sky.className);
        break;
      case 1:
        tile.classList.add(materialObj.tree.className);
        break;
      case 2:
        tile.classList.add(materialObj.leaves.className);
        break;
      case 3:
        tile.classList.add(materialObj.rock.className);
        break;
      case 4:
        tile.classList.add(materialObj.ground.className);
        break;
      case 5:
        tile.classList.add(materialObj.grass.className);
        break;
      case 6:
        tile.classList.add(materialObj.cloud.className);
        break;
    }
    gameBoard.appendChild(tile);
  });
});

const objTools = {
  axe: { classlist: ["tree", "leaves"] },
  pickaxe: { classlist: ["rock", ""] },
  shovel: { classlist: ["ground", "grass"] },
};

//add classes to tools
axeButton.classList.add(objTools.axe.classlist);
pickaxeButton.classList.add(objTools.pickaxe.classlist);
shovelButton.classList.add(objTools.shovel.classlist);

//fuctions that turns the background of the tool to blue when pressed.
axeButton.addEventListener("click", () => {
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "blue";
  myTool = "axe";
});
pickaxeButton.addEventListener("click", () => {
  shovelButton.style.background = "";
  pickaxeButton.style.background = "blue";
  axeButton.style.background = "";
  myTool = "pickaxe";
});
shovelButton.addEventListener("click", () => {
  shovelButton.style.background = "blue";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  myTool = "shovel";
});

//functions that turn the tool back to blue -  setTimeout function use them inside
function axeButtonturnBlue(tool) {
  axeButton.style.background = "blue";
}
function pickaxeButtonturnBlue(tool) {
  pickaxeButton.style.background = "blue";
}
function shovelButtonturnBlue(tool) {
  shovelButton.style.background = "blue";
}

//click on tile and check if the class name of the tile is the same as one of the
//class list of the tool, if yes than the tile turns to sky, if not, the tool
//background turns red and than blue.
gameBoard.addEventListener("click", (e) => {
  switch (myTool) {
    case "axe":
      if (axeButton.className.includes(e.target.className)) {
        chosecElement.classList = "";
        chosecElement.classList.add(e.target.className);
        e.target.classList = "sky";
      } else {
        axeButton.style.background = "red";
        setTimeout(axeButtonturnBlue, 500);
      }
      break;
    case "pickaxe":
      if (pickaxeButton.className.includes(e.target.className)) {
        chosecElement.classList = "";
        chosecElement.classList.add(e.target.className);
        e.target.classList = "sky";
      } else {
        pickaxeButton.style.background = "red";
        setTimeout(pickaxeButtonturnBlue, 500);
      }
      break;
    case "shovel":
      if (shovelButton.className.includes(e.target.className)) {
        chosecElement.classList = "";
        chosecElement.classList.add(e.target.className);
        e.target.classList = "sky";
      } else {
        shovelButton.style.background = "red";
        setTimeout(shovelButtonturnBlue, 500);
      }
      break;
  }
});
