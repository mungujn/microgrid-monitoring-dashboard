/**
 * Created by nickson on 4/25/2018.
 */
const common = require('./common.js');

function saveData(body) {
    "use strict";

    let device_states = formatDeviceStateData(body);
    let line_states = formatLineStateData(body);

    common.updateData('development/hardware-states', 'line-states', line_states).then((result) => {
        console.log("Server.js: update result object follows above");
        console.log(result);
        return console.log(common.CONSTANTS.SUCCESS);
    }).catch((error) => {
        console.log("Server.js: receive error object follows above" + error.message);
        console.log(error);
        console.log(common.CONSTANTS.FAILURE);
    });

    common.updateData('development/hardware-states', 'device-states', device_states).then((result) => {
        console.log("Server.js: update result object follows above");
        console.log(result);
        return console.log(common.CONSTANTS.SUCCESS);
    }).catch((error) => {
        console.log("Server.js: receive error object follows above" + error.message);
        console.log(error);
        console.log(common.CONSTANTS.FAILURE);
    });

    return new Promise((resolve, reject) => {
        common.readData('development/dashboard-states', 'device-states').then((result) => {
            console.log("Server.js: read data result object follows above");
            console.log(result);
            result = formatReturnDeviceStateData(result);
            return resolve(result);
        }).catch((error) => {
            console.log("Server.js: pick data error object follows above" + error.message);
            console.log(error);
            return reject(common.CONSTANTS.FAILURE);
        });
    });
}

/*
function pickData(body) {
    "use strict";
    return new Promise((resolve, reject) => {
        common.readData('development/dashboard-states', 'device-states').then((result) => {
            console.log("Server.js: pick data result object follows above");
            console.log(result);
            return resolve(result);
        }).catch((error) => {
            console.log("Server.js: pick data error object follows above" + error.message);
            console.log(error);
            return reject(common.CONSTANTS.FAILURE);
        });
    });
}

function receiveData(body) {
    "use strict";
    return new Promise((resolve, reject) => {
        let data = formatLineStateData(body);
        common.updateData(common.CONSTANTS.BASE_DATA_NODE, 'hardware-states', data).then((result) => {
            console.log("Server.js: receive result object follows above");
            console.log(result);
            return resolve(common.CONSTANTS.SUCCESS);
        }).catch((error) => {
            console.log("Server.js: receive error object follows above" + error.message);
            console.log(error);
            return reject(common.CONSTANTS.FAILURE);
        });
    });
}
*/

function formatLineStateData(body) {
    let line_states = {
        line_1: {
            current: '300A',
            voltage: '400V'
        },
        line_2: {
            current: '300A',
            voltage: '400V'
        },
        line_3: {
            current: '300A',
            voltage: '400V'
        },
        line_4: {
            current: '300A',
            voltage: '400V'
        },
        line_5: {
            current: '300A',
            voltage: '400V'
        },
        time: common.getCurrentTime(),
        full: body,
        power: '400W'
    };
    return line_states;
}

function formatDeviceStateData(body) {
    let device_states = {
        source: 'green',
        relay_1: 'green',
        transformer_1: 'green',
        relay_2: "green",
        relay_3: 'green',
        transformer_2: 'green',
        relay_4: 'green',
        relay_5: 'green',
        relay_6: 'green',
        load_1: 'green',
        load_2: 'green',
        test: "testsss",
        time: common.getCurrentTime(),
        full: body
    };
    return device_states;
}

function formatReturnDeviceStateData(data) {
    let return_data =
        getBinaryRepresentationOfState(data.relay_1)+
        getBinaryRepresentationOfState(data.relay_2)+
        getBinaryRepresentationOfState(data.relay_3)+
        getBinaryRepresentationOfState(data.relay_4)+
        getBinaryRepresentationOfState(data.relay_5)+
        getBinaryRepresentationOfState(data.relay_6);
    return return_data;
}

function getBinaryRepresentationOfState(state){
    if (state === 'green'){
        return '1'
    } else {
        return '0'
    }
}

module.exports.saveData = saveData;

/*
module.exports.receiveData = receiveData;
module.exports.pickData = pickData;
*/

