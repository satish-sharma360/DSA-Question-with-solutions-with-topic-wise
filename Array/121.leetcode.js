// 121. Best Time to Buy and Sell Stock

// Approach 1:- use nested loop

function getBestPrice(prices){
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            let profit = prices[j] - prices[i];

            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit
}

// This is optimize approach very very important question
function optimizeApproach(prices){
    let min = prices[0]
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < min){
            min = prices[i]
        }else{
            maxProfit = Math.max(maxProfit,(prices[i] - min))
        }   
    }
    return maxProfit
}
console.log(optimizeApproach([7,1,5,3,6,4]))