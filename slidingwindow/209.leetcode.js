// 209. Minimum Size Subarray Sum

function minSubArrayLen(nums,target){
    let low = 0;
    let high = 0;
    let result = Infinity;
    let sum = 0;

    while(high < nums.length){
        sum += nums[high];

        while(sum >= target){
            let len = high - low + 1;

            result = Math.min(result , len);
            sum -= nums[low];
            low++;
        }
        high++;
    }
    return result === Infinity ? 0 : result;
}

console.log(minSubArrayLen([2,3,1,2,4,3],7)) //2
console.log(minSubArrayLen([1,4,4],4)) // 1
console.log(minSubArrayLen([1,1,1,1,1,1,1,1],11)) // 0