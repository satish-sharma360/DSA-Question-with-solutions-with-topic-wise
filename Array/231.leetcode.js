// 231. Power of Two
/*
Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
*/

var isPowerOfTwo = function(n) {
    if( n == 1) return true
    else if((n % 2 != 0) || n < 1) return false
    return isPowerOfTwo(n/2)
};