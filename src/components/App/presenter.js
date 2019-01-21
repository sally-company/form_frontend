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

import './styles.module.scss';

// class App extends Component {
//     render() {
//         return (
//             <div className={styles.App}>
//                 <Switch>
//                     <Route exact path="/" render={() => "hello!"}></Route>
//                     <Route path="/login" render={() => "Login!"}></Route>
//                 </Switch>
//                 <Footer/>
//             </div>
//         );
//     }
// }


const App = props => [
    <Header isLoggedIn={props.isLoggedIn} key = {1}/>,
    props.isLoggedIn ? <PrivateRoutes key ={2}/> : <PublicRoutes key ={2}/>,
    <Footer key = {3}/>
];

App.propTypes ={
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <Switch>
        <Route exact path={`/`} component={Feed}></Route>
        <Route path={`/login`} component={Feed}></Route>
        <Route path={'/signup'} component = {Feed}></Route>
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
