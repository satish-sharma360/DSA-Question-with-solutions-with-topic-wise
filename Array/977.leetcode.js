// 977. Squares of a Sorted Array
/*
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

// 1. divide it into 2 array because pawer of less negative value is greate 
// 2. create seprate array + value and put square value
// 3. create seprate array - value and put square value in reverse order -> -7 , -4 -> 49,16 so keep reverse order
// 4. marget both and return
var sortedSquares = function(nums) {
    let lastNeg = -1;

    // find last negative index
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) lastNeg = i;
    }

    let negativeArray = [];
    let positiveArray = [];

    // squares of negatives (reverse order)
    for (let i = lastNeg; i >= 0; i--) {
        negativeArray.push(nums[i] * nums[i]);
    }

    // squares of positives
    for (let i = lastNeg + 1; i < nums.length; i++) {
        positiveArray.push(nums[i] * nums[i]);
    }

    // merge two sorted arrays
    let x = 0, y = 0;
    let result = [];

    while (x < negativeArray.length && y < positiveArray.length) {
        if (negativeArray[x] <= positiveArray[y]) {
            result.push(negativeArray[x++]);
        } else {
            result.push(positiveArray[y++]);
        }
    }

    while (x < negativeArray.length) {
        result.push(negativeArray[x++]);
    }

    while (y < positiveArray.length) {
        result.push(positiveArray[y++]);
    }

    return result;
};