// Using a breadth-first algo for moves
const squareRegistry = new Map(); // Map stores key-value pairs and remembers the original insertion order

// Get/Set current coords to the board
const chessSquare = (x, y) => {
  const xPosition = x;
  const yPosition = y;
  let predecessor;

  // Array for all possible moves:
  const knightMoves = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  const getPredecessor = () => predecessor;
  const setPredecessor = (newPredecessor) => {
    predecessor = predecessor || newPredecessor;
  };

  // Show x y coordinates:
  const name = () => `${x}, ${y}`;

  // Evaluate current possible moves against offsets
  const possibleKnightMoves = () => {
    return knightMoves
      .map((offset) => newSquareFrom(offset[0], offset[1]))
      .filter((square) => square !== undefined);
  };

  // Calculate new set of square coords against offsets
  const newSquareFrom = (xOffset, yOffset) => {
    const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];

    // If offset is between 0 and 8, it's a valid move:
    if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
      return chessSquare(newX, newY);
    }
  };

  // Get/set map constructor object name
  // if squareRegistry does not have a name, create one and give it the following objects
  if (squareRegistry.has(name())) {
    return squareRegistry.get(name());
  } else {
    const newSquare = {
      name,
      getPredecessor,
      setPredecessor,
      possibleKnightMoves,
    };

    squareRegistry.set(name(), newSquare);
    return newSquare;
  }
};

// Intake the click coords from the user and run the search algo
const knightsTravails = (start, finish) => {
  squareRegistry.clear(); // clear old values

  const origin = chessSquare(...start);
  const target = chessSquare(...finish);

  const queue = [origin];
  while (!queue.includes(target)) {
    const currentSquare = queue.shift();

    const enqueueList = currentSquare.possibleKnightMoves();
    enqueueList.forEach((square) => square.setPredecessor(currentSquare));
    queue.push(...enqueueList);
  }

  const path = [target];
  while (!path.includes(origin)) {
    const prevSquare = path[0].getPredecessor();
    path.unshift(prevSquare);
  }

  //   console.log(`The shortest path was ${path.length - 1} moves!`);
  //   console.log("The moves were:");
  path.forEach((square) => {
    squareCoord.push(square.name());
  });
  displayMoves(path, squareCoord);
};

export { knightsTravails };
