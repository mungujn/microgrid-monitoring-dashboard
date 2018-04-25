/**
 * Created by nickson on 4/25/2018.
 */
const common = require('./common.js');

function receiveData(body){
    "use strict";
    return new Promise((resolve, reject)=>{
        let data = formatData(body);
        common.updateData(common.CONSTANTS.BASE_DATA_NODE, 'current', {data}).then((result)=>{
            console.log("Server.js: receive result object follows above");
            console.log(result);
            return resolve(common.CONSTANTS.SUCCESS);
        }).catch((error)=>{
            console.log("Server.js: receive error object follows above" + error.message);
            console.log(error);
            return reject(common.CONSTANTS.FAILURE);
        });
    });
}

function formatData(data){
    return {
        test: "testsss",
        time: common.getCurrentTime(),
        full: data
    };
}

module.exports.receiveData = receiveData;
