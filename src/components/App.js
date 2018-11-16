/**
 * Created by nickson on 4/23/2018.
 * Core app component
 */
import React, { Component } from 'react';
import Login from './Login';
import Layout from './Layout';
import * as API from '../utilities/API';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { createMuiTheme } from 'material-ui/styles';
import { withTheme } from 'material-ui/styles';

import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green
    },
    status: {
        danger: 'orange'
    }
});

const style = {
    root: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        zIndex: 1
    }
};

/**
 * Root dashboard component
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: false,
            reset: false
        };

        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        API.isLoggedIn().then(user => {
            if (user === null || user === undefined) {
                // No user is signed in.
                console.log('not signed in');
            } else {
                // signed in
                this.setState({
                    logged_in: true
                });
                console.log(user);
            }
        });
    }

    /**
     * Login someone authorised to access the dashboard
     * @param {string} email
     * @param {string} password
     */
    login(email, password) {
        API.login(email, password).then(
            result => {
                this.setState({
                    logged_in: true
                });
                console.log(result);
            },
            function(error) {
                console.log(error);
            }
        );
    }

    /**
     * logout a user
     */
    logout() {
        API.logout().then(result => {
            this.setState({
                logged_in: false
            });
            console.log(result);
        });
    }

    /**
     * Render the web app
     */
    render() {
        let component = <Login login={this.login} />;

        if (this.state.logged_in) {
            component = <Layout logout={this.logout} />;
        }

        return (
            <div style={style.root}>
                <MuiThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/" render={() => component} />
                    </Switch>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withTheme()(App);
