// 75. Sort Colors

var sortColors = function(nums) {
    let start = 0;
    let end = nums.length - 1
    let middle = 0;

    while(middle <= end){

        if(nums[middle] == 1){
            middle++
        }else if(nums[middle] == 0){
            [nums[middle],nums[start]] = [nums[start],nums[middle]]
            middle++
            start++
        }else{ //mid = 2
            [nums[middle], nums[end]] = [nums[end],nums[middle]]
            end--
        }
    }
};