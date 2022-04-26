const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const subdomains = [];
  domains.forEach(domain =>{
    domain.split('.').reverse().forEach((sdomain,index,arr) =>{
      subdomains.push(`.${arr.slice(0,index+1).join('.')}`);
    })
  })
  let responseObj = new Object;
  subdomains.forEach((item,index,arr)=>{
    let count = 0;
    if (!(item in responseObj)){
      arr.forEach((dom)=>{
        if(item === dom){
          count++;
        }
      })
      responseObj[item] = count;
    }
  })
  return responseObj;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
