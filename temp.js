
class Queue{
    constructor(size){
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    isFull(){
        return (this.rear + 1) % this.size === this.front;
    }

    push(val){
        if (this.isFull()) {
            console.log("Queu is full")
            return;
        }
        // push first val
        if (this.front === -1) {
            this.front++;
            this.rear++
        }else{
            this.rear = (this.rear + 1) % this.size;
        }
        this.queue[this.rear] = val;
        return;
    }

    pop(){
        if (this.front === -1) {
            console.log("Queue is Empty")
            return;
        }
        let removed = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = (this.front + 1) % this.size;
        }
        
        return removed;
    }

    peek(){
        return this.queue[this.front]
    }

    print(){
        if (this.front === -1) {
            console.log("Queue is Empty")
            return;
        }

        let i = this.front;
        let result = "";

        while(true){
            result += this.queue[i] + " ";
            if (i == this.rear) {
                break;
            }
            i = (i + 1) % this.size;
        }
        console.log(result)
    }
}

let q = new Queue(5);

q.push(10)
q.push(20)
q.push(30)
q.push(40)
q.pop()
q.pop()
q.push(50)
q.push(60)
q.push(70)
q.print()

// console.log(25 + 13 + 5 + 20 + 3 + 18 + 10 + 3)