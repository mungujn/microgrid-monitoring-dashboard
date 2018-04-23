/**
 * Created by Mungujakisa on 10/24/2017.
 */
import React, {Component} from 'react';
import {Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from "material-ui";
import Assessment from "material-ui-icons/Assessment";
import Assignment from "material-ui-icons/Assignment";
import DirectionsBus from "material-ui-icons/DirectionsBus";
import FolderOpen from "material-ui-icons/DirectionsBus";
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import {NavLink} from "react-router-dom";

const drawer_width = '15';

const styles = {
    drawer_paper: {
        position: 'relative',
        height: '100%',
        width: drawer_width + 'em',
    },
    drawer_inner: {

    },
    drawer_header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 1em 1em',
    },
    list: {

    },
    push: {
        paddingTop: '0.5em'
    }
};
class DrawerComponet extends Component {
    render() {
        const drawer_open = this.props.drawer_open;
        return (
            <Drawer
                type="persistent"
                open={drawer_open}
            >
                <div style={styles.drawer_inner}>
                    <div style={styles.drawer_header}>
                        <IconButton style={styles.push} onClick={this.props.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List style={styles.list}>
                        <ListItem button>
                            <ListItemIcon>
                                <Assessment />
                            </ListItemIcon>
                            <ListItemText primary={<NavLink to='/sermons' className="clean_link">Sermons</NavLink>}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Assignment />
                            </ListItemIcon>
                            <ListItemText primary={<NavLink to='/devotions' className="clean_link">Devotions</NavLink>} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FolderOpen />
                            </ListItemIcon>
                            <ListItemText primary={<NavLink to='/announcements' className="clean_link">Announcements</NavLink>} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FolderOpen />
                            </ListItemIcon>
                            <ListItemText primary={<NavLink to='/events' className="clean_link">Events</NavLink>} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List style={styles.list}>
                        <ListItem button>
                            <ListItemIcon>
                                <DirectionsBus />
                            </ListItemIcon>
                            <ListItemText primary={<NavLink to='/account' className="clean_link">User Account</NavLink>} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        );
    }
}

export default DrawerComponet;
