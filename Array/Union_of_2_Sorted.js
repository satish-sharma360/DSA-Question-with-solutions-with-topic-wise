// Union of 2 Sorted Arrays

function unionOfSortedArrays(a,b){
    let x = 0 , y = 0;
    let result = [];

    while(x < a.length && y < b.length){
        if(a[x] === b[y]){
            if(result.length === 0 || a[x] !== result[result.length - 1]){
                result.push(a[x])
            }
            x++;
            y++;
        }else if(a[x] < b[y]){
            if(result.length === 0 || a[x] !== result[result.length - 1]){
                result.push(a[x])
            }
            x++;
        }else{
            if(result.length === 0 || b[y] !== result[result.length - 1]){
                result.push(b[y])
            }
            y++;
        }
    }
    while(x < a.length){
        if(result.length === 0 || a[x] !== result[result.length - 1]){
            result.push(a[x])
        }
        x++;
    }
    while(y < b.length){
        if(result.length === 0 || b[y] !== result[result.length - 1]){
            result.push(b[y])
        }
        y++;
    }
    return result
}
console.log(unionOfSortedArrays([1, 2, 3, 4, 5],[1, 2, 3, 6, 7]))
console.log(unionOfSortedArrays([1,4,4,6,7],[4]))