// 136. Single Number

/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

 
*/

// ******** First Approach sorting **********************
var singleNumber = function(nums) {
    nums.sort((a,b) => a - b)
    for(let i = 0; i < nums.length; i += 2){
        if(nums[i] !== nums[i+1]){
            return nums[i]
        }
    }
    return -1

};
// ******** Bit Manipulation **********************

var singleNumber = function(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;

};