
function interSectionOfTwoArray(a,b){
    let x = 0, y = 0;
    let result = [];

    while(x < a.length && y < b.length){
        if(a[x] === b[y]){
            result.push(a[x])
            x++;
            y++;
        }else if(a[x] < b[y]){
            x++
        }else{
            y++
        }
    }
    return result
}
console.log(interSectionOfTwoArray([1, 2, 3, 3, 4, 5, 6],[3, 3, 5] ))