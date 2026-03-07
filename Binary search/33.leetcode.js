// 33. Search in Rotated Sorted Array


// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1


function Search(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        //left half sorted
        if (nums[mid] >= nums[low]) {

            if (target >= nums[low] && nums[mid] > target) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else { // right half sorted
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}
console.log(Search([4,5,6,7,0,1,2] ,5))
console.log(Search([4,5,6,7,0,1,2] ,0))
console.log(Search([1] ,0))