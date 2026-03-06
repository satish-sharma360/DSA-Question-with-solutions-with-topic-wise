// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


function firstPosition(nums , target){
    let start = 0 , end = nums.length - 1;
    let ans = -1
    while(start <= end){
        let mid = start + Math.floor((end - start)/2);

        if(nums[mid] === target){
            ans = mid;
            end = mid -1;
        }else if(nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1
        }
    }
    return ans
}
function lastPosition(nums , target){
    let start = 0 , end = nums.length - 1;
    let ans = -1
    while(start <= end){
        let mid = start + Math.floor((end - start)/2);

        if(nums[mid] === target){
            ans = mid;
            start = mid + 1
        }else if(nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1
        }
    }
    return ans
}

var searchRange = function(nums, target) {
    return [firstPosition(nums, target) ,lastPosition(nums, target)]
};
