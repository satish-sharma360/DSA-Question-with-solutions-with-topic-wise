// delete Node from Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add Node
    append(value) {

        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // traverse at end then add;
        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    // deletation the head;

    deleteHead() {

        if (this.head === null) return this.head;
        let temp = this.head; // no need to write this because JS have automatically garbage collect

        this.head = this.head.next;
        temp.next = null // also no need garbase collect automatically
    }

    deletetailOfLL() {
        let tail = this.head;

        if (this.head === null) return null;

        // single node head and tail point same node delete it;
        if (this.head.next === null) {
            this.head = null;
            return;
        }

        while (tail.next.next !== null) {
            tail = tail.next;
        }
        tail.next = null;

    }

    // delete Node from Kth position
    deleteNodeKthPosition(k) {
        let count = 1;

        let temp = this.head;
        if(this.head === null) return null;

        if(k === 1){
            this.head = this.head.next;
        }

        while (temp !== null && count < k - 1) {
            temp = temp.next;
            count++;
        }
        if (temp !== null && temp.next !== null) {
            temp.next = temp.next.next;
        }
    }

    deleteNode(x) {
        // code here
        let temp = this.head;
        let count = 1;
        
        if(this.head === null) return null;
        
        if(x === 1){
            return this.head = this.head.next;
        }
        
        for(let i = 1; i < x - 1; i++){
            temp = temp.next;
            if(temp === null){
                return head;
            }
        }
        temp.next = temp.next.next;
        return head
        
    }

    deleteElemet(elem){
        if(this.head === null) return this.head;

        if(this.head.data === elem){
            return this.head = this.head.next;
        }

        let temp = this.head;
        while(temp && temp.next){
            if(temp.next.data === elem){
                return temp.next = temp.next.next;
            }
            temp = temp.next;
        }
        return false
    }
    print() {
        let result = "";
        let temp = this.head;

        while (temp !== null) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null";
        console.log(result)
    }
}

let list = new LinkedList();

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
// list.deleteHead()

// list.deletetailOfLL()
// list.deleteNodeKthPosition(1)

list.deleteElemet(0)
list.print()