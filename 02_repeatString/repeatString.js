const repeatString = function(string , num) {
    
    let sameString = string;

    if(num == 0){
        return '';
    }

    if(num < 0){
        return 'ERROR'
    }

    for (let i = 0; i < num-1 ; i++){
        sameString = sameString+string;
    }
    return sameString;
};

// Do not edit below this line
module.exports = repeatString;
