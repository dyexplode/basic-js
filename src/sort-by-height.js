const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const pen = [];
  arr.forEach(el =>{
    if (el !== -1){
      pen.push(el);
    }
  })
  pen.sort((a,b) => a - b);
  let k = 0;
  for(let i = 0; i < pen.length; i++){
    while(arr[k] === -1){
      k++;
    }
    arr[k] = pen[i];
    k++
  }
  return arr;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
