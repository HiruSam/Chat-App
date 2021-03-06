import React, {Component} from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

class NavigationBar extends React.Component{

    render() {
        return(
            <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link> <Link  className="nav-link" to="/home">
                            <i className="fa fa-home"></i>
                            &nbsp;
                            Home
                        </Link>
                        </Nav.Link>
                        <Nav.Link> <Link  className="nav-link" to='/Login'>
                            <i className="fa fa-user-circle"></i>&nbsp;
                            Login
                        </Link>
                        </Nav.Link>
                        <Nav.Link> <Link  className="nav-link" to="/register">
                            <i className="fas fa-user-circle"></i> &nbsp;
                            Register
                        </Link>
                        </Nav.Link>
                        <Nav.Link> <Link  className="nav-link" to="/Chat">
                            <i className="fa fa-comment"></i>
                            &nbsp;
                            Chat
                        </Link>
                        </Nav.Link>
                        <Nav.Link> <Link  className="nav-link" to="/MsgContainer">
                            <span role="img" aria-label="emoji">💬</span>
                            &nbsp;
                            Online
                        </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </React.Fragment>
        );
    }


}
export default NavigationBar;