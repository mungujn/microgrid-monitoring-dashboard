/**
 * Created by Mungujakisa
 * Login UI
 */
import React, { Component } from 'react';
import {
    Button,
    CardHeader,
    Paper,
    TextField,
    CircularProgress
} from 'material-ui';

const styles = {
    root: {
        maxWidth: '25em',
        maxHeight: '25em',
        marginTop: '2em',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    text_field: {},
    paper: {
        padding: '2em'
    },
    header: {
        paddingLeft: 0,
        paddingTop: 0
    },
    show: {},
    hide: {
        display: 'none'
    },
    login_button_div: {
        width: '100%',
        textAlign: 'center'
    },
    login_button: {
        display: 'inline-block'
    },
    loader: {}
};

/**
 * Login component
 */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: true
        };
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /**
     * Handle email and password input
     * @param {*} event input event
     */
    handleInput(event) {
        const id = event.target.id;
        const value = event.target.value;
        this.setState({
            [id]: value
        });
    }

    /**
     * Handle login button press
     * @param {*} event input event
     */
    handleClickLogin(event) {
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        this.setState({
            loading: false
        });

        this.props.login(email, password);
    }

    /**
     * Render login UI
     */
    render() {
        return (
            <div style={styles.root}>
                <Paper elevation={5} style={styles.paper}>
                    <CardHeader
                        style={styles.header}
                        title="Micro-grid Admin Login"
                    />
                    <form
                        onSubmit={this.handleClickLogin}
                        style={styles.div_in_div}
                    >
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
                        <br />
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
                        <br />
                        <br />
                        <div
                            style={Object.assign(
                                {
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: '5em'
                                },
                                this.state.loading && styles.hide
                            )}
                        >
                            <CircularProgress size={40} />
                        </div>

                        <div style={styles.login_button_div}>
                            <Button
                                style={Object.assign(
                                    {
                                        display: 'inline-block'
                                    },
                                    !this.state.loading && styles.hide
                                )}
                                type="submit"
                                raised
                                color="primary"
                            >
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
