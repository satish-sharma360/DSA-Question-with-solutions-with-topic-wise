// 7. Reverse Integer

var reverse = function(x) {
    let isNagitive = x < 0 // for nagitive number
    x = Math.abs(x)
    let rev = 0;

    while(x !=  0){
        let lastDigit = x % 10;
        rev = rev * 10 + lastDigit
        x = Math.floor(x / 10)
    }
    return isNagitive? -rev: rev
};
console.log(reverse(-134))
console.log(reverse(435))

// this is perfect fine solution but on leet code TL occue 


var withOutTLreverse = function(x) {
    let isNagitive = x < 0 // for nagitive number
    x = Math.abs(x)
    let rev = 0;

    while(x !=  0){
        let lastDigit = x % 10;
        rev = rev * 10 + lastDigit
        x = Math.floor(x / 10)

        const limit = 2 ** 31

        if (rev > limit) {
            return 0
        }
    }
    return isNagitive? -rev: rev
};

