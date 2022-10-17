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
  constructor(value){
    this.value = this.value;

  /*  if(!value){
      this.value = true;
    }*/
  }
//  const alphabet = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];

  encrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }
    /*
    let str = message.split('').toUpperCase();
    for(let i = 0; i < message.length; i++){

    }



    return str.toString.toUpperCase();
    */
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key){
      throw new Error('Incorrect arguments!');
    }

  //  return str.toString.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
