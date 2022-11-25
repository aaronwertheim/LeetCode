/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        let highest = -1;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > highest) {
                highest = arr[j];
            }
        } newArr.push(highest)
    } return newArr;
};