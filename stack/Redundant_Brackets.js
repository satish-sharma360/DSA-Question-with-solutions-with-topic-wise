function RedundantBrackets(s){
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            let hasOperator = false;

            // pop Until '('
            while(stack.length > 0 && stack[stack.length - 1] !== '('){
                let top = stack.pop();

                if (top === '+' || top === '-' || top === '*' || top === '/') {
                    hasOperator = true;
                }
            }
            // pop '('
            stack.pop()

            if (!hasOperator){
                return true;
            }
        } else {
            stack.push(s[i])
        }
    }
    return false
}
console.log(RedundantBrackets('(a*b+(c/d))'))
console.log(RedundantBrackets('((a/b))'))