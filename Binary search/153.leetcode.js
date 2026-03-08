// 153. Find Minimum in Rotated Sorted Array

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


function Search(nums){
    let low = 0;
    let high = nums.length - 1;
    let ans = Infinity;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        // Left sorted part
        if(nums[low] <= nums[mid]){
            ans = Math.min(nums[low] , ans);
            low = mid + 1
        }else{ // Right sorted part
            ans = Math.min(nums[mid] , ans);
            high = mid - 1;
        }
    }
    return ans
}
console.log(Search([3,4,5,1,2]))
console.log(Search([4,5,6,7,0,1,2]))
console.log(Search([11,13,15,17]))