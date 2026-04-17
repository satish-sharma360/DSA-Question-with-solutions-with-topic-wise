// Sum of nodes on the longest path

class Solution {
    sumOfLongRootToLeafPath(root) {
        // code here
        let sum = 0;
        let maxlen = 0;
        
        const calculateSum = (node , tempSum , len) =>{
            if(node === null) return 0;
            
            tempSum += node.data;
            len += 1;
            
            // if leafNode 
            if(!node.left && !node.right){
                if(maxlen < len){
                    maxlen = len;
                    sum = tempSum;
                }else if(len === maxlen){
                    sum = Math.max(sum , tempSum)
                }
                return;
            }
            calculateSum(node.left , tempSum, len)
            calculateSum(node.right , tempSum, len)
        }
        calculateSum(root , 0 , 0);
        return sum
    }
}