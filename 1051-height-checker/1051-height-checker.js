/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const h = [...heights];
    const expected = heights.sort((a, b) => a - b);
    let output = 0;
    for(let i = 0; i < heights.length; i++) {
        if(h[i] !== expected[i]) {
            output++;
        }
    }
    return output;
};