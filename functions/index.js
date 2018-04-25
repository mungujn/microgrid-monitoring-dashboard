const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const common = require('./common');
const server  = require('./server');

exports.receiveData = functions.https.onRequest((request, response) => {
    return server.receiveData(request.body).then((result)=>{
        common.logObject('index.js', 'Received data', request);
        common.logObject('index.js', 'Received result', result);
        return response.send(result);
    }).catch((error) => {
        common.logObject('index.js', 'Receive error', error);
        response.send(error);
    });
});