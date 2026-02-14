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

let rotateByDPlace = function (arr , k) {
    k = k % arr.length
    let temp = []
    // Push last k elements
    for(let i = arr.length - k ; i < arr.length; i++){
        temp.push(arr[i])
        // temp = [5 , 6, 7]
    }

    // Push remaining elements
    for (let i = 0; i < arr.length - k ; i++) {
        temp.push(arr[i])
        // already temp = [5 , 6, 7]
        // temp = [1,2,3,4]
        // now temp = [5 , 6 ,7 ,1,2,3,4]
    }

    // copy back
    for(let i = 0; i < arr.length; i++){
        arr[i] = temp[i]
    }
    // Both
    // return temp
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

console.log(rotateByDPlace([1,2,3,4,5,6,7] , 3))




// same question on GFG there is opposite constrain

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 */

class Solution {
    reverse(arr , i , j){
        while(i < j){
            [arr[i] , arr[j]] = [arr[j] , arr[i]]
            i++;
            j--;
        }
        return arr
    }
    leftRotate(arr, k) {
        // code here
        k = k % arr.length;
        
        
        // reverse start to k index
        this.reverse(arr , 0 , k - 1)
        
        // reverse from k to end
        this.reverse(arr, k, arr.length - 1)
        
        // Reverse first whole array
        this.reverse(arr , 0 , arr.length - 1);
        
        return arr
    }
}
let obj = new Solution();
console.log(obj.leftRotate([1,2,3,4,5,6,7] , 3))