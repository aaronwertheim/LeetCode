/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr = []
    ransomNote = ransomNote.split('')
    magazine = magazine.split('')
    for(let i = 0; i < ransomNote.length; i++) {
       if(magazine.includes(ransomNote[i])){
           arr.push(ransomNote[i])
           magazine.splice(magazine.indexOf(ransomNote[i]), 1)
       } 
    } 
    return arr.join('') === ransomNote.join('') ? true : false
        
};