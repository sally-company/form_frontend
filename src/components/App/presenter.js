import React from 'react';
import PropTypes from "prop-types"
import {Route, Switch} from "react-router-dom";
import Header from "components/Header"
import Footer from "components/Footer"
import Auth from 'components/Auth'
import AuthForm from 'components/AuthForm'
import Poster from 'components/Poster'
import Feed from 'components/Feed'
import Salon from 'components/Salon'
import Magazine from 'components/Magazine'
import Host from 'components/Host'
import Profile from 'components/Profile'
import SideDrawer from "components/SideDrawer"
import Backdrop from "components/Backdrop"

import './styles.module.scss';

class App extends React.Component {
    state = {
        sideDrawerOpen: false
    };

    _drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        })
    };

    _backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false});
    }

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this._backdropClickHandler}/>
        }

        return (
            <>
                <Header
                    isLoggedIn={this.props.isLoggedIn}
                    drawerToggleClickHandler={this._drawerToggleClickHandler}
                />
                <SideDrawer isShow={this.state.sideDrawerOpen}/>
                { backdrop }

            { this.props.isLoggedIn && (
                <>
                    <PrivateRoutes/>
                </>
            )}
            { !this.props.isLoggedIn && (
                <>
                    <PublicRoutes/>
                </>

            )}
            </>
        );
    }
}

App.propTypes ={
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <Switch>
        <Route exact path={`/`} component={Feed}></Route>
        <Route path={`/login`} component={Auth}></Route>
        <Route path={'/signup'} component = {Auth}></Route>
        <Route path={`/salon`} component={Salon}></Route>
        <Route path={`/magazine`} component={Magazine}></Route>
        <Route path={`/host`} component={Host}></Route>
        <Route path={`/profile`} component={Profile}></Route>

    </Switch>
);

const PublicRoutes = props =>(
    <Switch>
        <Route exact path={`/`} component={Feed}></Route>
        <Route path={`/login`} component={Auth}></Route>
        <Route path={'/signup'} component = {AuthForm}></Route>
        <Route path={'/poster'} component = {Poster}></Route>
        <Route path={`/salon`} component={Salon}></Route>
        <Route path={`/magazine`} component={Magazine}></Route>
        <Route path={`/host`} component={Auth}></Route>
    </Switch>
);

export default App;
