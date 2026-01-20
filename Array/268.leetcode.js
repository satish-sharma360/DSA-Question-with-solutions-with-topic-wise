// 268. Missing Number

/**
 Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

// +++++++++++++++++ Aproach One Sort then itreate ++++++++++++++++++++++++++++
var missingNumber = function(nums) {
    nums.sort((a,b) => a - b)

    // Case 1
    if (nums[0] !== 0) return 0;
    
    // Case 2
    if (nums[nums.length - 1] !== nums.length) return nums.length;
    
    // Case 3
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i){
            return i
        }
    }
};

// +++++++++++++++++++ Aproach two ++++++++++++++++++
/*
 1. calculate arrays sum 
 2. calculate sum 0th index to length of this array
 3. substract -> get missing element
*/
var missingNumaber = function (nums){
    let n = nums.length;

    let sum = (n * (n + 1))/2;
    let actualsum = 0

    for(let i = 0; i < nums.length; i++){
        actualsum += nums[i]
    }
    return sum - actualsum

}