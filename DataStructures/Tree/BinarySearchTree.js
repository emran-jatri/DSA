/*

* Binary search tree is a data structure that quickly allows us to maintain a sorted list of numbers.

* It is called a binary tree because each tree node has a maximum of two children.
* It is called a search tree because it can be used to search for the presence of a number in O(log(n)) time.
* The properties that separate a binary search tree from a regular binary tree is

* 1. All nodes of left subtree are less than the root node
* 2. All nodes of right subtree are more than the root node
* 3. Both subtrees of each node are also BSTs i.e. they have the above two properties

*/

class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }

  insert(data, root = this) {
    if (root === null) {
      root = new Node(data);
    } else if (data <= root.data) {
      root.leftNode = this.insert(data, root.leftNode);
    } else {
      root.rightNode = this.insert(data, root.rightNode);
    }
    return root;
  }

  search(data, root = this) {
    if (root === null) {
      console.log(data + " is not found!");
    } else if (data === root.data) {
      console.log(data + " is found!");
    } else if (data <= root.data) {
      this.search(data, root.leftNode);
    } else {
      this.search(data, root.rightNode);
    }
  }
}

const newNode = new Node(5);
newNode.insert(6);
newNode.insert(4);
newNode.insert(7);
newNode.insert(3);
newNode.insert(8);
newNode.insert(2);
newNode.insert(9);

// console.dir(newNode, { depth: null });
// newNode.search(19);
// newNode.search(9);
newNode.search(5);

// console.log(JSON.stringify(newNode, null, 2));
