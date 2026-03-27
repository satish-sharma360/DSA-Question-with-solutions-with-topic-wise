// Desing min Stack

class minStack{
    constructor(){
        this.stack = [];
        this.MinStack = [];
    }

    // Push
    push(val){
        this.stack.push(val)

        if (this.MinStack.length === 0 || this.MinStack >= val) {
            this.MinStack.push(val)
        }
    }

    // pop
    pop(){
        let removed = this.stack.pop()

        if(removed >= this.getMin()){
            this.MinStack.pop();
        }
    }

    top(){
        return this.stack[this.stack.length - 1]
    }

    getMin(){
        return this.MinStack[this.MinStack.length - 1]
    }
}

let Stack = new minStack()
Stack.push(5)   //-> stack: [5], minStack: [5]
Stack.push(3)   //-> stack: [5,3], minStack: [5,3]
Stack.push(7)   //-> stack: [5,3,7], minStack: [5,3]
Stack.push(3)   //-> stack: [5,3,7,3], minStack: [5,3,3]

Stack.pop()     //-> remove 3 → minStack also pop
Stack.pop()     //-> remove 7 → minStack unchanged

console.log(Stack.getMin())  //-> 3