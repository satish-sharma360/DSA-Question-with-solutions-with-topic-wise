// 283. Move Zeroes

/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

// Brute force approach

let BruteMoveZeros = function(nums){
    let temp = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            temp.push(nums[i]) // o(n)
        }
    }
    for(let i = temp.length - 1 ; i < nums.length; i++){
        temp.push(0) // o(n - d)
        // n = nums.length
        // d = number of non-zero elements
    }
    for(let i = 0; i < nums.length; i++){
        nums[i] = temp[i] // o(n)
    }
    return nums
//     T.C = O(n) + O(n) + O(n)
// = O(3n)
// = O(n)
}
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