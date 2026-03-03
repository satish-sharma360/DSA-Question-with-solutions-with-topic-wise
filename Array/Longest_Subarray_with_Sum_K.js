// Longest Subarray with Sum K

function LongestSubArray(arr , k){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        let x = 0;
        for(let j = i; j < arr.length; j++){
            sum += arr[j];
            x++;

            if(sum === k){
                max = Math.max(max , x);
            }
        }
    }
    return max;
}
console.log(LongestSubArray([10, 5, 2, 7, 1, -10],15))