// Find Height of a Binary Tree

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

function findHeight(root) {

    if (root === null) {
        return 0;
    }

    let leftHeight = findHeight(root.left);
    let rightHeight = findHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function findheightIterative(root) {
    if (root === null) return 0;
    let queue = [root];
    let front = 0;
    queue.push(null)
    let height = 0;

    while (front < queue.length) {
        let curr = queue[front++];

        if (curr === null) {
            height++;
            if (front < queue.length) {
                queue.push(null)
            }
        } else {
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    return height;
}

let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree()
let root = tree.buildTree(arr);
console.log(findHeight(root))

console.log(findheightIterative(root))