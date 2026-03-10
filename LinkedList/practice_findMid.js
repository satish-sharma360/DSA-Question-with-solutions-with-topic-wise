// 876. Middle of the Linked List



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

    findMid(){
        let slow = this.head;
        let fast = this.head;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        // console.log(slow.data)
        return slow? slow.data : null

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

list.print()
console.log(list.findMid())
