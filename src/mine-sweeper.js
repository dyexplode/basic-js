const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const MAX_WIDTH = matrix[0].length;
  const MAX_HEIGHT = matrix.length;
  const result = [];
  for (let i = 0; i < MAX_HEIGHT; i++){
    result.push([]);
  }

  for(let i = 0; i < MAX_HEIGHT; i++){
    for(let j = 0; j < MAX_WIDTH; j++){
      let sum = 0;
      for(let x = -1; x <= 1; x++){
        for(let y = -1; y <= 1; y++){
          if( i+y >= 0 && i+y < MAX_HEIGHT && j + x >= 0 && j + x < MAX_WIDTH){
            sum += +matrix[i+y][j+x];
          }
        }
      }
      sum -= +matrix[i][j];
      result[i].push(sum);

    }
  }
  return result

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
