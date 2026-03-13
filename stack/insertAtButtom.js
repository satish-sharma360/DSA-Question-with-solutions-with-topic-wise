class Stack{
    constructor(size){
        this.size = size;
        this.arr = new Array(size);
        this.top = -1;
    }
    // push
    push(value){
        if(this.top === this.size - 1){
            console.log("Stack over flow")
            return
        }
        this.top++;
        this.arr[this.top] = value
        return;
    }

    // pop
    pop(){
        if(this.top === -1){
            console.log("Stack Under Flow")
            return;
        }
        let removed = this.arr[this.top]
        delete this.arr[this.top];
        this.top--;
        return removed;
    }

    // Check is empty
    isEmpty(){
        return this.top === -1
    }

    // insert At Buttom
    insertAtButton(value){
        if(this.isEmpty()){
            this.push(value)
            return
        }
        let temp = this.pop()
        this.insertAtButton(value)
        this.push(temp)
    }
    print(){
        console.log(this.arr)
    }

    // insert At Buttom Iterative
    insertAtButomIte(value){
        let temp = [];

        while(!this.isEmpty()){
            temp.push(this.pop())
        }
        this.push(value)

        while(temp.length > 0){
            this.push(temp.pop())
        }
    }
}

let stack = new Stack(6)

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.insertAtButomIte(5)
stack.pop()


stack.print()