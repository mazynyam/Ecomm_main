import React from 'react'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'

export default function ChatBoard({ id }) {
    return (
        
        <SocketProvider id={id}>
        <InfoBar />
        <Messages messages={messages} name={name} />
        {/* <div className='small'>
            Your Id: <span className='text-muted'>{id}</span>
        </div> */}
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </SocketProvider>
    )
}
