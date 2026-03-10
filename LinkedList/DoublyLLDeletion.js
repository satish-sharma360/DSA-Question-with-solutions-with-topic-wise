
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // add At tail
    insertAtTail(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
    }

    // delete Head
    deleteHead() {
        if (this.head === null) {
            return this.head
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }
        let temp = this.head;

        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
    }

    // delete tail
    deleteTailOfDLL() {
        if (this.head === null) {
            return this.head;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.prev.next = null;
        temp.prev = null;

    }

    // delete Kth position 
    deleteNodeKthPosition(k) {

        if (this.head === null) return this.head

        let temp = this.head;

        if (k === 1) {
            if (this.head.next === null) {
                this.head = null;
                return;
            }
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
            return;
        }
        let count = 1

        while (temp && count < k - 1) {
            temp = temp.next;
            count++;
        }

        if (temp && temp.next) {

            // deleting last node
            if (temp.next.next === null) {
                temp.next = null;
            } else {
                temp.next = temp.next.next;
                temp.next.prev = temp;
            }
        }
    }

    // delete Node with value
    deleteNode(value) {
        if (this.head === null) return this.head

        let temp = this.head;

        if (this.head.data === value) {
            this.head = this.head.next;
            this.head.prev = null;
            return;
        }


        while(temp && temp.next){
            if(temp.next.data === value){

                // deleting last node
                if(temp.next.next === null){
                    temp.next = null;
                }else{
                    temp.next = temp.next.next;
                    temp.next.prev = temp;
                }
                return;
            }
            temp = temp.next;
        }
    }

    print() {
        let result = "";

        let temp = this.head;
        while (temp) {
            result += temp.data + " <-> ";
            temp = temp.next;
        }

        result += "null";
        console.log(result)
    }
}

let list = new DoublyLinkedList()

list.insertAtTail(10)
list.insertAtTail(20)
list.insertAtTail(30)
list.insertAtTail(40)
list.insertAtTail(50)

list.print()

