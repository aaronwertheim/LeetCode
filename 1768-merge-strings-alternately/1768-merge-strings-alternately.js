/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    arr = [];
    let longestWord;
    if(word1.length >= word2.length) {
        longestWord = word1;
    } else {
        longestWord = word2;
    }
    for(let i = 0; i < longestWord.length; i++) {
        arr.push(word1[i], word2[i]);
    }
    return arr.join('');
    
};