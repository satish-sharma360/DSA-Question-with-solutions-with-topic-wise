// Find Dimameter
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
        // increment index
        this.index++;

        // Base case
        if (arr[this.index] === -1) {
            return null;
        }

        // Create root node
        let root = new Node(arr[this.index]); 

        // Create left sub tree 
        root.left = this.buildTree(arr)

        // Create right sub tree 
        root.right = this.buildTree(arr);

        return root;
    }

}

function height(root){
    if (root === null) {
        return 0;
    }

    let leftHeight = height(root.left)
    let rightHeight = height(root.right)

    return Math.max(leftHeight , rightHeight) + 1;
}

// this solution not work for all case
/*  this is work when ans exist combo left and right subTree
function calculateHeight(root){
    // base case
    if (root === null) {
        return 0;
    }

    let left = calculateHeight(root.left);
    let right = calculateHeight(root.right);

    return Math.max(left , right) + 1;
}

function Dimameter(root){
    return calculateHeight(root.left) + calculateHeight(root.right) + 1;
}
*/

// Approach
// ans may exist left subTree -> opt1 -> diameter(root.left)
// ans may exist right subTree -> opt2 -> diameter(root.right)
// ans may exist combo of left and right subTree -> opt3 -> height(root.left) + 1(root) + height(root.right)
//  max of opt1 , opt2, opt3 will ans

function diameter(root){
    if (root === null) {
        return 0;
    }
    // opt 1 -> find Diameter left subTree
    let opt1 = diameter(root.left)
    // opt 2 -> find Diameter right subTree
    let opt2 = diameter(root.right)
    // opt3 -> combo of right and left height
    let opt3 = height(root.left) + 1 + height(root.right);
    let ans = Math.max(opt1, opt2, opt3);
    return ans;
}

// here T.C will O(n^2) because i call dimeter and height thats why
// in case of edge then make two chnage return -1 in height root === null and in height left + 2 height right in dimeter function

function OptimizeDimeter(root){
    let maxDiameter = 0;

    function dfs(node){
        if (node === null) {
            return 0;
        }

        let leftHeight = dfs(node.left)
        let rightHeight = dfs(node.right)

        // Update dimeter (in nodes)
        maxDiameter = Math.max(maxDiameter , leftHeight + rightHeight + 1);

        return Math.max(leftHeight , rightHeight) + 1;
    }
    dfs(root);
    return maxDiameter;
}

let arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree()
let root = tree.buildTree(arr);
// console.log(calculateHeight(root))
console.log(diameter(root))
console.log(OptimizeDimeter(root))