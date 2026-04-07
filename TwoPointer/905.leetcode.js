// 905. Sort Array By Parity

function BruteApproach(nums){
    let even = [];
    let odd = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            even.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }
    return [...even , ...odd]
}


var sortArrayByParity = function(nums) {

    let i = 0;
    let j = 0;
    while(j < nums.length){
        if(nums[j] % 2 === 0){
            [nums[i] , nums[j]] = [nums[j],nums[i]];
            i++;
        }
        j++;
    }
    return nums
};