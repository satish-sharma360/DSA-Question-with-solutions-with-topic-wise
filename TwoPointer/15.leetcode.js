// 15. 3Sum

// Approach
// i jsut run three loop and first loop run 0 to n - 2 and second loop run i + 1 to n - 1 abd last loop run j+1 to n

// find triplet and use set datastructure for remove duplicate 

var threeSum = function(nums) {
    let n = nums.length
    let ans = []
    let seen = new Set();
    for(let i = 0; i < n - 2; i++){
        for(let j = i + 1; j < n - 1; j++){
            for(let k = j + 1; k < n; k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                    let triplet = [nums[i] , nums[j] , nums[k]].sort((a,b)=>a-b)

                    let key = triplet.join(',')

                    if(!seen.has(key)){
                        seen.add(key)
                        ans.push(triplet)
                    }
                }
            }
        }
    }
    return ans;
};