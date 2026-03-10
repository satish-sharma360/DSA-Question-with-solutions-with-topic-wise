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

    // insertion At tail;
    appandAtTail(value) {

        let newNode = new Node(value)

        if (this.head === null) {
            return this.head = newNode;
        }

        let temp = this.head
        while (temp && temp.next) {
            temp = temp.next;
        }
        temp.next = newNode
    }

    // insertion At Head

    insertAtHead(value) {
        let newNode = new Node(value);

        //If this.head = null ->newNode.next = null
        // if (this.head === null) {
        //     return this.head = newNode;
        // }
        newNode.next = this.head;
        this.head = newNode;
    }

    insertElementAtKthPosition(value, k){

        let newNode = new Node(value)

        if(k === 1){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let count = 1;
        let temp = this.head;
        while(temp && count < k - 1){
            temp = temp.next;
            count++;
        }
        if(temp){
            newNode.next = temp.next
            temp.next = newNode
        }
    }

    insertBeforeValueX(node , x){
        let newNode = new Node(node);

        if(this.head === null){
            return this.head;
        }

        // Insert Before head
        if(this.head.data === x){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while(temp.next){
            if(temp.next.data === x){
                newNode.next = temp.next;
                temp.next = newNode;
                return;
            }
            temp = temp.next;
        }
        return `not match`
    }

    print() {
        let result = "";

        let temp = this.head;
        while (temp) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null";
        console.log(result)
    }
}

let list = new LinkedList()

list.appandAtTail(10)
list.appandAtTail(20)
list.appandAtTail(30)
list.appandAtTail(40)

list.insertAtHead(5)

list.insertElementAtKthPosition(15 , 3)

list.insertBeforeValueX(2 ,5)

list.print()