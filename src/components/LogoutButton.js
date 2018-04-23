/**
 * Created by Mungujakisa on 10/24/2017.
 */
import React, {Component} from 'react';
import {Button} from "material-ui";

class LogoutButton extends Component {
    render() {
        return (
            <Button color="contrast" onClick={this.props.logout}>Logout</Button>
        );
    }
}

export default LogoutButton;
