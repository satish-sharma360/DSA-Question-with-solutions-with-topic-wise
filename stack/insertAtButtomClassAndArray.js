class Stack{
    constructor(size){
        this.size = size;
        this.arr = new Array(size);
        this.top = -1;
    }

    // Insert data
    push(value){
        if(this.top === this.size - 1){
            console.log("Stack Full")
            return `Over Flow`
        }

        this.top++;
        this.arr[this.top] = value;
        return;
    }

    // pop
    pop(){
        if(this.top === -1){
            console.log("Stack under Flow")
            return `Stack Under Flow`
        }

        let removed = this.arr[this.top]
        delete this.arr[this.top]
        this.top--;
        return removed;
    }

    // insert At Buttom
    insertAtButtom(value){

        if (this.top === -1) {
            this.push(value)
            return;
        }

        let temp = this.pop()
        this.insertAtButtom(value)
        this.push(temp)

    }

    // print
    print(){
        console.log("************* Stack **************")
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
stack.insertAtButtom(5)
stack.print()



function insertAtButtom(stack , totalSize , top){
    // base case
    if(totalSize === 0){
        stack.push(top)
        return;
    }

    let temp = stack.pop();
    insertAtButtom(stack , totalSize - 1, top)
    stack.push(temp)
}
let s = [];
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.push(60)

let top = s.pop()
insertAtButtom(s , s.length ,top)
// console.log(s)


