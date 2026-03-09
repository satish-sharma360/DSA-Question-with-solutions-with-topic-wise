// 796. Rotate String

// ************** Brute Forch approah ****************
//i just rotate s then compare again and again

function rotateString(s , goal){

    if(s.length !== goal.length) return false;

    for(let i = 0; i < s.length; i++){ // O(n)

        // s = "hello"
        // s.slice(1) -> ello 
        // s[0] -> h
        // s.slice(1) + s[0] - > elloh
        s = s.slice(1) + s[0]; // O(n)

        if(s === goal){
            return true;
        }
    }
    // O(n^2)

    return false;
}

// better approach
// s = abc
// s + s -> abc + abc

function shoethand(s , goal){
    if(s.length !== goal.length) return false;

    return (s+s).includes(goal);
}
