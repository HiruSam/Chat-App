import React, { Component } from "react";
import "./App.css";
import logo from './screen.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Login from "./components/Login";
import register from "./components/register";
import GroupChat from "./components/GroupChat";
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <h3 className="text-center text-warning">Welcome To the App......</h3>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={register}/>
                <Route path="/GroupChat" component={GroupChat}/>

            </React.Fragment>

        );
    }
}
export default App;
