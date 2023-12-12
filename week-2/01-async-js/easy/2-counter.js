// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let number =1
function counter(){
    number = number +1
    console.log(number)
}

for(let i=0 ; i<10;i++){
    setTimeout(counter,1000)
}



































































// (Hint: setTimeout)