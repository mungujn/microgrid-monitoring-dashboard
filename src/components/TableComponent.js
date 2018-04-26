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

        this.mockData = this.mockData.bind(this);
        this.getData = this.getData.bind(this);

    }

    mockData(action, value) {
        let id = 0;
        id += 1;
        return {
            id: id,
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

    render() {
        return (
            <div>
                <Paper elevation={5} style={styles.paper}>
                    <table style={Object.assign({}, styles.table, styles.th)}>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                        </tr>
                    </table>
                </Paper>
            </div>
        );
    }
}

export default TableComponent;
