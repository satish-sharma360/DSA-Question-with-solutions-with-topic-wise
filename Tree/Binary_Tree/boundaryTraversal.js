//Tree Boundary Traversal

class Solution {
    constructor(){
        this.ans = [];
    }
    leftboundary(root){
        if(root === null || (!root.left && !root.right)){
            return;
        }
        
        this.ans.push(root.data)
        
        if(root.left){
            this.leftboundary(root.left)
        }else{
            this.leftboundary(root.right)
        }
        
    }
    leaftraverse(root){
        if(root === null){
            return;
        }
        
        if(!root.left && !root.right){
            this.ans.push(root.data);
            return;
        }
        this.leaftraverse(root.left)
        this.leaftraverse(root.right)
    }
    
    rightboundary(root){
        if(root === null || (!root.left && !root.right)){
            return;
        }
        
        
        if(root.right){
            this.rightboundary(root.right)
        }else{
            this.rightboundary(root.left)
        }
        this.ans.push(root.data)
    }
    boundaryTraversal(root) {
        // code here
        if(root === null){
            return [];
        }
        this.ans.push(root.data);
        this.leftboundary(root.left);

        this.leaftraverse(root.left); // only left subtree
        this.leaftraverse(root.right); // only right subtree
        
        this.rightboundary(root.right);
        return this.ans;
        
    }
}