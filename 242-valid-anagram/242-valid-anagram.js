/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  let countS = 0;
  let countT = 0;
  
  const arrayS = Array.from(s);
  const arrayT = Array.from(t);
  
  arrayS.sort()
  arrayT.sort()
  
  if(arrayS.length != arrayT.length) return false
  
  for(let i = 0; i < s.length; i++){
  	if(arrayS[i] !== arrayT[i]) return false
  }
  
  return true

};