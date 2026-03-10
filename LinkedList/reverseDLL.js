// Reverse DLL
// 1 <-> 2 <-> 3 <-> 4 <-> null
// 4 <-> 3 <-> 2 <-> 1 <-> null


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
    }

    // Insert data
    insertAtTail(data){
        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let temp = this.head;

        while(temp && temp.next){
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
    }

    // Approach 1 Using Stack
    // 1. first insert data 
    // 2. loop end 
    // 3. then pop and overwrite into DLL
    reverseDLL(){
        if(!this.head) return this.head

        if(this.head.next === null){
            return this.head;
        }

        let temp = this.head;
        let stack = [];

        while(temp){ // O(n)
            stack.push(temp.data)
            temp = temp.next;
        }

        temp = this.head;

        while(temp){ // O(n)
            temp.data = stack.pop()
            temp = temp.next;
        }
        // T.C = O(n + n)
        //S.C = O(n)
    }

    reverseOptimize(){
        if(!this.head) return this.head

        if(this.head.next === null){
            return this.head;
        }

        let curr = this.head;
        let temp = null;

        while(curr){
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }
        if(temp){
            this.head = temp.prev
        }

    }

    print(){
        let result = "";

        let temp = this.head;

        while(temp){
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

// list.reverseDLL()
list.reverseOptimize()

list.print()