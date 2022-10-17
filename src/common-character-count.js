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
  let num = 0, s3 = s2;
  console.log('------------');

  if (s1 == '' || s2 == '') return 0;

  firstFor:for (let i = 0; i < s1.length; i++){
    for (let j = 0; j < s3.length; j++){
      if(s1[i] == s3[j]){
        num++;
        s3 = s3.slice(0,j) + s3.slice(j+1);
        continue firstFor;
      }
  }
}
  console.log(num);
  return num;
}

module.exports = {
  getCommonCharacterCount
};
