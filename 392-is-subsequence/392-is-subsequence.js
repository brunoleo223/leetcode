/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var subsequence = 0;
    for(var i = 0; i < t.length; i++){

        if(t[i] === s[subsequence])
            subsequence++
    }
    
    return subsequence == s.length
};