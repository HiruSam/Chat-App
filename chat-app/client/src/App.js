import React, { Component } from "react";
import "./App.css";
import logo from './screen.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import home from "./components/home";
import Login from "./components/Login";
import register from "./components/register";
import Chat from "./components/Chat/Chat";
import Online from"./components/MsgContainer/MsgContainer";
import Join from "./components/Join/Join";
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <React.Fragment>

                <Route exact path="/" component={home}/>
                <NavigationBar/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={register}/>
                <Route exact path="/Chat" component={Chat}/>
                <Route exact path="/Online" component={Online}/>
                <Route exact path="/Join" component={Join}/>

            </React.Fragment>

        );
    }
}
export default App;
