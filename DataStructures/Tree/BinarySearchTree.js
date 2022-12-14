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
    // this.size = 0;
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
    } else if (data < root.data) {
      this.search(data, root.leftNode);
    } else {
      this.search(data, root.rightNode);
    }
  }

  // childCount(root = this) {
  //   if (root !== null) {
  //     this.size += 1;
  //     this.childCount(root.leftNode);
  //     this.childCount(root.rightNode);
  //     return this.size - 1;
  //   }
  // }

  delete(data, root = this) {
    /* 
		* Case I: 
		* 	- In the first case, the node to be deleted is the leaf node. In such a case, simply delete the node from the * 			tree.
		* Case II:
		* 	- In the second case, the node to be deleted lies has a single child node. In such a case follow the steps 		* 		below:
		* 	1. Replace that node with its child node.
		* 	2. Remove the child node from its original position.

		* Case III
		* 	- In the third case, the node to be deleted has two children. In such a case follow the steps below:
		* 	1. Get the inorder successor of that node.
		* 	2. Replace the node with the inorder successor.
		* 	3. Remove the inorder successor from its original position.
		*/
    if (data === root.data) {
      if (root.leftNode === null && root.rightNode === null) {
        root = null;
      } else if (root.rightNode === null) {
        root = root.leftNode;
      } else if (root.leftNode === null) {
        root = root.rightNode;
      } else {
        let currentNode = root.leftNode;
        if (currentNode.rightNode === null) {
					root.data = currentNode.data;
					root.leftNode = null;
        } else {
          while (currentNode.rightNode !== null) {
            currentNode = currentNode.rightNode;
          }
					root.data = currentNode.data;
					currentNode = null
        }
      }
    } else if (data < root.data) {
      root.leftNode = this.delete(data, root.leftNode);
    } else {
      root.rightNode = this.delete(data, root.rightNode);
    }
    return root;
  }
}

const newNode = new Node(8);
newNode.insert(3);
newNode.insert(10);
newNode.insert(1);
newNode.insert(6);
newNode.insert(14);
newNode.insert(4);
newNode.insert(7);
// console.dir(newNode, { depth: null });

// newNode.search(19);
// newNode.search(9);
// console.log(newNode.childCount());
// newNode.search(5);
// newNode.delete(4)
// newNode.delete(6)
newNode.delete(6);
// newNode.delete(6)
console.dir(newNode, { depth: null });

// console.log(JSON.stringify(newNode, null, 2));
