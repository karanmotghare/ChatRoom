import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

const Home = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="backStrip">
            <div className="joinInnerContainer">
                <h1 className="heading">GetIn to Chat</h1>
                <div>
                    <input placeholder="Enter Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Enter Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chatroom?name=${name}&room=${room}`}>
                    <button className={'button mt-20'} type="submit">Get In</button>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Home;