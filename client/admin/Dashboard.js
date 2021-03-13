import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UsersList from './Users/UsersList'
const Dashboard = () => {
  return (
    <main className="content-wrapper">
        <Switch>
          <Route path="/admin/users-list" component={UsersList} />
          <Redirect from="/admin" to="/dashboard" />
        </Switch>
  </main>
  )
}

export default Dashboard
