// 3. Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s){
    let low = 0;
    let high = 0;
    let set = new Set();
    let maxleng = 0;

    while(high < s.length){

        while(set.has(s[high])){
            set.delete(s[low])
            low++;
        }
        set.add(s[high]);
        maxleng = Math.max(maxleng , high - low + 1);
        high++;
    }
    return maxleng;
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3