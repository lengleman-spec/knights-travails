const gameboard = () => {
  const defaultStartLocation = [0, 0];
  const coordArray = [];
  const chessTable = document.createElement("table");

  // Create board cells and apply position values:
  chessTable.setAttribute("class", "center");

  for (let i = 0; i < 8; i++) {
    const tableRow = document.createElement("tr");
    let cellRowCoord = Math.abs(i - 7); // Math.abs converts the negative number into a positive one
    tableRow.textContent = cellRowCoord;

    for (let z = 0; z < 8; z++) {
      const tableCell = document.createElement("td"); // Creates actual cells
      let cellColumnCoord = z;
      tableCell.textContent = cellColumnCoord;

      if ((i + z) % 2 == 0) {
        // Even numbers = white cells
        tableCell.setAttribute("class", "cell whitecell");
        tableRow.appendChild(tableCell);
        coordArray.push(cellRowCoord);
        coordArray.push(cellColumnCoord);
        tableCell.dataset.coordArray = coordArray;
        coordArray.splice(0, 2);
      } else {
        tableCell.setAttribute("class", "cell blackcell");
        tableRow.appendChild(tableCell);
        coordArray.push(cellRowCoord);
        coordArray.push(cellColumnCoord);
        tableCell.dataset.coordArray = coordArray;
        coordArray.splice(0, 2);
      }
    }
    chessTable.appendChild(tableRow);
  }

  const cellNodes = chessTable.querySelectorAll("td");
  cellNodes.forEach((cellNode) => {
    if (defaultStartLocation.toString() === cellNode.dataset.coordArray) {
      let knightImg = document.createElement("img");
      knightImg.src = ""; // Path to image of knight
      cellNode.appendChild(knightImg);
    }
  });
  document.body.appendChild(chessTable);
};

export { gameboard };
