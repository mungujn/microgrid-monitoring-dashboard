/**
 * Created by Mungujakisa on 4/23/2018.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Fade from 'material-ui/transitions/Fade';
import { CircularProgress } from 'material-ui/Progress';
import * as API from "../utilities/API";

const WAIT = 5000;

const styles = {
    paper: {
        minWidth: 500,
    },
    inner: {
        width: 'fit-content',
        height: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttons: {
        width: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {
        margin: 5
    },
    placeholder: {
        height: 40,
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

const prehash = "";
const uhash = "";



const lines = {
    line_1: {
        id: "cell-36" + prehash + uhash
    },
    line_2: {
        id: "cell-37" + prehash + uhash
    },
    line_3: {
        id: "cell-38" + prehash + uhash
    },
    line_4: {
        id: "cell-39" + prehash + uhash
    },
    line_5: {
        id: "cell-40" + prehash + uhash
    },
    line_6: {
        id: "cell-41" + prehash + uhash
    },
    line_7: {
        id: "cell-42" + prehash + uhash
    },
    line_8: {
        id: "cell-43" + prehash + uhash
    },
    line_9: {
        id: "cell-45" + prehash + uhash
    },
    line_10: {
        id: "cell-44" + prehash + uhash
    },
    line_11: {
        id: "cell-46" + prehash + uhash
    }
};

class CircuitGrid extends Component {

    devices = {
        source: {
            id: "cell-3" + prehash + uhash,
        },
        relay_1: {
            id: "cell-4" + prehash + uhash
        },
        transformer_1: {
            id: "cell-5" + prehash + uhash
        },
        relay_2: {
            id: "cell-6" + prehash + uhash
        },
        relay_3: {
            id: "cell-8" + prehash + uhash
        },
        transformer_2: {
            id: "cell-9" + prehash + uhash
        },
        relay_4: {
            id: "cell-10" + prehash + uhash
        },
        relay_5: {
            id: "cell-13" + prehash + uhash
        },
        relay_6: {
            id: "cell-12" + prehash + uhash
        },
        load_1: {
            id: "cell-14" + prehash + uhash
        },
        load_2: {
            id: "cell-15" + prehash + uhash
        }
    };

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            device_states: {
                source: 'red',
                relay_1: 'red',
                transformer_1: 'red',
                relay_2: "red",
                relay_3: 'red',
                transformer_2: 'red',
                relay_4: 'red',
                relay_5: 'red',
                relay_6: 'red',
                load_1: 'red',
                load_2: 'red'
            }
        };

        this.attachListeners = this.attachListeners.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    flipColor = (color)=>{
        if(color === 'red'){
            return 'green';
        }
        return 'red';
    };

    handleClick(e, data){
        console.log("click");
        console.log("data",data);

        console.log('relay_1 state below');
        console.log(this.state.device_states.relay_1.state);

        let device_states = this.state.device_states;

        switch (data){
            case this.devices.relay_1.id:
                device_states.relay_1 = this.flipColor(this.state.device_states.relay_1);
                this.setState({device_states});
                break;
        }

        this.setState({
            loading: !this.state.loading,
        });

        API.updateData('development', 'dashboard-states', this.state.device_states);
        // this.updateRelays();
        setTimeout(()=>{
            console.log("5 seconds elapsed");
            this.setState({
                loading: !this.state.loading,
            });
            API.readData('development', 'hardware-states').then((result)=>{
                console.log('Result below');
                console.log(result);
                let device_states = this.formatStates(result);
                this.setState({device_states});
                //this.updateRelays();
            }).catch((error)=>{
                console.log('Error below');
                console.log(error);
            })
        }, WAIT);

    }

    componentDidMount(){
        //this.firstLoad();
    }

    render() {
        return (
            <div>
                <Paper elevation={5} style={styles.paper}>
                    <div>
                        <div style={styles.inner}>
                            {this.getSVG()}
                        </div>

                        <div style={styles.buttons}>
                            <div>
                                <div style={styles.placeholder}>
                                    <Fade
                                        in={this.state.loading}
                                        style={{
                                            transitionDelay: this.state.loading ? '800ms' : '0ms',
                                        }}
                                        unmountOnExit
                                    >
                                        <CircularProgress />
                                    </Fade>
                                </div>
                            </div>


                            <Button onClick={((e) => this.handleClick(e, this.devices.relay_1.id))}
                                    variant="raised" color="primary" style={styles.button}>
                                Relay 1
                            </Button>
                            <Button onClick={((e) => this.handleClick(e, this.devices.relay_2.id))}
                                variant="raised" color="primary" style={styles.button}>
                                Relay 2
                            </Button>
                            <Button onClick={((e) => this.handleClick(e, this.devices.relay_3.id))}
                                    variant="raised" color="primary" style={styles.button}>
                                Relay 3
                            </Button>
                            <Button onClick={((e) => this.handleClick(e, this.devices.relay_4.id))}
                                    variant="raised" color="primary" style={styles.button}>
                                Relay 4
                            </Button>
                            <Button onClick={((e) => this.handleClick(e, this.devices.relay_5.id))}
                                    variant="raised" color="primary" style={styles.button}>
                                Relay 5
                            </Button>
                            <Button onClick={((e) => this.handleClick(e, this.devices.relay_6.id))}
                                    variant="raised" color="primary" style={styles.button}>
                                Relay 6
                            </Button>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }

    attachListeners(){
        console.log("Attaching listeners");
        let svg = document.getElementById("alphasvg");

        svg.addEventListener("load",()=>{

            console.log("Svg loaded");

            // get the inner DOM of alpha.svg
            let svgDoc = svg.contentDocument;

            // get device_states
            this.devices.relay_1.object = svgDoc.getElementById(this.devices.relay_1.id);
            this.devices.relay_2.object = svgDoc.getElementById(this.devices.relay_2.id);
            this.devices.relay_3.object = svgDoc.getElementById(this.devices.relay_3.id);
            this.devices.relay_4.object = svgDoc.getElementById(this.devices.relay_4.id);
            this.devices.relay_5.object = svgDoc.getElementById(this.devices.relay_5.id);
            this.devices.relay_6.object = svgDoc.getElementById(this.devices.relay_6.id);

            // get lines
            lines.line_1.object = svgDoc.getElementById(lines.line_1.id);

            this.updateRelays();

            // this.firstLoad();

        }, false);
    };

    firstLoad = ()=>{
        this.setState({
            loading: !this.state.loading,
        });
        setTimeout(()=>{
            console.log('5 Seconds after load');
            API.readData('development', 'hardware-states').then((result)=>{
                this.setState({
                    loading: !this.state.loading,
                });
                let device_states = this.formatStates(result);
                this.setState({device_states});
                //this.updateRelays();
            }).catch((error)=>{
                console.log('Error below');
                console.log(error);
                this.setState({
                    loading: !this.state.loading,
                });
            })
        }, WAIT);
    };

    formatStates = (raw)=>{
        console.log('Raw results below');
        console.log(raw);
        return raw;
    };

    updateRelays =()=>{
        console.log('Assigning objects');

        let svg = document.getElementById("alphasvg");

        let svgDoc = svg.contentDocument;
        // get device_states
        let relay_1 = svgDoc.getElementById(this.devices.relay_1.id);
        let relay_2 = svgDoc.getElementById(this.devices.relay_2.id);
        let relay_3 = svgDoc.getElementById(this.devices.relay_3.id);
        let relay_4 = svgDoc.getElementById(this.devices.relay_4.id);
        let relay_5 = svgDoc.getElementById(this.devices.relay_5.id);
        let relay_6 = svgDoc.getElementById(this.devices.relay_6.id);

        console.log('Updating relays');
        console.log('svg', svg);
        console.log('svg doc', svgDoc);
        console.log('relay_1', relay_1);
        console.log('relay_1 state below');
        console.log(this.state.device_states.relay_1.state);

        this.changeColor(relay_1, this.state.device_states.relay_1.state);
        this.changeColor(relay_2, this.state.device_states.relay_2.state);
        this.changeColor(relay_3, this.state.device_states.relay_3.state);
        this.changeColor(relay_4, this.state.device_states.relay_4.state);
        this.changeColor(relay_5, this.state.device_states.relay_5.state);
        this.changeColor(relay_6, this.state.device_states.relay_6.state);
    };

    updateLines = ()=>{
        this.changeText(lines.line_1.object, 'Off');
    };

    getSVG = () => {
        return <svg id="svg-element" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1285px" height="145px"
             version="1.1">
            <defs/>
            <g transform="translate(0.5,0.5)">
                <g id="cell-3" content="<object label=&quot;&quot; placeholders=&quot;1&quot;/>
        ">
                    <ellipse cx={58} cy={70} rx={48} ry={48} fill="#ffffff" stroke="#000000" pointerEvents="none"/>
                </g>
                <g id="cell-4" content="<object label=&quot;&quot;/>
      ">
                    <rect x="170.4" y="58.4" width={24} height={24} fill={this.state.device_states.relay_1} stroke="#000000"
                          pointerEvents="none"/>
                </g>
                <g id="cell-5" content="<object label=&quot;&quot; placeholders=&quot;1&quot;/>
    ">
                    <ellipse cx={290} cy={70} rx={48} ry={32} fill={this.state.device_states.relay_2} stroke="#000000" pointerEvents="none"/>
                </g>
                <g id="cell-6" content="<object label=&quot;&quot; placeholders=&quot;1&quot;/>
    ">
                    <path d="M 406.4 50.4 L 426.4 70.4 L 406.4 90.4 L 386.4 70.4 Z" fill="#ffffff" stroke="#000000"
                          strokeMiterlimit={10} pointerEvents="none"/>
                </g>
                <g id="cell-7">
                    <path
                        d="M 26.4 78.4 L 37.96 61.06 Q 42.4 54.4 45.98 61.56 L 62.82 95.24 Q 66.4 102.4 70.84 95.74 L 82.4 78.4"
                        fill="none" stroke="#000000" strokeMiterlimit={10} pointerEvents="none"/>
                </g>
                <g id="cell-8" content="<object label=&quot;&quot; placeholders=&quot;1&quot;/>
    ">
                    <rect x={644} y="58.4" width={24} height={24} fill="#ffffff" stroke="#000000" pointerEvents="none"/>
                </g>
                <g id="cell-9" content="<object label=&quot;&quot; placeholders=&quot;1&quot;/>
    ">
                    <ellipse cx={770} cy={70} rx={48} ry={32} fill="#ffffff" stroke="#000000" pointerEvents="none"/>
                </g>
                <g id="cell-10" content="<object label=&quot;&quot; placeholders=&quot;1&quot;/>
    ">
                    <rect x="874.4" y="54.4" width={32} height={32} fill="#ffffff" stroke="#000000"
                          pointerEvents="none"/>
                </g>
                <g id="cell-11">
                    <path d="M 986.4 126.4 L 986.4 22.4" fill="none" stroke="#000000" strokeWidth={4}
                          strokeMiterlimit={10} pointerEvents="none"/>
                </g>
                <g id="cell-12" content="<object label=&quot;&quot; placeholders=&quot;1&quot;/>
    ">
                    <rect x="1042.4" y="90.4" width={24} height={24} fill="#ffffff" stroke="#000000"
                          pointerEvents="none"/>
                </g>
                <g id="cell-13" content="<object label=&quot;&quot; placeholders=&quot;1&quot;/>
    ">
                    <rect x="1042.4" y="26.4" width={24} height={24} fill="#ffffff" stroke="#000000"
                          pointerEvents="none"/>
                </g>
                <g id="cell-14" content="<object label=&quot;Load 1&quot; placeholders=&quot;1&quot;/>
    ">
                    <rect x="1178.4" y="10.4" width={96} height={48} fill="#ffffff" stroke="#000000"
                          pointerEvents="none"/>
                    <g transform="translate(1211.5,29.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={37} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Load 1
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={19} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Load 1
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-15" content="<object label=&quot;Load 2&quot; placeholders=&quot;1&quot;/>
    ">
                    <rect x="1178.4" y="78.4" width={96} height={48} fill="#ffffff" stroke="#000000"
                          pointerEvents="none"/>
                    <g transform="translate(1211.5,97.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={37} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Load 2
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={19} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Load 2
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-16">
                    <path d="M 1066.4 38.4 L 1178.4 38.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-17">
                    <path d="M 1068 102.4 L 1178.4 102.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-18">
                    <path d="M 986.4 38.4 L 1042.4 38.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-19">
                    <path d="M 986.4 102.4 L 1042.4 102.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-20">
                    <path d="M 906.4 70.4 L 986.4 70.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-21">
                    <path d="M 818.4 70.4 L 874.4 70.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-22">
                    <path d="M 668 70.4 L 722.4 70.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-23">
                    <path d="M 426.4 70.4 L 644 70.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-24">
                    <path d="M 338.4 70.4 L 386.4 70.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-25">
                    <path d="M 106.4 70.4 L 170.4 70.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-26">
                    <path d="M 194.4 70.4 L 242.4 70.4" fill="none" stroke="#000000" strokeMiterlimit={10}
                          pointerEvents="none"/>
                </g>
                <g id="cell-27">
                    <g transform="translate(42.5,121.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={38} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Source
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={19} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Source
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-28">
                    <g transform="translate(165.5,85.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={41} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Relay 1
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={21} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Relay 1
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-29">
                    <g transform="translate(260.5,105.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={74} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Transformer 1
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={37} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Transformer 1
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-30">
                    <g transform="translate(389.5,93.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={41} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Relay 2
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={21} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Relay 2
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-31">
                    <g transform="translate(639.5,85.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={41} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Relay 3
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={21} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Relay 3
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-32">
                    <g transform="translate(740.5,105.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={74} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Transformer 2
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={37} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Transformer 2
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-33">
                    <g transform="translate(873.5,93.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={41} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Relay 4
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={21} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Relay 4
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-34">
                    <g transform="translate(1035.5,53.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={41} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Relay 5
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={21} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Relay 5
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-35">
                    <g transform="translate(1037.5,117.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={41} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Relay 6
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={21} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Relay 6
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-36" content="<object label=&quot;Line 1&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(128.5,57.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 1
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 1
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-37" content="<object label=&quot;Line 2&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(200.5,57.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 2
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 2
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-38" content="<object label=&quot;Line 3&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(352.5,57.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 3
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 3
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-39" content="<object label=&quot;Line 4&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(544.5,57.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 4
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 4
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-40" content="<object label=&quot;Line 5&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(680.5,57.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 5
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 5
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-41" content="<object label=&quot;Line 6&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(832.5,57.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 6
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 6
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-42" content="<object label=&quot;Line 7&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(936.5,57.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 7
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 7
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-43" content="<object label=&quot;Line 8&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(1000.5,25.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 8
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 8
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-44" content="<object label=&quot;Line 10&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(997.5,89.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={40} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                    display: 'inline-block',
                                    fontSize: 12,
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    verticalAlign: 'top',
                                    width: 40,
                                    whiteSpace: 'nowrap',
                                    wordWrap: 'normal',
                                    textAlign: 'center'
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 10
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={20} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 10
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-45" content="<object label=&quot;Line 9&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(1112.5,25.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={33} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 9
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={17} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 9
                            </text>
                        </switch>
                    </g>
                </g>
                <g id="cell-46" content="<object label=&quot;Line 11&quot; placeholders=&quot;1&quot;/>
    ">
                    <g transform="translate(1106.5,89.5)scale(0.8)">
                        <switch>
                            <foreignObject style={{overflow: 'visible'}} pointerEvents="all" width={38} height={12}
                                           requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{
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
                                }}>
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                        display: 'inline-block',
                                        textAlign: 'inherit',
                                        textDecoration: 'inherit'
                                    }}>
                                        Line 11
                                    </div>
                                </div>
                            </foreignObject>
                            <text x={19} y={12} fill="#000000" textAnchor="middle" fontSize="12px"
                                  fontFamily="Helvetica">
                                Line 11
                            </text>
                        </switch>
                    </g>
                </g>
            </g>
        </svg>
    };

    getSVGObject = () => {
        return <object data="mini-grid-draw-io-2.svg" type="image/svg+xml"
                       id="alphasvg" width="100%">
        </object>
    };

    changeColor = (element, state)=>{
        if (state){
            let current_color = this.getCurrentColor(element);
            let old_html = element.innerHTML;
            let new_html = old_html.replace(current_color, 'green');
            element.innerHTML = new_html;
        } else {
            let current_color = this.getCurrentColor(element);
            let old_html = element.innerHTML;
            let new_html = old_html.replace(current_color, 'red');
            element.innerHTML = new_html;
        }
    };

    getCurrentColor = (element)=>{
        let html = element.innerHTML;
        let number = html.indexOf('fill=');
        let first = (number+6);
        let sub = html.substr(first);
        let x = sub.indexOf('"');
        let y = sub.substr(0, x);
        // console.log("obtained color");
        // console.log(y);
        return y;
    };

    changeText = (element, text)=>{
        // let current_text = this.getCurrentText(element);
        // let old_html = element.innerHTML;
        // let new_html = old_html.replace(current_text, text);
        // element.innerHTML = new_html;
    };

    getCurrentText = (element)=>{
        // let html = element.innerHTML;
        // console.log("current text html");
        // console.log(html);
        // let number = html.indexOf('inherit;">');
        // let first = (number+20);
        // let sub = html.substr(first);
        // let x = sub.indexOf('"');
        // let y = sub.substr(0, x);
        // console.log("obtained text");
        // console.log(y);
        // return y;
    };
}

export default CircuitGrid;

