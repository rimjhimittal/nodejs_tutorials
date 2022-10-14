let fs = require('fs/promises');

//Async-Await is  a method of making non- blocking js blocking.


const readThree =  async (file1, file2, file3)=>
{
    let a1 = fs.readFile(file1, "utf-8");
    let a2 = fs.readFile(file2, "utf-8");
    let a3 = fs.readFile(file3, "utf-8");
    
    let c1 = await a1; //jaise hi a1 finish ho, tabtak wait kro;
    console.log(c1);
    
    let c2 = await a2;
    console.log(c2);
    
    let c3 = await a3;//You cannot use await jabtak u declare function as async
    console.log(c3);


}
readThree("file1.txt", "file2.txt" , "file3.txt")


// let a =fs.readFile("file.txt", "utf-8");
// //console.log(a);
// a.then((data)=> {
//     console.log(data);
// })
// console.log("First")