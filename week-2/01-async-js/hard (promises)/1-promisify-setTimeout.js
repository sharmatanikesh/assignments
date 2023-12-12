/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/





function wait(n) {
    console.log("I am inside the function but outside the promise")
    return new Promise((resolve,reject)=>{
        console.log("I am inside the promise")
        
        setTimeout(resolve,
        n)
        
    })
    
}

let result = wait(10000)

result.then(function(){
    console.log("I am starting first")
})