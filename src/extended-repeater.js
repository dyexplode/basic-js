const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //let result = str.toString();
  
  let result = '';
  if (typeof str !== 'object'){
    result += str.toString();
  }else{
    result += str;
  }
  
  if ('addition' in options ){ //&& 'additionRepeatTimes' in options
    const arr = [];
    let dstr = '';
    let count = ('additionRepeatTimes' in options)?options.additionRepeatTimes:1;
    for(let i = 0; i <  count; i++){
      if (typeof options.addition !== 'object'){
        arr.push(options.addition.toString());
      }else{
        dstr+=options.addition;
        arr.push(dstr);
        dstr = '';
      }



      
    }
    result += arr.join(('additionSeparator' in options)?options.additionSeparator:'|');
  }
  const arr2 = [];
  //if('repeatTimes' in options){
    count = ('repeatTimes' in options)?options.repeatTimes:1;
    for (let i = 0; i < count; i++){
      arr2.push(result);
    }
  //}
  return arr2.join(('separator' in options)?options.separator:'+');
  
}

module.exports = {
  repeater
};
