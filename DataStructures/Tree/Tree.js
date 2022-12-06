

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

let count = 1
const inorder = (root) => {
	if (root) {
		//  Traverse left
		// console.log(root.left, "before", count++)
		inorder(root.left)
		// console.log(root.left, "after", count++)
		
		//  Traverse root
		// console.log(root.value, "before", count++)
		process.stdout.write(root.value + "->")
		// console.log();
		// console.log(root.value, "after", count++)

		//  Traverse right
		// console.log(root.right, "before", count++)
		inorder(root.right)
		// console.log(root.right, "after", count++)
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