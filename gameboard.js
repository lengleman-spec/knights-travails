// gameboard.js
import { knightsTravails } from "./search-algo.js";

const gameboard = () => {
  const defaultStartLocation = [0, 0];
  const chessTable = document.createElement("table");
  chessTable.classList.add("center");

  // Create 8x8 board
  for (let i = 0; i < 8; i++) {
    const tableRow = document.createElement("tr");
    const rowCoord = Math.abs(i - 7);

    for (let j = 0; j < 8; j++) {
      const cell = document.createElement("td");
      cell.dataset.coordArray = `${rowCoord},${j}`;
      cell.classList.add("cell");
      cell.classList.add((i + j) % 2 === 0 ? "whitecell" : "blackcell");
      tableRow.appendChild(cell);

      // Place knight at default start location
      if (
        rowCoord === defaultStartLocation[0] &&
        j === defaultStartLocation[1]
      ) {
        const knightImg = document.createElement("img");
        knightImg.src =
          "https://thumbs.dreamstime.com/b/white-chess-knight-piece-background-icon-203800607.jpg";
        cell.appendChild(knightImg);
      }
    }
    chessTable.appendChild(tableRow);
  }

  document.body.appendChild(chessTable);
};

const resetBoard = () => {
  const resetButton = document.querySelector(".clear-board-button");
  if (!resetButton) return;

  resetButton.addEventListener("click", () => {
    const table = document.querySelector("table");
    if (table) table.remove();
    gameboard();
  });
};

export { gameboard, resetBoard, knightsTravails };
