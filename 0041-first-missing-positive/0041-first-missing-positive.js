/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 1
    const set = new Set(nums)
    
    while (set.has(i)) {
        i++
        }
        return i;
    
};