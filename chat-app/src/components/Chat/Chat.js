import React, { useState, useEffect } from "react";
import Messages from '../Messages/Messages';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
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

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    return (
        <div className="outerContainer">
            <div className="container">
                <Messages messages={messages} name={name} />
            </div>
        </div>
    );
}

export default Chat;