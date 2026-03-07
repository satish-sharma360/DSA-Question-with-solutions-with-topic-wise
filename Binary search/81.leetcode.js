// 81. Search in Rotated Sorted Array II


// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false



var search = function(nums, target) {

    let low = 0;
    let high = nums.length - 1;

    while(low <= high){

        let mid = low + Math.floor((high - low)/2);

        if(nums[mid] === target){
            return true;
        }

        // remove duplicates ambiguity
        if(nums[low] === nums[mid] && nums[mid] === nums[high]){
            low++;
            high--;
            continue;
        }

        // left half sorted
        if(nums[low] <= nums[mid]){

            if(target >= nums[low] && target < nums[mid]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }

        }else{ // right half sorted

            if(target > nums[mid] && target <= nums[high]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
    }

    return false;
};