// 9. Palindrome Number

var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }

    let st = String(x);

    let start = 0;
    let end = st.length - 1


    while (start < end) {
        if (st[start] === st[end]) {
            start++;
            end--
        } else {
            return false
        }
    }
    return true
}

// Test the function
console.log("*********** APPROACH ONE ***************")
console.log(isPalindrome(121));      // true
console.log(isPalindrome(-121));     // false
console.log(isPalindrome(10));       // false
console.log(isPalindrome(0));        // true



// Approach two 
/**
 *  1-> first reverse this Number
    2-> compare with actual number with reversed number 
    3-> return result
 */

function reverse(x) {
    let reversed = 0;

    while(x > 0){
        let lastDigit  = x % 10
        reversed = reversed * 10 + lastDigit
        x = Math.floor(x / 10)
    }
    return reversed
}
function checkPlindrome(x) {
    let rev = reverse(x)
    if (rev === x) {
        return true
    }else{
        return false
    }
}
console.log("*********** APPROACH TWO ***************")
console.log(checkPlindrome(121))
console.log(checkPlindrome(13431))
console.log(checkPlindrome(129901))

