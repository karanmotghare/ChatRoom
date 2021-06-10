import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        {
            users
                ? (
                    <div>
                        <h1>People currently Online:</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        <img className="onlineIcon" alt="Online Icon" src={onlineIcon} />
                                        <h4> {name}</h4>
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

export default TextContainer;