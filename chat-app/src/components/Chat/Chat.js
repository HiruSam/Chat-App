import React, { useState, useEffect } from "react";
import Messages from '../Messages/Messages';

import './Chat.css';

// let socket;
//
// const Chat = ({ location }) => {
//     const [name, setName] = useState('');
//     const [room, setRoom] = useState('');
//     const [users, setUsers] = useState('');
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);
    // const ENDPOINT = 'https://project-chat-application.herokuapp.com/';

    // useEffect(() => {
    //     const { name, room } = queryString.parse(location.search);
    //
    //     socket = io(ENDPOINT);
    //
    //     setRoom(room);
    //     setName(name)
    //
    //     socket.emit('join', { name, room }, (error) => {
    //         if(error) {
    //             alert(error);
    //         }
    //     });
    // }, [ENDPOINT, location.search]);

    // useEffect(() => {
    //     socket.on('message', message => {
    //         setMessages(messages => [ ...messages, message ]);
    //     });
    //
    //     socket.on("roomData", ({ users }) => {
    //         setUsers(users);
    //     });
    // }, []);
//
//     return (
//         <div className="outerContainer">
//             <div className="container">
//                 <Messages messages={messages} name={name} />
//             </div>
//         </div>
//     );
// }
import React from "react";
import {Card, CardBody, CardTitle} from "reactstrap";
class Chat extends React.Component {
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
                                <input type="submit" value="Enter" className="btn btn-info btn-block mb-3"/>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        );

    }
}

export default Chat;