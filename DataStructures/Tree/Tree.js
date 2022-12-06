

class Node{
	constructor(item) {
		this.value = item;
		this.left = null;
		this.right = null;
	}
}

const preorder = (root) => {
	if (root) {
		//  Traverse root
		process.stdout.write(root.value + "->")
		//  Traverse left
		preorder(root.left)
		//  Traverse right
		preorder(root.right)
	}
}

const inorder = (root) => {
	if (root) {
		//  Traverse left
		inorder(root.left)
		//  Traverse root
		process.stdout.write(root.value + "->")
		//  Traverse right
		inorder(root.right)
	}
}

const postorder = (root) => {
	if (root) {
		//  Traverse left
		postorder(root.left)
		//  Traverse right
		postorder(root.right)
		//  Traverse root
		process.stdout.write(root.value + "->")
	}
}


const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

console.log("Preorder traversal ")
preorder(root)
console.log();

console.log("Inorder traversal ")
inorder(root)
console.log();

console.log("Postorder traversal ")
postorder(root)
console.log();