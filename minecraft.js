const gameBoard = document.querySelector(".game-board");
const axeButton = document.querySelector(".axeButton");
const pickaxeButton = document.querySelector(".pickaxeButton");
const shovelButton = document.querySelector(".shovelButton");
const swordButton = document.querySelector(".swordButton");
const toolBox = document.querySelector(".toolBox");
const userchoice1 = document.querySelector(".userchoice1 p");
const userchoice2 = document.querySelector(".userchoice2 p");
const userchoice3 = document.querySelector(".userchoice3 p");
const userchoice4 = document.querySelector(".userchoice4 p");
const userchoice5 = document.querySelector(".userchoice5 p");
const userchoice6 = document.querySelector(".userchoice6 p");
const userchoice7 = document.querySelector(".userchoice7 p");
const userchoice1Button = document.querySelector(".userchoice1");
const userchoice2Button = document.querySelector(".userchoice2");
const userchoice3Button = document.querySelector(".userchoice3");
const userchoice4Button = document.querySelector(".userchoice4");
const userchoice5Button = document.querySelector(".userchoice5");
const userchoice6Button = document.querySelector(".userchoice6");
const userchoice7Button = document.querySelector(".userchoice7");
const reload = document.querySelector(".reload");

const gameBoardMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [7, 7, 7, 7, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [7, 7, 7, 7, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
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
  cloud: { className: "cloud", id: 5 },
  grass: { className: "grass", id: 6 },
  redBlock: { className: "redBlock", id: 7 },
};

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
        tile.classList.add(materialObj.cloud.className);
        break;
      case 6:
        tile.classList.add(materialObj.grass.className);
        break;
      case 7:
        tile.classList.add(materialObj.redBlock.className);
        break;
    }
    gameBoard.appendChild(tile);
  });
});

const objTools = {
  axe: { classlist: ["tree", "leaves"] },
  pickaxe: { classlist: ["rock", "redBlock"] },
  shovel: { classlist: ["ground", "grass"] },
  sword: { classlist: ["tree", "leaves", "rock", "redBlock"] },
};

axeButton.classList.add(objTools.axe.classlist);
pickaxeButton.classList.add(objTools.pickaxe.classlist);
shovelButton.classList.add(objTools.shovel.classlist);
swordButton.classList.add(objTools.sword.classlist);

let myTool = "";
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
userchoice1.addEventListener("click", () => {
  userchoice1Button.style.borderColor = "blue";
  userchoice2Button.style.borderColor = "";
  userchoice3Button.style.borderColor = "";
  userchoice4Button.style.borderColor = "";
  userchoice5Button.style.borderColor = "";
  userchoice6Button.style.borderColor = "";
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  swordButton.style.background = "";
  myTool = "userchoice1";
});
userchoice2.addEventListener("click", () => {
  userchoice1Button.style.borderColor = "";
  userchoice2Button.style.borderColor = "blue";
  userchoice3Button.style.borderColor = "";
  userchoice4Button.style.borderColor = "";
  userchoice5Button.style.borderColor = "";
  userchoice6Button.style.borderColor = "";
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  swordButton.style.background = "";
  myTool = "userchoice2";
});
userchoice3.addEventListener("click", () => {
  userchoice1Button.style.borderColor = "";
  userchoice2Button.style.borderColor = "";
  userchoice3Button.style.borderColor = "blue";
  userchoice4Button.style.borderColor = "";
  userchoice5Button.style.borderColor = "";
  userchoice6Button.style.borderColor = "";
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  swordButton.style.background = "";
  myTool = "userchoice3";
});
userchoice4.addEventListener("click", () => {
  userchoice1Button.style.borderColor = "";
  userchoice2Button.style.borderColor = "";
  userchoice3Button.style.borderColor = "";
  userchoice4Button.style.borderColor = "blue";
  userchoice5Button.style.borderColor = "";
  userchoice6Button.style.borderColor = "";
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  swordButton.style.background = "";
  myTool = "userchoice4";
});
userchoice5.addEventListener("click", () => {
  userchoice1Button.style.borderColor = "";
  userchoice2Button.style.borderColor = "";
  userchoice3Button.style.borderColor = "";
  userchoice4Button.style.borderColor = "";
  userchoice5Button.style.borderColor = "blue";
  userchoice6Button.style.borderColor = "";
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  swordButton.style.background = "";
  myTool = "userchoice5";
});
userchoice6.addEventListener("click", () => {
  userchoice1Button.style.borderColor = "";
  userchoice2Button.style.borderColor = "";
  userchoice3Button.style.borderColor = "";
  userchoice4Button.style.borderColor = "";
  userchoice5Button.style.borderColor = "";
  userchoice6Button.style.borderColor = "blue";
  shovelButton.style.background = "";
  pickaxeButton.style.background = "";
  axeButton.style.background = "";
  swordButton.style.background = "";
  myTool = "userchoice6";
});

