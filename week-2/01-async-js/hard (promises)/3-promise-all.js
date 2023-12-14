/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function waitOneSecond(first) {
    
    let ans= new Promise((resolve)=>{
        setTimeout(resolve,first*1000)
    })
    return ans

}

function waitTwoSecond(second) {

    let ans= new Promise((resolve)=>{
        setTimeout(resolve,second*1000)
    })
    return ans
}

function waitThreeSecond(third) {
    let ans= new Promise((resolve)=>{
        setTimeout(resolve,third*1000)
    })
    return ans

}

 function calculateTime(first,second,third) {
    
    const start =  Date.now()
     return Promise.all([waitOneSecond(first),waitTwoSecond(second),waitThreeSecond(third)]).
    then(()=>{
        return new Promise((resolve)=>{
        const end =  Date.now()
        const difference = end - start
        resolve(difference)
        })
    })
    
}

module.exports = calculateTime