/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/\s+/g, ' ').trim().split(' ')
    return s[s.length-1].length
};