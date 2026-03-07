// 852. Peak Index in a Mountain Array


// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

function peakIndexInMountainArray(arr){
    let low = 1;
    let high = arr.length - 2;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]){
            return mid;
        }
        if(arr[mid] > arr[mid - 1]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
}
console.log(peakIndexInMountainArray([0,1,0]))
console.log(peakIndexInMountainArray([0,2,1,0]))
console.log(peakIndexInMountainArray([0,10,5,2]))