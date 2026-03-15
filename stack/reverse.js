
let s = [];
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);


function insertAtButtom(s , totalSize, top){
    if (totalSize === 0) {
        s.push(top)
        return
    }

    let temp = s.pop();
    insertAtButtom(s , totalSize - 1, top)
    s.push(temp)
}

function reverse(stack){
    if (stack.length === 0) {
        return;
    }

    let temp = stack.pop();
    reverse(stack);

    insertAtButtom(stack , stack.length , temp)
}
console.log(s)

reverse(s)
console.log(s)