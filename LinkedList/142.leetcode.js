// 142. Linked List Cycle II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow){
            slow = head; // now slow pointer point my head now means my initial position
            while(slow != fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow
        }
        
    }
    return null
};