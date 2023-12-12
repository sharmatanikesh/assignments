/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve)=>{
        console.log("I am sleeping")
        setTimeout(resolve,seconds)
        console.log("I am running")
    })
}
console.log("Lets start the program")
sleep(10000)
