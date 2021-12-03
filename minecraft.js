const gameBoard = document.querySelector(".game-board");
const axeButton = document.querySelector(".axeButton");
const pickaxeButton = document.querySelector(".pickaxeButton");
const shovelButton = document.querySelector(".shovelButton");

const gameBoardMatrix = [
  //18*18
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
};

// runs on each row
gameBoardMatrix.forEach((row, yIndex) => {
  // runs on each column
  row.forEach((column, xIndex) => {
    // save current position id
    const currentPositionId = gameBoardMatrix[yIndex][xIndex];
    // create a tile
    const tile = document.createElement("div");
    // add style by id
    switch (currentPositionId) {
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
  pickaxe: { classlist: "rock" },
  shovel: { classlist: ["ground", "grass"] },
};

axeButton.classList.add(objTools.axe.classlist);
pickaxeButton.classList.add(objTools.pickaxe.classlist);
shovelButton.classList.add(objTools.shovel.classlist);

let myTool = "";

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

gameBoard.addEventListener("click", (e) => {
  switch (myTool) {
    case "axe":
      if (axeButton.className.includes(e.target.className)) {
        e.target.classList = "";
      }
      break;
    case "pickaxe":
      if (pickaxeButton.className.includes(e.target.className)) {
        e.target.classList = "";
      }
      break;
    case "shovel":
      if (shovelButton.className.includes(e.target.className)) {
        e.target.classList = "";
      }
      break;
  }
});

// // gameBoard.addEventListener("click", (e) => {
// //   if (objTools.axe.className.includes(e.path[0].className)) {
// //     console.log("yeyy");
// //   } else {
// //     console.log("nooo");
// //   }
// // });

// // // const tile1 = document.querySelector("tile");

// // gameBoard.addEventListener("click", (e) => {
// //   e.path[0].classList;
// // });

// // pickaxe.classList.add(objTools.pickaxe.className);
// // console.log(pickaxe.className);

// // // console.log(axe.className);

// // // axe.addEventListener("click",)

// // gameBoard.addEventListener("click", (e) => {
// //   console.dir(e.path[0]);
// //   if (
// //     e.path[0].className.value ===
// //     objTools.pickaxe.)
// //   ) {
// //     console.log("hilaaaa");
// //   }
// // });
