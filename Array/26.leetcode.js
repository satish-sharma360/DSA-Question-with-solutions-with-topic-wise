// 26.Remove Duplicates from Sorted Array


/* Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
//non-decreasing order -> [1,9,12,15,70] -> a[i +1] < a[i]
//Sorted non-decreasing order -> means duplicates values -> [1, 1, 2, 3, 3, 3, 4, 4, 5, 8, 9] -> a[i +1] >= a[i]

//in-place -> chnage this array dont create new array just modify this array

// [0,0,1,1,1,2,2,3,3,4]

// ########### Two Pointer Aproach ################
// First pointer -> find outr all unique elements
// Second pointer -> find where element shound be place

function removeDuplicates(nums) {

    if (nums.length === 0) return 0;
    let i = 0;
    let j = 1;

    while (j < nums.length) {
        if (nums[i] < nums[j]) {
            i++
            nums[i] = nums[j]
        }
        j++
    }
    return i + 1
//     We return i + 1 because i is an index, not a count.
// The number of unique elements = last index + 1.
// index start from 0
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))


// var removeDuplicates = function(nums) {
//     let x = 0
    // if(nums.length === 0) return 0
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] > nums[x]){
    //         x++
    //         nums[x] = nums[i]
    //     }
    // }
    // return x + 1
// };
