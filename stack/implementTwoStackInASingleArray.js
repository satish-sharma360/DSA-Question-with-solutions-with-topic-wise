// implement two stack in a single Array

/**
 * i two array
 * i will insert first arr from left side
 * and second arr from right side
 * check if top1 < top2 - 1 then insert
 * prevent memory wastage
 */

class Stack {
    constructor(size) {
        this.size = size;
        this.arr = new Array(size);
        this.top1 = -1;
        this.top2 = size;
    }

    // push in Stack One
    push1(value) {
        if (this.top1 < this.top2 - 1) {
            this.top1++
            this.arr[this.top1] = value
            return;
        }else{
            console.log("Stack is overFlow")
        }
    }
    push2(value){
        if(this.top1 < this.top2 - 1){
            this.top2--;
            this.arr[this.top2] = value;
            return
        }else{
            console.log("Stack is overFlow")
        }
    }

    // pop from stack One
    pop1(){
        if(this.top1 === -1){
            return `stack underFlow`
        }
        let removed = this.arr[this.top1];
        this.top1--
        return removed;
    }

    // pop From stack two
    pop2(){
        if(this.top2 === this.size){
            return `stack underFlow`
        }
        let removed = this.arr[this.top2]
        this.top2++;
        return removed;
    }
    print(){
        console.log("********* Printing Stake One *********")
        console.log(this.arr.slice(0 , this.top1 + 1))
        console.log()
        console.log("********* Printing Stake two *********")
        console.log(this.arr.slice(this.top2 , this.size))
        console.log()
    }
}

const stackOne = new Stack(6)

stackOne.push1(10)
stackOne.push1(20)
stackOne.push1(30)
stackOne.pop1()

stackOne.push2(1)
stackOne.push2(2)
stackOne.pop2()
stackOne.push2(3)

stackOne.print()

