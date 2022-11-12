/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    arr = []
    for(let i = 0; i < s.length; i++) {
        if(!arr.includes(s[i])) {
            arr.push(s[i])
        } else return s[i]
    }
    
};