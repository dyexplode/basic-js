const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  searchArray = (sarray) => {
      for (let i = 0; i < sarray.length; i++){
        if (typeof sarray[i] === typeof []){
          return true;
        }
      }
      return false;
    };



  calculateDepth(arr) {
    let count = 0;
    if(this.searchArray(arr)){
      arr = arr.flat();
      count+=this.calculateDepth(arr);
    }
    return ++count;

  }
}
module.exports = {
  DepthCalculator
};
