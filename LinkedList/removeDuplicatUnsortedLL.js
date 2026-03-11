// Remove Duplicated from unsorted LL

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

    // Approach 1 :- nested loop
    RemoveUnsorted(){

        if(this.head === null || this.head.next === null){
            return this.head
        }

        let temp = this.head;
        while(temp){
            let curr = temp;
            while(curr.next){
                if(curr.next.data === temp.data){
                    curr.next = curr.next.next;
                }else{
                    curr = curr.next;
                }
            }
            temp = temp.next;
        }
        return this.head
    }

    RemoveUnsortedUsingMap(){
        if(this.head === null || this.head.next === null) return this.head;

        let visited = new Set();

        let temp = this.head;
        let prev = null;

        while(temp){
            if(visited.has(temp.data)){
                prev.next = temp.next;
            }else{
                visited.add(temp.data)
                prev = temp
            }
            temp = temp.next;
        }
        return this.head
    }

    RemoveUnsortedUsingSort(){
        let arr = []
        let temp = this.head;
        while(temp){
            arr.push(temp.data)
            temp = temp.next;
        }
        arr.sort((a,b) => a - b);

        let unique = [];
        for(let i = 0; i < arr.length; i++){
            if(i === 0 || arr[i] !== arr[i - 1]){
                unique.push(arr[i])
            }
        }

        this.head = null;
        for(let val of unique){
            this.insertAtTail(val)
        }
        return this.head
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

list.insertAtTail(4)
list.insertAtTail(1)
list.insertAtTail(1)
list.insertAtTail(4)
list.insertAtTail(2)
list.insertAtTail(7)

// list.RemoveUnsorted()
list.RemoveUnsortedUsingSort()

list.print()
