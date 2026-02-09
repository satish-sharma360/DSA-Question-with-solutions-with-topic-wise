// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let seen = new Set();

    for(let i = 0; i < nums.length; i++){
        if(seen.has(nums[i])){
            return true
        }else{
            seen.add(nums[i])
        }
    }
    return false


    // const s = new Set(nums);

    // return s.size !== nums.length
};


var containsDuplicate = function(nums) {
    const s = new Set(nums);
    return s.size !== nums.length
};