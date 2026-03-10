
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
    }

    // Insert At tail;
    insertAtTain(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let temp = this.head;

        while(temp.next){
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
    }

    // Insert At Head;
    insertAtHead(data){
        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    // Insert At Kth position
    insertAtKthPosition(data , k){
        let newNode = new Node(data);

        if(k === 1){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            return;
        }

        let count =  1
        let temp = this.head;

        while(temp && count < k - 1){
            temp = temp.next;
            count++;
        }

        if(temp){
            newNode.next = temp.next;
            newNode.prev = temp;

            if(temp.next){
                temp.next.prev = newNode;
            }
            temp.next = newNode;
        }
    }

    insertBeforeValues(data,x){
        let newNode = new Node(data);

        if(this.head === null){
            return this.head;
        }

        if(this.head.data === x){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            return;
        }

        let temp = this.head;

        while(temp.next){
            if(temp.next.data === x){
                console.log("hello")
                console.log(temp.next.data)
                newNode.next = temp.next;
                temp.next.prev = newNode;
                temp.next = newNode;
                newNode.prev = temp;
                return;
            }
            temp = temp.next;
        }

    }

    // Print DLL
    print(){
        let result = "";

        let temp = this.head;

        while(temp){
            result += temp.data + " <-> ";
            temp = temp.next;
        }

        result += "null"
        console.log(result)
    }
}

let list = new DoublyLinkedList()

list.insertAtTain(10)
list.insertAtTain(20)
list.insertAtTain(30)
list.insertAtTain(40)
list.insertAtTain(50)

list.insertAtHead(5)

list.insertAtKthPosition(25 ,7)

list.insertBeforeValues(1 , 50)

list.print()