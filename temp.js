function Solve(arr){
    let set = new Set()

    for(let i = 0; i < arr.length; i++){
        if (set.has(arr[i])) {
            set.delete(arr[i])
        }else{
            set.add(arr[i])
        }
    }
    return set;
}

console.log(Solve([10,20,30,30,20]))


// console.log(25 + 13 + 5 + 20 + 3 + 18 + 10 + 3)