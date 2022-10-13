/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr = [...nums]
    for(i = 0; i < nums.length; i++){
        arr = [...arr, nums[i]]
    } return arr;
};