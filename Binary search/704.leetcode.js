// 704. Binary Search

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

function Search(nums,target){
    let start = 0;
    let end = nums.length - 1;

    while(start < end){
        let mid = start + Math.floor((end - start)/2)

        if(nums[mid] === target) return mid;
        else if(nums[mid] > target) end = mid - 1;
        else start = mid + 1
    }
    return -1
}
console.log(Search([-1,0,3,5,9,12] ,9))
console.log(Search([-1,0,3,5,9,12] ,2))