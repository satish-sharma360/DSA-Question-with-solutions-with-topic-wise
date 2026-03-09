//151. Reverse Words in a String

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


function reversed(string) {
    let i = 0, j = string.length - 1;

    while (i <= j) {
        [string[i], string[j]] = [string[j], string[i]];
        i++;
        j--;
    }
    return string;
}
var reverseWords = function (s) {
    let temp = "";
    let result = [];


    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            temp += s[i]
        } else {
            if (temp.length > 0) {
                result.push(temp);
                temp = "";
            }
        }
    }
    if (temp.length > 0) {
        result.push(temp);
    }

    return reversed(result).join(" ")
};

console.log(reverseWords("the sky is blue"))
