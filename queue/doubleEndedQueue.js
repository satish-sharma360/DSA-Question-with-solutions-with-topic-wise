// Implement Duoble Ended Queue

class Queue{
    constructor(size){
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    isFull(){
        return (this.rear + 1) % this.size == this.front;
    }

    isEmpty(){
        return this.front == -1;
    }

    // Push from Right side
    pushRight(val){
        if (this.isFull()) {
            console.log("Queue is Full")
            return;
        }

        // Insert First element
        if(this.isEmpty()){
            this.front++;
            this.rear++;
        }else{
            this.rear = (this.rear + 1) % this.size;
        }

        this.queue[this.rear] = val;
        return;
    }

    // Push Left Side
    pushLeft(val){
        if (this.isFull()) {
            console.log("Queue is Full")
            return;
        }

        // Insert First element
        if(this.isEmpty()){
            this.front++;
            this.rear++;
        }else{
            this.front = (this.front - 1 + this.size) % this.size;
        }
        this.queue[this.front] = val
    }
    popLeft(){
        if (this.isEmpty()) {
            console.log("Queue is Empty")
            return;
        }
        let removed = this.queue[this.front]

        // if single element
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = (this.front + 1) % this.size;
        }

        return removed;
    }

    popRight(){
        if (this.isEmpty()) {
            console.log("Queue is Empty")
            return;
        }
        let removed = this.queue[this.rear]

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = (this.rear - 1 + this.size) % this.size
        }
        return removed;
    }

    // Peek front
    getFront() {
        if (this.isEmpty()) return -1;
        return this.arr[this.front];
    }

    // Peek rear
    getRear() {
        if (this.isEmpty()) return -1;
        return this.arr[this.rear];
    }
}