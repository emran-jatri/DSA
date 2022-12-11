/* 

- A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.
- depth:  start with 1
- level:  start with 0
*/

class Node {
  constructor(k) {
    this.key = k;
    this.right = this.left = null;
  }
}

// # Calculate the depth
const calculateDepth = (node) => {
  depth = 0;
  while (node !== null) {
    depth += 1;
    node = node.left;
  }
  return depth;
};

// # Check if the tree is perfect binary tree
const isPerfect = (root, depth, level = 0) => {
  // # Check if the tree is empty
  if (root === null) {
    return true;
  }

  // # Check the presence of trees
  if (root.left === null && root.right === null) {
    return depth == level + 1;
  }

  if (root.left === null || root.right === null) {
    return false;
  }

  return (
    isPerfect(root.left, depth, level + 1) && isPerfect(root.right, depth, level + 1)
  );
};

let root = null;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

if (isPerfect(root, calculateDepth(root))) {
  console.log("The tree is a perfect binary tree");
} else {
  console.log("The tree is not a perfect binary tree");
}
