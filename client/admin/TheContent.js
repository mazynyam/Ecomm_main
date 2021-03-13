import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
import MainRouter from '../MainRouter'
  
// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
          <div>
            {/* {routes.map((route, idx) => {
              return route.component && (
                <MainRouter />
              )
            })} */}
            <MainRouter />
            {/* <Redirect  from="/" to="/admin" /> */}
          </div>
        {/* </Suspense> */}
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
