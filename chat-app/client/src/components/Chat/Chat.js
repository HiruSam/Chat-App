import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    return (
        <div className="outerContainer">
            <div className="container">
                <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event): null}/>
            </div>
        </div>
    );
}

export default Chat;

// import React from "react";
// import './Chat.css';
// import {Card, CardBody, CardTitle} from "reactstrap";
// class Chat extends React.Component {
//     render() {
//         return(
//             <React.Fragment>
//                 <div className="my-lg-5">
//                     <Card className="bg-light mb-3 text-center w-50 mx-auto">
//                         <CardBody >
//                             <CardTitle> <h2><strong>Real Time Chat</strong></h2></CardTitle>
//                             <br/>
//
//                             <form>
//                                 <div className="form-group text-left">
//                                     <input type="text" name="name" placeholder="Enter Your Friend Name" className="form-control text-center"/>
//                                 </div>
//                                 <br/>
//                                 <input type="submit" value="Enter" className="btn btn-info btn-block mb-3"/>
//                             </form>
//                         </CardBody>
//                     </Card>
//                 </div>
//             </React.Fragment>
//         );
//
//     }
// }

// export default Chat;