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
function repeater(str, options) {
let newStr='',i=1,j=1, add='';

    str=String(str);

   if (options.addition === undefined) options.addition = '';
   if (!options.separator) options.separator = '+';
   if (!options.additionSeparator) options.additionSeparator = '|';
   if (!options.repeatTimes) options.repeatTimes = 1;
   if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

   while (i < options.additionRepeatTimes) {
      add += options.addition + options.additionSeparator;
      i++;
    }
    add+= options.addition;

  while ( j < options.repeatTimes) {
      newStr += str + add + options.separator;
      j++;
    }
    newStr+=str+add;
    return newStr;
  }
  
module.exports = {
  repeater
};
