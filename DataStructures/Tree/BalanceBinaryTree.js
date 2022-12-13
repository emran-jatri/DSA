/* 
A balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1.
To learn more about the height of a tree/node, visit Tree Data Structure.Following are the conditions for a height-balanced binary tree{}

- difference between the left and the right subtree for any node is not more than one
- the left subtree is balanced
- the right subtree is balanced

*/

// Checking if a binary tree is height balanced in Python

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class Height {
  constructor() {
    this.height = 0;
  }
}

function isHeightBalanced(root, height) {
  // console.log("🚀 ~ file: BalanceBinaryTree.js:27 ~ isHeightBalanced ~ root, height", root?.data, height)
  const left_height = new Height();
  const right_height = new Height();
	
  if (root === null) {
		return true;
  }
	
  let l = isHeightBalanced(root.left, left_height);
  let r = isHeightBalanced(root.right, right_height);
	
  height.height = Math.max(left_height.height, right_height.height) + 1;
  // console.log("🚀 ~ file: BalanceBinaryTree.js:39 ~ isHeightBalanced ~ height.height", height.height)
	// console.log("🚀 ~ file: BalanceBinaryTree.js:29 ~ isHeightBalanced ~ left_height", left_height)
	// console.log("🚀 ~ file: BalanceBinaryTree.js:31 ~ isHeightBalanced ~ right_height", right_height)

  if (Math.abs(left_height.height - right_height.height) <= 1) {
    return l && r;
  }

  return false;
}

const height = new Height();

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

if (isHeightBalanced(root, height)) {
  console.log("The tree is balanced");
} else {
  console.log("The tree is not balanced");
}
