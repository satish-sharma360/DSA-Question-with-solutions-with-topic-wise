//234. Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Brute force Approach 

    // let arr = [];
    // while( head != null){
    //     arr.push(head.val);
    //     head = head.next
    // }

    // let left = 0;
    // let right = arr.length - 1

    // while(left < right){
    //     if(arr[left] != arr[right]){
    //         return false
    //     }
    //     left++
    //     right--
    // }
    // return true

    // Optimize Approach

    if(head === null || head.next === null) return true;

    let slow = head;
    let fast = head;

    // find middle
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let curr = slow;
    let next = null;
    let prev = null;

    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let first = head;
    let second = prev;

    while(second){
        if(first.val !== second.val){
            return false;
        }
        second = second.next;
        first = first.next
    }
    return true

};