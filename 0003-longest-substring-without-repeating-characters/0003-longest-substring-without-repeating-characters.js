/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let max = 0
    for(let i = 0; i < s.length; i++) {
        let arr = [s[i]]
        for(let j = i + 1; j < s.length; j++) {
            if(!arr.includes(s[j])){
                arr.push(s[j])
            } 
            else {
                break;
            }
        } if (arr.length > max) {
            max = arr.length
        }
    } return max
};