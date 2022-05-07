/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0;
  let ans = null;
  const inOrder = (root) => {
    if (!root) return;
    inOrder(root.left);
    count++;
    if (count === k) ans = root.val;
    inOrder(root.right);
  }
  inOrder(root);
  return ans;
};