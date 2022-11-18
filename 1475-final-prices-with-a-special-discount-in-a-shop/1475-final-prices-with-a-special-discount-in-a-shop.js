/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let arr = [];
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            if(prices[i] >= prices[j]) {
                arr.push(prices[i] - prices[j]);
                break;
            } else if(j === prices.length - 1) {
                arr.push(prices[i]);
            }
        }
        if (i === prices.length - 1) {
            arr.push(prices[i])
        }
    } 
    return arr;
};