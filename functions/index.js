const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const common = require('./common');
const server  = require('./server');

/*
exports.receiveData = functions.https.onRequest((request, response) => {
    return server.receiveData(request.body).then((result)=>{
        common.logObject('index.js', 'Receive data', request);
        common.logObject('index.js', 'Receive result', result);
        return response.send(result);
    }).catch((error) => {
        common.logObject('index.js', 'Receive error', error);
        response.send(error);
    });
});

exports.saveData = functions.https.onRequest((request, response) => {
    return server.saveData(request.body).then((result)=>{
        common.logObject('index.js', 'Save data', request);
        common.logObject('index.js', 'Save result', result);
        return response.send(result);
    }).catch((error) => {
        common.logObject('index.js', 'Save error', error);
        response.send(error);
    });
});
*/

exports.saveData = functions.https.onRequest((request, response) => {
    common.logObject('index.js', 'Save data request query', request.query);
    return server.saveData(request).then((result)=>{
        //common.logObject('index.js', 'Save result', result);
        return response.send(result);
    }).catch((error) => {
        common.logObject('index.js', 'Save error', error);
        response.send(error);
    });
});

/*
exports.pickData = functions.https.onRequest((request, response) => {
    return server.pickData(request.body).then((result)=>{
        common.logObject('index.js', 'Receive data', request);
        common.logObject('index.js', 'Receive result', result);
        return response.send(result);
    }).catch((error) => {
        common.logObject('index.js', 'Receive error', error);
        response.send(error);
    });
});
*/