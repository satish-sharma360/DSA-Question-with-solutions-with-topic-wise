
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
function FindMid(head){
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
var deleteMiddle = function(head) {
    // Brute force approach
    // if(!head || !head.next) return null
    // let mid = FindMid(head);

    // let temp = head;

    // while(temp && temp.next){
    //     if(temp.next === mid){
    //         temp.next = temp.next.next;
    //         break;
    //     }
    //     temp = temp.next;
    // }
    // return head

    // optimal approach
    if(!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    let prev = null;

    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = slow.next;
    return head;
};