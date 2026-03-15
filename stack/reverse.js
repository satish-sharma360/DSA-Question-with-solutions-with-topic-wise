class Stack{
    constructor(size){
        this.size = size;
        this.arr = new Array(size);
        this.top = -1;
    }

    // push
    push(value){
        if(this.top === this.size - 1){
            console.log("Stack OverFlow")
            return;
        }
        this.top++;
        this.arr[this.top] =value;
    }

    pop(){
        if(this.top === -1){
            console.log("Stack Under Flow")
            return
        }
        let removed = this.arr[this.top]
        delete this.arr[this.top]
        this.top--;
        return removed
    }

    insertAtButtom(value){
        if(this.top === -1){
            this.push(value)
            return
        }

        let temp = this.pop()
        this.insertAtButtom(value)
        this.push(temp)
    }

    reverse(){
        if(this.top === 0){
            return
        }
        let temp = this.pop()

        this.reverse()
        this.insertAtButtom(temp) 
    }

    print(){
        console.log("************* Stack ***************")
        console.log(this.arr)
    }
}

let stack = new Stack(6)

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)

stack.print()
stack.reverse()
stack.print()





















let s = [];
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);



function insertAtButtom(s , totalSize, top){
    if (totalSize === 0) {
        s.push(top)
        return
    }

    let temp = s.pop();
    insertAtButtom(s , totalSize - 1, top)
    s.push(temp)
}

function reverse(stack){
    if (stack.length === 0) {
        return;
    }

    let temp = stack.pop();
    reverse(stack);

    insertAtButtom(stack , stack.length , temp)
}
// console.log(s)

reverse(s)
// console.log(s)