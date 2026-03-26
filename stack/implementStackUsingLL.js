// Implement Stack using Linked List

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.head = null;
    }


    // push
    push(value) {
        let newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    // pop
    pop(){
        if (this.head === null) {
            console.log("Stack Empty")
            return;
        }
        let temp = this.head;
        this.head = this.head.next;
        return temp.data
    }

    // peek
    peek(){
        if (this.head === null) {
            console.log("Stack Empty")
            return;
        }
        return this.head.data;
    }

    // isEmpty
    isEmpty(){
        return this.head === null;
    }

    Print(){
        // let temp = this.head;
        // let result = "";

        // while(temp){
        //     result += temp.data + " , ";
        //     temp = temp.next;
        // }
        // console.log(result)

        let result = [];

        while(this.head){
            result.push(this.peek())
            this.pop()
        }
        console.log(result.reverse())
    }
}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.pop()

stack.Print()