import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://kiriikou.com" target="_blank" rel="noopener noreferrer">Kiriikou</a>
        <span className="ml-1">&copy; { new Date().getUTCFullYear() }</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://kirrikou.com" target="_blank" rel="noopener noreferrer">Kiriikou Team</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
