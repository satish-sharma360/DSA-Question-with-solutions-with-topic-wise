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

let stack = new Stack()
stack.push('s')
stack.push('a')
stack.push('t')
stack.push('i')
stack.push('s')
stack.push('h')

stack.reversed()

