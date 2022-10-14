const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=> {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url=='/hello'){
        res.end('<h1> This is Rimjhim</h1><p>Kya Haalchaal?</p>');
    }
    else if(req.url=='/about'){
       // res.harry();
        res.statusCode= 200;
        res.end('<h1>About Rimjhhiim Mittal</h1><p>She has just begun with backend development</p>');
    }
    else if(req.url=='/'){
        res.statusCode= 200;
        const data= fs.readFileSync('index.html')
        
        res.end(data.toString());
    }
    else{
        res.statusCode= 404;
        res.end('This page was not found on th eserver')
    }
   }) 

server.listen(port, ()=>{
   console.log( 'Server is listenin on port ${port}')}) ;