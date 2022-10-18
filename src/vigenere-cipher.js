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

  encrypt(message, key){
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }

    var mes = message.toUpperCase().split('');
    let k = key.toUpperCase().split('');
    let str = [];
    var z = 0;

    function search(el){
      for(let j = 0; j < alphabet.length; j++){
        if (alphabet[j] == el){
        return j;
        }
      }
    }

    for(let i = 0; i < mes.length; i++){ 
      //console.log('---', mes[i]);
      if(/[A-Z]/i.test(mes[i])){
        let posStrEl = search(mes[i]) + 1;
        //console.log(mes[i],'--posStrEl--', posStrEl);

      for( ; z < k.length; ){
        var posKeyEl = search(k[z]) + 1;
        //console.log(k[z],'--posKeyEl--', posKeyEl);
        z++;
        if (z == key.length){
          z = 0;
        }
        break;
      }

      var CodeEl = posKeyEl + posStrEl -2;
      //console.log(mes[i], '------', alphabet[CodeEl],'-------', CodeEl);
        if(CodeEl > 25){
          CodeEl = CodeEl - 26;
        }
      //console.log(mes[i], '------', alphabet[CodeEl],'--posKeyEl--', CodeEl);

       let al = alphabet[CodeEl];
       mes[i] = al;
    }
    str.push(mes[i]);
  }
    return  str.join('');
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
