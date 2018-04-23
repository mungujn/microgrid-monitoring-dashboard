/**
 * Created by Mungujakisa on 4/23/2018.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        minWidth: 275,
    }
};
class CircuitGrid extends Component {
    render() {
        return (
            <div>
                <Paper elevation={5}>
                    <Typography variant="headline" component="h3">
                        This will be the circuit
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

export default CircuitGrid;
