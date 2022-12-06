class Node {
  constructor(item) {
    this.item = item;
    this.leftChild = null;
    this.rightChild = null;
  }
}

// # Checking full binary tree
const isFullTree = (root) => {
	// # Tree empty case
	if (root === null) return true;

	// # Checking whether child is present
	if (root.leftChild === null && root.rightChild === null) return true;

	if (root.leftChild !== null && root.rightChild !== null)
		return isFullTree(root.leftChild) && isFullTree(root.rightChild);

	return false;
}

const root = new Node(1);
root.rightChild = new Node(3);
root.leftChild = new Node(2);

root.leftChild.leftChild = new Node(4);
root.leftChild.rightChild = new Node(5);
root.leftChild.rightChild.leftChild = new Node(6);
root.leftChild.rightChild.rightChild = new Node(7);

if (isFullTree(root)) {
  console.log("The tree is a full binary tree");
} else {
  console.log("The tree is not a full binary tree");
}
