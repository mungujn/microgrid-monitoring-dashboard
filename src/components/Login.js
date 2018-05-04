/**
 * Created by Mungujakisa on 10/17/2017.
 */
import React, {Component} from 'react';
import {
    Button, CardHeader, Paper,
    TextField
} from "material-ui";

import * as API from "../utilities/API";

const styles = {
    root: {
    maxWidth: '25em',
    maxHeight: '25em',
    marginTop: '2em',
    marginRight: 'auto',
    marginLeft: 'auto',
    },
    text_field: {

    },
    paper: {
        padding: '2em'
    },
    header: {
        paddingLeft: 0,
        paddingTop: 0
    },
    show: {

    },
    hide: {
        display: 'none'
    },
    login_button_div: {
        width: '100%',
        textAlign: 'center',
    },
    login_button: {
        display: 'inline-block'
    },
};

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        const id = event.target.id;
        const value = event.target.value;
        this.setState({
            [id]: value
        });
    }

    handleClickLogin(event){
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;

        this.props.login(email, password);
    }

    render() {
        return (
            <div style={styles.root}>
                <Paper elevation={5} style={styles.paper}>
                    <CardHeader style={styles.header} title="Micro-grid Administration Login">

                    </CardHeader>
                    <form onSubmit={this.handleClickLogin} style={styles.div_in_div}>
                        <TextField
                            fullWidth
                            required
                            id="email"
                            label="Email"
                            style={styles.text_field}
                            type="email"
                            onChange={this.handleInput}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            fullWidth
                            required
                            id="password"
                            label="Password"
                            style={styles.text_field}
                            type="password"
                            onChange={this.handleInput}
                            margin="normal"
                        />
                        <br/>
                        <br/>
                        <div style={styles.login_button_div}>
                            <Button style={styles.login_button} type="submit" raised color="primary">
                                Login
                            </Button>
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default Login;
