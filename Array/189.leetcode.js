// 189. Rotate Array


let rotateByD = function(arr , d){
    let temp = []

    d = d % arr.length;
    
    for (let i = 0; i < arr.length; i++) {
        temp[(i + d)% arr.length] = arr[i]
        // start from dth postion
        // d = 4
        // [nums[0],nums[1] ...]
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = temp[i]
        // fills starting position 
        //startng position nothing means at start 
    }
    return arr
}




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

console.log(rotateByD([1,2,3,4,5,6,7] , 3))