// Left View of Binary Tree

class Solution {
    leftView(root) {
        // code here
        if(root === null) return [];
        
        let result = [];
        let queue = [root];
        let front = 0;
        
        while(front < queue.length){
            let size = queue.length - front;
            
            
            for(let i = 0; i < size; i++){
                
                let node = queue[front++];
                
                if(i === 0){
                    result.push(node.data)
                }
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        }
        return result;
    }
}