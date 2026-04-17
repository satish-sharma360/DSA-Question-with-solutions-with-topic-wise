// Mirror Tree

class Solution {
    mirror(root) {
        // code here
        if(root === null){
            return;
        }
        
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
        
        // traverse Left side
        this.mirror(root.left);
        // right side
        this.mirror(root.right);
    }
}