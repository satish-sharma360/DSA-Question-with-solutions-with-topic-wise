// 540. Single Element in a Sorted Array

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

function singleNonDuplicate(nums){
    if(nums.length === 1) return -1
    if(nums[nums.length - 1] !== nums[nums.length - 2]) return nums[nums.length - 1];

    let low = 1;
    let high = nums.length - 1;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        // even Index
        if(mid % 2 === 0){
            if(nums[mid] === nums[mid + 1]){
                low = mid + 2;
            }else{
                high = mid - 1;
            }
        }else{//Odd index
            if(nums[mid] === nums[mid - 1]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
    }
    return nums[low];
}
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))
console.log(singleNonDuplicate([3,3,7,7,10,11,11]))