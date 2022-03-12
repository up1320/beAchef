import React,{useState,useEffect} from 'react'
import queryString from "query-string"
import {io} from "socket.io-client"
import socketClient from "socket.io-client"
import InfoBar from '../InfoBar/InfoBar';
import "./Chat.css"
import Input from '../Input/Input';
import Messages from "../Messages/Messages"
import OnlineUserContainer from "../OnlineUserContainer/OnlineUserContainer"
let socket ;

function Chat() {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
   const [users, setUsers] = useState('');
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'https://chat-server-beachef.herokuapp.com/'
  useEffect(() => {
    
    const { name, room } = queryString.parse(window.location.search)
    socket = io(ENDPOINT)
    setName(name)
    setRoom(room)
    socket.emit('join', { name, room }, () => {
      
    })
    return () => {
      socket.disconnect()
    }
  }, [ENDPOINT, window.location.search])
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages,message])
    })
     socket.on("roomData", ({ users }) => {
      setUsers(users);
     });
    console.log(users)
  }, [messages])
  
  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage',message,()=>setMessage(''))
    }
  }
  console.log(message,messages)
  return (
    <>
      
    <div className='outerContainer'>
      <h1 className='foodConnectHeading'>Welcome to food Connect</h1>
      <div className='container'>
        
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        
        
      </div>
      
      </div>
      </>
  )
}

export default Chat