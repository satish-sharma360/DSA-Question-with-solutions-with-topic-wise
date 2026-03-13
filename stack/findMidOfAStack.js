// find middle element of a stack

class Stack {
    constructor(size) {
        this.size = size;
        this.arr = new Array(size);
        this.top = -1;
    }

    // push
    push(value) {
        if (this.top >= this.size - 1) {
            return `Stack OverFlow`
        }
        this.top++;
        return this.arr[this.top] = value;
    }

    // pop
    pop() {
        if (this.top <= -1) {
            return `Stack UnderFlow`
        }
        let removed = this.arr[this.top]
        this.top--;
        return removed;
    }

    findMiddle(curr = 0, mid = Math.floor((this.top + 1) / 2)) {
        if (this.top === -1) {
            return;
        }
        let temp = this.pop()

        if (curr === mid) {
            console.log(`Middle Element is ${temp}`)
            return;
        }

        this.findMiddle(curr + 1, mid)
        this.push(temp)
    }
}

let stack = new Stack(6);

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)

// stack.findMiddle()
// console.log(stack.findMiddle())

