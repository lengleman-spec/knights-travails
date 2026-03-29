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

      //Loop again to locate new current location and assign coords.
      // Remove old knight img from previous coords
      // Call knightsTravails module to start search algo
      const cellNodes = document.querySelectorAll("td");
      cellNodes.forEach((cellNode) => {
        if (cellNode.querySelector("img") !== null) {
          let knightLocation = JSON.parse(
            "[" + cellNode.dataset.coordArray + "]",
          );
          console.log("Current knight location ", knightLocation);
          const knightImg = document.querySelector("img");
          knightImg.remove();
          knightsTravails(knightLocation, clickedLocation);
        }
      });

      // Create the new knight img at the clicked location
      const knightImg = document.createElement("img");
      knightImg.src =
        "https://thumbs.dreamstime.com/b/white-chess-knight-piece-background-icon-203800607.jpg";
      cellNode.appendChild(knightImg);
    });
  });
};
