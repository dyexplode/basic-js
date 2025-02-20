const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  for (let i = 0; i < n.toString().length; i++){
    if(max < Number(n.toString().slice(0, i)+n.toString().slice(i + 1))){
      max = Number(n.toString().slice(0, i)+n.toString().slice(i + 1));
    }
  }
  return max;
  ///throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
