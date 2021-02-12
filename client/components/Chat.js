import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'
import ChatLogin from './ChatLogin'
import useLocalStorage from './hooks/useLocalStorage'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'
import config from '../../config/config'
import queryString from 'query-string'

let socket;

const Chat = ( ) => {
    const [ messages, setMessages] = useState([])
    const [ message, setMessage] = useState('')
    const [ room, setRoom ] = useState('')
    const [ name, setName ] = useState('')

    const ENDPOINT =  `localhost:${config.port}`
    

    socket = io(ENDPOINT)
    useEffect(()=>{
        // const { name, room } = queryString.parse(location.search)
        socket = io(ENDPOINT)

        setRoom(room)
        setName(name)
        socket.emit('join',{ room, name }, ()=>{
           
        });

        return ()=>{
            socket.emit('disconnect')
            // socket.off()
        }
    }, [ENDPOINT]);

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages, message])
        })
    },[messages])
    const sendMessage = e =>{
        e.preventDefault()
        if(message){
            socket.emit('sendMessage', message, ()=> setMessage(''))
        }
    }
    console.log(message, messages)
    const ChatMessage = ()=>{
        return(
        <div>
            <InfoBar />
            <Messages messages={messages}  />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
        )
    }
    return (
        <div  className="chat-popup"  id="myForm">
                <ChatMessage />
        </div>
    )
}

export default Chat;