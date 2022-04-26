const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined){
    return 'Unable to determine the time of year!';
  }

  if (date.hasOwnProperty('toString') || isNaN(Date.parse(date))){
    throw new Error('Invalid date!');
  }

  if (!(Object.prototype.toString.call(date) === '[object Date]') ||!(date instanceof Date)){
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  if (month < 2 || month === 11){
    return 'winter';
  }
  if (month < 5){
    return 'spring';
  }
  if (month < 8){
    return 'summer';
  }
  return 'autumn';

}

module.exports = {
  getSeason
};
