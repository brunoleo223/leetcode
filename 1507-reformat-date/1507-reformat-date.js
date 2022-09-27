/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const newDateArray = date.split(' ');

    const m = {
      "Jan": "01",
      "Feb": "02", 
      "Mar": "03", 
      "Apr": "04", 
      "May": "05", 
      "Jun": "06", 
      "Jul": "07", 
      "Aug": "08", 
      "Sep": "09", 
      "Oct": "10", 
      "Nov": "11", 
      "Dec": "12"
    };
    
    const day = newDateArray[0].replace(/\D+/g, '');
    
	return `${newDateArray[2]}-${m[newDateArray[1]]}-${day > 9 ? day : '0'+day}`;
};