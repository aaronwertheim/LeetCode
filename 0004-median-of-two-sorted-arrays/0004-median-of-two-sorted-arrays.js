/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums = nums1.concat(nums2).sort((a, b) => a - b)
    half = Math.floor(nums.length / 2);
    if (nums.length % 2)
        return nums[half];
    return (nums[half - 1] + nums[half]) / 2;
    
};