// 739. Daily Temperatures


function dailyTemperatures(temp){
    let n = temp.length;
    let result = new Array(n).fill(0);

    for(let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++) {
            if(temp[i] <= temp[j]){
                result[i] = j - i;
                break;
            }
        }
    }
    return result
}




var dailyTemperatures = function(temperatures) {
    let stack = [];
    let result = new Array(temperatures.length);

    for(let i = temperatures.length - 1; i >= 0; i--){
        while(stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]){
            stack.pop()
        }
        if(stack.length === 0){
            result[i] = 0
        }else{
            result[i] = stack[stack.length - 1] - i;
        }
        stack.push(i)
    }
    return result
};

