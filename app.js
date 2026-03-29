// app.js
import { gameboard, resetBoard } from "./gameboard.js";
import { uiController } from "./ui-move.js";

document.addEventListener("DOMContentLoaded", () => {
  gameboard(); // render board
  resetBoard(); // attach reset button listener
  uiController(); // attach click listeners
});
