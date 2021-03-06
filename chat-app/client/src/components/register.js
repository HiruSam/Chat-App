import React from "react";
import {Card, CardTitle, CardSubtitle, CardBody} from "reactstrap";
import {Link} from 'react-router-dom';
class register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <React.Fragment>
                <Card className="bg-light mb-3 text-center w-50 mx-auto my-lg-5">
                    <CardBody>
                        <CardTitle>
                            <h2>
                                <strong>Register</strong>
                            </h2>
                        </CardTitle>
                        <CardSubtitle className="text-muted">
                            Already have an account....?
                            <Link to="/login"> Log In. </Link>
                        </CardSubtitle>
                        <br />
                        <form >
                            <div className="form-group text-left">
                                <label>Username: </label>
                                <input type="text" name="username" placeholder='Username' className="form-control"/>
                            </div>

                            <div className="form-group text-left">
                                <input type="email" name="email" placeholder='Email'className="form-control"/>

                            </div>

                            <div className="form-group text-left">
                                <input type="password" name="password"placeholder='Password' className="form-control"/>

                            </div>

                            <input type="submit" value="Register" className="btn btn-success btn-block"/>
                        </form>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}
export default register;