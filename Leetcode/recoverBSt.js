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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let temp = [];
  const inOrder = (root) => {
    if (!root) return;
    inOrder(root.left);
    temp.push(root.val);
    inOrder(root.right);
  };
  inOrder(root);
  console.log(temp);
  temp = temp.sort((a, b) => a - b);
  console.log(temp); // 1 2 3
  let index = 0;
  const inOrderSet = (root) => {
    if (!root) return;
    inOrderSet(root.left);
    console.log(index);
    root.val = temp[index++];
    inOrderSet(root.right);
  }
  inOrderSet(root);
};