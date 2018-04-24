/**
 * Created by Mungujakisa on 4/23/2018.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import SVG from 'react-inlinesvg';

const styles = {
    card: {
        minWidth: 275,
    },
    outer: {
        width: '100%'
    },
    inner: {
        marginLeft: 70,
        marginRight: 'auto'
    }
};

class CircuitGrid extends Component {
    constructor(props){
        super(props);

        this.getSVG = this.getSVG.bind(this);
        this.getInlineSVG = this.getInlineSVG.bind(this);
        this.attachListeners = this.attachListeners.bind(this);
    }

    componentDidMount(){
        this.attachListeners();
    }
    render() {
        return (
            <div>
                <Paper elevation={5}>
                    <div style={styles.outer}>
                        <div style={styles.inner}>
                            {this.getInlineSVG()}
                        </div>
                    </div>
                    <br/>
                    <br/>
                </Paper>
            </div>
        );
    }

    getInlineSVG(){
        return <SVG
            src="test.svg"
            uniquifyIDs="false"
            uniqueHash="h"
            style={styles.inner}
        >
        </SVG>
    }

    getSVG(){

        let str = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1665px" height="400px"
                    version="1.1">
            <defs/>
            <g transform="translate(0.5,0.5)">
                <ellipse cx="186" cy="198" rx="47.99999999999999" ry="47.99999999999999" fill="#ffffff" stroke="#000000"
                         pointer-events="none"/>
                <rect x="297.6" y="185.6" width="24" height="24" fill="#d5e8d4" stroke="#82b366" pointer-events="none"/>
                <ellipse cx="418" cy="198" rx="47.99999999999999" ry="31.999999999999996" fill="#ffffff" stroke="#000000"
                         pointer-events="none"/>
                <path d="M 533.6 177.6 L 553.6 197.6 L 533.6 217.6 L 513.6 197.6 Z" fill="#d5e8d4" stroke="#82b366"
                      stroke-miterlimit="10" pointer-events="none"/>
                <path d="M 153.6 205.6 L 165.16 188.26 Q 169.6 181.6 173.18 188.76 L 190.02 222.44 Q 193.6 229.6 198.04 222.94 L 209.6 205.6"
                      fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/>
                <rect x="771.2" y="185.6" width="24" height="24" fill="#d5e8d4" stroke="#82b366" pointer-events="none"/>
                <ellipse cx="898" cy="198" rx="47.99999999999999" ry="31.999999999999996" fill="#ffffff" stroke="#000000"
                         pointer-events="none"/>
                <path d="M 1017.6 177.6 L 1037.6 197.6 L 1017.6 217.6 L 997.6 197.6 Z" fill="#d5e8d4" stroke="#82b366"
                      stroke-miterlimit="10" pointer-events="none"/>
                <path d="M 1113.6 253.6 L 1113.6 149.6" fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10"
                      pointer-events="none"/>
                <rect x="1169.6" y="217.6" width="24" height="24" fill="#d5e8d4" stroke="#82b366" pointer-events="none"/>
                <rect x="1169.6" y="153.6" width="24" height="24" fill="#d5e8d4" stroke="#82b366" pointer-events="none"/>
                <rect x="1305.6" y="137.6" width="96" height="48" fill="#ffffff" stroke="#000000" pointer-events="none"/>
                <g transform="translate(1338.5,156.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="37" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 37px; white-space: nowrap; word-wrap: normal; text-align: center;" id="load_1">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Load 1
                                </div>
                            </div>
                        </foreignObject>
                        <text x="19" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Load
                            1
                        </text>
                    </switch>
                </g>
                <rect x="1305.6" y="205.6" width="96" height="48" fill="#ffffff" stroke="#000000" pointer-events="none"/>
                <g transform="translate(1338.5,224.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="37" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 37px; white-space: nowrap; word-wrap: normal; text-align: center;" id="load_2">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Load 2
                                </div>
                            </div>
                        </foreignObject>
                        <text x="19" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Load
                            2
                        </text>
                    </switch>
                </g>
                <path d="M 1193.85 165.82 L 1305.85 165.27" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 1194.95 229.27 L 1305.85 229.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 1113.6 165.6 L 1169.57 165.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 1113.6 229.6 L 1169.57 229.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 1037.71 197.82 L 1113.6 197.6" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 945.57 197.82 L 997.43 197.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 794.95 197.82 L 849.57 197.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 553.85 197.82 L 771.23 197.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 465.57 197.82 L 513.57 197.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 233.85 197.82 L 297.85 197.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <path d="M 321.57 197.82 L 369.57 197.82" fill="none" stroke="#000000" stroke-miterlimit="10"
                      pointer-events="none"/>
                <g transform="translate(169.5,248.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="38" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 39px; white-space: nowrap; word-wrap: normal; text-align: center;" id="source">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Source
                                </div>
                            </div>
                        </foreignObject>
                        <text x="19" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">
                            Source
                        </text>
                    </switch>
                </g>
                <g transform="translate(292.5,212.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="41" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 42px; white-space: nowrap; word-wrap: normal; text-align: center;" id="relay_1">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Relay 1
                                </div>
                            </div>
                        </foreignObject>
                        <text x="21" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Relay
                            1
                        </text>
                    </switch>
                </g>
                <g transform="translate(387.5,232.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="74" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 76px; white-space: nowrap; word-wrap: normal; text-align: center;" id="transformer_1">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Transformer 1
                                </div>
                            </div>
                        </foreignObject>
                        <text x="37" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">
                            Transformer 1
                        </text>
                    </switch>
                </g>
                <g transform="translate(516.5,220.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="41" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 42px; white-space: nowrap; word-wrap: normal; text-align: center;" id="relay_2">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Relay 2
                                </div>
                            </div>
                        </foreignObject>
                        <text x="21" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Relay
                            2
                        </text>
                    </switch>
                </g>
                <g transform="translate(766.5,212.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="41" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 42px; white-space: nowrap; word-wrap: normal; text-align: center;" id="relay_3">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Relay 3
                                </div>
                            </div>
                        </foreignObject>
                        <text x="21" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Relay
                            3
                        </text>
                    </switch>
                </g>
                <g transform="translate(867.5,232.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="74" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 76px; white-space: nowrap; word-wrap: normal; text-align: center;" id="transformer_2">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Transformer 2
                                </div>
                            </div>
                        </foreignObject>
                        <text x="37" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">
                            Transformer 2
                        </text>
                    </switch>
                </g>
                <g transform="translate(1000.5,220.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="41" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 42px; white-space: nowrap; word-wrap: normal; text-align: center;" id="relay_4">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Relay 4
                                </div>
                            </div>
                        </foreignObject>
                        <text x="21" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Relay
                            4
                        </text>
                    </switch>
                </g>
                <g transform="translate(1162.5,180.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="41" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 42px; white-space: nowrap; word-wrap: normal; text-align: center;" id="relay_5">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Relay 5
                                </div>
                            </div>
                        </foreignObject>
                        <text x="21" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Relay
                            5
                        </text>
                    </switch>
                </g>
                <g transform="translate(1164.5,244.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="41" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 42px; white-space: nowrap; word-wrap: normal; text-align: center;" id="relay_6">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Relay 6
                                </div>
                            </div>
                        </foreignObject>
                        <text x="21" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Relay
                            6
                        </text>
                    </switch>
                </g>
                <g transform="translate(255.5,184.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 1
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_1">Line
                            1
                        </text>
                    </switch>
                </g>
                <g transform="translate(327.5,184.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 2
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_2">Line
                            2
                        </text>
                    </switch>
                </g>
                <g transform="translate(479.5,184.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 3
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_3">Line
                            3
                        </text>
                    </switch>
                </g>
                <g transform="translate(671.5,184.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 4
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_4">Line
                            4
                        </text>
                    </switch>
                </g>
                <g transform="translate(807.5,184.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 5
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_5">Line
                            5
                        </text>
                    </switch>
                </g>
                <g transform="translate(959.5,184.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 6
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_6">Line
                            6
                        </text>
                    </switch>
                </g>
                <g transform="translate(1063.5,184.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 7
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_7">Line
                            7
                        </text>
                    </switch>
                </g>
                <g transform="translate(1127.5,152.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 8
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_8">Line
                            8
                        </text>
                    </switch>
                </g>
                <g transform="translate(1125.5,216.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="40" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 40px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 10
                                </div>
                            </div>
                        </foreignObject>
                        <text x="20" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_10">Line
                            10
                        </text>
                    </switch>
                </g>
                <g transform="translate(1239.5,152.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 9
                                </div>
                            </div>
                        </foreignObject>
                        <text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_9">Line
                            9
                        </text>
                    </switch>
                </g>
                <g transform="translate(1233.5,216.5)scale(0.7999999999999999)">
                    <switch>
                        <foreignObject style="overflow:visible;" pointer-events="all" width="38" height="12"
                                       requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                 style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 39px; white-space: nowrap; word-wrap: normal; text-align: center;">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                     style="display:inline-block;text-align:inherit;text-decoration:inherit;">Line 11
                                </div>
                            </div>
                        </foreignObject>
                        <text x="19" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" id="line_11">Line
                            11
                        </text>
                    </switch>
                </g>
            </g>
        </svg>`;

        return <span dangerouslySetInnerHTML={{__html: str}} />;
    }

    attachListeners(){
        /*
        document.getElementById("relay_1").onmousedown = function () {
            console.log("relay 1 clicked");
            return true;
        }
        */
    }
}

export default CircuitGrid;

