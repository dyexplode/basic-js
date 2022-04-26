const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const rename = [];
  names.forEach((element,index,array) => {
    let count = 0;
    for (let i = 0; i<index+1; i++){
      if (element === array[i]){
        count++;
      }
    }
    if (count > 1){
      rename.push(`${element}(${count-1})`);
    }else{
      count = 0;
      for (let i = 0; i < rename.length; i++){
        if (element === rename[i]){
          count++;
        }
      }
      if (count === 0){
      rename.push(element);
      }else{
        rename.push(`${element}(${count})`);
      }

    }
  })
  return rename;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
