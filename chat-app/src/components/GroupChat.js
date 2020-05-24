import React from "react";
import {Card, CardBody, CardTitle} from "reactstrap";
class GroupChat extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <div className="my-lg-5">
                    <Card className="bg-light mb-3 text-center w-50 mx-auto">
                        <CardBody >
                            <CardTitle> <h2><strong>  Real Time Chat</strong></h2></CardTitle>
                            <br/>

                            <form>
                                <div className="form-group text-left">
                                    <input type="text" name="name" placeholder="Enter Your Friend Name" className="form-control text-center"/>
                                </div>
                                <br/>
                                <input type="submit" value="Enter" className="btn btn-primary btn-block mb-3"/>
                            </form>


                            <form>
                                <div className="form-group text-left">
                                    <input type="text" name="name" placeholder="Let's Start Chatting" className="form-control text-center"/>
                                </div>
                                <br/>
                                <input type="submit" value="Submit" className="btn btn-primary btn-block mb-3"/>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        );

    }
}
export default GroupChat;