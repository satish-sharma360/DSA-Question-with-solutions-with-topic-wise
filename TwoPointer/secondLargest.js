// Example 1:
// Input:
//  [1, 2, 4, 7, 7, 5]  
// Output:
  
// Second Smallest : 2  
// Second Largest : 5  
// Explanation:
//   The elements are sorted as 1, 2, 4, 5, 7, 7.  
// Hence, the second smallest element is 2, and the second largest element is 5.

// Example 2:
// Input:
//  [1]  
// Output:
  
// Second Smallest : -1  
// Second Largest : -1  
// Explanation:
//   Since there is only one element in the array, it is both the largest and smallest element.  
// Therefore, there is no second smallest or second largest element present.

//******************* Approach One ***************
function secondLarsest(arr){
    arr.sort((a,b) => a - b)
    let secondLargestelem = -Infinity
    let secondSmallest = Infinity
    for(let i = arr.length-1; i > 0; i--){
        if(arr[i] !== arr[i - 1]){
            secondLargestelem = arr[i - 1]
            break
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            secondSmallest = arr[i + 1]
            break
        }
    }
    secondSmallest === Infinity? -1 : secondSmallest
    secondLargestelem === -Infinity? -1 : secondLargestelem

    return {secondSmallest , secondLargestelem}
}
// console.log(secondLarsest([1, 2, 4, 7, 7, 5]))

// 

function secondApproachSecondlargestElement(arr){
    let secondLargest = -Infinity;
    let firstLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            firstLargest = arr[i]
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondApproachSecondlargestElement([1, 2, 4, 7, 7, 5]))

function betterapproachSecondLargest(arr){
    let firstHighest = -Infinity;
    let secondHighest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstHighest){
            secondHighest = firstHighest;
            firstHighest = arr[i];
        }else if(arr[i] > secondHighest && arr[i] != firstHighest){
            secondHighest = arr[i]
        }
    }
    return secondHighest
}
console.log(betterapproachSecondLargest([1, 2, 4, 7, 7, 5]))