const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample( sampleActivity ) {
  let res = (typeof sampleActivity === 'string') ? 
             ((parseFloat(+sampleActivity) >= 1 && parseFloat(+sampleActivity) < 15) ? 
             Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (Math.LN2 / HALF_LIFE_PERIOD) : false) : 
             false; 
 
 //  throw new NotImplementedError('Not implemented');
 
 return Math.ceil(res);
 
 }
 
 module.exports = {
   dateSample
 };