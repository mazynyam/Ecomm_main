import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css'
import * as serviceWorker from './serviceWorker'
import { icons } from './assets/icons'
import { Provider } from 'react-redux'
import store from './store'

React.icons = icons
hydrate(
    <Provider store={store}>
        <App/>  
    </Provider>, document.getElementById('root'))
serviceWorker.unregister()