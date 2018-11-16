/**
 * Created by Mungujakisa on 4/23/2018.
 * Circuit grid component
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Fade from 'material-ui/transitions/Fade';
import { CircularProgress } from 'material-ui/Progress';
import * as API from '../utilities/API';

// set circuit to use mock values to test behaviour
const MOCK = true;

const styles = {
    paper: {
        minWidth: 500
    },
    inner: {
        width: 'fit-content',
        height: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttons: {
        width: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    button: {
        margin: 5
    },
    placeholder: {
        height: 40,
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    svg_container: {
        width: '1285px'
        /*
        display: 'inline-block',
        position: 'relative',

        paddingBottom: '100%',
        verticalAlign: 'middle',
        overflow: 'hidden'
        */
    },
    svg_content: {
        /*
        display: 'inline-block',
        position: 'absolute',
        top: '0',
        left: '0'
        */
    }
};

/**
 * Circuit grid component
 */
class CircuitGrid extends Component {
    devices = {
        relay_1: {
            id: 'cell-4'
        },
        relay_2: {
            id: 'cell-6'
        },
        relay_3: {
            id: 'cell-8'
        },
        relay_4: {
            id: 'cell-10'
        },
        relay_5: {
            id: 'cell-13'
        },
        relay_6: {
            id: 'cell-12'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            device_states: {
                relay_1: 'green',
                relay_2: 'green',
                relay_3: 'green',
                relay_4: 'green',
                relay_5: 'green',
                relay_6: 'green'
            },
            line_states: {
                line_1: {
                    current: '0A',
                    voltage: '0V'
                },
                line_2: {
                    current: '0A',
                    voltage: '0V'
                },
                line_3: {
                    current: '0A',
                    voltage: '0V'
                },
                line_4: {
                    current: '0A',
                    voltage: '0V'
                },
                line_5: {
                    current: '0A',
                    voltage: '0V'
                }
            }
        };

        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Handle relay switch click
     * @param {*} e click event
     * @param {*} data
     */
    handleClick(e, data) {
        let device_states = this.state.device_states;

        switch (data) {
            case this.devices.relay_1.id:
                device_states.relay_1 = this.flipColor(
                    this.state.device_states.relay_1
                );
                break;
            case this.devices.relay_2.id:
                device_states.relay_2 = this.flipColor(
                    this.state.device_states.relay_2
                );
                break;
            case this.devices.relay_3.id:
                device_states.relay_3 = this.flipColor(
                    this.state.device_states.relay_3
                );
                break;
            case this.devices.relay_4.id:
                device_states.relay_4 = this.flipColor(
                    this.state.device_states.relay_4
                );
                break;
            case this.devices.relay_5.id:
                device_states.relay_5 = this.flipColor(
                    this.state.device_states.relay_5
                );
                break;
            case this.devices.relay_6.id:
                device_states.relay_6 = this.flipColor(
                    this.state.device_states.relay_6
                );
                break;
            default:
        }

        this.setState({
            loading: true
        });

        if (!MOCK) {
            this.setState({ device_states });
        }

        API.updateData(
            'development/dashboard-states',
            'device-states',
            device_states
        )
            .then(result => {
                console.log('Update result below');
                console.log(result);
                this.setState({
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error below');
                console.log(error);
                this.setState({
                    loading: false
                });
            });
    }

    /**
     * flip relay icon color
     */
    flipColor = color => {
        if (color === 'red') {
            return 'green';
        }
        return 'red';
    };

    componentDidMount() {
        this.firstLoad();
    }

    /**
     * Render the circuit grid component
     */
    render() {
        return (
            <div>
                <Paper elevation={5} style={styles.paper}>
                    <div>
                        <div style={styles.inner}>{this.getSVG()}</div>

                        {this.getButtons()}
                    </div>
                </Paper>
            </div>
        );
    }

    /**
     * Start the grid values update process
     */
    firstLoad = () => {
        console.log('First load of grid');
        this.everyFewSeconds();
    };

    /**
     * Get the relay buttons to display
     */
    getButtons = () => {
        let show_buttons = true;

        if (show_buttons) {
            return (
                <div style={styles.buttons}>
                    <div>
                        <div style={styles.placeholder}>
                            <Fade
                                in={this.state.loading}
                                style={{
                                    transitionDelay: this.state.loading
                                        ? '800ms'
                                        : '0ms'
                                }}
                                unmountOnExit
                            >
                                <CircularProgress />
                            </Fade>
                        </div>
                    </div>

                    <Button
                        onClick={e =>
                            this.handleClick(e, this.devices.relay_1.id)
                        }
                        variant="raised"
                        color="primary"
                        style={styles.button}
                    >
                        Relay 1
                    </Button>
                    <Button
                        onClick={e =>
                            this.handleClick(e, this.devices.relay_2.id)
                        }
                        variant="raised"
                        color="primary"
                        style={styles.button}
                    >
                        Relay 2
                    </Button>
                    <Button
                        onClick={e =>
                            this.handleClick(e, this.devices.relay_3.id)
                        }
                        variant="raised"
                        color="primary"
                        style={styles.button}
                    >
                        Relay 3
                    </Button>
                    <Button
                        onClick={e =>
                            this.handleClick(e, this.devices.relay_4.id)
                        }
                        variant="raised"
                        color="primary"
                        style={styles.button}
                    >
                        Relay 4
                    </Button>
                    <Button
                        onClick={e =>
                            this.handleClick(e, this.devices.relay_5.id)
                        }
                        variant="raised"
                        color="primary"
                        style={styles.button}
                    >
                        Relay 5
                    </Button>
                    <Button
                        onClick={e =>
                            this.handleClick(e, this.devices.relay_6.id)
                        }
                        variant="raised"
                        color="primary"
                        style={styles.button}
                    >
                        Relay 6
                    </Button>
                </div>
            );
        }
    };

    /**
     * update the grid every few seconds
     */
    everyFewSeconds = () => {
        const INTERVAL = 3000;
        setInterval(() => {
            console.log('Refreshing grid state');
            API.readData('development/hardware-states', 'device-states')
                .then(result => {
                    let device_states = this.formatDeviceStates(result);
                    this.setState({ device_states });
                })
                .catch(error => {
                    console.log('Error below');
                    console.log(error);
                });

            API.readData('development/hardware-states', 'line-states')
                .then(result => {
                    let line_states = this.formatLineStates(result);
                    this.setState({ line_states });
                })
                .catch(error => {
                    console.log('Error below');
                    console.log(error);
                });
        }, INTERVAL);
    };

    /**
     * Format grid device states
     */
    formatDeviceStates = raw => {
        if (MOCK) {
            let device_states = {
                source: this.getRandomColor(),
                relay_1: this.getRandomColor(),
                transformer_1: this.getRandomColor(),
                relay_2: this.getRandomColor(),
                relay_3: this.getRandomColor(),
                transformer_2: this.getRandomColor(),
                relay_4: this.getRandomColor(),
                relay_5: this.getRandomColor(),
                relay_6: this.getRandomColor(),
                load_1: this.getRandomColor(),
                load_2: this.getRandomColor()
            };
            return device_states;
        }
        console.log('Raw device state results below');
        console.log(raw);
        return raw;
    };

    /**
     * Format grid electrical lines states
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
                time: this.getRandomTime()
            };
            return line_states;
        }
        console.log('Raw line results below');
        console.log(raw);
        return raw;
    };

    /**
     * Returns the SVG object representing the grid
     */
    getSVG = () => {
        return (
            <div style={styles.svg_container}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="1285px"
                    height="349px"
                    version="1.1"
                    style={styles.svg_content}
                >
                    <defs />
                    <g transform="translate(0.5,0.5)">
                        <g id="cell-49aa80bd56f502a1-49">
                            <rect
                                x="88.8"
                                y="10.4"
                                width="209.6"
                                height={80}
                                fill="#ffffff"
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-3"
                            content='<object label="" placeholders="1"/>
        '
                        >
                            <ellipse
                                cx={58}
                                cy={238}
                                rx={48}
                                ry={48}
                                fill="#ffffff"
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-4"
                            content='<object label=""/>
      '
                        >
                            <rect
                                x="170.4"
                                y="226.4"
                                width={24}
                                height={24}
                                fill={this.state.device_states.relay_1}
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-5"
                            content='<object label="" placeholders="1"/>
    '
                        >
                            <ellipse
                                cx={290}
                                cy={238}
                                rx={48}
                                ry={32}
                                fill="#ffffff"
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-6"
                            content='<object label="" placeholders="1"/>
    '
                        >
                            <path
                                d="M 406.4 218.4 L 426.4 238.4 L 406.4 258.4 L 386.4 238.4 Z"
                                fill={this.state.device_states.relay_2}
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-7">
                            <path
                                d="M 26.4 246.4 L 37.96 229.06 Q 42.4 222.4 45.98 229.56 L 62.82 263.24 Q 66.4 270.4 70.84 263.74 L 82.4 246.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-8"
                            content='<object label="" placeholders="1"/>
    '
                        >
                            <rect
                                x={644}
                                y="226.4"
                                width={24}
                                height={24}
                                fill={this.state.device_states.relay_3}
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-9"
                            content='<object label="" placeholders="1"/>
    '
                        >
                            <ellipse
                                cx={770}
                                cy={238}
                                rx={48}
                                ry={32}
                                fill="#ffffff"
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-10"
                            content='<object label="" placeholders="1"/>
    '
                        >
                            <rect
                                x="874.4"
                                y="222.4"
                                width={32}
                                height={32}
                                fill={this.state.device_states.relay_4}
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-11">
                            <path
                                d="M 986.4 294.4 L 986.4 190.4"
                                fill="none"
                                stroke="#000000"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-12"
                            content='<object label="" placeholders="1"/>
    '
                        >
                            <rect
                                x="1042.4"
                                y="258.4"
                                width={24}
                                height={24}
                                fill={this.state.device_states.relay_6}
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-13"
                            content='<object label="" placeholders="1"/>
    '
                        >
                            <rect
                                x="1042.4"
                                y="194.4"
                                width={24}
                                height={24}
                                fill={this.state.device_states.relay_5}
                                stroke="#000000"
                                pointerEvents="none"
                            />
                        </g>
                        <g
                            id="cell-14"
                            content='<object label="Load 1" placeholders="1"/>
    '
                        >
                            <rect
                                x="1178.4"
                                y="178.4"
                                width={96}
                                height={48}
                                fill="#ffffff"
                                stroke="#000000"
                                pointerEvents="none"
                            />
                            <g transform="translate(1211.5,197.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={37}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 38,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Load 1
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={19}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Load 1
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g
                            id="cell-15"
                            content='<object label="Load 2" placeholders="1"/>
    '
                        >
                            <rect
                                x="1178.4"
                                y="246.4"
                                width={96}
                                height={48}
                                fill="#ffffff"
                                stroke="#000000"
                                pointerEvents="none"
                            />
                            <g transform="translate(1211.5,265.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={37}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 38,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Load 2
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={19}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Load 2
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-16">
                            <path
                                d="M 1066.4 206.4 L 1178.4 206.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-17">
                            <path
                                d="M 1068 270.4 L 1178.4 270.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-18">
                            <path
                                d="M 986.4 206.4 L 1042.4 206.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-19">
                            <path
                                d="M 986.4 270.4 L 1042.4 270.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-20">
                            <path
                                d="M 906.4 238.4 L 986.4 238.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-21">
                            <path
                                d="M 818.4 238.4 L 874.4 238.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-22">
                            <path
                                d="M 668 238.4 L 722.4 238.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-23">
                            <path
                                d="M 426.4 238.4 L 644 238.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-24">
                            <path
                                d="M 338.4 238.4 L 386.4 238.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-25">
                            <path
                                d="M 106.4 238.4 L 170.4 238.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-26">
                            <path
                                d="M 194.4 238.4 L 242.4 238.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-27">
                            <g transform="translate(42.5,289.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={38}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 39,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Source
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={19}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Source
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-28">
                            <g transform="translate(165.5,253.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={41}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 42,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Relay 1
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={21}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Relay 1
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-29">
                            <g transform="translate(260.5,273.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={74}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 76,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Transformer 1
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={37}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Transformer 1
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-30">
                            <g transform="translate(389.5,261.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={41}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 42,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Relay 2
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={21}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Relay 2
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-31">
                            <g transform="translate(639.5,253.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={41}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 42,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Relay 3
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={21}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Relay 3
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-32">
                            <g transform="translate(740.5,273.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={74}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 76,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Transformer 2
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={37}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Transformer 2
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-33">
                            <g transform="translate(873.5,261.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={41}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 42,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Relay 4
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={21}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Relay 4
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-34">
                            <g transform="translate(1035.5,221.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={41}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 42,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Relay 5
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={21}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Relay 5
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-35">
                            <g transform="translate(1037.5,285.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={41}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 42,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Relay 6
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={21}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Relay 6
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-1d4632952df11f7b-46">
                            <path
                                d="M 184.8 128.8 L 180.8 128.8 Q 176.8 128.8 176.8 136.8 L 176.8 178.4 Q 176.8 186.4 172.8 186.4 L 170.8 186.4 Q 168.8 186.4 172.8 186.4 L 174.8 186.4 Q 176.8 186.4 176.8 194.4 L 176.8 236 Q 176.8 244 180.8 244 L 184.8 244"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                transform="rotate(90,176.8,186.4)"
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-1d4632952df11f7b-47">
                            <path
                                d="M 539.2 10 L 535.2 10 Q 531.2 10 531.2 18 L 531.2 178.4 Q 531.2 186.4 527.2 186.4 L 525.2 186.4 Q 523.2 186.4 527.2 186.4 L 529.2 186.4 Q 531.2 186.4 531.2 194.4 L 531.2 354.8 Q 531.2 362.8 535.2 362.8 L 539.2 362.8"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                transform="rotate(90,531.2,186.4)"
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-1d4632952df11f7b-48">
                            <path
                                d="M 906.4 122.4 L 902.4 122.4 Q 898.4 122.4 898.4 130.4 L 898.4 178.4 Q 898.4 186.4 894.4 186.4 L 892.4 186.4 Q 890.4 186.4 894.4 186.4 L 896.4 186.4 Q 898.4 186.4 898.4 194.4 L 898.4 242.4 Q 898.4 250.4 902.4 250.4 L 906.4 250.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                transform="rotate(90,898.4,186.4)"
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-1d4632952df11f7b-49">
                            <g transform="translate(164.5,165.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={33}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 34,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Line 1
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={17}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Line 1
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-1d4632952df11f7b-50">
                            <g transform="translate(516.5,165.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={33}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 34,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Line 2
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={17}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Line 2
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-1d4632952df11f7b-51">
                            <g transform="translate(884.5,165.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={33}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 34,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Line 3
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={17}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Line 3
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-35">
                            <path
                                d="M 1094.4 86.4 L 1090.4 86.4 Q 1086.4 86.4 1086.4 94.4 L 1086.4 154.4 Q 1086.4 162.4 1082.4 162.4 L 1080.4 162.4 Q 1078.4 162.4 1082.4 162.4 L 1084.4 162.4 Q 1086.4 162.4 1086.4 170.4 L 1086.4 230.4 Q 1086.4 238.4 1090.4 238.4 L 1094.4 238.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                transform="rotate(90,1086.4,162.4)"
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-49aa80bd56f502a1-36">
                            <path
                                d="M 1088.4 234.4 L 1084.4 234.4 Q 1080.4 234.4 1080.4 242.4 L 1080.4 302.4 Q 1080.4 310.4 1076.4 310.4 L 1074.4 310.4 Q 1072.4 310.4 1076.4 310.4 L 1078.4 310.4 Q 1080.4 310.4 1080.4 318.4 L 1080.4 378.4 Q 1080.4 386.4 1084.4 386.4 L 1088.4 386.4"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                transform="rotate(-90,1080.4,310.4)"
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-49aa80bd56f502a1-37">
                            <g transform="translate(1072.5,141.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={33}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 34,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Line 4
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={17}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Line 4
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-38">
                            <g transform="translate(1064.5,325.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={33}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 34,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Line 5
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={17}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Line 5
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-41">
                            <g transform="translate(123.5,172.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_1.voltage
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_1.voltage}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-42">
                            <g transform="translate(211.5,172.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_1.current
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_1.current}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-43">
                            <path
                                d="M 196.8 1.6 L 192.8 1.6 Q 188.8 1.6 188.8 9.6 L 188.8 51.2 Q 188.8 59.2 184.8 59.2 L 182.8 59.2 Q 180.8 59.2 184.8 59.2 L 186.8 59.2 Q 188.8 59.2 188.8 67.2 L 188.8 108.8 Q 188.8 116.8 192.8 116.8 L 196.8 116.8"
                                fill="none"
                                stroke="#000000"
                                strokeMiterlimit={10}
                                transform="rotate(90,188.8,59.2)"
                                pointerEvents="none"
                            />
                        </g>
                        <g id="cell-49aa80bd56f502a1-44">
                            <g transform="translate(170.5,37.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={58}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 59,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Line Name
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={29}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Line Name
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-45">
                            <g transform="translate(115.5,45.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={43}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                &nbsp;Voltage
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={22}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        &nbsp;Voltage
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-46">
                            <g transform="translate(227.5,45.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={40}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                Current
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={20}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        Current
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-50">
                            <g transform="translate(97.5,13.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={22}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                width: 23,
                                                whiteSpace: 'nowrap',
                                                wordWrap: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                <b>Key</b>
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={11}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        [Not supported by viewer]
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-51">
                            <g transform="translate(378.5,172.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_2.voltage
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_2.voltage}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-52">
                            <g transform="translate(660.5,172.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_2.current
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_2.current}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-53">
                            <g transform="translate(845.5,172.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_3.voltage
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_3.voltage}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-54">
                            <g transform="translate(948.5,172.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_3.current
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_3.current}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-55">
                            <g transform="translate(1023.5,148.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_4.voltage
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_4.voltage}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-56">
                            <g transform="translate(1127.5,148.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_4.current
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_4.current}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-57">
                            <g transform="translate(1015.5,312.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_5.voltage
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_5.voltage}
                                    </text>
                                </switch>
                            </g>
                        </g>
                        <g id="cell-49aa80bd56f502a1-58">
                            <g transform="translate(1129.5,312.5)scale(0.8)">
                                <switch>
                                    <foreignObject
                                        style={{ overflow: 'visible' }}
                                        pointerEvents="all"
                                        width={14}
                                        height={12}
                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                display: 'inline-block',
                                                fontSize: 12,
                                                fontFamily: 'Helvetica',
                                                color: 'rgb(0, 0, 0)',
                                                lineHeight: '1.2',
                                                verticalAlign: 'top',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: 'inline-block',
                                                    textAlign: 'inherit',
                                                    textDecoration: 'inherit'
                                                }}
                                            >
                                                {
                                                    this.state.line_states
                                                        .line_5.current
                                                }
                                            </div>
                                        </div>
                                    </foreignObject>
                                    <text
                                        x={7}
                                        y={12}
                                        fill="#000000"
                                        textAnchor="middle"
                                        fontSize="12px"
                                        fontFamily="Helvetica"
                                    >
                                        {this.state.line_states.line_5.current}
                                    </text>
                                </switch>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    };

    /**
     * Get a random time value
     */
    getRandomTime = () => {
        return `${this.getRndInteger(0, 23)}:${this.getRndInteger(10, 59)} AM`;
    };

    /**
     * Get a random integer current value
     */
    getRandomCurrent = () => {
        return `${this.getRndInteger(200, 300)} A`;
    };

    /**
     * Get a random voltage
     */
    getRandomVoltage = () => {
        return `${this.getRndInteger(110, 240)} V`;
    };

    /**
     * Get a random color
     */
    getRandomColor = () => {
        let arr = [
            'red',
            'green',
            'red',
            'red',
            'green',
            'green',
            'green',
            'green'
        ];
        let index = this.getRndInteger(0, 7);
        return arr[index];
    };

    /**
     * Get a random integer between min and max
     */
    getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
}

export default CircuitGrid;
