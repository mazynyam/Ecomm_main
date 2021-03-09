import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'

import {list} from '../../user/api-user'



const UsersList = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [users, setUsers] = useState([])

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/admin/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(()=>{
      const abortController = new AbortController()
      const signal = abortController.signal

      list(signal).then((data)=>{
          if(data && data.error){
              console.log(data.error)
          }
          else{
              setUsers(data)
          }
      })
      return function cleanup(){
          abortController.abort()
      }
  }, [])
  return (
    <div>
    <CRow >
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            All user
            <small className="text-muted"> list</small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={users}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'email', 'phone', 'seller'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/admin/user/${item._id}`)}
            // scopedSlots = {{
            //   'status':
            //     (item)=>(
            //       <td>
            //         <CBadge color={getBadge(item.status)}>
            //           {item.status}
            //         </CBadge>
            //       </td>
            //     )
            // }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
  )
}

export default UsersList
