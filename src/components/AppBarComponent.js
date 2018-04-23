/**
 * Created by Mungujakisa on 10/24/2017.
 */
import React, {Component} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "material-ui";
import MenuIcon from 'material-ui-icons/Menu';
import LogoutButton from "./LogoutButton";

const drawer_width = '13';
let style = {
    root: {

    },
    app_bar: {
       position: 'absolute'
    },
    app_bar_shift: {
        position: 'absolute',
        width: `calc(100% - ${drawer_width}em)`
    },
    menu_button: {
        marginLeft: '1em',
        marginRight: '2em',
    },
    hide: {
        display: 'none',
    },
    label: {
        flex: 1,
        marginLeft: 15
    }
};

class AppBarComponent extends Component {
    constructor(props){
        super(props);
        this.showMenuIcon = this.showMenuIcon.bind(this);
    }

    showMenuIcon(){
        let hard_coded = true;
        if (hard_coded){

        } else {
            return <IconButton
                disabled='false'
                color="contrast"
                aria-label="open drawer"
                onClick={this.props.handleDrawerOpen}
                style={Object.assign({}, style.menu_button, this.props.drawer_open && style.hide)}
            >
                <MenuIcon />
            </IconButton>
        }
    }

    render() {
        const drawer_open = this.props.drawer_open;
        const label = this.props.label;

        return (
            <AppBar style={Object.assign({}, style.app_bar, drawer_open && style.app_bar_shift)}>
                <Toolbar disableGutters={!drawer_open}>
                    {this.showMenuIcon()}
                    <Typography type="title" color="inherit" noWrap style={style.label}>
                        {label}
                    </Typography>
                    <div>
                        <LogoutButton logout={this.props.logout}/>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default AppBarComponent;
