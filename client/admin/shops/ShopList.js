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

import {list} from '../../shop/api-shop'


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const ShopList = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [shops, setShops] = useState([])

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/admin/shops?page=${newPage}`)
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
              setShops(data)
          }
      })
      return function cleanup(){
          abortController.abort()
      }
  }, [])
  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Shops
            <small className="text-muted"> list</small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={shops}
            fields={[
              { key: 'business_name', _classes: 'font-weight-bold' },
              'business_email', 'is_business_registered', 'business_mobile'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/seller/shop/edit/:${item.shopId}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}
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
  )
}

export default ShopList
