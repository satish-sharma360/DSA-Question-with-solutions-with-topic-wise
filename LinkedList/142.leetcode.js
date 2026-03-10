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

    // Brute Forch Approach
    detectCycle() {
        let visited = new Set();

        let temp = this.head;

        while (temp) {
            if (visited.has(temp)) {
                return temp.data;
            }
            visited.add(temp);
            temp = temp.next;
        }
        return null
    }
    // optimize Approach
    detectCycleOptimize() {

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) {
                
                slow = this.head;

                while (slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow.data
            }
        }
        return null;
    }
}

let list = new MyLinkedList();

list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)
list.addNode(50)

let temp = list.head;

while (temp.next) {
    temp = temp.next;
}
temp.next = list.head.next;

console.log(list.detectCycle())
console.log(list.detectCycleOptimize())


