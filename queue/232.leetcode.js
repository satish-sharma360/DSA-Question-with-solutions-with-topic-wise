// Implement Queue Using Stack
// leetcode 232

//same approach that i applied in Stack leetcode 225

class Stack{
    constructor(size){
        this.size = size;
        this.stack = new Array(size);
        this.top = -1;
    }

    isFull(){
        return this.top === this.size - 1;
    }

    isEmpty(){
        return this.top === -1;
    }

    // push
    pushStack(val){
        if (this.isFull()) {
            console.log("Stack is Full")
            return;
        }
        this.top++
        this.stack[this.top] = val;
        return;
    }

    //pop
    popStack(){
        if (this.isEmpty()) {
            console.log("Stack Empty")
            return;
        }

        let removed = this.stack[this.top]
        this.top--;
        return removed
    }
    peek(){
        return this.stack[this.top]
    }
}

class Queue{
    constructor(size){
        this.S1 = new Stack(size);
        this.S2 = new Stack(size);
    }

    // push
    push(val){
        // step 1: check stack is Full 
        if (this.S1.isFull()) {
            console.log("Queue Is Full")
            return
        }

        while(!this.S1.isEmpty()){
            this.S2.pushStack(this.S1.popStack())
        }
        this.S1.pushStack(val)

        while(!this.S2.isEmpty()){
            this.S1.pushStack(this.S2.popStack())
        }

    }

    pop(){
        if (this.S1.isEmpty()) {
            console.log("Empty")
            return;
        }
        return this.S1.popStack()
    }

    front(){
        if (this.S1.isEmpty()) {
            console.log("Empty")
            return;
        }
        return this.S1.peek()
    }
}


















var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(this.s1.length !== 0){
        this.s2.push(this.s1.pop())
    }
    this.s1.push(x)
    while(this.s2.length !== 0){
        this.s1.push(this.s2.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.s1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.s1[this.s1.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */