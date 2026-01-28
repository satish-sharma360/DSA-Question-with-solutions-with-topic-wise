// 771. Jewels and Stones


// Approach 1 O(n^2)
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++){
        for(let j = 0; j < jewels.length; j++){
            if(stones[i] === jewels[j]){
                count++
            }
        }
    }
    return count
};