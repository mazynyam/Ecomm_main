import React from 'react'
import online from '../../client/assets/images/online.png'
export default function InfoBar() {
    return (
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img className='onlineIcon' src={online} alt='online' />
               <span><h5>Kiriikou Support</h5></span> 
            </div>
            <div className='rightInnerContainer'>
                 <button type="button" className="cancel" onClick={()=>document.getElementById("myForm").style.display = "none"}>
                        <i className='fa fa-close'></i>
                </button>
            </div>
        </div>
    )
}
