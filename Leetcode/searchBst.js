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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === val) return current;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return null;
};