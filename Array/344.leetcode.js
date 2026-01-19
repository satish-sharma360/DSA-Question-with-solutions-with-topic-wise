// 344. Reverse String

var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1

    while(start < end){
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--

    }
};
let arr = ["h","e","l","l","o"];
reverseString(arr);
console.log(arr);
