// ui-move.js
import { knightsTravails } from "./search-algo.js";

const uiController = () => {
  const cellNodes = document.querySelectorAll("td");

  cellNodes.forEach((cell) => {
    cell.addEventListener("click", () => {
      const clickedLocation = cell.dataset.coordArray.split(",").map(Number);

      // Find current knight location
      const currentCell = document.querySelector("td img")?.parentElement;
      if (!currentCell) return;

      const knightLocation = currentCell.dataset.coordArray
        .split(",")
        .map(Number);

      // Remove old knight
      const knightImg = currentCell.querySelector("img");
      if (knightImg) knightImg.remove();

      // Calculate shortest path and display moves
      knightsTravails(knightLocation, clickedLocation);

      // Place knight at new location
      const newKnightImg = document.createElement("img");
      newKnightImg.src =
        "https://thumbs.dreamstime.com/b/white-chess-knight-piece-background-icon-203800607.jpg";
      cell.appendChild(newKnightImg);
    });
  });
};

export { uiController };
