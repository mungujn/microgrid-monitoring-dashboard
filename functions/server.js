/**
 * Created by nickson on 4/25/2018.
 */
const common = require('./common.js');

/*
function saveData(body) {
    common.logObject("server.js", "request body", body);
    "use strict";

    let device_states = formatRelayStateData(body);
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
*/

function saveData(request) {
    //common.logObject("server.js", "request body", body);
    let device_states = formatRelayStateData(request);
    let line_states = formatLineStateData(request);

    common.updateData('development/hardware-states', 'line-states', line_states).then((result) => {
        //console.log("Server.js: update result object follows above");
        console.log("Line state update successful");
        return console.log(common.CONSTANTS.SUCCESS);
    }).catch((error) => {
        console.log("Server.js: receive error object follows above" + error.message);
        console.log(error);
        console.log(common.CONSTANTS.FAILURE);
    });

    common.updateData('development/hardware-states', 'device-states', device_states).then((result) => {
        //console.log("Server.js: update result object follows above");
        console.log("relay states update successful");
        return console.log(common.CONSTANTS.SUCCESS);
    }).catch((error) => {
        console.log("Server.js: receive error object follows above" + error.message);
        console.log(error);
        console.log(common.CONSTANTS.FAILURE);
    });

    return new Promise((resolve, reject) => {
        common.readData('development/dashboard-states', 'device-states').then((result) => {
            //console.log("Server.js: read data result object follows above");
            //console.log(result);
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

function formatLineStateData(request) {
    let line_states = {
        line_1: {
            current: '',
            voltage: ''
        },
        line_2: {
            current: '',
            voltage: ''
        },
        line_3: {
            current: '',
            voltage: ''
        },
        line_4: {
            current: '',
            voltage: ''
        },
        line_5: {
            current: '',
            voltage: ''
        },
        time: common.getCurrentTime(),
        power: ''
    };

    if(validateLineStates(request)) {
        console.log("server.js: request contains valid line currents and voltage values");
        line_states = {
            line_1: { //generation
                current: request.query.current_generation,
                voltage: request.query.voltage_generation
            },
            line_2: { //transmission
                current: request.query.current_transmission,
                voltage: request.query.voltage_transmission
            },
            line_3: { //distribution
                current: request.query.current_generation,
                voltage: request.query.voltage_generation
            },
            line_4: { //load 1
                current: request.query.current_load1,
                voltage: request.query.voltage_load1
            },
            line_5: { //load 2
                current: request.query.current_load2,
                voltage: request.query.voltage_load2
            },
            time: common.getCurrentTime(),
            power: request.query.Power
        };

    } else {
        console.log("server.js: request does not contain valid line currents and voltage values");
    }
    return line_states;
}

function formatRelayStateData(request) {
    let device_states = {
        relay_1: 'green',
        relay_2: "green",
        relay_3: 'green',
        relay_4: 'green',
        relay_5: 'green',
        relay_6: 'green',
        time: common.getCurrentTime(),
    };

    if(validateRelayStates(request)) {
        console.log("server.js: request contains valid relay state values");
        device_states = {
            relay_1: request.query.relay_1,
            relay_2: request.query.relay_2,
            relay_3: request.query.relay_3,
            relay_4: request.query.relay_4,
            relay_5: request.query.relay_5,
            relay_6: request.query.relay_6,
            time: common.getCurrentTime(),
        };
    } else {
        console.log("server.js: request does not contain valid relay state values")
    }
    return device_states;
}

function formatReturnDeviceStateData(data) {
    let return_data =
        getBinaryRepresentationOfState(data.relay_1) +
        getBinaryRepresentationOfState(data.relay_2) +
        getBinaryRepresentationOfState(data.relay_3) +
        getBinaryRepresentationOfState(data.relay_4) +
        getBinaryRepresentationOfState(data.relay_5) +
        getBinaryRepresentationOfState(data.relay_6);
    return return_data;
}

function getBinaryRepresentationOfState(state) {
    if (state === 'green') {
        return '1'
    } else {
        return '0'
    }
}

function validateLineStates(request){
    console.log(request.query.voltage);
    if(request.query.current_generation!== undefined &&
        request.query.current_transmission!== undefined &&
        request.query.current_load1!== undefined &&
        request.query.current_load2!== undefined &&
        request.query.voltage_generation!== undefined &&
        request.query.voltage_transmission!== undefined &&
        request.query.voltage_load1!== undefined &&
        request.query.voltage_load2!== undefined &&
        request.query.Power!== undefined){
        return true;
    }
    return false;
}

function validateRelayStates(request){
    console.log(request.query.voltage);
    if(request.query.relay_1!== undefined &&
        request.query.relay_2 !== undefined &&
        request.query.relay_3 !== undefined &&
        request.query.relay_4 !== undefined &&
        request.query.relay_5 !== undefined &&
        request.query.relay_6 !== undefined){
        return true;
    }
    return false;
}

module.exports.saveData = saveData;


/*
module.exports.receiveData = receiveData;
module.exports.pickData = pickData;
*/

