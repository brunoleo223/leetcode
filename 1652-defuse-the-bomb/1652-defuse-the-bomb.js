/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    
    if( k === 0){
        return new Array(code.length).fill(0);
    }
    
    let result = []; let sum = 0;

    
    for (let i = 0; i < k; i++) {
        sum += code[i];
    }
    
    if( k > 0 ){
        for(let i = 0; i < code.length; i++){
            sum += code[(i + k) % code.length]
            sum -= code[i]
            
            result[i] = sum;
        }
    }
    
    
    if( k < 0 ){
        k = -k;
        
        let sum = 0;
        
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