/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase()
     const string = str.split("").join()
     let count = 0;

     for(let i =0;i < string.length ; i++){
       if(string[i].includes("a") || string[i].includes("e") || string[i].includes("i") || string[i].includes("o") || string[i].includes("u")
       ){
          count = count+1;
       }
     }

     return count
}

module.exports = countVowels;