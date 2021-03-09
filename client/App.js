import React from 'react'
import MainRouter from './MainRouter'
import Header from './core/Menu'
import Footer from './core/Footer'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'
import './App.css'
import './scss/style.scss'
import './components/chatbutton.css'
import './components/infobar.css'
import './components/Message.css'
import './components/ChatLogin.css'
import './admin/Admin.css'
import './admin/navbar/Navbar.css'
import './admin/sidebar/Sidebar.css'
import './admin/main/Main.css'
import './admin/adminlte.css'
import './assets/css/jqvmap.css'

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
          <MainRouter />
      </ThemeProvider>
  </BrowserRouter>
)}

export default hot(module)(App)
