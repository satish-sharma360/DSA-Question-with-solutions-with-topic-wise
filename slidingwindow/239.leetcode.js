// 239. Sliding Window Maximum

var maxSlidingWindow = function (nums, k) {
    let result = [];
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, nums[j])
        }
        result.push(max);
        max = -Infinity;
        if (i === nums.length - k) {

            return result
        }
    }
};