const reverseString = function(str) {
    let strLength = str.length - 1;
    let word = '';
    for(strLength; strLength > -1; strLength--){
        word += str[strLength];
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;
