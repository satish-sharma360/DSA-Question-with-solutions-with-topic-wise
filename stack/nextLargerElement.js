// next Larger Element

function nextLargerElement(arr){
     let n = arr.length;
    let result = new Array(n).fill(-1);

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i] < arr[j]){
                result[i] = arr[j];
                break;
            }
        }
    }
    return result;
}
// console.log(nextLargerElement([1, 3, 2, 4])) // [3, 4, 4, -1]
// console.log(nextLargerElement([6, 8, 0, 1, 3])) // [8, -1, 1, 3, -1]
// console.log(nextLargerElement([1, 2, 3, 5])) // [ 2, 3, 5, -1 ]

// T.C -> O(n^2)

// Better Approach

function BetterApproach(arr){
    let stack = [];
    let result = [];

    for(let i = arr.length - 1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length - 1] <= arr[i]){
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = -1;
        }else{
            result[i] = stack[stack.length - 1];
        }
        stack.push(arr[i])
    }
    return result;
}

console.log(BetterApproach([1, 3, 2, 4])) // [3, 4, 4, -1]
console.log(BetterApproach([6, 8, 0, 1, 3])) // [8, -1, 1, 3, -1]
console.log(BetterApproach([1, 2, 3, 5])) // [ 2, 3, 5, -1 ]

// T.C -> O(n)