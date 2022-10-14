const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let max, mas = [], l;

  l = n.toString().length;
  max = 0;

  for (let i=0; i < l; i++){
    mas = n.toString().split(''); //число в строку -> в массив с ''
    mas.splice(i, 1); // удал. по одному эл-ту
  
    if (max < +mas.join('')){
      max = +mas.join('');
      console.log('max = ', max);
    }    
    
  }

  return max;
}

module.exports = {
  deleteDigit
};
