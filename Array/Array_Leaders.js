// Array Leaders

// Examples:

// Input: arr = [16, 17, 4, 3, 5, 2]
// Output: [17, 5, 2]
// Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.
// Input: arr = [10, 4, 2, 4, 1]
// Output: [10, 4, 4, 1]
// Explanation: Note that both of the 4s are in output, as to be a leader an equal element is also allowed on the right. side
// Input: arr = [5, 10, 20, 40]
// Output: [40]
// Explanation: When an array is sorted in increasing order, only the rightmost element is leader.

class Solution {
    leaders(a) {
        // code here
        let result = []
        for(let i = 0; i < a.length; i++){
            let flag = 0
            for(let j = i + 1; j < a.length; j++){
                if(a[i] < a[j]){
                    flag = 1
                    break;
                }
            }
            if(flag === 0) result.push(a[i])
        }
        return result
    }
}

class Solution {
    reverse(a){
        let i = 0 , j = a.length -1;
        
        while(i < j){
            [a[i] , a[j]] = [a[j] , a[i]]
            i++;
            j--;
        }
        return a
    }
    leaders(a) {
        
        let ans = [];
        let max = -Infinity
        for(let i = a.length - 1; i >= 0; i--){
            if(a[i] >= max){
                ans.push(a[i])
            }
            max = Math.max(max,a[i])
        }
        return this.reverse(ans)
    }
}

// This is Optimize O(n)