import React from 'react'

export default function Input({message, setMessage, sendMessage}) {
    return (
        <div   className="form-container text-lightblue">
        <form>
            <div className='form-grid'>
            <input type='text'
             placeholder="Type a message.." 
             className='input'
             value={message} 
            onChange={(event) => setMessage(event.target.value)} 
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button type="button" className="btn" onClick={(event)=> sendMessage(event)}>
                <i className='fa fa-send'>
                </i>
            </button>
            </div>   
        </form>
        </div>
    )
}
