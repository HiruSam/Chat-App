import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import Caro1 from "../Images/caro2.jpg";
import Caro2 from "../Images/caro4.jpg";
import Caro3 from "../Images/caro1.jpg";
import Caro4 from "../Images/caro3.jpg";
class home extends Component{

    render() {
        return(
                <div>
                    <center>
                        <Carousel>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        style={{height:"40rem"}}
                                        src={Caro1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        style={{height:"40rem"}}
                                        src={Caro2}
                                        alt="second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        style={{height:"40rem"}}
                                        src={Caro3}
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        style={{height:"40rem"}}
                                        src={Caro4}
                                        alt="fourth slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Carousel>
                    </center>
                </div>

        );
    }
}
export default home;