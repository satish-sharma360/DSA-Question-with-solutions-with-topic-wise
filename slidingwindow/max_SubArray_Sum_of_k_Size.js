// Max Sum Subarray of size K

function maxSubArraySum(arr , k){
    let low = 0;
    let high = k - 1;
    let sum = 0;
    let max = -Infinity;

    for(let i = low; i <= high; i++){
        sum += arr[i];
    }

    while(high < arr.length){
        max = Math.max(sum , max);
        // Slide Window
        high++;
        low++;

        // if window out of length
        if (high === arr.length) {
            break;
        }
        sum = sum - arr[low - 1] + arr[high]
    }

    return max;
}

console.log(maxSubArraySum([100, 200, 300, 400],2)) // 700
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20],4)) // 39
console.log(maxSubArraySum([100, 200, 300, 400],1)) // 400