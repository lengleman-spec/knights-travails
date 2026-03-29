// search-algo.js
import { displayMoves } from "./display-moves.js";

const squareRegistry = new Map();

// Create chess square object
const chessSquare = (x, y) => {
  const xPos = x;
  const yPos = y;
  let predecessor;

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

  const name = () => `${xPos},${yPos}`;
  const getPredecessor = () => predecessor;
  const setPredecessor = (newPredecessor) => {
    predecessor = predecessor || newPredecessor;
  };

  const possibleKnightMoves = () => {
    return knightMoves
      .map(([dx, dy]) => newSquareFrom(dx, dy))
      .filter((sq) => sq !== undefined);
  };

  const newSquareFrom = (dx, dy) => {
    const [newX, newY] = [xPos + dx, yPos + dy];
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      return chessSquare(newX, newY);
    }
  };

  if (squareRegistry.has(name())) return squareRegistry.get(name());

  const newSquare = {
    name,
    getPredecessor,
    setPredecessor,
    possibleKnightMoves,
  };
  squareRegistry.set(name(), newSquare);
  return newSquare;
};

// BFS for shortest knight path
const knightsTravails = (start, finish) => {
  squareRegistry.clear();
  const origin = chessSquare(...start);
  const target = chessSquare(...finish);

  const queue = [origin];

  while (!queue.includes(target)) {
    const current = queue.shift();
    const moves = current.possibleKnightMoves();
    moves.forEach((sq) => sq.setPredecessor(current));
    queue.push(...moves);
  }

  const path = [target];
  while (!path.includes(origin)) {
    path.unshift(path[0].getPredecessor());
  }

  const squareCoord = path.map((sq) => sq.name());
  displayMoves(path, squareCoord);
};

export { knightsTravails };
