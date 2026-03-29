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
    return KNIGHT_MOVES.map((offset) =>
      newSquareFrom(offset[0], offset[1]),
    ).filter((square) => square !== undefined);
  };

  // Calculate new set of square coords against offsets
  const newSquareFrom = (xOffset, yOffset) => {
    const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];

    // If offset is between 0 and 8, it's a valid move:
    if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
      return chessSquare(newX, newY);
    }
  };
};
