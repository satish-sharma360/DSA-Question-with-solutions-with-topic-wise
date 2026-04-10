// Level Order Traversal

/*
Algo
Step 1: Queue.push(root)
Step 2: while(Queue.size > 0)
        pop from front one by one
        push left and then right child of this root
*/

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
        // Increment index
        this.index++;
        // Base case
        if(arr[this.index] === -1){
            return null;
        }

        // Create Root
        let root = new Node(arr[this.index]);

        // Build Left sub tree
        root.left = this.buildTree(arr);

        // Build Right sub tree
        root.right = this.buildTree(arr);

        // Return root
        return root;
    }
}

function levelOrder(root){
    // Create a Queue
    let queue = [];

    if (!root) return;

    // Push root into queue
    queue.push(root);

    while(queue.length > 0){
        let curr = queue.shift();

        process.stdout.write(curr.data + " ");

        if (curr.left !== null) {
            queue.push(curr.left)
        }

        if (curr.right !== null) {
            queue.push(curr.right)
        }
    }
    console.log()
}

let arr = [1 ,2 ,-1,-1 ,3 ,4, -1, -1, 5, -1, -1];

let tree = new BinaryTree();
let root = tree.buildTree(arr);
console.log("Level Order traversal")

levelOrder(root)