// 189. Rotate Array

function reverseArray(nums, i, j) {
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
}
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    // Step 1: Reverse whole array
    reverseArray(nums, 0, n - 1);

    // Step 2: Reverse first k elements
    reverseArray(nums, 0, k - 1);

    // Step 3: Reverse remaining elements
    reverseArray(nums, k, n - 1);
    return nums
};

console.log(rotate([1,2,3,4,5,6,7] , 3))