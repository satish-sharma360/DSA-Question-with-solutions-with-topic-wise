// 2. Add Two Numbers

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addAtTail(data){

        let newNode = new Node(data)

        if(this.head === null){
            return this.head = newNode;
        }

        let temp = this.head;

        while(temp.next){
            temp = temp.next;
        }

        temp.next = newNode;
        return this.head;
    }

    reverse(){
        if(this.head === null || this.head.next === null){
            return this.head;
        }

        let curr = this.head;
        let next = null;
        let prev = null;

        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev
    }

    print(){
        let result = "";

        let temp = this.head
        while(temp){
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null"
        console.log(result)
    }
}

let lsit1 = new LinkedList()
lsit1.addAtTail(2)
lsit1.addAtTail(4)
lsit1.addAtTail(3)

lsit1.print()

let lsit2 = new LinkedList()
lsit2.addAtTail(5)
lsit2.addAtTail(6)
lsit2.addAtTail(4)

lsit2.print()