//876. Middle of the Linked List

class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    // add node at end
    append(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode;
            return
        }

        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    // find Middle
    findMiddle(){
        let slow = this.head;
        let fast = this.head

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next
        }
        return slow? slow.data : null
    }
}

const list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)

console.log(list.findMiddle())
var middleNode = function(head) {
    if(head.next == null) return head
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next
    }
    return slow
};