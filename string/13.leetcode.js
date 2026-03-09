// 13. Roman to Integer

function character(ch) {
    switch (ch) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100
        case "D":
            return 500;
        case "M":
            return 1000;
    }
}
var romanToInt = function (s) {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = character(s[i]);
        let next = character(s[i + 1]);

        if (next > curr) {
            sum -= curr;
        } else {
            sum += curr
        }
    }
    return sum
};

console.log(romanToInt("MCMXCIV"))