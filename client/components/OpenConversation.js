import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useConversations } from './context/ConversationProvider'

export default function OpenConversation() {
    const [text, setText] = useState('')
    const lastMessageRef = useRef()
    const setRef = useCallback(node =>{
        if(node){
            
            node.scrollIntoView({smooth:true})   
        }
    },[])
    const { sendMessage, selectedConversation } = useConversations()

    function handleSubmit(e){
        e.preventDefault()

        sendMessage(selectedConversation, recepients.map(r => r.id), text)
        setText('')
    }
    useEffect(() =>{
        if(lastMessageRef.current){
            lastMessageRef.current.scrollIntoView({smooth: true})
        }
    }, [lastMessageRef.current])
    return (
        <div className='d-flex flex-column flex-grow-1'>
            <div className='flex-grow-1 overflow-auto'>
                <div className='d-flex flex-column align-items-start justify-content-end px-3'>
                    {selectedConversation.messages.map((message, index)=>{
                        const lastMessage = selectedConversation.messages.length - 1 === index
                        return (
                            <div ref={lastMessage ? setRef : null} key={index} className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end': ''}`}>
                                <div className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white': 'border'}`}>{message.text}</div>
                                <div clasName={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>{message.fromMe ? 'You' : message.senderName}</div>
                            </div>

                        )
                    })
                    }
                </div>
            </div>
            <Form>
                <Form.Group className='m-2' onSubmit={handleSubmit}>
                    <InputGroup>
                        <Form.Control 
                            as="textarea"
                            required
                            value={text}
                            onChange={e => setText(e.target.value)}
                            style={{height:'75px', resize:'none' }}/>
                        <InputGroup.Append>
                            <Button type='submit'>Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
