import React, { Component } from "react";
import "./App.css";
// the below components will be created shortly
import Login from "./components/Login";
import GroupChat from "./components/GroupChat";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Redirect, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar />
                </Router>
                {/*<Switch>*/}
                {/*    <Redirect exact from="/" to="/login" />*/}
                {/*    <Route path="/login" component={Login} />*/}
                {/*</Switch>*/}
            </React.Fragment>

        );
    }
}
export default App;
