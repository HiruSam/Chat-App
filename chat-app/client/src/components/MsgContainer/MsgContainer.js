import React from 'react';

import online from '../../Images/onlineIcon.png';

import './MsgContainer.css';

const MsgContainer = ({ users }) => (
    <div className="MsgContainer">
        <div>
            <h1>Chat App<span role="img" aria-label="emoji">💬</span></h1>
            <h2><span role="img" aria-label="emoji">❤️</span></h2>
            <h2>Try it out right now!<span role="img" aria-label="emoji">⬅️</span></h2>
        </div>
        {
            users
                ? (
                    <div>
                        <h1>Currently chatting:</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({name}) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online"src={online}/>
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default MsgContainer;