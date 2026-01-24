//876. Middle of the Linked List

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