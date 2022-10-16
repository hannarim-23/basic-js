const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  if (str == '') return '';

  let newStr = [], count = 1;

  for (let i=0; i < str.length; ){
    while (str[i] == str[i+1]){
      count++;
      i++;
    }
    if (count > 1) newStr.push(`${count}${str[i]}`);
    else newStr.push(`${str[i]}`)
    i++;
    
    count =1;
}
  return newStr.join('');
}

module.exports = {
  encodeLine
};
