
class StackWithArray{
    constructor(){
        this.item = []
    }

    // push
    push(data){
        this.item.push(data);
    }

    // pop
    pop(){
        if(this.isEmpty()) return null;

        return this.item.pop();
    }

    // Is Empty
    isEmpty(){
        return this.item.length === 0;
    }

    // peek
    peek(){
        if(this.isEmpty()) return null;
        return this.item[this.item.length - 1]
    }

    // size
    size(){
        return this.item.length;
    }
}


// use without array use core thing

class Stack{
    constructor(){
        this.data = {};
        this.count = 0
    }

    // push an element into top

    push(element){
        this.data[this.count] = element;
        this.count++;
    }

    // pop top element
    pop(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        const removed = this.data[this.count]
        delete this.data[this.count];
        return removed
    }

    //get top element
    top(){
        if(this.count === 0){
            return undefined;
        }
        return this.data[this.count - 1]
    }

    // Check if stack is empty
    isEmpty(){
        return this.count === 0;
    }

    // return length
    size(){
        return this.count;
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)