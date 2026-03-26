// 496. Next Greater Element I

/**
* Example 1:
*  Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
*  Output: [-1,3,-1]
*  Explanation: The next greater element for each value of nums1 is as follows:
*  - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
*  - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
*  - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
*  Example 2:
*  
*  Input: nums1 = [2,4], nums2 = [1,2,3,4]
*  Output: [3,-1]
*  Explanation: The next greater element for each value of nums1 is as follows:
*  - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
*  - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
*/

function nextGreaterElement(nums1 , nums2){
    let n = nums1.length;
    let result = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]){
                for(let k = j + 1; k < nums2.length; k++){
                    if (nums2[j] < nums2[k]) {
                        result[i] = nums2[k];
                        break;
                    }
                }
            }
        }
    }
    return result;
}

console.log(nextGreaterElement([4,1,2], [1,3,4,2])) // [-1 ,3 , -1]
console.log(nextGreaterElement([4,2], [1,2,3,4])) // [-1 ,3]

// T.C -> O(n^2);

//Better approach

function FindNextGreater(nums1 , nums2){
    let n = nums2.length;
    let result = new Map()
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while(stack.length > 0 && stack[stack.length - 1] <= nums2[i]){
            stack.pop()
        }
        let nge = stack.length === 0 ? -1 : stack[stack.length - 1]

        result.set(nums2[i] , nge)

        stack.push(nums2[i])
    }
    // console.log(result)
    let ans = [];
    for (const val of nums1) {
        ans.push(result.get(val))
    }
    return ans;
}
console.log(FindNextGreater([4,1,2], [1,3,4,2]))
console.log(FindNextGreater([4,2], [1,2,3,4]))
