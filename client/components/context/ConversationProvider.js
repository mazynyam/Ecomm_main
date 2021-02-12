import React, { useContext, useState, useEffect, useCallback} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactProvider'
import { useSocket } from './../SocketProvider'

const ConversationsContext = React.createContext()

export function useConversations(){
   return  useContext(ConversationsContext) 
}
export  function ConversationsProvider({ id, children }) {

    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelectedConversationIndex] = useState()
    const { contacts } = useContacts()
    const socket = useSocket()

    function createConversations(recepients){
        setConversations(prevConversations =>{
            return [...prevConversations, {recepients, messages:[]}]
        })
    }

    const addMessageToConversation = useCallback(({ recepients, text, sender })=>{
        setConversations(prevConversations => {
            let madeChange = false
            const newMessage = { sender, text}
            const newConversations = prevConversations.map(conversation => {
                if(arrayEquality(conversattion.recepients, recepients)){
                    madeChange = true 
                    return  { ...conversation, messages: [...conversation.messages, newMessage]}
                }
                return conversation
            })
            if(madeChange){
                return newConversations
            }
            else{
                return [...prevConversations, 
                { recepients, messages: {newMessage}}]
            }
        })
    }, [setConversations])

    useEffect(() =>{
        if(socket == null) return 
        socket.on('receive-message', addMessageToConversation)

        return () => socket.off('receive-message')
    }, [socket, addMessageToConversation])

    function sendMessage(recepients, text){
        socket.emit('send-message',{ recepients, text})
        addMessageToConversation({recepients, text, sender:id})
    }
    const formattedConversations = conversations.map(conversation =>{
        const recepients = conversations.recepients.map(recepient =>{
            const contact = contacts.find(contact =>{
                return contact.id === recepient
            })
            const name = (contact && contact.name) || recepient
            return {id: recepient, name}
        })
        const messages = conversation.messages.map(message  => {
            const contact = contacts.find(contact =>{
                return contact.id ===message.sender
            })
            const name = (contact && contact.name ) || message.sender
            const fromMe = id === message.sender 
            return { ...message, senderName: name, fromMe}
        })
        const selected = index === selectedConversationIndex
        return {...conversation, messages, recepients, selected }

    })


    const value = {
        conversations: formattedConversations,
        selectedConversation:formattedConversations[selectedConversationIndex],
        sendMessage,
        selectConversationIndex:setSelectedConversationIndex,
        createConversations
    }
    return (
        <ConversationsContext value={value}>
            {children}
        </ConversationsContext>
    )
}

function arrayEquality(a,b){
    if(a.length != b.length) return false
    a.sort()
    b.sort()

    return a.every((element, index) =>{
        return element === b[index]
    })
}
