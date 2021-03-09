import React, { useState } from 'react'


const Navbar = () => {
  const [sidebar, setSidebar]  = useState(false)
  const showSidebar = () => {
      setSidebar(!sidebar)
  }
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" onClick={showSidebar} href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
 
  </ul>
  
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Messages Dropdown Menu */}
    <li className="nav-item dropdown">
  
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
       
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
        </a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" onClick={showSidebar} href="#" role="button">
        <i className="fas fa-th-large" />
      </a>
    </li>
  </ul>
</nav>

  )
}

export default Navbar

