const gameBoard = document.querySelector(".game-board");
const axeButton = document.querySelector(".axeButton");
const pickaxeButton = document.querySelector(".pickaxeButton");
const shovelButton = document.querySelector(".shovelButton");
const swordButton = document.querySelector(".swordButton");
const userchoice1 = document.querySelector(".userchoice1");
const userchoice2 = document.querySelector(".userchoice2");
const userchoice3 = document.querySelector(".userchoice3");
const userchoice4 = document.querySelector(".userchoice4");
const userchoice5 = document.querySelector(".userchoice5");
const userchoice6 = document.querySelector(".userchoice6");
const userchoice7 = document.querySelector(".userchoice7");

const gameBoardMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [8, 8, 8, 8, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [8, 8, 8, 8, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

const materialObj = {
  sky: { className: "sky", id: 0 },
  tree: { className: "tree", id: 1 },
  leaves: { className: "leaves", id: 2 },
  rock: { className: "rock", id: 3 },
  ground: { className: "ground", id: 4 },
  grass: { className: "grass", id: 5 },
  cloud: { className: "cloud", id: 6 },
  grassGround: { className: "grassGround", id: 7 },
  redBlock: { className: "redBlock", id: 8 },
};

const objTools = {
  axe: { classlist: ["tree", "leaves"] },
  pickaxe: { classlist: ["rock", "redBlock"] },
  shovel: { classlist: ["ground", "grass", "grassGround"] },
  sword: { classlist: ["tree", "leaves", "rock", "redBlock"] },
};

const pickPokemonobj = [
  "pokemon-1",
  "pokemon-2",
  "pokemon-3",
  "pokemon-4",
  "pokemon-5",
  "pokemon-6",
  "pokemon-7",
];

pickPokemon = () => {
  let pokemon = pickPokemonobj[Math.floor(Math.random() * 7)];
  return pokemon;
};
console.log(pickPokemon());
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
      case 7:
        tile.classList.add(materialObj.grassGround.className);
        break;
      case 8:
        tile.classList.add(materialObj.redBlock.className);
        break;
    }
    gameBoard.appendChild(tile);
  });
});

//add classes to tools
axeButton.classList.add(objTools.axe.classlist);
pickaxeButton.classList.add(objTools.pickaxe.classlist);
shovelButton.classList.add(objTools.shovel.classlist);
swordButton.classList.add(objTools.sword.classlist);

let myTool = "";
//fuctions that turns the background of the tool to blue when pressed.
axeButton.addEventListener("click", () => {
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "blue";
  swordButton.style.background = "";
  myTool = "axe";
});
pickaxeButton.addEventListener("click", () => {
  shovelButton.style.background = "";
  pickaxeButton.style.background = "blue";
  axeButton.style.background = "";
  swordButton.style.background = "";
  myTool = "pickaxe";
});
shovelButton.addEventListener("click", () => {
  shovelButton.style.background = "blue";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  swordButton.style.background = "";
  myTool = "shovel";
});
swordButton.addEventListener("click", () => {
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  swordButton.style.background = "blue";
  myTool = "sword";
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
function swordlButtonturnBlue(tool) {
  swordButton.style.background = "blue";
}

//click on tile and check if the class name of the tile is the same as one of the
//class list of the tool, if yes than the tile turns to sky, if not, the tool
//background turns red and than blue.
gameBoard.addEventListener("click", (e) => {
  switch (myTool) {
    case "axe":
      if (axeButton.className.includes(e.target.className)) {
        userchoice1.classList.add(e.target.className);
        e.target.classList = "sky";
      } else {
        axeButton.style.background = "red";
        setTimeout(axeButtonturnBlue, 500);
      }
      break;
    case "pickaxe":
      if (pickaxeButton.className.includes(e.target.className)) {
        userchoice2.classList.add(e.target.className);
        e.target.classList = "sky";
      } else {
        pickaxeButton.style.background = "red";
        setTimeout(pickaxeButtonturnBlue, 500);
      }
      break;
    case "shovel":
      if (shovelButton.className.includes(e.target.className)) {
        userchoice3.classList.add(e.target.className);
        e.target.classList = pickPokemon();
        console.log(e.target.classList);
      } else {
        shovelButton.style.background = "red";
        setTimeout(shovelButtonturnBlue, 500);
      }
      break;
      break;
    case "sword":
      if (swordButton.className.includes(e.target.className)) {
        userchoice4.classList.add(e.target.className);
        e.target.classList = "sky";
      } else {
        swordButton.style.background = "red";
        setTimeout(swordlButtonturnBlue, 500);
      }
      break;
  }
});
