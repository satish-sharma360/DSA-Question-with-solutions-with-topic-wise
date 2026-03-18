class Stack {
    constructor(size) {
        this.size = size;
        this.arr = new Array(size);
        this.top = -1;
    }

    // push
    push(value) {
        if (this.top === this.size - 1) {
            console.log("Stack overFlow")
            return;
        }

        this.top++;
        this.arr[this.top] = value;
        return;
    }

    //pop
    pop() {
        if (this.top === -1) {
            console.log("Stack Underflow");
            return;
        }
        let removed = this.arr[this.top]
        delete this.arr[this.top];
        this.top--;
        return removed;
    }

    // FindMid
    findMid(count = 0, mid = Math.floor((this.top + 1) / 2)) {
        if (this.top === -1) {
            return;
        }

        if (count === mid) {
            this.pop()
            return;
        }

        let temp = this.pop()
        this.findMid(count + 1, mid)
        this.push(temp)
    }
    deleteMid() {
        let mid = Math.floor(this.top / 2);
        let temp = [];

        for (let i = 0; i <= this.top; i++) {
            if (i !== mid) {
                temp.push(this.arr[i])
            };
        }
        this.top = -1
        for (let i = 0; i < temp.length; i++) {
            this.push(temp[i]);
        }
    }
    print() {
        console.log(this.arr.slice(0, this.top + 1))
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
stack.findMid()
stack.print()