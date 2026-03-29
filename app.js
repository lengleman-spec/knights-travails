import { gameboard } from "./gameboard.js";
import { knightsTravails } from "./search-algo.js";

// DOM for chess board module

const appController = (function () {
  gameboard();
  knightsTravails([3, 3], [4, 3]);
})();
