// Square Root


// Input: n = 4
// Output: 2
// Explanation: Since, 4 is a perfect square, so its square root is 2.
// Input: n = 11
// Output: 3
// Explanation: Since, 11 is not a perfect square, floor of square root of 11 is 3.
// Input: n = 1
// Output: 1
// Explanation: 1 is a perfect sqaure, so its square root is 1.

function iterative(n) {
    let ans = 1;

    for (let i = 1; i < n; i++) {
        if (i * i === n) return i;
        if (i * i < n) {
            ans = i;
        }
    }
    return ans
}

function Binary(n) {
    let low = 1;
    let high = n;
    let ans = -Infinity;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        // check
        if (mid * mid === n) {
            return mid;
        } else if (mid * mid > n) {
            high = mid - 1;
        } else {
            ans = Math.max(ans, mid);
            low = mid + 1;
        }
    }
    return ans
}