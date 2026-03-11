// 83. Remove Duplicates from Sorted List

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = null;
    }

    // Insert at at Tail
    insertAtTail(data){
        let newNode = new Node(data)

        if(this.head === null){
            return this.head = newNode
        }

        let temp = this.head;

        while(temp.next){
            temp = temp.next;
        }
        temp.next = newNode;
        return this.head;
    }

    // Remove Duplicated

    remove(){
        if(!this.head || !this.head.next) return this.head

        let temp = this.head;

        while(temp.next){
            if(temp.next.data === temp.data){
                temp.next = temp.next.next;
            }else{
                temp = temp.next;
            }
            
        }
        return this.head;
    }

    // print
    print(){
        let result = "";

        let temp = this.head;
        while(temp){
            result += temp.data + " -> "
            temp = temp.next;
        }
        result += "null"
        console.log(result)
    }
}

let list = new LinkedList()

list.insertAtTail(10)
list.insertAtTail(20)
list.insertAtTail(30)
list.insertAtTail(30)
list.insertAtTail(40)

list.remove()

list.print()