import React from 'react'


export default function ChatButton() {
    return (
        <div className='chat-button-overlay-container'>
            <a href='/chat' className='chat-button'>
                <span className='chat-text'>
                    <i className='fa fa-message'></i>
                </span>
            </a>
            <a href='#app-container'>
                <i className='fa fa-arrow-up'></i>
            </a>
        </div>
    )
}
