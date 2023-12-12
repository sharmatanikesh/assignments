// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const { error } = require("console")
const {writeFile} = require("fs")

console.log("I am writing in the file")

writeFile('./data.txt',"I am Tanikesh this side What are you doing",{flag:'a+'},(error)=>{
    if(error){
        console.log(error)
    }
})
console.log("Please the check the file")