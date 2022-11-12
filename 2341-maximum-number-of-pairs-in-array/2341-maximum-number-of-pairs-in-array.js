/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    pairs = 0
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]){
                nums.splice(nums.indexOf(nums[i]),1)
                nums.splice(nums.indexOf(nums[j - 1]), 1)
                pairs ++
                i = -1
                break
            }
        }
    } return [pairs, nums.length]
};