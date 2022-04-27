const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true){
    this.isStrait = type;
    const getDraw = () => {
      const result = [];
      for (let i = 'A'.charCodeAt(0); i < 'Z'.charCodeAt(0) + 1; i++){
        result.push(String.fromCharCode(i));
      };
      return result;
    };
    this.rule = getDraw();//.join('');
  }
  // constructor(isStrong = true){
  //   this.isStrong = isStrong;
  // }
  encrypt(...args) {
    if (args.length < 2 || args.includes(undefined)){
      throw new Error('Incorrect arguments!');
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let [message, key] = args;
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.padEnd(message.length, key);
    const result = [];
    let dropCount = 0;
    message.split('').forEach((item, index) =>{
      if (this.rule.includes(item)){
        //gen key string
        const passStr = this.rule.slice(this.rule.indexOf(item)).join('').padEnd(26, this.rule.join(''));
        //get crypted value
        result.push(passStr[this.rule.indexOf(key[index - dropCount])]);
        //result.push(this.rule.slice(this.rule.indexOf(item)).padEnd(26,this.rule)[this.rule.indexOf(key)]);
      }else{
        result.push(item);
        dropCount++;
      }
    })
    return (this.isStrait)?result.join(''):result.reverse().join('');//key + '--';//
  }
  decrypt(...args) {
    if (args.length < 2 || args.includes(undefined)){
      throw new Error('Incorrect arguments!');
    }
    let [message, key] = args;
    message = message.toUpperCase();
    key = key.toUpperCase();
    //if(!this.isStrait) key = key.split('').reverse().join('');
    key = key.padEnd(message.length, key);
    const result = [];
    let dropCount = 0;
    message.split('').forEach((item, index) =>{
      if (this.rule.includes(item)){
        //gen key string
        const passStr = this.rule.slice(this.rule.indexOf(key[index - dropCount])).join('').padEnd(26, this.rule.join(''));
        //get crypted value
        result.push(this.rule[passStr.indexOf(item)]);
        //result.push(this.rule.slice(this.rule.indexOf(item)).padEnd(26,this.rule)[this.rule.indexOf(key)]);
      }else{
        result.push(item);
        dropCount++;
      }
    })
    return  (this.isStrait)?result.join(''):result.reverse().join('');//result.join('');//key + '--';//




    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
