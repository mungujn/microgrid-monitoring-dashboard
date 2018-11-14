/**
 * Created by Mungujakisa
 * Logout button
 */
import React, { Component } from 'react';
import { Button } from 'material-ui';

/**
 * Logout button component
 */
class LogoutButton extends Component {
    render() {
        return (
            <Button color="contrast" onClick={this.props.logout}>
                Logout
            </Button>
        );
    }
}

export default LogoutButton;
