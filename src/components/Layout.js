/**
 * Created by Mungujakisa on 10/19/2017.
 */
import React, {Component} from 'react';
import AppBarComponent from "./AppBarComponent";
import DrawerComponent from "./DrawerComponet";
import Content from "./Content";

const styles = {
    root: {
        position: 'relative',
        display: 'flex',
        /*width: '100%', /*this makes disables horizontal scroll,*/
        height: '100%',
        zIndex: 1,
    }
};
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            drawer_open: false,
            label: "Mini-grid Monitoring"
        };

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.setAppBarTitle = this.setAppBarTitle.bind(this);
    }

    setAppBarTitle(label){
        this.setState({ label: label });
    }

    handleDrawerOpen(){
        let hard_code = true;

        if(hard_code){
            this.setState({ drawer_open: false });
        } else {
            this.setState({ drawer_open: true });
        }
    }

    handleDrawerClose(){
        this.setState({ drawer_open: false });
    }

    render() {
        return (
            <div style={styles.root}>
                <AppBarComponent drawer_open={this.state.drawer_open} label={this.state.label} handleDrawerOpen={this.handleDrawerOpen} logout={this.props.logout}/>
                <DrawerComponent drawer_open={this.state.drawer_open} handleDrawerClose={this.handleDrawerClose}/>
                <Content drawer_open={this.state.drawer_open} setAppBarTitle={this.setAppBarTitle}/>
            </div>
        );
    }
}

export default Layout;
