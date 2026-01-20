// 283. Move Zeroes

/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/
var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    while(j < nums.length){
        if(nums[j] != 0){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
        j++
    }
};