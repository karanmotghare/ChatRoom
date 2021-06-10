import React from 'react';

import ScrollToBottom from 'react-scrollable-feed';

import Message from './Message';

import './Messages.css';

console.log("inside messages")

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {console.log("insde ScrollToBottom")}
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </ScrollToBottom>
);

export default Messages;