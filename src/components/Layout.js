/**
 * Created by Mungujakisa
 * Core layout component
 */
import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent';
import DrawerComponent from './DrawerComponet';
import Content from './Content';

const styles = {
    small_screen: {
        position: 'relative',
        display: 'flex',
        /*width: '100%' /*horizontal scroll,*/
        height: '100%',
        zIndex: 1
    },
    large_screen: {
        position: 'relative',
        display: 'flex',
        width: '100%' /*this makes disables horizontal scroll,*/,
        height: '100%',
        zIndex: 1
    }
};

/**
 * Main layout
 */
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer_open: false,
            label: 'Micro-grid Monitoring'
        };

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.setAppBarTitle = this.setAppBarTitle.bind(this);
    }

    /**
     * Set the app bars title
     * @param {string} label label to give the app bar
     */
    setAppBarTitle(label) {
        this.setState({ label: label });
    }

    /**
     * Open the side drawer if its in use
     */
    handleDrawerOpen() {
        let drawer_in_use = false;

        if (drawer_in_use) {
            this.setState({ drawer_open: true });
        } else {
            this.setState({ drawer_open: false });
        }
    }

    /**
     * Close the side drawer
     */
    handleDrawerClose() {
        this.setState({ drawer_open: false });
    }

    /**
     * Render app layout
     */
    render() {
        return (
            <div style={styles.small_screen}>
                <AppBarComponent
                    drawer_open={this.state.drawer_open}
                    label={this.state.label}
                    handleDrawerOpen={this.handleDrawerOpen}
                    logout={this.props.logout}
                />
                <DrawerComponent
                    drawer_open={this.state.drawer_open}
                    handleDrawerClose={this.handleDrawerClose}
                />
                <Content
                    drawer_open={this.state.drawer_open}
                    setAppBarTitle={this.setAppBarTitle}
                />
            </div>
        );
    }
}

/*
 <div style={styles.large_screen}>
 <AppBarComponent drawer_open={this.state.drawer_open} label={this.state.label} handleDrawerOpen={this.handleDrawerOpen} logout={this.props.logout}/>
 <DrawerComponent drawer_open={this.state.drawer_open} handleDrawerClose={this.handleDrawerClose}/>
 <Content drawer_open={this.state.drawer_open} setAppBarTitle={this.setAppBarTitle}/>
 </div>
 * */

export default Layout;
