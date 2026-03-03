// 75. Sort Colors


function SortColors(nums){
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) count0++
        if(nums[i] === 1) count1++
        if(nums[i] === 2) count2++
    }

    for(let i = 0; i < count0; i++){
        nums[i] = 0
    }
    for(let i = count0; i < count1 + count0; i++){
        nums[i] = 1
    }
    for(let i = count1 + count0; i < nums.length; i++){
        nums[i] = 2
    }
}

// T.C --> O(2n)


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

// T.C -> O(n)