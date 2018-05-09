/**
 * Created by nickson on 1/19/2018.
 */

const CONSTANTS = {
    BASE_DATA_NODE: 'development',
    SUCCESS: "success",
    FAILURE: "failure"
};

const admin = require('firebase-admin'); // Fetch the service account key JSON file contents
const serviceAccount = require("./skey.json");
// Initialize the app with a service account, granting admin privileges
/*
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "***REMOVED***/"
});
// const db = admin.database();
/**/
const db = admin.database();

function saveData(location, key, value){
    //location = main node
    let ref = db.ref(location);
    return ref.child(key).set(value).then((data)=>{
        console.log("common.js:1: Save result object follows above");
        return console.log(data);
    }).catch((error)=>{
        console.log("common.js:2: Save error object follows above");
        return console.log(error);
    });
}

function readData(location, key){
    "use strict";
    return db.ref(location).child(key).once('value').then((result)=>{
        //console.log('common.js: Read result object follows below');
        //console.log(result);
        return result.val();
    }).catch((error)=>{
        console.log('common.js: Save error object follows above');
        return console.log(error);
    });
}

function getCurrentTime() {
    let d = new Date();
    let hour = d.getHours() + 3;
    let minutes = d.getMinutes();
    return getHoursIn12HourFormat(hour) + ':' + minutes + getAMOrPM(hour);
}

function getHoursIn12HourFormat(hour) {
    if(hour<12){
        return hour;
    } else {
        hour = hour - 12;
        if(hour === 0){
            return 12;
        }
        return hour
    }
}

function getAMOrPM(hour) {
    if(hour<12){
        return ' AM';
    } else {
        return ' PM';
    }
}

function updateData(location, key, values){
    //location = main node
    let ref = db.ref(location);
    return ref.child(key).update(values).then((data)=>{
        console.log("common.js: Save result object follows above");
        return console.log(data);
    }).catch((error)=>{
        console.log("common.js: Save error object follows above");
        return console.log(error);
    });
}

function logObject(file, message, object) {
    console.log(file + ': '+ message + " object follows above");
    console.log(object);
}

module.exports.CONSTANTS = CONSTANTS;
module.exports.saveData = saveData;
module.exports.readData = readData;
module.exports.logObject = logObject;
module.exports.getCurrentTime = getCurrentTime;
module.exports.updateData = updateData;