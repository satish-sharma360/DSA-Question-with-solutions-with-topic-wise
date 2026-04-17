// ZigZag Tree Traversal

function zigZagTraversal(root){
    let ans = [];

    if(root === null) return ans;

    let queue = [root];
    let front = 0;

    let LeftToRight = true;

    while(front < queue.length){
        let size = queue.length - front;
        let temp = [];
        for(let i = 0; i < size; i++){
            let node = queue[front++];
            let index = LeftToRight? i : size - i - 1;

            temp[index] = node;

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            
        }
        // change direction
        LeftToRight = !zigZagTraversal;

        // copy in ans 
        for(let i = 0; i < temp.length; i++){
            ans.push(temp[i]);
        }
        temp = [];
    }
    return ans;
}