// Number of occurrence

// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
// Output: 4
// Explanation: target = 2 occurs 4 times in the given array so the output is 4.
// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
// Output: 0
// Explanation: target = 4 is not present in the given array so the output is 0.
// Input: arr[] = [8, 9, 10, 12, 12, 12], target = 12
// Output: 3
// Explanation: target = 12 occurs 3 times in the given array so the output is 3.

class Solution {
    findFirstOccuranc(arr,target){
        let low = 0;
        let high = arr.length - 1;
        let ans = -1;
        
        while(low <= high){
            let mid = low + Math.floor((high - low)/2);
            
            if(arr[mid] === target){
                ans = mid;
                if(arr[mid - 1] !== target){
                    return ans
                }
                high = mid - 1
            }else if(arr[mid] < target){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
        return ans
    }
    
    findLastOccuranc(arr , target){
        let low = 0;
        let high = arr.length - 1;
        let ans = -1;
        
        while(low <= high){
            let mid = low + Math.floor((high - low)/2);
            
            if(arr[mid] === target){
                ans = mid;
                if(arr[mid + 1] !== target){
                    return ans
                }
                low = mid + 1
            }else if(arr[mid] < target){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
        return ans
        
    }
    countFreq(arr, target) {
        // code here
        let first = this.findFirstOccuranc(arr , target)
        let last = this.findLastOccuranc(arr , target)
        if(first === -1){
            return 0
        }
        return (last - first) + 1
        
    }
}