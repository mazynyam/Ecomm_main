import React, { useState } from 'react'
import {  Button } from 'react-bootstrap'
import { Link, Redirect} from 'react-router-dom'
import chat  from './chat-helper'
export default function ChatLogin(props) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('adminSupport')
    const [redirect, setRedirect] = useState(false)

    const clickSubmit = (event)=>{
        event.preventDefault()
        chat.addItem(props.item, ()=>{
            setRedirect({redirect:true})
        })
    }
    if (redirect) {
        return (<Redirect to={'/'}/>)
    }
    return (
       
            <div className='joinOuterContainer'>
                <div className='joinInnerContainer'>
                    <h1>Create a chat request</h1>
                    <div><input type='text' className='joinInput'  onChange={(event)=> setName(event.target.value)}  /></div>
                    <div><input type='text' className='joinInput mt-2' onChange={(event)=> setRoom(event.target.value)}  /></div>
                    <Link  to={`/chat?name=${name}&room=${room}`}>
                        <Button className='button mt-20' onClick={clickSubmit}>Request</Button>
                    </Link>
                </div>
            </div>
     
    )
}
