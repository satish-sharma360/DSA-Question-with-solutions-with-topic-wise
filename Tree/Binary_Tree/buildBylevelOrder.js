// Create Tree from level Order

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function  buildTree(arr){
    if (!arr.length || arr[0] === null) {
        return null;
    }

    let root = new Node(arr[0]);
    let queue = [root];
    let i = 1;

    while(i < arr.length){
        let curr = queue.shift();

        // left Child
        if (arr[i] !== null) {
            curr.left = new Node(arr[i]);
            queue.push(curr.left);
        }
        i++;
        // right child
        if (i < arr.length && arr[i] !== null) {
            curr.right = new Node(arr[i]);
            queue.push(curr.right);
        }
        i++;
    }
    return root;
}

// optimize Avoid shift();
function buildTreeoptimize(arr){
    if (!arr.length || arr[0] === null) {
        return null;
    }

    let root = new Node(arr[0]);
    let queue = [root];
    let front = 0;
    let i = 0;

    while(i < arr.length){
        let curr = queue[front];
        front++;

        if (arr[i] !== null) {
            curr.left = new Node(arr[i]);
            queue.push(curr.left);
        }
        i++;

        // right child
        if (arr.length > i && arr[i] !== null) {
            curr.right = new Node(arr[i]);
            queue.push(curr.right);
        }
        i++;
    }
    return root;
}