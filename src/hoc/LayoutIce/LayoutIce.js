import React, { Component } from 'react';
import classes from './LayoutIce.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import AuxIce from '../AuxIce/AuxIce';


class LayoutIce extends Component {
    state = {
        showSideDrawer: false
    }


sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
    console.log(this.state.showSideDrawer);
};

sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer};
    });
}

    render() {
        return (
            <AuxIce>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
                <div>ToolBar SideDrawer Backdrop</div>
                <main className={classes.ContentIce}>
                    {this.props.children}
                </main>
            </AuxIce>
        );
    }
} 
export default LayoutIce;