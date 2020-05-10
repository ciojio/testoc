const express = require('express');

console.log("Hello World! \n");
const app = express();
//console.log(app);
var http = require('http');
const server=http.createServer(app);
app.get('/',(req,res)=>{
    res.send('Hello ? my world');
});
const PORT = 8080;
// const HOST = '0.0.0.0';
const HOST = 'localhost';
// const HOST = 'test.com';

// const port=process.env.PORT || 80;
// app.listen(PORT);


app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);

getDockerHost = require('get-docker-host');
isInDocker = require('is-in-docker');

checkDocker = () => {
    return new Promise((resolve, reject) => {
        if (isInDocker()) {
            getDockerHost((error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        } else {
            resolve(null);
        }
    });
};

checkDocker().then((addr) => {
    if (addr) {
        console.log('Docker host is ' + addr);
    } else {
        console.log('Not in Docker');
    }
}).catch((error) => {
    console.log('Could not find Docker host: ' + error);
});