/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const result = [], last = {};
    let count = 0, maxLast = 0;
    
    for(let i = 0; i < s.length; i++){
        last[s[i]] = i
    }
    
    for(let i = 0; i < s.length; i++){
        count++;
        if(maxLast < last[s[i]]){
            maxLast = last[s[i]]
        }
        
        if(maxLast === i){
            result.push(count)
            count = 0;
        }
    }
    
    return result;
};