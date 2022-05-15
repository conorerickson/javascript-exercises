const palindromes = function (str) {
  let reverseString = str.split("");
  let reverseArray = reverseString.reverse();
  let joinArray = reverseArray.join("");
  if(joinArray == str){
  return true;
  }else{
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
