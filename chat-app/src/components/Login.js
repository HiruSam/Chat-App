import React from "react";
import {Link} from 'react-router-dom';
class Login extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="my-lg-5">
                    <Card className="bg-light mb-3 text-center w-50 mx-auto">
                        <CardBody >
                            <CardTitle> <h2><strong>Login</strong></h2></CardTitle>
                            <CardSubtitle className="text-muted">Don't have an account?
                                <Link to="./register"> Register.</Link></CardSubtitle>
                            <br/>

                            <form>
                                <div className="form-group text-left">
                                    <label>Email:</label>
                                    <input type="email" name="email" className="form-control"/>
                                </div>
                                <div className="form-group text-left">
                                    <label>Password:</label>
                                    <input type="password" name="password" className="form-control"/>
                                </div>

                                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
                            </form>
                        </CardBody>
                    </Card>
                </div>


            </React.Fragment>

        );
    }
}
export default Login;