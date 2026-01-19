//1796. Second Largest Digit in a String
/*Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:

Input: s = "abc1111"
Output: -1
 Explanation: The digits that appear in s are [1]. There is no second largest digit. 
*/

// for loop 



/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {

    let firstHighest = -1;
    let secondHighest = -1;

    for (let i = 0; i < s.length; i++) {

        if (s[i] >= '0' && s[i] <= '9') {

            let ch = s[i] - '0';

            if (ch > firstHighest) {
                secondHighest = firstHighest
                firstHighest = ch
            } else if (ch < firstHighest && ch > secondHighest) {
                secondHighest = ch
            }

        }
    }
    return secondHighest
};

// let firstHighest = -1; 
// here also take -Infinity

// if(s[i] >= '0' && s[i] <= '9'){
// simply check only 0 to 9 value come 


/*let ch = s[i] - '0';
also 
let ch = Number(s[i]);
also 
let ch = parseInt(s[i]);


just convert it into number because string can compare with number ex:- "0" !=== "0"
*/


// While loop


var secondHighest = function (s) {

    let firstHighest = -1;
    let secondHighest = -1;

    let i = 0

    while (i < s.length) {

        if (s[i] >= '0' && s[i] <= '9') {

            let ch = s[i] - '0';

            if (ch > firstHighest) {
                secondHighest = firstHighest
                firstHighest = ch
            } else if (ch < firstHighest && ch > secondHighest) {
                secondHighest = ch
            }

        }
        i++
    }
    return secondHighest
};


// if (ch > firstHighest) {
//     secondHighest = firstHighest
//     firstHighest = ch
//     i++
// } else if (ch < firstHighest && ch > secondHighest) {
//     secondHighest = ch 
//     i++
// }
// wrong because i can access inside only its block