function axeButtonturnBlue() {
  axeButton.style.background = "blue";
}
function pickaxeButtonturnBlue() {
  pickaxeButton.style.background = "blue";
}
function shovelButtonturnBlue() {
  shovelButton.style.background = "blue";
}
function swordlButtonturnBlue() {
  swordButton.style.background = "blue";
}

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

gameBoard.addEventListener("click", (e) => {
  switch (myTool) {
    case "axe":
      if (
        axeButton.className.includes(e.target.className) &&
        e.target.className === "leaves"
      ) {
        userchoice1.innerText = +userchoice1.innerText + 1;
        e.target.classList = "sky";
      } else if (
        axeButton.className.includes(e.target.className) &&
        e.target.className === "tree"
      ) {
        userchoice2.innerText = +userchoice2.innerText + 1;
        e.target.classList = "sky";
      } else {
        axeButton.style.background = "red";
        setTimeout(axeButtonturnBlue, 500);
      }
      break;
    case "pickaxe":
      if (
        pickaxeButton.className.includes(e.target.className) &&
        e.target.className === "rock"
      ) {
        userchoice3.innerText = +userchoice3.innerText + 1;
        e.target.classList = "sky";
      } else if (
        pickaxeButton.className.includes(e.target.className) &&
        e.target.className === "redBlock"
      ) {
        userchoice6.innerText = +userchoice6.innerText + 1;
        e.target.classList = "sky";
      } else {
        pickaxeButton.style.background = "red";
        setTimeout(pickaxeButtonturnBlue, 500);
      }
      break;
    case "shovel":
      if (
        shovelButton.className.includes(e.target.className) &&
        e.target.className === "ground"
      ) {
        e.target.classList = "";
        userchoice4.innerText = +userchoice4.innerText + 1;
        e.target.classList = pickPokemon();
        userchoice7.innerText = "";
      } else if (
        shovelButton.className.includes(e.target.className) &&
        e.target.className === "grass"
      ) {
        e.target.classList = "";
        userchoice5.innerText = +userchoice5.innerText + 1;
        e.target.classList = pickPokemon();
        userchoice7.innerText = "";
      } else {
        shovelButton.style.background = "red";
        setTimeout(shovelButtonturnBlue, 500);
      }
      break;
    case "sword":
      if (
        swordButton.className.includes(e.target.className) &&
        e.target.className === "leaves"
      ) {
        userchoice1.innerText = +userchoice1.innerText + 1;
        e.target.classList = "sky";
      } else if (
        swordButton.className.includes(e.target.className) &&
        e.target.className === "tree"
      ) {
        userchoice2.innerText = +userchoice2.innerText + 1;
        e.target.classList = "sky";
      } else if (
        swordButton.className.includes(e.target.className) &&
        e.target.className === "rock"
      ) {
        userchoice3.innerText = +userchoice3.innerText + 1;
        e.target.classList = "sky";
      } else if (
        swordButton.className.includes(e.target.className) &&
        e.target.className === "redBlock"
      ) {
        userchoice6.innerText = +userchoice6.innerText + 1;
        e.target.classList = "sky";
      } else {
        swordButton.style.background = "red";
        setTimeout(swordlButtonturnBlue, 500);
      }
      break;
    case "userchoice1":
      if (userchoice1.innerText > 0) {
        userchoice1.innerText = +userchoice1.innerText - 1;
        e.target.className = "leaves";
      }
      break;
    case "userchoice2":
      if (userchoice2.innerText > 0) {
        userchoice2.innerText = +userchoice2.innerText - 1;
        e.target.className = "tree";
      }
      break;
    case "userchoice3":
      if (userchoice3.innerText > 0) {
        userchoice3.innerText = +userchoice3.innerText - 1;
      }
      break;
    case "userchoice4":
      if (userchoice4.innerText > 0) {
        userchoice4.innerText = +userchoice4.innerText - 1;
        e.target.className = "rock";
      }
      break;
    case "userchoice5":
      if (userchoice5.innerText > 0) {
        userchoice5.innerText = +userchoice5.innerText - 1;
        e.target.className = "ground";
      }
      break;
    case "userchoice6":
      if (userchoice6.innerText > 0) {
        userchoice6.innerText = +userchoice6.innerText - 1;
        e.target.className = "grass";
      }
      break;
  }
});

// userchoice7Button.classList = pickPokemon();
// console.log(userchoice7Button.classList);

reload.addEventListener("click", () => {
  location.reload();
});
