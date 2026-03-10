// 141. Linked List Cycle

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow) return true
    }
    return false
};

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    addNode(data){
        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode
            return;
        }

        let temp = this.head;

        while(temp.next !== null){
            temp = temp.next
        }
        temp.next = newNode;
    }

    detectCycle(){
        let visited = new Set() // i am storing reference not value
        let temp = this.head;

        while(temp){ // O(n)
            if(visited.has(temp)){  //O(1)
                return true // cycle found
            }
            visited.add(temp) // O(1)
            temp = temp.next;
        }
        return false
        // S.C => O(n)
    }

    // optimize way
    detectCycleOptimize(){
        let slow = this.head;
        let fast = this.head;

        while(fast.next && fast){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true;
        }
        return false;
    }

    print(){
        let temp = this.head;
        let result = "";

        while(temp !== null){
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null"
        console.log(result)
    }

}

let list = new LinkedList();

list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)
list.addNode(50)

// create cycle
let temp = list.head;

while(temp.next !== null){
    temp = temp.next;
}
temp.next = list.head.next.next;

// list.print()  dont print it goes into infinite loop 

console.log(list.detectCycle())
console.log(list.detectCycleOptimize())

