/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let odd = nums.filter((a) => a % 2 == 1).sort((a, b) => a - b);
  let even = nums.filter(a => a % 2 == 0).sort((a, b) => a - b);
  return even.concat(odd);
};