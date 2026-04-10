// Implement Post order Traversal

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.index = -1;
    }

    buildTree(arr) {
        // index = 0
        this.index++

        // Base case
        if (arr[this.index] === -1) {
            return null;
        }

        // create Root;
        let root = new Node(arr[this.index])

        // create left subTree
        root.left = this.buildTree(arr)

        // create Right subTree
        root.right = this.buildTree(arr);

        // Return Root
        return root;
    }
}

function inOrder(root) {

    // Base case
    if (root === null) {
        return
    }

    //left Subtree
    inOrder(root.left)

    // Right subTree
    inOrder(root.right)

    // Root
    process.stdout.write(root.data + " ");
}

let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree();
let root = tree.buildTree(arr);

console.log("Post Order")

inOrder(root);