// sum of all nodes

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

        root.left = this.buildTree(arr)
        root.right = this.buildTree(arr)

        return root;
    }
}

function sum(root){

    if (root === null) {
        return 0;
    }
    let leftSum = sum(root.left);
    let rightSum = sum(root.right);

    return leftSum + rightSum + root.data
}

function iterativeSum(root){
    if(!root) return 0;

    let queue = [root];
    let front = 0;
    let sum = 0;

    while(front < queue.length){
        let curr = queue[front];
        sum += curr.data;
        front++;

        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return sum;
}

let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree()
let root = tree.buildTree(arr);
console.log(sum(root))
console.log(iterativeSum(root))
