import React, { Component } from "react";
import "./App.css";
import logo from './screen.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import home from "./components/home";
import Login from "./components/Login";
import register from "./components/register";
import GroupChat from "./components/GroupChat";
import mainPage from "./components/mainPage";
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Route path="/" component={home}/>
                <NavigationBar/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={register}/>
                <Route path="/GroupChat" component={GroupChat}/>
                <Route path="/mainPage" component={mainPage}/>
            </React.Fragment>

        );
    }
}
export default App;
