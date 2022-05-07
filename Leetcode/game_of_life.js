/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const savedBoard = JSON.parse(JSON.stringify(board));
  const liveNeighbour = (x, y) => {
    let count = 0;
    if (savedBoard[x - 1] && savedBoard[x - 1][y - 1]) count++;
    if (savedBoard[x + 1] && savedBoard[x + 1][y + 1]) count++;
    if (savedBoard[x - 1] && savedBoard[x - 1][y + 1]) count++;
    if (savedBoard[x + 1] && savedBoard[x + 1][y - 1]) count++;
    if (savedBoard[x] && savedBoard[x][y - 1]) count++;
    if (savedBoard[x] && savedBoard[x][y + 1]) count++;
    if (savedBoard[x + 1] && savedBoard[x + 1][y]) count++;
    if (savedBoard[x - 1] && savedBoard[x - 1][y]) count++;
    return count;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const neighbours = liveNeighbour(i, j);
      if (board[i][j] === 1) {
        if (neighbours < 2 || neighbours > 3) board[i][j] = 0;
        else board[i][j] = 1;
      }
      else {
        if (neighbours === 3) board[i][j] = 1;
        else board[i][j] = 0;
      }
    }
  }
};