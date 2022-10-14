const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter= new MyEmitter();

myEmitter.on('WaterFull', ()=> {
    console.log('Please turn off the motor!');
    setTimeout(()=>{
        console.log("Please turn off! Gentle reminder ");
    }, 3000);
}
);
//Note: setTimeout doesnt block other functions!
console.log("The script is still running")
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');
//chat application video- codewithharry{socket and nodejs}