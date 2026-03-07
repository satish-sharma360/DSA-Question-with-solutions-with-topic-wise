// Ceil in a Sorted Array

function findCeil(arr , target){
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;
    
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(arr[mid] >= target){
            ans = mid;
            high = mid - 1;
        }else{
            low = mid + 1
        }
    }
    return ans
}
console.log(findCeil([1, 2, 8, 10, 11, 12, 19],5))
console.log(findCeil([1, 2, 8, 10, 11, 12, 19],20))
console.log(findCeil([1, 1, 2, 8, 10, 11, 12, 19],0))