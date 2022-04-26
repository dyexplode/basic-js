const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
* `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
* `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
* `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
* `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  let i = 0;
  const operator = ['--discard-next', '--discard-prev','--double-next', '--double-prev']
  const sub = [...arr];
  while(i < sub.length){
    switch(sub[i]){
      case '--discard-next':
        if (i < sub.length - 1){
          sub.splice(i + 1, 1);//i++;
          //i--;
        }
        break;
      case '--discard-prev':
        if (result.length && !operator.includes(sub[i - 1])) result.pop();
        break;
      case '--double-next':
        if (i < sub.length - 1) result.push(sub[i + 1]);
        break;
      case '--double-prev':
        if (result.length && !operator.includes(sub[i - 1])) result.push(result[result.length - 1]);
        break;
      default:
        result.push(sub[i]);
    }
    i++;
  }

  return result;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
