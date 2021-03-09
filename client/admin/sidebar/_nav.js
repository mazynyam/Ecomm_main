import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
    {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/admin',
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
          to: '/admin/users',
          icon: 'cil-user',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Products',
          to: '/admin/products/all',
          icon: 'cil-star',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Shops',
          to: '/admin/shops/all',
          icon: 'cil-tags',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Orders',
          to: '/admin/orders',
          icon: 'cil-shoppingCart',
        },
        
      ],
      
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Blog',
      route: '/admin/pages',
      icon: 'cil-drop',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'New',
          to: '/admin/new-blog',
          icon: 'cil-add',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'All Post',
          to: '/admin/all-post',
          icon: 'cil-visibility',
        },
        
      ],
      
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Testimonials',
      to: '/admin/testimonials',
      icon: 'cil-cursor',
    },
   
    
    
    
  ]
  
  export default _nav
  