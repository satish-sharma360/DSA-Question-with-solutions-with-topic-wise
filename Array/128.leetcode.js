function longestConsecutive(nums) {
    // BruteForce
    let max = 0;

    for(let i = 0; i < nums.length; i++){
        let count = 1;
        let current = nums[i]
        for(let j = 0; j < nums.length; j++){
            if(current + 1 === nums[j]){ // 100 === nums[j] menas curent++ now check for 101 in array
                count++
                current++ 
                j = -1
            }
        }
        max = Math.max(count , max)
    }
    return max
};


console.log(longestConsecutive([100,4,200,1,3,2]))


// better Approach

var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b)

    let lastElem = nums[0];
    let count = 1;
    let max = 1
    if(nums.length === 0) return 0
    for (let i = 0; i < nums.length; i++) {
        if (lastElem === nums[i]) continue;
        if (lastElem + 1 === nums[i]) {
            count++
        }else{
            count = 1
        }
        lastElem = nums[i]

        max = Math.max(max, count)
    }
    return max
};