import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },


  {
    _tag: 'CSidebarNavDropdown',
    name: 'Resources',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Users',
        to: '/users',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Products',
        to: '/products',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Shops',
        to: '/shops',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Orders',
        to: '/orders',
      },
      
    ],
    
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Blog',
    route: '/pages',
    icon: 'cil-drop',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New',
        to: '/new-blog',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Post',
        to: '/all-post',
      },
      
    ],
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Testimonials',
    to: '/testimonials',
    icon: 'cil-cursor',
  },
 
  
  
  
]

export default _nav
