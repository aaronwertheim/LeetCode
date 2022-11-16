/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    reversed1 = parseInt(num.toString().split('').reverse().join(''))
    reversed2 = parseInt(reversed1.toString().split('').reverse().join(''))
    return reversed2 == num ? true : false
};