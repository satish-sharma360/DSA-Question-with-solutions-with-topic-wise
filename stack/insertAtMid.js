class Stack{
    constructor(size){
        this.size = size;
        this.arr = new Array(size);
        this.top = -1;
    }

    // push
    push(value){
        if(this.top === this.size - 1){
            console.log("Stack Overflow")
            return;
        }

        this.top++;
        this.arr[this.top] = value;
        return;
    }

    // pop
    pop(){
        if(this.top === -1){
            console.log("Stack underFlow")
            return;
        }

        let removed = this.arr[this.top];
        delete this.arr[this.top]
        this.top--
        return removed;
    }

    insertAtMid(value, curr = 0 , mid = Math.floor((this.top + 1)/2)){
        console.log(this.top)
        if(curr === mid){
            this.push(value)
            return;
        }

        let temp = this.pop();
        this.insertAtMid( value ,curr + 1 , mid)
        this.push(temp)
    }

    print(){
        console.log("*********** Stack *********")
        console.log(this.arr)
    }
}

let stack = new Stack(6)

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.print()
stack.insertAtMid(25)
stack.print()