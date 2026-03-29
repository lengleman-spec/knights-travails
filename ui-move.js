import { knightsTravails } from "./search-algo";

// Module to control and keep track of the moves/clicks from user
const uiController = () => {
  const cellNodes = document.querySelectorAll("td");
  cellNodes.forEach((cellNode) => {
    // Loop through all cells to find the knight img and assign coords
    if (cellNode.querySelector("img") !== null) {
      let knightLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
      console.log("Current knight location ", knightLocation);
    }

    // Loop through all cells to attacj click listeners to each cell. Assign coords once click is seen
    cellNode.addEventListener("click", function () {
      let clickedLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
      console.log("Clicked on location ", clickedLocation);
    });
  });
};
