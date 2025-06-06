import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages.js';
import InfoBar from "../../InfoBar/InfoBar.js";
import Input from '../Input/Input.js';

import './Chat.css';

// const ENDPOINT = 'https://project-chat-application.herokuapp.com/';
const ENDPOINT='localhost:5000';
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    const ENDPOINT='localhost:5000';
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message,messages);

  return (
    <div className="outercontainer">
      <div className="container">
        <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> 
          <input value={message} onChange={(event)=>setMessage(event.target.value)}
          onPress={event=>event.key==='Enter' ?sendMessage(event):null}>
          </input>
      </div>
      <hr/>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;