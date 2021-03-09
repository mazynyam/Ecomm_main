import React from 'react'
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main'
import Navbar from './navbar/Navbar';
export default function Admin() {
   
    return (
       
        <div className='wrapper'>
            <Navbar />
            <Sidebar  />
            <Main  />
        </div>
       
    )
}
