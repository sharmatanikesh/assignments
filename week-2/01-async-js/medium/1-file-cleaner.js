// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

fs.readFile("./data.txt","utf-8",function(error,data){
    if(error){
        console.log(error)
    }
    console.log(data)

    //const res = data.replace(/\s{2,}/g, ' ')
    const res = data.split(/\s+/).toString()
    console.log(res)
     fs.writeFile("./data.txt",res,function(error){
        if(error){
            console.log(error)
        }
     })
})