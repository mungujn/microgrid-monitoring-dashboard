/**
 * Created by Mungujakisa on 4/23/2018.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const styles = {
    paper: {
        minWidth: 500,
    },
    table: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
};

class TableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            actions: [
                {
                    action: "action",
                    v1: "line 1 voltage",
                    v2: "line 2 voltage",
                    v3: "line 3 voltage",
                    c1: "line 1 current",
                    c2: "line 2 current",
                    c3: "line 3 current",
                    time: "Time"
                },
                {
                    action: "action 2",
                    v1: "line 1 voltage",
                    v2: "line 2 voltage",
                    v3: "line 3 voltage",
                    c1: "line 1 current",
                    c2: "line 2 current",
                    c3: "line 3 current",
                    time: "Time 2"
                }
            ]
        };

        this.getData = this.getData.bind(this);
        this.getTableRows = this.getTableRows.bind(this);
        this.mockData = this.mockData.bind(this);
    }

    mockData() {
        return {
            action: "action",
            v1: "line 1 voltage",
            v2: "line 2 voltage",
            v3: "line 3 voltage",
            c1: "line 1 current",
            c2: "line 2 current",
            c3: "line 3 current",
            time: "Time"
        };
    }

    getData(){
        return [
            this.mockData(),
            this.mockData(),
            this.mockData(),
            this.mockData(),
            this.mockData(),
        ];
    }

    getTableRows(){
        this.getData().map(entry =>{
            return (
                <tr>
                    <td>{entry.action}</td>
                    <td>{entry.v1}</td>
                    <td>{entry.v2}</td>
                    <td>{entry.v3}</td>
                    <td>{entry.c1}</td>
                    <td>{entry.c2}</td>
                    <td>{entry.c3}</td>
                    <td>{entry.time}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <Paper elevation={5} style={styles.paper}>
                    <div>
                        <table style={Object.assign({}, styles.table, styles.th)}>
                            <tr>
                                <th>Action</th>
                                <th colSpan="3">Voltage</th>
                                <th colSpan="3">Currents</th>
                                <th>Time</th>
                            </tr>
                            <tr>
                                <td></td>
                                <th>Line 1</th>
                                <th>Line 2</th>
                                <th>Line 3</th>
                                <th>Line 1</th>
                                <th>Line 2</th>
                                <th>Line 3</th>
                                <td></td>
                            </tr>
                            {
                                this.state.actions.map(entry =>{
                                    return (
                                        <tr>
                                            <td>{entry.action}</td>
                                            <td>{entry.v1}</td>
                                            <td>{entry.v2}</td>
                                            <td>{entry.v3}</td>
                                            <td>{entry.c1}</td>
                                            <td>{entry.c2}</td>
                                            <td>{entry.c3}</td>
                                            <td>{entry.time}</td>
                                        </tr>
                                    );
                                })
                            }
                        </table>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default TableComponent;
