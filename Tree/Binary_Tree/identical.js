// Identical Trees


class Solution {
    isIdentical(r1, r2) {
        // code here
            if(r1 === null && r2 === null){
                return true;
            }
            
            if((!r1 && r2) || (r1 && !r2)){
                return false;
            }
            
            if(r1.data !== r2.data){
                return false;
            }
            
            let left = this.isIdentical(r1.left, r2.left);
            let right = this.isIdentical(r1.right, r2.right);

        return left && right;
            
    }
}