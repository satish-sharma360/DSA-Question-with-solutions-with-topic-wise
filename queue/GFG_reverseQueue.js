// Queue Reversal

function reverseQueue(q){
    let stack = [];

    while(q.length > 0){
        stack.push(q.shift())
    }

    while(stack.length > 0){
        q.push(stack.pop());
    }

    return q;
}

console.log(reverseQueue([5, 10, 15, 20, 25]))
console.log(reverseQueue([1, 2, 3, 4, 5]))

// T.C -> O(n)
// S.C -> O(n)

function reverseQueueRecursion(q){

    // Base Case
    if (q.length == 0) {
        return ;
    };

    let temp = q.shift();
    reverseQueueRecursion(q);
    q.push(temp);

    return q;
}

console.log(reverseQueueRecursion([5, 10, 15, 20, 25]))
console.log(reverseQueueRecursion([1, 2, 3, 4, 5]))