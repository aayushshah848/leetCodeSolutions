/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = nums.length - 1;
  let count = 0;
  while (p2 > p1) {
    const tot = nums[p1] + nums[p2]
    if (tot > k) p2--;
    else if (tot < k) p1++;
    else {
      count++;
      p2--;
      p1++;
    }
  }
  return count;
};