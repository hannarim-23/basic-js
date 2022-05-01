const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length==0){ return arr;}


  var massive=[], arr2=arr.slice();

    for(let i=0; i<arr2.length; i++){

    if( arr2[i]==='--discard-next'){ 
      if(!arr2[i+1]) delete arr2[i];
      delete arr2[i];
      delete arr2[i+1];
    }

    if( arr2[i]==='--discard-prev'){
      if(!arr2[i-1]) delete arr2[i];
      delete arr2[i];
      delete arr2[i-1];
    }

    if( arr2[i]==='--double-next'){ 
      if(!arr2[i+1]) delete arr2[i];
      arr2[i]=arr2[i+1];
    }

    if( arr2[i]==='--double-prev'){ 
      if(!arr2[i-1]) delete arr2[i];
      arr2[i]=arr2[i-1];
    }

  }


  for(let i=0; i<arr2.length; i++){
  if(arr2[i]!==undefined)
    massive.push(arr2[i]);     }

return massive;
}



module.exports = {
  transform
};


