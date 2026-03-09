// 14. Longest Common Prefix

function longestCommonPrefix(str){
    if(!str.length) return "";
    str.sort()

    let start = str[0], last = str[str.length - 1], result = "";

    for(let i = 0; i < start.length; i++){
        if(start[i] === last[i]){
            result += start[i];
        }else{
            break;
        }
    }

    return result;
}
console.log(longestCommonPrefix(["flower","flow","floght"]))