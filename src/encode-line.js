const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let pos = 0;
  let result = ''; 
  while (pos < str.length){
    let k = 1;
    while ((pos + k) < str.length && str[pos] === str[pos+k]){
      k++;
    }
    result+=`${(k === 1)?'':k}${str[pos]}`;
    pos+=k;
  }
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
