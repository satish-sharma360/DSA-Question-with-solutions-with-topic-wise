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