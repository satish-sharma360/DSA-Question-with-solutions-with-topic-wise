// Balanced Tree Check GFG

function isBalance(root){
    let ans = true;

    const calculateHeight = (node) =>{
        if(node === null){
            return 0;
        }

        let left = calculateHeight(node.left);
        let right = calculateHeight(node.right);

        if(Math.abs(left - right) > 1){
            ans = false;
        }
        return Math.max(left , right) + 1;
    }
    calculateHeight(root)
    return ans;
}