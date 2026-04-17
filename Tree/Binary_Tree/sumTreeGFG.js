// Sum Tree

class Solution {
    // Should return true if tree is Sum Tree, else false
    
    isSumTree(root) {
        let ans = true;
        // code here
        const check = (node) =>{
            
            if(node === null){
                return 0;
            }
            
            // leaf node
            if(node.left === null && node.right === null){
                return node.key;
            }
        
            let left = check(node.left);
            let right = check(node.right);
            
            if(left + right !== node.key){
                ans =  false
            }
            
            return left + right + node.key
        } 
        check(root);
        return ans
    }
}