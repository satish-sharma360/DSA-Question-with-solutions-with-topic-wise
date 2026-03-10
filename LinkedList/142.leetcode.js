// 142. Linked List Cycle II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 206 reverse a linked list


/*
 Approach
 take a curr point on head
 then reversing its connection
 like curr = head now 1.next point null
 and move curr

 for this take three pointer
 prev = before curr is prev = null
 curr = head move until null
 next = next of curr ka next = curr.next
prev  curr   next
       1 --> 2 --> 3 --> null

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null
    let curr = head;
    let next = null;

    while (curr) {
        next = curr.next  // next now at 2
        curr.next = prev; // 1 point to null
        prev = curr;    // prev now on 1
        curr = next;    // 1 = 2
    }
    return prev
};

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

    // Brute force 
    reverseList() {
        let stack = [];

        if (this.head === null) return head;
        if (this.head.next === null) return head;

        let temp = this.head;
        while (temp) {
            stack.push(temp.data)
            temp = temp.next;
        }
        temp = this.head;
        while (temp) {
            temp.data = stack.pop()
            temp = temp.next;
        }
    }

    // optimize

    reverseOptimize(){

        if (this.head === null) return this.head;
        if (this.head.next === null) return this.head;

        let curr = this.head;
        let next = null;
        let prev = null;

        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev
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

