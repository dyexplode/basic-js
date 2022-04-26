const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink( position ) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chain.length ){
      this.chain.length = 0;
      throw new Error ('You can\'t remove incorrect link!');
    }

    try{
      this.chain.splice(position - 1,1);
    }
    catch(e){
      this.chain.length = 0;
      throw new Error ('You can\'t remove incorrect link!');
      //return false;
    }
    finally{
      return this;
    }  
    
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.chain.join(' )~~( ');
    this.chain.length = 0;
    return `( ${result} )`;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
