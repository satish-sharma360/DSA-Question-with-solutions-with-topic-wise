// Single Among Doubles

class Solution {

    search(a, N) {
        // your code here
        
        // for(let i = 0; i < N; i++){
        //     let count = 0
        //     for(let j = 0; j < N; j++){
        //         if(a[i] == a[j]){
        //             count++;
        //         }
        //     }
        //     if(count === 1){
        //         return a[i]
        //     }
        // }
        
        // for(let i = 0; i < N - 1; i += 2){
        //   if(a[i] !== a[i + 1]) return a[i] 
        // }
        // return a[N - 1]
        
        let result = 0;
        for(let i = 0; i < N; i++){
            result ^= a[i]
        }
        return result
    }
}