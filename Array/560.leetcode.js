// 560. Subarray Sum Equals K

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

var subarraySum = function (nums, k) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        if (sum === k) {
            count++
        }
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            if (sum === k) {
                count++
            }
        }
    }
    return count

};
