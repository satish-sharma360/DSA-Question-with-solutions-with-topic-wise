// implement Inorder Traversal

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.index = -1;
    }

    buildTree(arr){
        this.index++;

        if (arr[this.index] === -1) {
            return null;
        }

        let root = new Node(arr[this.index]);

        // Build left SubTree
        root.left = this.buildTree(arr);

        // Build Right SubTree
        root.right = this.buildTree(arr);

        return root;
    }
}

function inOrder(root){

    // base case
    if (root === null) {
        return;
    }

    // Left
    inOrder(root.left)

    // root
    process.stdout.write(root.data + " ")

    // right
    inOrder(root.right)
}

let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree()
let root = tree.buildTree(arr)

console.log("In-order Traversal")
inOrder(root)


