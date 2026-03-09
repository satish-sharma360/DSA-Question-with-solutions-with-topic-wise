// 1614. Maximum Nesting Depth of the Parentheses

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"

// Output: 3

// Explanation:

// Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:

// Input: s = "(1)+((2))+(((3)))"

// Output: 3

// Explanation:

// Digit 3 is inside of 3 nested parentheses in the string.

// Example 3:

// Input: s = "()(())((()()))"

// Output: 3

 
var maxDepth = function(s) {
    let maxdepth = 0;
    let count = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            count++;
            maxdepth = Math.max(count , maxdepth)
        }else if(s[i] === ')'){
            count--
        }
    }
    return maxdepth
};