# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        head = TreeNode()
        self.temp = head

        def inOrder(root):
            if not root:
                return
            inOrder(root.left)
            self.temp.right = root
            self.temp = self.temp.right
            inOrder(root.right)
            root.left = None
        inOrder(root)
        return head.right
