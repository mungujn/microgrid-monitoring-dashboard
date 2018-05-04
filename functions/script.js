/*
*
* */
const common = require('./common.js');
const server = require('./server.js');

server.saveData("nottesting").then((result)=>{
    return console.log(result);
}).catch((error)=>{
    console.log(error);
});

