
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
    // pop
    pop() {
        if (this.top === -1) {
            console.log("Stack underFlow")
            return;
        }
        let removed = this.arr[this.top]
        delete this.arr[this.top];
        this.top--;
        return removed;
    }

    // sort Stack
    sortedInsert(val) {
        if (this.top === -1) {
            this.push(val)
            return
        }

        if (this.arr[this.top] < val) {
            this.push(val)
            return;
        }

        let temp = this.pop()

        this.sortedInsert(val)

        this.push(temp)
    }
    sortStack() {
        // base case
        if (this.top === -1) {
            return;
        }
        let temp = this.pop()
        this.sortStack()
        this.sortedInsert(temp)
    }

    // print
    print() {
        console.log("********** Stack Sorted ************")
        console.log(this.arr.slice(0, this.top + 1))
    }
}

let stack = new Stack(6);
stack.push(10)
stack.push(40)
stack.push(20)
stack.push(70)
stack.push(90)
stack.push(30)
console.log("********* Before Sort **********")
stack.print()
console.log("********* After Sort **********")
stack.sortStack()
stack.print()

/**
 * ✅ Time Complexity (Important 🔥)
 *  👉 sortStack() runs n times

 *  Each time it calls sortedInsert()

 *  👉 sortedInsert() worst case:

 *  Goes through entire stack → O(n)
 * 👉 O(n²)
 * 
 * 💾 Space Complexity:

 * 👉 O(n)
 */