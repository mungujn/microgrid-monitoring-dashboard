/**
 * Created by nickson on 4/25/2018.
 * Backend core logic
 */
const common = require('./common.js');

/**
 * Parse and save data from the grid
 * @param {*} request express request object containing data sent in by the micro grid
 */
function saveData(request) {
    //common.logObject("server.js", "request body", body);
    let device_states = formatRelayStateData(request);
    let line_states = formatLineStateData(request);

    common
        .updateData('development/hardware-states', 'line-states', line_states)
        .then(result => {
            //console.log("Server.js: update result object follows above");
            console.log('Line state update successful');
            return console.log(common.CONSTANTS.SUCCESS);
        })
        .catch(error => {
            console.log(
                'Server.js: receive error object follows above' + error.message
            );
            console.log(error);
            console.log(common.CONSTANTS.FAILURE);
        });

    common
        .updateData(
            'development/hardware-states',
            'device-states',
            device_states
        )
        .then(result => {
            //console.log("Server.js: update result object follows above");
            console.log('relay states update successful');
            return console.log(common.CONSTANTS.SUCCESS);
        })
        .catch(error => {
            console.log(
                'Server.js: receive error object follows above' + error.message
            );
            console.log(error);
            console.log(common.CONSTANTS.FAILURE);
        });

    return new Promise((resolve, reject) => {
        common
            .readData('development/dashboard-states', 'device-states')
            .then(result => {
                //console.log("Server.js: read data result object follows above");
                //console.log(result);
                result = formatReturnDeviceStateData(result);
                return resolve(result);
            })
            .catch(error => {
                console.log(
                    'Server.js: pick data error object follows above' +
                        error.message
                );
                console.log(error);
                return reject(common.CONSTANTS.FAILURE);
            });
    });
}

/**
 * Extracts electric lines current and voltage data from the request object then formats it into
 * a format readable by the web app
 * @param {*} request express request object containing data sent in by the micro grid
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
        power: '' + 'W'
    };

    //no longer validating data validateLineStates(request)
    displayReceivedLineStates(request);
    // console.log("server.js: request contains valid line currents and voltage values");
    line_states = {
        line_1: {
            //generation
            current: formatCurrent(request.query.current_generation),
            voltage: formatVoltage(request.query.voltage_generation)
        },
        line_2: {
            //transmission
            current: formatCurrent(request.query.current_transmission),
            voltage: formatVoltage(request.query.voltage_transmission)
        },
        line_3: {
            //distribution
            current: formatCurrent(request.query.current_distribution),
            voltage: formatVoltage(request.query.voltage_load1)
        },
        line_4: {
            //load 1
            current: formatCurrent(request.query.current_load1),
            voltage: formatVoltage(request.query.voltage_load1)
        },
        line_5: {
            //load 2
            current: formatCurrent(request.query.current_load2),
            voltage: formatVoltage(request.query.voltage_load2)
        },
        time: common.getCurrentTime(),
        power: request.query.Power + 'W'
    };
    return line_states;
}

/**
 * Log sent data. this function is useful when debugging the arduino implementation
 * @param {*} request express request object containing data sent in by the micro grid
 */
function displayReceivedLineStates(request) {
    console.log(
        'request.query.current_generation' + request.query.current_generation
    );
    console.log(
        'request.query.current_transmission: ' +
            request.query.current_transmission
    );
    console.log(
        'request.query.current_distribution' +
            request.query.current_distribution
    );
    console.log('request.query.current_load1' + request.query.current_load1);
    console.log('request.query.current_load2' + request.query.current_load2);
    console.log(
        'request.query.voltage_generation' + request.query.voltage_generation
    );
    console.log(
        'request.query.voltage_transmission' +
            request.query.voltage_transmission
    );
    console.log('(request.query.voltage_load1' + request.query.voltage_load1);
    console.log('request.query.voltage_load2' + request.query.voltage_load2);
    console.log('request.query.Power' + request.query.Power);
}

/**
 * Format the voltage value into a human readable form
 * @param {string} value voltage value
 */
function formatVoltage(value) {
    let add_post_fix = true;

    if (add_post_fix) {
        return value + 'V';
    }
    return value;
}

/**
 * Format the current value into a human readable form
 * @param {string} value current value
 */
function formatCurrent(value) {
    let add_post_fix = true;

    if (add_post_fix) {
        return value + 'A';
    }
    return value;
}

/**
 * Extracts electric relays state data from the request object then formats it into
 * a format readable by the web app
 * @param {*} request express request object containing data sent in by the micro grid
 */
function formatRelayStateData(request) {
    let device_states = {
        relay_1: 'green',
        relay_2: 'green',
        relay_3: 'green',
        relay_4: 'green',
        relay_5: 'green',
        relay_6: 'green',
        time: common.getCurrentTime()
    };

    // not validatingvalidateRelayStates(request)
    console.log('server.js: request contains valid relay state values');
    device_states = {
        relay_1: getInRedOrGreen(request.query.relay1),
        relay_2: getInRedOrGreen(request.query.relay2),
        relay_3: getInRedOrGreen(request.query.relay3),
        relay_4: getInRedOrGreen(request.query.relay4),
        relay_5: getInRedOrGreen(request.query.relay5),
        relay_6: getInRedOrGreen(request.query.relay6),
        time: common.getCurrentTime()
    };
    return device_states;
}

/**
 * Format the relay state value into a human readable form
 * @param {string} value relay state
 */
function getInRedOrGreen(value) {
    console.log('Relay value: ' + value);
    switch (value) {
        case 0:
            return 'red';
        case 1:
            return 'green';
        case '0':
            return 'red';
        case '1':
            return 'green';
    }
}

/**
 * Format the relay state values from the human readable form from the dashboard
 * to a format easier to parse at the arduino
 * @param {*} data current value
 */
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

/**
 * Format the relay state value into a form easier to parse at the arduino
 * @param {string} state relay state
 */
function getBinaryRepresentationOfState(state) {
    if (state === 'green') {
        return '1';
    } else {
        return '0';
    }
}

/**
 * Validate that the Arduino is sending valid current and voltage values
 * @param {*} request express request object containing data sent in by the micro grid
 */
function validateLineStates(request) {
    console.log(request.query.voltage);
    if (
        request.query.current_generation !== undefined &&
        request.query.current_transmission !== undefined &&
        request.query.current_load1 !== undefined &&
        request.query.current_load2 !== undefined &&
        request.query.voltage_generation !== undefined &&
        request.query.voltage_transmission !== undefined &&
        request.query.voltage_load1 !== undefined &&
        request.query.voltage_load2 !== undefined &&
        request.query.Power !== undefined
    ) {
        return true;
    }
    return false;
}

/**
 * Validate that the Arduino is sending valid relay state values
 * @param {*} request express request object containing data sent in by the micro grid
 */
function validateRelayStates(request) {
    if (
        request.query.relay_1 !== undefined &&
        request.query.relay_2 !== undefined &&
        request.query.relay_3 !== undefined &&
        request.query.relay_4 !== undefined &&
        request.query.relay_5 !== undefined &&
        request.query.relay_6 !== undefined
    ) {
        return true;
    }
    return false;
}

module.exports.saveData = saveData;
