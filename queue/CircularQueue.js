//  implement Circular Queue

class CircularQueue{
    constructor(size){
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    // check id Queue is Empty
    isEmpty(){
        return this.front === -1;
    }

    // check id Queue is full
    isFull(){
        return (this.rear + 1) % this.size === this.front;
    }

    // Enqueue (insert element)
    enqueue(val){
        if (this.isFull()) {
            console.log("Queue Full")
            return;
        }
        // first Elemet
        if(this.isEmpty()){
            this.front++;
            this.rear++;
        }else{
            this.rear = (this.rear + 1) % this.size;
        }
        this.queue[this.rear] = val
    }

    // dequeue
    dequeue(){
        if (this.isEmpty()) {
            console.log("Queue Empty")
            return;
        }
        let removed = this.queue[this.front];

        // if Only one elemet left
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = (this.front + 1) % this.size;
        }
        return removed;
    }

    //peek front element
    peek(){
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.front]
    }

    // Display queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        let i = this.front;
        let result = "";

        while (true) {
            result += this.queue[i] + " ";
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }

        console.log(result);
    }
}

let q = new CircularQueue(5);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.print();   // 10 20 30 40 50

q.dequeue();
q.dequeue();

q.enqueue(60);
q.enqueue(70);

q.print();   // 30 40 50 60 70