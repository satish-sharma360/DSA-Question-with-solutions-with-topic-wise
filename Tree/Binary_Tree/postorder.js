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

function postOrder(root) {

    // Base case
    if (root === null) {
        return
    }

    //left Subtree
    postOrder(root.left)

    // Right subTree
    postOrder(root.right)

    // Root
    process.stdout.write(root.data + " ");
}

function postOrderInerative(root){
    if (!root) {
        return;
    }

    let stack1 = [root];
    let stack2 = [];

    while(stack1.length){
        let node = stack1.pop()
        stack2.push(node);

        if(node.left) stack1.push(node.left)
        if(node.right) stack1.push(node.right)
    }

    while(stack2.length){
        let node = stack2.pop();
        process.stdout.write(node.data + " ");
    }
}

let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree();
let root = tree.buildTree(arr);

console.log("Post Order")

postOrder(root);
console.log()
console.log("Iteraive")
postOrderInerative(root)