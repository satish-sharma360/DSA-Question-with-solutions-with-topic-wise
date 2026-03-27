//  Previous Smaller Element

function findPrevSmallElm(arr){
    let stack = [];
    let n = arr.length;
    let result = [];

    for(let i = 0; i < n; i++){
        while(stack.length > 0 && stack[stack.length - 1] >= arr[i]){
            stack.pop();
        }
        let nse = stack.length === 0 ? -1 : stack[stack.length - 1];
        result.push(nse)

        stack.push(arr[i])
    }
    return result;
}
console.log(findPrevSmallElm([3,1,0,8,6]))