/**
 * Created by Mungujakisa on 4/23/2018.
 */
import React, {Component} from 'react';
import {Grid} from "material-ui";
import Paper from 'material-ui/Paper';
import CircuitGrid from "./CircuitGrid";
import TableComponent from "./TableComponent";


const style = {
    content: {
        maxWidth: '100%',
        overflowX: 'hidden',
        marginLeft: '1em',
        flexGrow: 1,
        padding: '1em',
        height: `calc(100% - ${56}px)`,
        width: '100%',
        marginTop: 56
    },
    content_shift: {
        marginLeft: '15em',
    },
};

class Content extends Component {
    render() {
        const drawer_open = false;
        return (
            <div style={Object.assign({}, style.content, drawer_open && style.content_shift)}>
                <Grid container direction="column" spacing={24} alignItems="stretch">
                    <Grid item xs={12}>
                            <CircuitGrid/>
                    </Grid>

                    <Grid item>
                        <TableComponent/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Content;
