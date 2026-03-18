
function isvalid(s){
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }else{
            if(stack.length > 0){
                let top = stack[stack.length - 1];
                if(top === '(' && s[i] === ')' || top === '{' && s[i] === '}' || top === '[' && s[i] === ']'){
                    stack.pop()
                }else{
                    return false
                }
            }else{
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(isvalid("()[]{}"))
console.log(isvalid("()"))
console.log(isvalid("({})"))
console.log(isvalid("(])"))


class Stack{
    constructor(){
        this.arr = new Array()
        this.top = -1;
    }

    // push
    push(value){
        this.top++;
        this.arr[this.top] = value;
        return;
    }
    // pop
    pop(){
        if(this.top === -1){
            console.log("Stack UnderFlow")
            return;
        }
        let removed = this.arr[this.top];
        delete this.arr[this.top]
        this.top--;
        return removed;
    }
}
// let stack = new Stack()

function valid(s){
    let stack = new Stack();
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }else{
            if(stack.top >= 0){
                let stacktop = stack.arr[stack.top];
                if(stacktop === '(' && s[i] === ')' || stacktop === '{' && s[i] === '}' || stacktop === '[' && s[i] === ']'){
                    stack.pop()
                }else{
                    return false
                }
            }else{
                return false
            }
        }
    }
    return stack.top === -1
}
console.log(valid("()[]{}"))
console.log(valid("()"))
console.log(valid("({})"))
console.log(valid("(])"))