import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

import NavBar from '../NavBar/NavBar';
import Input from '../Input/Input';
import Messages from '../Message/Messages';
import TextContainer from '../TextContainer/TextContainer';
//keep socket 
let socket;

const Chat=({location}) =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users,setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(()=>{
        const { name, room } = queryString.parse(location.search);
        
        var connectionOptions = {
            "force new connection": true,
            "reconnectionAttempts": "Infinity",
            "timeout": 10000,
            "transports": ["websocket"]
        };

        socket = io.connect(ENDPOINT, connectionOptions);

        setRoom(room);
        setName(name);

        socket.emit('join',{name,room},()=>{
            
        });

    },[ENDPOINT,location.search]);
        
    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });

         socket.on("roomData", ({ users }) => {
             setUsers(users);
         });
    }, [messages]);
     
    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message,messages);

    return (
        // <h1>Hello</h1>
        <div className="outerContainer">
            <div className="container">
                <NavBar room={room}/>
                <Messages messages={messages} name={name}/>
                {/*<input  onChange={(event)=>setMessage(event.target.value)} onKeyPress={event=>event.key==='Enter' ? sendMessage(event) : null}/>*/}
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            <TextContainer users={users} />
        </div>
    );
}

export default Chat;