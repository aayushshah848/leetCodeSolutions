/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const dup = [...nums];
  dup.sort((a, b) => a - b);
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== dup[i]) {
      start = i;
      for (let j = nums.length - 1; j > start; j--) {
        if (nums[j] !== dup[j]) {
          end = j + 1;
          break;
        }
      }
      break;
    }
  }
  return end - start;
};