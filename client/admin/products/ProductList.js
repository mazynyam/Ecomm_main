import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
// import {
//   CBadge,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CDataTable,
//   CRow,
//   CPagination
// } from '@coreui/react'

import {list} from '../../product/api-product'


const getBadge = status => {
  switch (status) {
    case 'In Stock': return 'success'
    case 'Out of Stock': return 'danger'
    default: return 'primary'
  }
}

const ProductList = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [products, setProducts] = useState([])

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/admin/products?page=${newPage}`)
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
              setProducts(data)
          }
      })
      return function cleanup(){
          abortController.abort()
      }
  }, [])
  return (
    <div className="content-wrapper">
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            All Products
            <small className="text-muted"> list</small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={products}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'quantity', 'description', 'status',  'category'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/admin/product/:${item.productId}`)}
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
    </div>
  )
}

export default ProductList
