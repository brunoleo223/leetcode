/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numInDigits = Array.from(String(num), Number);
    let sum = 0;
    
    if(numInDigits.length == 1) {
        return num;
    }

    while(numInDigits.length > 1){
        sum = 0;
        for (let i = 0; i < numInDigits.length; i++){
            sum = sum + numInDigits[i];
        }
        numInDigits = Array.from(String(sum), Number)
    }

    return sum;
    
};