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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (!root) return root;
  let count = 0
  const inOrder = (root) => {
    if (!root) return;
    inOrder(root.right);
    count += root.val;
    root.val = count;
    inOrder(root.left);
    return root;
  }
  return inOrder(root);
};

