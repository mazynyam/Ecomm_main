import React from 'react'
import Sidebar from './sidebar/Sidebar'
import TheContent from './TheContent'

export default function Layout() {
    return (
        <div className="c-app c-default-layout">
            <Sidebar/>
            <div className="c-body">
                <TheContent/>
            </div>
        </div>
    )
}
