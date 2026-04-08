// manually Tree

class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4)
root.left.right = new Node(5)
/*

            1
           / \
          2   3
         / \ 
        4   5
*/        