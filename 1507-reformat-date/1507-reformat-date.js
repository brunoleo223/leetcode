/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let temp = date.split(' ');
    
    const month = new Map([["Jan", '01'], ["Feb", '02'], ["Mar", '03'], ["Apr" , '04'], 
                      ["May" , '05'], ["Jun" , '06'], ["Jul" , '07'], ["Aug", '08'],
                      ["Sep", '09'], ["Oct" , '10'], [ "Nov", '11'], ["Dec", '12']]);
    
    const day = temp[0].replace(/[^0-9]/g, '');
    
    return temp[2] + '-' + month.get(temp[1]) + '-' + (day.length > 1 ? day : '0' + day);
};