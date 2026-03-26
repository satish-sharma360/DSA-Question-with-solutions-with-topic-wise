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
console.log(nextLargerElement([1, 3, 2, 4])) // [3, 4, 4, -1]
console.log(nextLargerElement([6, 8, 0, 1, 3])) // [8, -1, 1, 3, -1]
console.log(nextLargerElement([1, 2, 3, 5])) // [ 2, 3, 5, -1 ]

// T.C -> O(n^2)

// Better Approach

