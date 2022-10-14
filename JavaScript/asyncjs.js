//javascript believes in asynchronous architecture. It doesnt wait for one command to finish. It moves further aage. 

setTimeout(()=>{
    console.log("Prints after one second")
}, 1000);

console.log("Prints before the 1 second")