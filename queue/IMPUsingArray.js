// Implement Queue using Array

class myQueue {
    constructor(n) {
        // Define Data Structures
        this.n = n;
        this.array = new Array(n);
        this.front = 0;
        this.rear = 0;
    }

    isEmpty() {
        // Check if queue is empty
        return this.front === this.rear;
    }

    isFull() {
        return this.rear === this.n && this.front === 0;
    }

    enqueue(x) {
        if (this.isFull()) {
            // shift elements to reuse space
            if (this.front > 0) {
                let j = 0;
                for (let i = this.front; i < this.rear; i++) {
                    this.array[j++] = this.array[i];
                }
                this.rear = this.rear - this.front;
                this.front = 0;
            } else {
                return -1;
            }
        }

        this.array[this.rear++] = x;
    }

    dequeue() {
        // Dequeue
        if (this.isEmpty()) {
            return -1;
        } else {
            let removed = this.array[this.front];
            this.array[this.front] = -1;
            this.front++;
            if (this.rear === this.front) {
                this.front = 0;
                this.rear = 0;
            }
            return removed;
        }
    }

    getFront() {
        // Get front element
        if (this.isEmpty()) return -1;
        return this.array[this.front]
    }

    getRear() {
        // Get rear element
        if (this.isEmpty()) return -1;
        return this.array[this.rear - 1]
    }
}

let queue = new myQueue(6);
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
console.log(queue.dequeue())  
//61449  2600062