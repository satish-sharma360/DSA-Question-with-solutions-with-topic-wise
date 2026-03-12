// Sort a linked List


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addAtTail(data) {

        let newNode = new Node(data)

        if (this.head === null) {
            return this.head = newNode;
        }

        let temp = this.head;

        while (temp.next) {
            temp = temp.next;
        }

        temp.next = newNode;
        return this.head;
    }

    findMid(head) {
        if (!head || !head.next) {
            return head;
        }

        let slow = head;
        let fast = head;

        while (fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    marge(left, right) {
        if (!left) return right;
        if (!right) return left;

        let temp;

        if (left.data < right.data) {
            temp = left;
            left = left.next;
        } else {
            temp = right;
            right = right.next;
        }
        let curr = temp;

        while (left && right) {
            if (left.data < right.data) {
                curr.next = left;
                left = left.next;
            } else {
                curr.next = right;
                right = right.next;
            }
            curr = curr.next;
        }

        // Remailning node
        if(left){
            curr.next = left;
        }else{
            curr.next = right;
        }

        return temp;
    }

    sortLL(head){
        if(head === null || head.next === null){
            return head;
        }

        let mid = this.findMid(head);
        let left = head;
        let right = mid.next;
        mid.next = null;

        let leftPart = this.sortLL(left);
        let rightPart = this.sortLL(right);
        let margetLL = this.marge(leftPart , rightPart)
        return margetLL
    }


    print() {
        let result = "";

        let temp = this.head
        while (temp) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null"
        console.log(result)
    }
}

let list1 = new LinkedList()

list1.addAtTail(4)
list1.addAtTail(2)
list1.addAtTail(1)
list1.addAtTail(3)

list1.head = list1.sortLL(list1.head);

list1.print()
