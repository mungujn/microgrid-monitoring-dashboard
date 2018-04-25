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
        marginRight: 'auto'
    }
};

const prehash = "___";
const uhash = "h";

const devices = {
    source: {
        id: "cell-3" + prehash + uhash
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
    constructor(props){
        super(props);

        this.getSVG = this.getSVG.bind(this);
        this.getSVGObject = this.getSVGObject.bind(this);
        this.getInlineSVG = this.getInlineSVG.bind(this);
        this.onSVGLoad = this.onSVGLoad.bind(this);
        this.attachListeners = this.attachListeners.bind(this);
        this.attachListenersStyle2 = this.attachListenersStyle2.bind(this);

    }

    componentDidMount(){
        this.attachListenersStyle2()
    }

    render() {
        return (
            <div>
                <Paper elevation={5}>
                    <div style={styles.outer}>
                        <div style={styles.inner}>
                            {this.getSVGObject()}
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
            src="mini-grid-draw-io.svg"
            uniquifyIDs={true}
            uniqueHash={uhash}
            style={styles.inner}
            onLoad={this.onSVGLoad}
        >
        </SVG>
    }

    getSVG(){
        let str = ``;
        return <span dangerouslySetInnerHTML={{__html: str}} />;
    }

    getSVGObject(){
        return <object data="mini-grid-draw-io.svg" type="image/svg+xml"
                       id="mini-grid-draw-io">
        </object>
    }

    onSVGLoad(svg){
        console.log("svg loaded");
        this.attachListeners();
    }

    attachListeners(){
        let relay_1 = document.getElementById(devices.relay_1.id);
        console.log("relay 1 is" + relay_1);

        relay_1.onclick = function () {
            console.log("relay 1 clicked");
            return true;
        };


        relay_1.addEventListener("mousedown", function () {
            console.log("relay 1 clicked style 2");
        });
    }

    attachListenersStyle2(){
        let svg_object = document.getElementById("mini-grid-draw-io");

        // It's important to add an load event listener to the object,
        // as it will load the svg doc asynchronously
        svg_object.addEventListener("load",() =>{

            console.log("svg object loaded");
            // get the inner DOM of alpha.svg
            let svg_document = svg_object.contentDocument;
            // get the inner element by id
            let relay_1 = svg_document.getElementById("cell-3");
            // add behaviour

            relay_1.onclick = function () {
                console.log("relay 1 clicked");
                return true;
            };

            relay_1.addEventListener("mousedown",()=>{
                // alert('hello world!');
                // console.log("clicked");
            }, false);
        }, false);
    }

}



export default CircuitGrid;

