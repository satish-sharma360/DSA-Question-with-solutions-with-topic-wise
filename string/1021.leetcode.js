// 1021. Remove Outermost Parentheses

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: s = "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".



// ********* Approach One Useing Stack ******************
function removeOuterParenthesesUsingStack(s){
    let stack = [];
    let result = "";

    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            if(stack.length > 0){
                result += s[i];
            }
            stack.push(s[i]);
        }else{
            stack.pop();
            if(stack.length > 0){
                result += s[i];
            }
        }
    }
    return result;
}

function removeOuter(s){
    let stack = [];
    let ans = "";

    for(let i = 0; i< s.length; i++){
        // agar ( hai push ho jao then agarn ( aaya to length != 0 add into ans and then push again stack now ( ( now come ) simpley pop menas stack now ( and length != 0 and ) into ans 
        if(s[i] === ')'){
            stack.pop();
        }
        if(stack.length !== 0){
            ans += s[i];
        }
        if(s[i] === '('){
            stack.push(s[i]);
        }
    }
}

function removeOuterParentheses(s) {
    let result = "";
    let digit = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (digit > 0) {
                result += s[i];
            }
            digit++;
        } else { // s[i] === ')'
            digit--;
            if (digit > 0) {
                result += s[i];
            }
        }
    }
    return result;
}
console.log(removeOuterParentheses("(()())(())"))
console.log(removeOuterParentheses("(()())(())(()(()))"))
console.log(removeOuterParentheses("()()"))

console.log(removeOuterParenthesesUsingStack("(()())(())"))
console.log(removeOuterParenthesesUsingStack("(()())(())(()(()))"))
console.log(removeOuterParenthesesUsingStack("()()"))