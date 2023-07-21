const sumAll = function(start, end) {
    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    if(start < 0 || end <= 0 || start == NaN || end == NaN){
        return 'ERROR';
    }
    let sum=0;
    for (start; start <= end; start++){
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
