/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    var j = people.length - 1, i = 0;
    var boats = 0;
    while(i <= j){
        boats++;
        if(i == j){break;}
        
        if(people[i] + people[j] <= limit){
            ++i;
        }
        
        --j;
    }
    return boats;
};