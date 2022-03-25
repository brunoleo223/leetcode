/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    
    if (k === 0) return new Array(n).fill(0);
    
    const res = new Array(n).fill(0);
    
    if (k > 0) {
        let sum = 0;
        
        for (let i = 0; i < k; i++) {
            sum += code[i];
        }
        
        for (let i = 0; i < n; i++) {
            sum += code[(i + k) % n];
            sum -= code[i];
            
            res[i] = sum;
        }
        
        return res;
    }
    
    if (k < 0) {
        k = -k;
        
        let sum = 0;
        
        for (let i = 0; i < k; i++) {
            sum += code[i];
        }
        
        for (let i = 0; i < n; i++) {
            res[(i + k) % n] = sum;
            
            sum -= code[i];
            sum += code[(i + k) % n];
        }
        
        return res;
    }
};