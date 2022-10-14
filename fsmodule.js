const fs = require('fs');
fs.readFile('file.txt', 'utf-8', (err, data)=>{
    console.log(err, data)
})
console.log("Finished reading file")
fs.writeFile('file2.txt', "This is a datta", ()=>{
    console.log("Written to the file")
})
//ecmascript - .mjs
//common js