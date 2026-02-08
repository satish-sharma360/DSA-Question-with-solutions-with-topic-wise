//169. Majority Element

/*
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/
var majorityElement = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let count = 1 // nums[i] itself
        for (let j = i + 1; j < n; j++) {
            if (nums[i] == nums[j]) {
                count++
            }
        }
        if (count > Math.floor(n / 2)) {
            return nums[i];
        }
    }
};

// Time: O(n²)