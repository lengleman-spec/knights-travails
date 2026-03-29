// display-moves.js
const displayMoves = (path, squareCoord) => {
  const displayDiv =
    document.querySelector(".moves-display") || document.createElement("div");
  displayDiv.classList.add("moves-display");
  if (!document.body.contains(displayDiv))
    document.body.appendChild(displayDiv);

  // Remove old moves
  displayDiv.querySelectorAll("p").forEach((p) => p.remove());

  const moveNumber = document.createElement("p");
  const coordList = document.createElement("p");
  moveNumber.textContent = `The shortest path was ${path.length - 1} moves!`;
  coordList.innerHTML = squareCoord.join("<br>");
  displayDiv.appendChild(moveNumber);
  displayDiv.appendChild(coordList);
};

export { displayMoves };
