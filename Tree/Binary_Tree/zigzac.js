//103 leetcode ZigZag Tree Traversal

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




function reverse(array){
    let start = 0;
    let end = array.length - 1;
    while(start < end){
        [array[start],array[end]] = [array[end],array[start]]
        start++;
        end--;
    }
    return array;
}
var zigzagLevelOrder = function(root) {
    if(root === null){
        return [];
    }
    let result = [];
    let queue = [root];
    let count = 1;
    while(queue.length > 0){
        let length = queue.length;
        let level = [];
        for(let i = 0; i < length; i++){
            let node = queue.shift();
            level.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        if(count % 2 === 0){
            level = reverse(level)
        }
        result.push(level);
        count++;
    }
    return result;
};