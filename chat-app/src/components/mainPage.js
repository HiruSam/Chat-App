import React, {Component} from "react";
import {Container,Row,Col} from "reactstrap";
import Info1 from "../Images/infor1.jpg";
import Info2 from "../Images/infor2.jpg";
class mainPage extends Component{

    render() {
        return(
            <React.Fragment>
                <div>
                    <form>
                        <h3 className="title text-warning text-center"><u>
                            Welcome To The Chat-On...
                        </u></h3>
                        <div className="mt-5">
                            <Container>
                                <Row>
                                    <Col><img
                                        className="d-block w-100"
                                        style={{height:"40rem"}}
                                        src={Info1}
                                        alt="First slide"
                                    /></Col>
                                    <Col><img
                                        className="d-block w-100 mt-5"
                                        src={Info2}
                                        alt="First slide"
                                    /></Col>
                                </Row>
                                {/*<Row>*/}
                                {/*    <Col><h3 className="mt-5 mx-5 mb-5 text-center text-danger">Make Your family closer to you.</h3></Col>*/}
                                {/*    <Col><h3 className="mt-5 mx-0 text-center text-danger">Get To Know And Try</h3></Col>*/}
                                {/*</Row>*/}
                            </Container>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default mainPage;