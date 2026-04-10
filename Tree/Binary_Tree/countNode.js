// Count total number of Node

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
        // index increment
        this.index++;

        // base case
        if (arr[this.index] === -1) {
            return null;
        }

        // Create Root
        let root = new Node(arr[this.index]);

        // Create Left sub Tree;
        root.left = this.buildTree(arr);

        // Create Left sub Tree;
        root.right = this.buildTree(arr);

        return root;
    }
}

function countNodes(root){
    // base case
    if (root === null) {
        return 0;
    }
    let left = countNodes(root.left)
    let right = countNodes(root.right)

    return left + right + 1;
}
function iterative(root){
    if (!root) {
        return 0;
    }

    let queue = [root];
    let front = 0;
    let count = 0;

    while(front < queue.length){
        let curr = queue[front++];
        count++;

        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return count;
}

let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree()
let root = tree.buildTree(arr);
console.log(countNodes(root))

console.log(iterative(root))