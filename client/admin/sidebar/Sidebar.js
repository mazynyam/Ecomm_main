import React, {useState} from 'react'
import kik from './../../assets/images/kik.png'
import {Link} from 'react-router-dom'
export default function Sidebar() {
  const [sidebar, setSidebar]  = useState(false)

  return (
   <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="#" className="brand-link">
    <img src={kik} alt="KiriikouLogo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Kiriikou.com</span>
  </a>
  {/* Sidebar */}
  <div className={sidebar ? 'hold-transition sidebar-mini layout-fixed' : 'sidebar'}>
    
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item has-treeview menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              {/* <i className="right fas fa-angle-left" /> */}
            </p>
          </a>
         
        </li>
        <li className="nav-item">
          <Link to="/admin/products/all" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Products
              <span className="right badge badge-danger">New</span>
            </p>
          </Link>
        </li>
        <li className="nav-item has-treeview">
          <Link to="/admin/users-list" className="nav-link">
            <i className="nav-icon fas fa-users" />
            <p>
              Users
              <i className="fas fa-angle-left right" />
              
            </p>
          </Link>
          
        </li>
        <li className="nav-item has-treeview">
          <Link to="/orders" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              Orders
              <i className="right fas fa-angle-left" />
            </p>
          </Link>
          
        </li>
        <li className="nav-item has-treeview">
          <Link to="/admin/shops/all" className="nav-link">
            <i className="nav-icon fas fa-tree" />
            <p>
              Shops
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
          
        </li>
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
              Forms
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          
        </li>
        
        
        <li className="nav-item">
          <a href="pages/gallery.html" className="nav-link">
            <i className="nav-icon far fa-image" />
            <p>
              Gallery
            </p>
          </a>
        </li>
        
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              Pages
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          
        </li>
      
        
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

  )
}
