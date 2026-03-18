class Stack{
    constructor(){
        this.data = {};
        this.count = 0;
    }

    // push
    push(element){
        this.data[this.count] = element;
        this.count++;
        return;
    }
    pop(){
        if(this.count === 0){
            return
        }
        this.count--
        let removed = this.data[this.count]
        delete this.data[this.count]
        return removed
    }

    top(){
       if(this.count === 0){
            return
        }
        return this.data[this.count - 1]
    }

    reversed(){
        let result = "";

        while(this.count > 0){
            result += this.top()
            this.pop()
        }
        console.log(result)
        return;
    }
}

// let stack = new Stack()
// stack.push('s')
// stack.push('a')
// stack.push('t')
// stack.push('i')
// stack.push('s')
// stack.push('h')

// stack.reversed()



class String{
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
            console.log("Stack underflow")
            return;
        }

        let removed = this.arr[this.top]
        delete this.arr[this.top];
        this.top--;
        return removed;
    }

    reverse(){
        let result = "";
        while(this.top !== -1){
            result += this.pop();
        }
        console.log(result);
        return;
    }

    insertAtButtom(value){
        if(this.top === -1){
            this.push(value)
            return;
        }
        let temp = this.pop();
        this.insertAtButtom(value);
        this.push(temp);
    }
    reverserecursive(){
        if(this.top === -1){
            return;
        }
        let temp = this.pop()
        this.reverserecursive()
        this.insertAtButtom(temp)
    }

    // print
    print(){
        console.log("*********** Stack ***********")
        console.log(this.arr.slice(0,this.top + 1))
    }

}

let stack = new String(6)
stack.push('s')
stack.push('a')
stack.push('t')
stack.push('i')
stack.push('s')
stack.push('h')
console.log("************ Reverse String **************")
stack.reverserecursive()
stack.print()


