// Segregate 0s and 1s

function segrigate(nums){
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        while(nums[left] === 0 && left < right) left++;
        while(nums[right] === 1 && left < right) right--;

        if(nums[left] > nums[right]){
            [nums[left] , nums[right]] = [nums[right], nums[left]]
            left++;
            right--;
        }
    }
    return nums;
}
console.log(segrigate([1,1,0,0,0,1,1,0]))