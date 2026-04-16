// Count Leaves in Binary Tree GFG

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
        this.count = 0;
    }

    buildTree(arr){
        this.index++;

        if (arr[this.index] === -1) {
            return null;
        }

        let root = new Node(arr[this.index])

        root.left = this.buildTree(arr)
        root.right = this.buildTree(arr)

        return root;
    }

    countLeaf(root){
        if (root === null) {
            return 0;
        }
        this.countLeaf(root.left)
        if (root.left === null && root.right === null) {
            this.count++;
        }
        this.countLeaf(root.right)
        return this.count;
    }
    // here if i log this method 2 time my ans comes 2X if ans is 3 then again log ans become 6

    betterApproach(root){
        if (!root) {
            return 0;
        }

        if (!root.left && !root.right) {
            return 1;
        }

        return this.betterApproach(root.left) + this.betterApproach(root.right)
    }
}

// Using closure
function CountLeafNode(root){
    let count = 0;

    function dfs(node){
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            count++;
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root);
    return count;
}

let arr = [4, 8, 7, 3, -1, -1, -1, -1, 10, 5, -1, -1, 1, -1, -1]
let tree = new BinaryTree()
let root = tree.buildTree(arr);

console.log(tree.countLeaf(root)); // 3       this.count is not reset
console.log(tree.countLeaf(root)); // 2X -> 3x2 -> 6  It keeps increasing on every call
console.log(tree.betterApproach(root)); // 3
console.log(tree.betterApproach(root)); // 3
console.log(CountLeafNode(root)); // 3
