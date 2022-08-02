/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    var regex = /[^a-zA-Z]/g;
    var onlyLetters = Array.from(s.replace(regex, "")).reverse();
    var position = 0;
    var result = [];
    
    for (let i = 0; i < s.length; i++){
    	if(!/[^a-zA-Z]/g.test(s[i])){
      	result[i] = onlyLetters[position];
        position++;
      } else {
      	result[i] = s[i]
      }
    }
    
    return result.join('')
};