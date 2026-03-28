// implement queue using linked list

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.rear = null;
    }

    // push
    push(val){
        let newNode = new Node(val)

        if(this.head === null){
            this.head = newNode
            this.rear = newNode
            return;
        }

        this.rear.next = newNode;
        this.rear = newNode;
    }

    // pop (dequeue)
    pop(){
        if(this.head === null){
            console.log("No elemet")
            return;
        }

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;

        if (this.head === null) {
            this.rear = null
        }
        return;
    }
    // front
    front(){
        return this.head.data;
    }

    print(){
        let result = "";
        let temp =this.head;

        while(temp){
            result += temp.data + " , ";
            temp = temp.next;
        }
        console.log(result + "null")
    }

}

const queue = new Queue()

queue.push(10)
queue.push(20)
queue.push(30)
queue.push(40)
queue.pop()

queue.print()
