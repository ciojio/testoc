const express = require('express');

console.log("Hello World! \n");
const app = express();
//console.log(app);
var http = require('http');
const server=http.createServer(app);

const PORT = 8080;
const HOST = '0.0.0.0';
//const HOST = 'localhost';
// const HOST = 'test.com';

// const port=process.env.PORT || 80;
// app.listen(PORT);


app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);


const dns = require('dns')

var net = dns.lookup('localhost', function(err, result) {
  console.log(result)
})





app.get('/',(req,res)=>{
    res.send(net);
});