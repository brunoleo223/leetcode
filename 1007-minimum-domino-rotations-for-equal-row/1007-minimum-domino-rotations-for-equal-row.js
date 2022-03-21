/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let targetTop = tops[0], targetBottom = bottoms[0];
  
      for (const target of [targetTop, targetBottom]){
        let countTop = 0, contBottom = 0;

        for(let i = 0; i < tops.length; i++){
            if(target !== tops[i] && target !== bottoms[i]) break

          if(bottoms[i] !== target) countTop++
      
          if(tops[i] !== target) contBottom++

          if(i === tops.length -1)
              return Math.min(countTop, contBottom);
        }
        
      }

      return -1;
};