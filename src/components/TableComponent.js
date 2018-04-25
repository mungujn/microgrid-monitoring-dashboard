/**
 * Created by Mungujakisa on 4/23/2018.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = {
    paper: {
        minWidth: 500,
    },
    table: {
        minWidth: 400,
    }
};

class TableComponent extends Component {
    constructor(props){
        super(props);

        this.createData = this.createData.bind(this);
        this.getData = this.getData.bind(this);

    }

    createData(action, time) {
        let id = 0;
        id += 1;
        return { id, action, time };
    }

    getData(){
        return [
            this.createData('Relay 1 off', "10:00 PM"),
            this.createData('Action 2', "10:00 PM"),
            this.createData('Action 3', "10:00 PM"),
            this.createData('Action 4', "10:00 PM"),
            this.createData('Action 5', "10:00 PM"),
        ];
    }

    render() {
        return (
            <div>
                <Paper elevation={5} style={styles.paper}>
                    <Table style={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Action</TableCell>
                                <TableCell numeric>Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.getData().map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.action}</TableCell>
                                        <TableCell numeric>{n.time}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default TableComponent;
