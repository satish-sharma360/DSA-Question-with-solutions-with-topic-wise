// Length of Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }
    addNode(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    length() {
        let count = 0;

        let temp = this.head;

        if (temp.next === null) return 1;

        while (temp !== null) {
            count++;
            temp = temp.next
        }
        return count
    }

    search(target) {
        let temp = this.head;

        if (temp.data === target) {
            console.log(true)
            return
        }

        while (temp !== null) {
            if (temp.data === target) {
                console.log(true)
                return
            }
            temp = temp.next;
        }
        console.log(false)
        return
    }

    print() {
        let temp = this.head;
        let result = "";

        while (temp !== null) {
            result += temp.data + "->"
            temp = temp.next;
        }
        result += "null"

        console.log(result)
    }
}

let list = new MyLinkedList();

list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)

list.print()
list.search(40)

console.log("Length: ", list.length())
