/**
 * Created by Mungujakisa on 4/23/2018.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = {
    paper: {
        minWidth: 500,
    }
};

class TableComponent extends Component {
    render() {
        return (
            <div>
                <Paper elevation={5} style={styles.paper}>
                    <Typography variant="headline" component="h3">
                        This is will be the table
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default TableComponent;
