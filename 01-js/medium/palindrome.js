/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s/g, '')
  let length = str.length

  for(let i= 0 ; i < str.length/2;i++){
    if(str[i]!==str[length -i-1]){
      return false
    }
  }
  return true;
}

module.exports = isPalindrome;
