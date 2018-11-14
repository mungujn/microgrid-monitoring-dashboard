/**
 * Created by nickson on 1/19/2018.
 */

const CONSTANTS = {
    BASE_DATA_NODE: 'development',
    SUCCESS: 'success',
    FAILURE: 'failure'
};

const admin = require('firebase-admin'); // Fetch the service account key JSON file contents
const serviceAccount = require('./skey.json');

// uncomment for local testing
// Initialize the app with a service account, granting admin privileges
/*
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ak-minigrid.firebaseio.com/"
});
// const db = admin.database();
/**/

const db = admin.database();

/**
 *
 * @param {string} location comma separated string identifying where the data will be saved
 * @param {*} key data key
 * @param {*} value data value
 */
function saveData(location, key, value) {
    //location = main node
    let ref = db.ref(location);
    return ref
        .child(key)
        .set(value)
        .then(data => {
            console.log('common.js:1: Save result object follows above');
            return console.log(data);
        })
        .catch(error => {
            console.log('common.js:2: Save error object follows above');
            return console.log(error);
        });
}

/**
 *
 * @param {*} location comma separated string identifying where the data will be retrieved from
 * @param {*} key key identifier for the data to retreive
 */
function readData(location, key) {
    'use strict';
    return db
        .ref(location)
        .child(key)
        .once('value')
        .then(result => {
            //console.log('common.js: Read result object follows below');
            //console.log(result);
            return result.val();
        })
        .catch(error => {
            console.log('common.js: Save error object follows above');
            return console.log(error);
        });
}

/**
 * Returns human readable time representation
 */
function getCurrentTime() {
    let d = new Date();
    let hour = d.getHours() + 3;
    let minutes = d.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return getHoursIn12HourFormat(hour) + ':' + minutes + getAMOrPM(hour);
}

/**
 * Converts 24 hour value to 12 hour format
 * @param {number} hour hour value to convert
 */
function getHoursIn12HourFormat(hour) {
    if (hour < 12) {
        return hour;
    } else {
        hour = hour - 12;
        if (hour === 0) {
            return 12;
        }
        return hour;
    }
}

/**
 * Get the hour identifier, either AM or PM
 * @param {number} hour hour value to convert
 */
function getAMOrPM(hour) {
    if (hour < 12) {
        return ' AM';
    } else {
        return ' PM';
    }
}

/**
 *
 * @param {string} location comma separated string identifying where the data to be updated is located
 * @param {*} key data key
 * @param {*} values new data values to update
 */
function updateData(location, key, values) {
    //location = main node
    let ref = db.ref(location);
    return ref
        .child(key)
        .update(values)
        .then(data => {
            console.log('common.js: Save result object follows above');
            return console.log(data);
        })
        .catch(error => {
            console.log('common.js: Save error object follows above');
            return console.log(error);
        });
}

/**
 * logs an object to the console. logs to standard output (console in this case) can be viewed in the firebase dashboard
 * @param {string} file js file the log call was made from
 * @param {string} message message to log to console
 * @param {*} object object to log
 */
function logObject(file, message, object) {
    console.log(file + ': ' + message + ' object follows above');
    console.log(object);
}

module.exports.CONSTANTS = CONSTANTS;
module.exports.saveData = saveData;
module.exports.readData = readData;
module.exports.logObject = logObject;
module.exports.getCurrentTime = getCurrentTime;
module.exports.updateData = updateData;
