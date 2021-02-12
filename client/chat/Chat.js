import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import moment from 'moment'
import auth from './../auth/auth-helper'
import Button from '@material-ui/core/Button'
import { FaIcons } from 'react-icons/fa'
import queryString from 'query-string'

function Chat() {
    const [ messages, setMessages] = useState([])
    const [ message, setMessage] = useState([])
    const {room, setRoom} = useState('')
    const [showInfo, setShowInfo]= useState(false)

    let socket;
    const ENDPOINT =`http://localhost:4000`

    useEffect(() => {
        // const { name, room} = queryString(location.search)
        socket = io(ENDPOINT);
        socket.on("Output Chat Message", messageFromBackEnd=>{
            console.log(messageFromBackEnd)
        })
        socket.emit('join', {name, room}, ()=>{

        });
        return ()=>{
            socket.emit('disconnect')
            socket.off();

        }
    }, [ENDPOINT])

    useEffect(() => {
        socket.on('message', (message)=>{
            setMessages([...messages, message])
        }
        )
       
    },[messages])
    const sendMessage = (event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, ()=>{
                setMessage('')
            })
        }
    }
    
    return (
        <>
       <div style={{display: "none"}} className={ showInfo ? "block" : "none"} id="myDIV">
        <h2 className="login-header"><i className="fa fa-comment-dots icon"></i>We'll text you.</h2>
        <div className="test">
            <form class="formInput">
                <input type='text'  onChange={(event) => setMessage(event.target.value)} onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : ''}/>
                <input type="submit" value="Send" id="submitButt" class="active" onClick={sendMessage} />
            </form>
        </div>
        </div>

    
    </>
    )
}


export default Chat
