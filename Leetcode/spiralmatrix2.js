/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  const out = [];
  for (let i = 0; i < n; i++) out.push(new Array(n));
  let num = 1;
  while (bottom >= top && right >= left) {
    for (let i = left; i <= right; i++) out[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) out[i][right] = num++;
    right--;
    if (bottom < top || right < left) break;
    for (let i = right; i >= left; i--) out[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) out[i][left] = num++;
    left++;
  }
  return out;
};

// top = 1
// bottom = 0  
// left = 0
// right = 0

// 1 2
// 4 3