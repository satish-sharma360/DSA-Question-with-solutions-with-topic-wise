// Find Kth Rotation

// Input: arr[] = [5, 1, 2, 3, 4]
// Output: 1
// Explanation: The given array is [5, 1, 2, 3, 4]. The original sorted array is [1, 2, 3, 4, 5]. We can see that the array was rotated 1 times to the right.
// Input: arr = [1, 2, 3, 4, 5]
// Output: 0
// Explanation: The given array is not rotated.

class Solution {
    findKRotation(arr) {
        // Code Here
        let low = 0;
        let high = arr.length - 1;
        let ans = Infinity;
        let kth = 0;
        
        while(low <= high){
            let mid = low + Math.floor((high - low)/2);
            
            // Left part
            if(arr[mid] >= arr[low]){
                if(ans > arr[low]){
                    ans = arr[low];
                    kth = low;
                }
                low = mid + 1;
            }else{
                if(ans > arr[mid]){
                    ans = arr[mid];
                    kth = mid;
                }
                high = mid - 1
            }
        }
        return kth
    }
}
