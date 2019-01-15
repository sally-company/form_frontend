import React from 'react';
import PropTypes from "prop-types"
import {Route, Switch} from "react-router-dom";
import Header from "components/Header"
import Footer from "components/Footer"
import Auth from 'components/Auth'
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

    <Header key = {1}/>,
    props.isLoggedIn ? <PrivateRoutes key ={2}/> : <PublicRoutes key ={2}/>,
    <Footer key = {3}/>
];

App.propTypes ={
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <Switch>
        <Route exact path={`/`} render={()=> "Feed"}></Route>
        <Route path={`/explore`} render={()=>"explore"}></Route>
    </Switch>
);

const PublicRoutes = props =>(
    <Switch>
        <Route exact path={`/login`} component={Auth}></Route>
        <Route path={'/forgot'} render={()=> "password"}></Route>
        <Route path={'/test'} render={()=> "test"}></Route>
    </Switch>
);

export default App;
