import React, { Component } from "react";
import "./App.css";
import logo from './screen.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar />
                    <h3 className="text-center text-warning">Welcome To the App......</h3>
                    <img src={logo} alt="Logo" class="center"/>;
                </Router>
            </React.Fragment>

        );
    }
}
export default App;
