import React from 'react'
import ChatBoard from './ChatBoard'
import OpenConversation from './OpenConversation'
import { useConversations } from './context/ConversationProvider'

export default function MainChat({id}) {
    const { selectedConversation } = useConversations()
    return (
        <div className='d-flex' style={{height:'100vh'}}>
            <ChatBoard id={id} />
           { selectedConversation && <OpenConversation />}
        </div>
    )
}
