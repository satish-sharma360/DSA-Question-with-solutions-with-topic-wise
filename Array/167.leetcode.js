//167.167. Two Sum II - Input Array Is Sorted

// *********** Approach First Two pointer *********************
/*
Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

function twoSum(nums , target){
    let left = 0;
    let right = nums.length - 1

    while(left < right){

        let total = nums[left] + nums[right]
        
        if (total == target) {
            return [left + 1 , right + 1]
        }else if(total < target){
            left++
        }else{
            right--
        }
    }
    return -1
}
console.log(twoSum([2,7,11,15],9))  //[1,2]
console.log(twoSum([2,3,4],6))      //[1,3]
console.log(twoSum([-1,0],-1))      //[1,2]

// later when i learn hashmap then i will solve this using hashmap