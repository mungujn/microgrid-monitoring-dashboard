const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const common = require('./common');
const server  = require('./server');

/**
 * handler function for the save data endpoint that the GSM module POSTs to
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