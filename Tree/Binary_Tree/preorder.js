// Build tree with Pre-Order Sequence;


// step 1: Create Node class
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// Step 2: Build Tree using Preorder
class BinaryTree{
    constructor(){
        this.index = -1;
    }

    buildTree(arr){
        this.index++;

        // base case
        if(arr[this.index] === -1){
            return null;
        }

        // Create Node
        let root = new Node(arr[this.index]);

        // Build Left SubTree
        root.left = this.buildTree(arr)

        // Build Right SubTree
        root.right = this.buildTree(arr);

        return root;
    }
}

// Step 3: Preorder traversal (to verify)

function Preorder(root){
    if (root === null) {
        return;
    }
    process.stdout.write(root.data + " ");
    Preorder(root.left)
    Preorder(root.right)
}


// Process node first, then push right → left (so left is processed first)
function preOrderIterative(root){
    if (!root) {
        return;
    }

    let stack = [root];

    while(stack.length){
        let node = stack.pop();

        process.stdout.write(node.data + " ");

        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
}

let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree();
let root = tree.buildTree(arr)
console.log("Preorder traversal", root.data)
Preorder(root)
console.log()
console.log("using Iterative")
preOrderIterative(root)