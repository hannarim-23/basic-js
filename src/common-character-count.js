const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number} num
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 function getCommonCharacterCount( s1, s2 ) {
  let mas1 = [], mas2 = [], num = 0;
  console.log('------------');

  if (s1 == '' || s2 == '') return 0;

  for(let i=0; i < s1.length; i++){
    if (mas1.includes(s1[i])) {
      mas1.push(s1[i]);
    }
  }

  for(let i=0; i < s2.length; i++){
    if (!mas2.includes(s2[i])) {
      mas2.push(s2[i]);
    }
  }
  console.log(mas2);
  

    for(let i=0; i < mas1.length; i++){
      for(let j=0; j < mas2.length; j++){
        if (mas1[i] == mas2[j]){
        num++;
        console.log(num);
        
        }
      }
    }


  console.log(num);
  return num;
}

/*


*/

module.exports = {
  getCommonCharacterCount
};
