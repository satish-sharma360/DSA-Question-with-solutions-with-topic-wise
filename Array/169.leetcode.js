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


var majorityElement = function (nums) {
    nums.sort((a,b)=> a - b)

    let n = nums.length;
    let count = 1;           // first element count
    let candidate = nums[0];

    if(n == 1){
        return candidate //for nums = [1]
    }

    for(let i = 1; i < n; i++){

        if(nums[i] === nums[i - 1]){
            count++
        }else{
            candidate = nums[i]
            count = 1
        }
        
        if(Math.floor(n/2) < count){
            return candidate
        }
    }
};
// T.C -> O(nlogn)



var majorityElement = function (nums) {

    let n = nums.length;
    let count = 0; 
    let elem;

    for(let i = 0; i < n; i++){
        if(count === 0){
            elem = nums[i]
        }
        if(elem == nums[i]){
            count++
        }else{
            count--
        }
    }

    let count1 = 0;

    for(let i = 0; i < n; i++){
        if(nums[i] == elem){
            count1++
        }
    }
    if(count1 > Math.floor(n/2)) return elem
};

//T.C -> O(n)