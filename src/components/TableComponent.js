/**
 * Created by Mungujakisa on 4/23/2018
 * Table component
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import * as API from '../utilities/API';

const styles = {
    paper: {
        minWidth: 500
    },
    table: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
};

// Display mock data while testing the table
const MOCK = true;

/**
 * Table component
 */
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: this.getFirstData()
        };
    }

    componentDidMount() {
        this.firstLoad();
    }

    /**
     * Display retirieved entries
     */
    displayEntries = received_entries => {
        let items = [];
        received_entries.map(entry => {
            return items.push(
                <tr>
                    <td>{entry.line_1.voltage}</td>
                    <td>{entry.line_2.voltage}</td>
                    <td>{entry.line_3.voltage}</td>
                    <td>{entry.line_4.voltage}</td>
                    <td>{entry.line_5.voltage}</td>
                    <td>{entry.line_1.current}</td>
                    <td>{entry.line_2.current}</td>
                    <td>{entry.line_3.current}</td>
                    <td>{entry.line_4.current}</td>
                    <td>{entry.line_5.current}</td>
                    <td>{entry.power}</td>
                    <td>{entry.time}</td>
                </tr>
            );
        });
        return items;
    };

    /**
     * Display table
     */
    render() {
        let entries = this.displayEntries(this.state.entries);

        return (
            <div>
                <Paper elevation={5} style={styles.paper}>
                    <div>
                        <table
                            style={Object.assign({}, styles.table, styles.th)}
                        >
                            <tr>
                                <th colSpan="5">Voltage</th>
                                <th colSpan="5">Currents</th>
                                <th />
                                <th>Time</th>
                            </tr>
                            <tr>
                                <th>Line 1</th>
                                <th>Line 2</th>
                                <th>Line 3</th>
                                <th>Line 4</th>
                                <th>Line 5</th>
                                <th>Line 1</th>
                                <th>Line 2</th>
                                <th>Line 3</th>
                                <th>Line 4</th>
                                <th>Line 5</th>
                                <th>Power</th>
                                <td />
                            </tr>
                            {entries}
                        </table>
                    </div>
                </Paper>
            </div>
        );
    }

    /**
     * Begin table refreshes
     */
    firstLoad = () => {
        console.log('First load of table');
        this.everyFewSeconds();
    };

    /**
     * Update table every few seconds
     */
    everyFewSeconds = () => {
        const INTERVAL = 10000;
        setInterval(() => {
            console.log('Refreshing table state');
            /**/
            API.readData('development/hardware-states', 'line-states')
                .then(result => {
                    let old_values = this.state.entries;
                    let received_values = this.formatLineStates(result);
                    old_values.unshift(received_values);
                    this.updateEntries(old_values);
                })
                .catch(error => {
                    console.log('Error below');
                    console.log(error);
                });
            /**/
        }, INTERVAL);
    };

    /**
     * Update entries
     */
    updateEntries = received_entries => {
        this.setState({
            entries: received_entries
        });
    };

    /**
     * Format line voltage and current values for display in the SVG object
     */
    formatLineStates = raw => {
        if (MOCK) {
            let line_states = {
                line_1: {
                    current: this.getRandomCurrent(),
                    voltage: this.getRandomVoltage()
                },
                line_2: {
                    current: this.getRandomCurrent(),
                    voltage: this.getRandomVoltage()
                },
                line_3: {
                    current: this.getRandomCurrent(),
                    voltage: this.getRandomVoltage()
                },
                line_4: {
                    current: this.getRandomCurrent(),
                    voltage: this.getRandomVoltage()
                },
                line_5: {
                    current: this.getRandomCurrent(),
                    voltage: this.getRandomVoltage()
                },
                power: this.getRandomPower(),
                time: this.getRandomTime()
            };
            return line_states;
        }
        console.log('Raw line results below');
        console.log(raw);
        return raw;
    };

    /**
     * Display initial data on component first load
     */
    getFirstData = () => {
        if (MOCK) {
            return [this.getMockData(), this.getMockData(), this.getMockData()];
        } else {
            return [];
        }
    };

    /**
     * Returns mock data for application testing
     */
    getMockData = () => {
        let line_states = {
            line_1: {
                current: this.getRandomCurrent(),
                voltage: this.getRandomVoltage()
            },
            line_2: {
                current: this.getRandomCurrent(),
                voltage: this.getRandomVoltage()
            },
            line_3: {
                current: this.getRandomCurrent(),
                voltage: this.getRandomVoltage()
            },
            line_4: {
                current: this.getRandomCurrent(),
                voltage: this.getRandomVoltage()
            },
            line_5: {
                current: this.getRandomCurrent(),
                voltage: this.getRandomVoltage()
            },
            power: this.getRandomPower(),
            time: this.getRandomTime()
        };
        return line_states;
    };

    /**
     * TODO : Refactor this into a method since it is repeated in the CircuitGrid component
     * Get random time
     */
    getRandomTime = () => {
        return `${this.getRndInteger(0, 23)}:${this.getRndInteger(10, 59)} AM`;
    };

    /**
     * Get random power value
     */
    getRandomPower = () => {
        return `${this.getRndInteger(500, 700)} Watts`;
    };

    /**
     * Get random current value
     */
    getRandomCurrent = () => {
        return `${this.getRndInteger(200, 300)} A`;
    };

    /**
     * Get random voltage value
     */
    getRandomVoltage = () => {
        return `${this.getRndInteger(110, 240)} V`;
    };

    /**
     * TODO : Refactor
     * Get random integer value
     */
    getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
}

export default TableComponent;
