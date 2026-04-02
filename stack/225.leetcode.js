// // Implement Stack Using Queue

// Algo
//we take two Queue
// first push(1)
// second push(2)
// now queue FIFO but Stack LIFO so when again push 1 at rear but i want 2 at front

// so i will use two Queue here first 1 push in first queue when 2 push then i will first copy all thing from first queue and put second queue and thrn push(2) into first queue and again copy all thing from second queue and put queue one  

//Steps
//  -> push(1)
//  -> push(2)
// 1 -> Q1 element ----> (Copy)  Q2
// 2 -> Q1 Push(data)
// 3 -> Q2 element ----> (Copy)  Q1

class Queue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return (this.rear + 1) % this.size == this.front
    }

    isEmpty() {
        return this.front === -1;
    }

    // push
    enqueue(val) {
        if (this.isFull()) {
            console.log("Queue is full")
            return;
        }

        // first element push
        if (this.front === -1) {
            this.front++;
            this.rear++;
        } else {
            this.rear = (this.rear + 1) % this.size
        }
        this.queue[this.rear] = val;
        return;
    }

    // pop
    dequeue() {
        if (this.front === -1) {
            console.log("Queue is Empty")
            return;
        }
        // if there is single element
        let removed = this.queue[this.front]

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return removed;
    }

    peek() {
        return this.front === -1 ? null : this.queue[this.front]
    }
}

class Stack {
    constructor(size) {
        this.q1 = new Queue(size)
        this.q2 = new Queue(size)
    }

    // push
    push(val) {
        if (this.q1.isFull()) {
            console.log("Stack Overflow");
            return;
        }
        
        // step 1: move all element from q1 -> q2
        while (this.q1.isEmpty()) {
            this.q2.enqueue(this.q1.dequeue());
        }

        // step 2: push new Element into q1
        this.q1.enqueue(val)

        // step 3: move back all element q2 -> q1

        while (this.q2.isEmpty()) {
            this.q1.enqueue(this.q2.dequeue())
        }
    }

    // pop
    pop() {
        return this.q1.dequeue()
    }

    // peek
    peek() {
        return this.q1.peek()
    }

    //isEmpty
    isEmpty() {
        return this.q1.front === -1;
    }
}



// Leet code solution 


var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift());
    }
    this.q1.push(x)
    while (this.q2.length !== 0) {
        this.q1.push(this.q2.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */