// 162. Find Peak Element

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

function findPeakElement(nums){
    let n = nums.length;

    if(n === 1) return 0;
    if(nums[0] > nums[1]) return 0;
    if(nums[n - 1] > nums[n - 2]) return nums[n - 1];

    let low = 1;
    let high = n - 2;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]){
            return mid;
        }
        if(nums[mid] > nums[mid - 1]){
            low = mid + 1;
        }else{
            high = mid + 1;
        }
    }
}
console.log(findPeakElement([1,2,3,1]))
console.log(findPeakElement([1,2,1,3,5,6,4]))