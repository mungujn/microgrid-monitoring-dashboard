/**
 * Created by Mungujakisa on 10/24/2017.
 * Side drawer component
 */
import React, { Component } from 'react';
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from 'material-ui';
import DirectionsBus from 'material-ui-icons/DirectionsBus';
import FolderOpen from 'material-ui-icons/DirectionsBus';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import { NavLink } from 'react-router-dom';

const drawer_width = '15';

const styles = {
    drawer_paper: {
        position: 'relative',
        height: '100%',
        width: drawer_width + 'em'
    },
    drawer_inner: {},
    drawer_header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 1em 1em'
    },
    list: {},
    push: {
        paddingTop: '0.5em'
    }
};

/**
 * Side drawer component
 */
class DrawerComponet extends Component {
    render() {
        const drawer_open = this.props.drawer_open;
        return (
            <Drawer type="persistent" open={drawer_open}>
                <div style={styles.drawer_inner}>
                    <div style={styles.drawer_header}>
                        <IconButton
                            style={styles.push}
                            onClick={this.props.handleDrawerClose}
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List style={styles.list}>
                        <ListItem button>
                            <ListItemIcon>
                                <FolderOpen />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <NavLink to="/grids" className="clean_link">
                                        Grids
                                    </NavLink>
                                }
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FolderOpen />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <NavLink
                                        to="/settings"
                                        className="clean_link"
                                    >
                                        Settings
                                    </NavLink>
                                }
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <List style={styles.list}>
                        <ListItem button>
                            <ListItemIcon>
                                <DirectionsBus />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <NavLink
                                        to="/account"
                                        className="clean_link"
                                    >
                                        User Account
                                    </NavLink>
                                }
                            />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        );
    }
}

export default DrawerComponet;
