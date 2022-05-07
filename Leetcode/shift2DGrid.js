/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const temp = grid.flat();
  k = k % temp.length;
  const lastSlice = temp.slice(temp.length - k);
  const firstSlice = temp.slice(0, temp.length - k);
  const len = grid[0].length;
  const final = [...lastSlice, ...firstSlice];
  console.log(final)
  grid = [];
  for (let start = 0, end = len; end <= final.length; end += len, start += len) {
    grid.push(final.slice(start, end));
  }
  return grid;
};