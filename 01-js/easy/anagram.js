/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
   str2 = str2.toLowerCase()

   let sortedStr1 = str1.split("").sort().join("")
   let sortedStr2 = str2.split("").sort().join("")

   console.log(sortedStr1)

   for(let i =0; i < str1.length; i++){
    if(sortedStr1[i]!== sortedStr2[i]){
      return false
    }

   }

  if(str1.length !== str2.length){
  
    return false
    
  }
  return true

   

  

    }

 
isAnagram("Hello what","hello what")

module.exports = isAnagram;
