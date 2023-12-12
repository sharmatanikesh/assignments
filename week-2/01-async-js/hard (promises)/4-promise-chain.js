/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */



function waitOneSecond() {
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"I am resolved after one second")
  })
}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,"I am resolved after two second")
      })

}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,3000,"I am resolved after three second")
      })

}

function calculateTime() {
    waitOneSecond().then((value)=>{console.log("First function",value)})
    waitTwoSecond().then((value)=>{console.log("Second function",value)})
    waitThreeSecond().then((value)=>{console.log("Third function",value)})
   

}

calculateTime()