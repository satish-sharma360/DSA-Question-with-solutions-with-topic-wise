// Minimum Cost To Make String Valid

function minimumCostToMakeStringValid(s){
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '}') {
            if (stack.length > 0 && stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else {
            stack.push(s[i]);
        }
    }

    // Step 2: If odd → impossible
    let m = stack.length;
    if (m % 2 !== 0) return -1;

    // Step 3: Count remaining
    let open = 0, close = 0;

    while (stack.length !== 0) {   // ✅ FIXED
        if (stack[stack.length - 1] === '{') open++;
        else close++;
        stack.pop();
    }

    // Step 4: Calculate cost
    return Math.ceil(open / 2) + Math.ceil(close / 2);
}
console.log(minimumCostToMakeStringValid('{{{}'))
console.log(minimumCostToMakeStringValid('{{}{}}'))
console.log(minimumCostToMakeStringValid('{}}{}}'))
console.log(minimumCostToMakeStringValid('{{{{'))
console.log(minimumCostToMakeStringValid('{{{}}'))



