// 328. Odd Even Linked List

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:


// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

var oddEvenList = function(head) {
    
    let odd = [];
    let even = [];

    let temp = head;

    if(!head || !head.next) return head;

    let index = 1;

    while(temp){
        if(index % 2 === 1){
            odd.push(temp.val)
        }else{
            even.push(temp.val)
        }
        temp = temp.next;
        index++
    }
    let arr = odd.concat(even);

    temp = head;
    let i = 0;

    while(temp){
        temp.val = arr[i]
        i++;
        temp = temp.next;
    }
    return head

};

var oddEvenList = function(head) {

    if(!head) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(even && even.next){

        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
};   