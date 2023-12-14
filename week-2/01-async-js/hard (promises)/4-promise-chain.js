/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(t1) {
    let ans = new Promise((resolve)=>{
        setTimeout(resolve,t1*1000)
    })

    return ans

}

function waitTwoSecond(t2) {
    let ans = new Promise((resolve)=>{
        setTimeout(resolve,t2*1000)
    })

    return ans
}

function waitThreeSecond() {
    let ans = new Promise((resolve)=>{
        setTimeout(resolve,t3*1000)
    })

    return ans

}

function calculateTime(t1,t2,t3) {
    let start = Date.now()
    return waitOneSecond(t1).then(()=>{
        return waitOneSecond(t2)
    }).then(()=>{
        return waitOneSecond(t3)
    }).then(()=>{
        return new Promise((resolve)=>{
            let end = Date.now()
            let difference = end - start
            resolve(difference)
        })
    })

}

module.exports = calculateTime