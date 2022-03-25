/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let result = 0, sum = 0;
    if( k === 0){
        return new Array(code.length).fill(0);
    }
    
    
    for (let i = 0; i < k; i++) {
        sum += code[i];
    }
    result = []
    if( k > 0 ){
        
        
        for(let i = 0; i < code.length; i++){
            sum += code[(i + k) % code.length]
            sum -= code[i]
            
            result[i] = sum;
        }
    }
    
    if (k < 0) {
        k = -k;
        
        sum = 0;
        
        for (let i = 0; i < k; i++) {
            sum += code[i];
        }
        
        for (let i = 0; i < code.length; i++) {
            result[(i + k) % code.length] = sum;
            
            sum -= code[i];
            sum += code[(i + k) % code.length];
        }
        
    }
        
    return result;
};