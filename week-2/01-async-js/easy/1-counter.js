// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let number =1
function counter(){
    number= number+1
    console.log(`This the value of counter ${number}`)
}

setInterval(counter, 1000);