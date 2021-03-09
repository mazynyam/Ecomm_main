import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth-helper'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/auth/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute


// const PrivateRoute  = ({
//  isAuthenticated,
//  component: Component,
//  ...rest
// })=>{
//   return <Route 
//   {...rest} render={() => auth.isAuthenticated ? <Component /> : <Redirect to='/auth/signin' /> } />

// }
// export default PrivateRoute
