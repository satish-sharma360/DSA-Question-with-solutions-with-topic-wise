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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head;
    let next = null;

    while(curr){
        next = curr.next  // next now at 2
        curr.next = prev; // 1 point to null
        prev = curr;    // prev now on 1
        curr = next;    // 1 = 2
    }
    return prev
};